/**
 * Cookie Consent Manager - Studio Commerciale Piccinelli
 * Version: 2.0.0
 * Privacy-friendly cookie consent with Vercel Analytics support
 */
(function () {
  'use strict';

  // Configuration
  const CONFIG = {
    storageKey: 'scp_cookie_consent_v2',
    categories: ['necessary', 'analytics'],
    bannerDelay: 500, // ms delay before showing banner
    animationDuration: 300
  };

  // State management
  let state = {
    preferences: null,
    bannerShown: false,
    panelOpen: false
  };

  /**
   * Get saved preferences from localStorage
   */
  function getPreferences() {
    try {
      const stored = localStorage.getItem(CONFIG.storageKey);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.error('[Cookie Consent] Error reading preferences:', e);
      return null;
    }
  }

  /**
   * Save preferences to localStorage and apply them
   */
  function savePreferences(prefs) {
    try {
      const data = {
        ...prefs,
        version: 2,
        timestamp: Date.now(),
        userAgent: navigator.userAgent.substring(0, 100)
      };
      localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
      state.preferences = data;
      applyPreferences(data);
      
      // Log for debugging (remove in production if needed)
      console.log('[Cookie Consent] Preferences saved:', {
        necessary: data.necessary,
        analytics: data.analytics
      });
    } catch (e) {
      console.error('[Cookie Consent] Error saving preferences:', e);
    }
  }

  /**
   * Apply user preferences (enable/disable scripts)
   */
  function applyPreferences(prefs) {
    if (!prefs) return;

    // Update HTML attributes for CSS styling
    document.documentElement.setAttribute('data-cookie-consent', 'true');
    document.documentElement.setAttribute('data-cookie-analytics', prefs.analytics ? '1' : '0');

    // Handle conditional scripts
    document.querySelectorAll('script[data-cookie-category]').forEach(script => {
      const category = script.getAttribute('data-cookie-category');
      
      // Necessary scripts are always loaded
      if (category === 'necessary' || (prefs[category] && !script.dataset.loaded)) {
        loadScript(script);
      }
    });

    // Dispatch custom event for other scripts to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChange', { 
      detail: prefs 
    }));
  }

  /**
   * Load a deferred script
   */
  function loadScript(scriptElement) {
    if (scriptElement.dataset.loaded) return;

    const newScript = document.createElement('script');
    
    // Copy all attributes except type and data-cookie-category
    Array.from(scriptElement.attributes).forEach(attr => {
      if (attr.name !== 'type' && attr.name !== 'data-cookie-category') {
        newScript.setAttribute(attr.name, attr.value);
      }
    });

    // Copy inline script content if present
    if (scriptElement.textContent) {
      newScript.textContent = scriptElement.textContent;
    }

    newScript.dataset.loaded = '1';
    scriptElement.parentNode.replaceChild(newScript, scriptElement);
  }

  /**
   * Create and show the cookie banner
   */
  function showBanner() {
    if (state.bannerShown || document.getElementById('scp-cookie-banner')) return;
    state.bannerShown = true;

    const banner = document.createElement('div');
    banner.id = 'scp-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.setAttribute('aria-describedby', 'scp-cookie-desc');
    
    banner.innerHTML = `
      <div class="scp-banner-container">
        <div class="scp-banner-content">
          <div class="scp-banner-text">
            <div class="scp-banner-icon">🍪</div>
            <div>
              <div class="scp-banner-title">Rispettiamo la tua privacy</div>
              <div class="scp-banner-desc" id="scp-cookie-desc">
                Utilizziamo solo cookie tecnici essenziali per il funzionamento del sito. 
                Con il tuo consenso, possiamo attivare analitiche anonime (Vercel Analytics) 
                per migliorare i nostri servizi. Non tracciamo né profilamo gli utenti.
              </div>
              <div class="scp-banner-links">
                <a href="/cookie.html" target="_blank" rel="noopener">Cookie Policy</a>
                <span class="scp-separator">•</span>
                <a href="/privacy.html" target="_blank" rel="noopener">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div class="scp-banner-actions">
            <button 
              id="scp-btn-reject" 
              class="scp-btn scp-btn-secondary"
              aria-label="Rifiuta cookie non necessari"
            >
              Solo necessari
            </button>
            <button 
              id="scp-btn-customize" 
              class="scp-btn scp-btn-secondary"
              aria-label="Personalizza preferenze cookie"
            >
              Personalizza
            </button>
            <button 
              id="scp-btn-accept" 
              class="scp-btn scp-btn-primary"
              aria-label="Accetta tutti i cookie"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    `;

    // Inject styles
    injectStyles();

    // Add to DOM with animation
    document.body.appendChild(banner);
    requestAnimationFrame(() => {
      banner.classList.add('scp-show');
    });

    // Attach event listeners
    banner.querySelector('#scp-btn-accept').addEventListener('click', () => {
      savePreferences({ necessary: true, analytics: true });
      hideBanner();
    });

    banner.querySelector('#scp-btn-reject').addEventListener('click', () => {
      savePreferences({ necessary: true, analytics: false });
      hideBanner();
    });

    banner.querySelector('#scp-btn-customize').addEventListener('click', () => {
      showPreferencesPanel();
    });
  }

  /**
   * Hide and remove the banner
   */
  function hideBanner() {
    const banner = document.getElementById('scp-cookie-banner');
    if (!banner) return;

    banner.classList.remove('scp-show');
    setTimeout(() => {
      banner.remove();
      state.bannerShown = false;
    }, CONFIG.animationDuration);
  }

  /**
   * Show preferences management panel
   */
  function showPreferencesPanel() {
    if (state.panelOpen || document.getElementById('scp-cookie-panel')) return;
    state.panelOpen = true;

    const currentPrefs = state.preferences || { necessary: true, analytics: false };

    const panel = document.createElement('div');
    panel.id = 'scp-cookie-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-labelledby', 'scp-panel-title');
    
    panel.innerHTML = `
      <div class="scp-panel-overlay"></div>
      <div class="scp-panel-container">
        <div class="scp-panel-header">
          <h2 id="scp-panel-title" class="scp-panel-title">Gestisci le tue preferenze</h2>
          <button 
            id="scp-panel-close" 
            class="scp-panel-close"
            aria-label="Chiudi pannello preferenze"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="scp-panel-body">
          <p class="scp-panel-intro">
            Qui puoi controllare quali cookie vogliamo utilizzare. I cookie necessari sono sempre attivi 
            poiché essenziali per il funzionamento del sito.
          </p>

          <div class="scp-category-list">
            <!-- Necessary Category -->
            <div class="scp-category">
              <div class="scp-category-header">
                <div class="scp-category-info">
                  <div class="scp-category-title">
                    <span class="scp-category-icon">🔒</span>
                    Cookie Necessari
                    <span class="scp-badge scp-badge-always">Sempre attivi</span>
                  </div>
                  <div class="scp-category-desc">
                    Essenziali per il funzionamento del sito. Gestiscono la sessione di navigazione, 
                    salvano le preferenze sui cookie e garantiscono la sicurezza. Non possono essere disattivati.
                  </div>
                  <div class="scp-category-examples">
                    <strong>Esempi:</strong> cookie di sessione, preferenze lingua, consenso cookie
                  </div>
                </div>
                <div class="scp-toggle-container">
                  <input 
                    type="checkbox" 
                    id="scp-toggle-necessary" 
                    class="scp-toggle-input"
                    checked 
                    disabled
                    aria-label="Cookie necessari sempre attivi"
                  />
                  <label for="scp-toggle-necessary" class="scp-toggle-label">
                    <span class="scp-toggle-switch"></span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Analytics Category -->
            <div class="scp-category">
              <div class="scp-category-header">
                <div class="scp-category-info">
                  <div class="scp-category-title">
                    <span class="scp-category-icon">📊</span>
                    Cookie Analitici
                  </div>
                  <div class="scp-category-desc">
                    Ci aiutano a capire come viene utilizzato il sito attraverso statistiche aggregate e anonime. 
                    Utilizziamo <strong>Vercel Analytics</strong>, un servizio privacy-friendly che:
                  </div>
                  <ul class="scp-category-features">
                    <li><span class="scp-check">✓</span> Non traccia utenti individuali</li>
                    <li><span class="scp-check">✓</span> Non usa cookie persistenti</li>
                    <li><span class="scp-check">✓</span> Anonimizza gli indirizzi IP</li>
                    <li><span class="scp-check">✓</span> Fornisce solo dati aggregati</li>
                    <li><span class="scp-check">✓</span> Conforme GDPR</li>
                  </ul>
                  <div class="scp-category-examples">
                    <strong>Informazioni raccolte:</strong> pagine visitate, tempo di permanenza, tipo di browser (senza identificazione personale)
                  </div>
                </div>
                <div class="scp-toggle-container">
                  <input 
                    type="checkbox" 
                    id="scp-toggle-analytics" 
                    class="scp-toggle-input"
                    ${currentPrefs.analytics ? 'checked' : ''}
                    aria-label="Attiva o disattiva cookie analitici"
                  />
                  <label for="scp-toggle-analytics" class="scp-toggle-label">
                    <span class="scp-toggle-switch"></span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Info Box -->
            <div class="scp-info-box">
              <div class="scp-info-icon">ℹ️</div>
              <div>
                <strong>Nota sulla privacy:</strong> Non utilizziamo Google Analytics, Facebook Pixel, 
                o altri strumenti di tracciamento invasivi. Vercel Analytics raccoglie solo dati aggregati 
                e non può identificare singoli utenti.
              </div>
            </div>
          </div>
        </div>

        <div class="scp-panel-footer">
          <button 
            id="scp-btn-reject-all" 
            class="scp-btn scp-btn-secondary"
            aria-label="Rifiuta tutti i cookie non necessari"
          >
            Rifiuta non necessari
          </button>
          <button 
            id="scp-btn-save" 
            class="scp-btn scp-btn-primary"
            aria-label="Salva le preferenze selezionate"
          >
            Salva preferenze
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(panel);
    
    // Add show class after a frame for animation
    requestAnimationFrame(() => {
      panel.classList.add('scp-show');
    });

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Event listeners
    const closePanel = () => hidePreferencesPanel();

    panel.querySelector('#scp-panel-close').addEventListener('click', closePanel);
    panel.querySelector('.scp-panel-overlay').addEventListener('click', closePanel);
    
    panel.querySelector('#scp-btn-reject-all').addEventListener('click', () => {
      savePreferences({ necessary: true, analytics: false });
      closePanel();
      hideBanner();
    });

    panel.querySelector('#scp-btn-save').addEventListener('click', () => {
      const analyticsChecked = panel.querySelector('#scp-toggle-analytics').checked;
      savePreferences({ 
        necessary: true, 
        analytics: analyticsChecked 
      });
      closePanel();
      hideBanner();
    });

    // Keyboard navigation (ESC to close)
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        closePanel();
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);
  }

  /**
   * Hide preferences panel
   */
  function hidePreferencesPanel() {
    const panel = document.getElementById('scp-cookie-panel');
    if (!panel) return;

    panel.classList.remove('scp-show');
    document.body.style.overflow = '';
    
    setTimeout(() => {
      panel.remove();
      state.panelOpen = false;
    }, CONFIG.animationDuration);
  }

  /**
   * Inject CSS styles
   */
  function injectStyles() {
    if (document.getElementById('scp-cookie-styles')) return;

    const style = document.createElement('style');
    style.id = 'scp-cookie-styles';
    style.textContent = `
      /* Cookie Banner Styles */
      #scp-cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2147483647;
        opacity: 0;
        transform: translateY(100%);
        transition: opacity ${CONFIG.animationDuration}ms ease, transform ${CONFIG.animationDuration}ms ease;
      }

      #scp-cookie-banner.scp-show {
        opacity: 1;
        transform: translateY(0);
      }

      .scp-banner-container {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px) saturate(180%);
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.12);
        padding: 20px;
      }

      .scp-banner-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        gap: 24px;
        align-items: center;
        flex-wrap: wrap;
      }

      .scp-banner-text {
        flex: 1 1 500px;
        display: flex;
        gap: 16px;
        align-items: flex-start;
      }

      .scp-banner-icon {
        font-size: 32px;
        flex-shrink: 0;
      }

      .scp-banner-title {
        font-size: 17px;
        font-weight: 600;
        color: #1d1d1f;
        margin-bottom: 6px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .scp-banner-desc {
        font-size: 15px;
        line-height: 1.5;
        color: #6e6e73;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .scp-banner-links {
        margin-top: 8px;
        font-size: 14px;
      }

      .scp-banner-links a {
        color: #007aff;
        text-decoration: none;
      }

      .scp-banner-links a:hover {
        text-decoration: underline;
      }

      .scp-separator {
        margin: 0 8px;
        color: #d2d2d7;
      }

      .scp-banner-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      /* Buttons */
      .scp-btn {
        padding: 11px 20px;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        white-space: nowrap;
      }

      .scp-btn:focus-visible {
        outline: 3px solid rgba(0, 122, 255, 0.5);
        outline-offset: 2px;
      }

      .scp-btn-primary {
        background: #007aff;
        color: white;
      }

      .scp-btn-primary:hover {
        background: #0051d5;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
      }

      .scp-btn-secondary {
        background: #f5f5f7;
        color: #1d1d1f;
        border: 1px solid rgba(0, 0, 0, 0.08);
      }

      .scp-btn-secondary:hover {
        background: #e8e8ed;
      }

      /* Panel Styles */
      #scp-cookie-panel {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity ${CONFIG.animationDuration}ms ease;
      }

      #scp-cookie-panel.scp-show {
        opacity: 1;
      }

      #scp-cookie-panel.scp-show .scp-panel-container {
        transform: scale(1);
        opacity: 1;
      }

      .scp-panel-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
      }

      .scp-panel-container {
        position: relative;
        background: white;
        border-radius: 20px;
        width: min(700px, 90vw);
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform: scale(0.95);
        opacity: 0;
        transition: all ${CONFIG.animationDuration}ms ease;
      }

      .scp-panel-header {
        padding: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .scp-panel-title {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        color: #1d1d1f;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .scp-panel-close {
        background: transparent;
        border: none;
        color: #6e6e73;
        cursor: pointer;
        padding: 8px;
        border-radius: 8px;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .scp-panel-close:hover {
        background: #f5f5f7;
        color: #1d1d1f;
      }

      .scp-panel-body {
        padding: 24px;
        overflow-y: auto;
        flex: 1;
      }

      .scp-panel-intro {
        color: #6e6e73;
        line-height: 1.6;
        margin: 0 0 24px 0;
        font-size: 15px;
      }

      .scp-category-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .scp-category {
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 16px;
        padding: 20px;
        background: #fafafa;
      }

      .scp-category-header {
        display: flex;
        gap: 20px;
        align-items: flex-start;
        justify-content: space-between;
      }

      .scp-category-info {
        flex: 1;
      }

      .scp-category-title {
        font-size: 17px;
        font-weight: 600;
        color: #1d1d1f;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }

      .scp-category-icon {
        font-size: 20px;
      }

      .scp-badge {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
      }

      .scp-badge-always {
        background: #e8f5e9;
        color: #2e7d32;
      }

      .scp-category-desc {
        color: #6e6e73;
        line-height: 1.6;
        margin-bottom: 12px;
        font-size: 14px;
      }

      .scp-category-features {
        list-style: none;
        padding: 0;
        margin: 12px 0;
      }

      .scp-category-features li {
        padding: 4px 0;
        color: #1d1d1f;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .scp-check {
        color: #34c759;
        font-weight: bold;
      }

      .scp-category-examples {
        margin-top: 12px;
        padding: 12px;
        background: white;
        border-radius: 8px;
        font-size: 13px;
        color: #6e6e73;
      }

      .scp-category-examples strong {
        color: #1d1d1f;
      }

      .scp-info-box {
        background: #f5f8ff;
        border: 1px solid #d0e1ff;
        border-radius: 12px;
        padding: 16px;
        display: flex;
        gap: 12px;
        font-size: 14px;
        color: #1d1d1f;
        line-height: 1.6;
      }

      .scp-info-icon {
        font-size: 20px;
        flex-shrink: 0;
      }

      /* Toggle Switch */
      .scp-toggle-container {
        flex-shrink: 0;
      }

      .scp-toggle-input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      .scp-toggle-label {
        display: inline-block;
        width: 51px;
        height: 31px;
        background: #d1d1d6;
        border-radius: 31px;
        position: relative;
        cursor: pointer;
        transition: background 0.2s ease;
      }

      .scp-toggle-input:checked + .scp-toggle-label {
        background: #34c759;
      }

      .scp-toggle-input:disabled + .scp-toggle-label {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .scp-toggle-switch {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 27px;
        height: 27px;
        background: white;
        border-radius: 50%;
        transition: transform 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .scp-toggle-input:checked + .scp-toggle-label .scp-toggle-switch {
        transform: translateX(20px);
      }

      .scp-panel-footer {
        padding: 24px;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
        display: flex;
        gap: 12px;
        justify-content: flex-end;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .scp-banner-content {
          flex-direction: column;
        }

        .scp-banner-actions {
          width: 100%;
          flex-direction: column;
        }

        .scp-btn {
          width: 100%;
        }

        .scp-panel-container {
          width: 95vw;
          max-height: 90vh;
        }

        .scp-category-header {
          flex-direction: column;
          gap: 16px;
        }

        .scp-toggle-container {
          align-self: flex-start;
        }

        .scp-panel-footer {
          flex-direction: column;
        }
      }

      /* Print */
      @media print {
        #scp-cookie-banner,
        #scp-cookie-panel {
          display: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * Initialize the cookie consent manager
   */
  function init() {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Load saved preferences
    state.preferences = getPreferences();

    // Apply existing preferences
    if (state.preferences) {
      applyPreferences(state.preferences);
    } else {
      // Show banner after a delay
      setTimeout(() => {
        showBanner();
      }, CONFIG.bannerDelay);
    }

    // Expose public API
    window.showCookiePreferences = showPreferencesPanel;
    window.getCookieConsent = () => state.preferences;
    window.resetCookieConsent = () => {
      localStorage.removeItem(CONFIG.storageKey);
      state.preferences = null;
      window.location.reload();
    };

    console.log('[Cookie Consent] Initialized v2.0.0');
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
