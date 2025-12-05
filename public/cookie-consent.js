/* Minimal cookie consent manager - Studio Associato Piccinelli */
(function () {
  const KEY = 'sap_cookie_prefs_v1'; // preferences key
  const CATS = ['necessary','analytics','marketing'];

  function getPrefs(){
    try{ return JSON.parse(localStorage.getItem(KEY)) || null; }catch(e){ return null; }
  }
  function savePrefs(p){ localStorage.setItem(KEY, JSON.stringify(p)); applyPrefs(p); }

  function applyPrefs(prefs){
    // Example toggles: block third-party scripts unless consented.
    // Add data-consent attr to any script tag you want to conditionally load.
    document.querySelectorAll('script[data-consent]').forEach(s => {
      const cat = s.getAttribute('data-consent');
      if(cat==='necessary' || (prefs && prefs[cat])){
        if(!s.dataset.loaded){
          const clone = document.createElement('script');
          [...s.attributes].forEach(a=> { if(a.name!=='type') clone.setAttribute(a.name, a.value); });
          clone.removeAttribute('data-consent');
          clone.text = s.text;
          s.replaceWith(clone);
          clone.dataset.loaded = '1';
        }
      }
    });
    // Add a CSS hook on <html> to style if needed
    document.documentElement.setAttribute('data-cookie-analytics', prefs && prefs.analytics ? '1':'0');
    document.documentElement.setAttribute('data-cookie-marketing', prefs && prefs.marketing ? '1':'0');
  }

  function buildBanner(){
    const existing = document.getElementById('cookie-banner');
    if(existing) return;

    const wrap = document.createElement('div');
    wrap.id = 'cookie-banner';
    wrap.style.position = 'fixed';
    wrap.style.insetInline = 'env(safe-area-inset-left) env(safe-area-inset-right)';
    wrap.style.bottom = '12px';
    wrap.style.left = '12px';
    wrap.style.right = '12px';
    wrap.style.zIndex = '2147483647';
    wrap.style.background = '#fff';
    wrap.style.border = '1px solid rgba(0,0,0,.08)';
    wrap.style.borderRadius = '16px';
    wrap.style.boxShadow = '0 12px 30px rgba(0,0,0,.18)';
    wrap.style.padding = '16px';
    wrap.style.maxWidth = '980px';
    wrap.style.margin = '0 auto';

    wrap.innerHTML = `
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="flex:1 1 520px; min-width:260px;">
          <div style="font-weight:700; margin-bottom:4px; color:#1d1d1f;">Usiamo i cookie</div>
          <div style="color:#6e6e73; line-height:1.6;">
            Utilizziamo cookie necessari per far funzionare il sito e, previo consenso, cookie analitici e di marketing per migliorare i servizi.
          </div>
          <a href="/cookie.html" style="display:inline-block; margin-top:6px; color:#0a84ff;">Cookie Policy</a> · <a href="/privacy.html" style="display:inline-block; margin-top:6px; color:#0a84ff;">Privacy Policy</a>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
          <button id="cookie-reject" style="appearance:none;border:1px solid rgba(0,0,0,.12);background:#fff;color:#1d1d1f;padding:.7rem 1rem;border-radius:10px;font-weight:600;">Rifiuta non necessari</button>
          <button id="cookie-customize" style="appearance:none;border:1px solid rgba(0,0,0,.12);background:#f5f5f7;color:#1d1d1f;padding:.7rem 1rem;border-radius:10px;font-weight:600;">Gestisci preferenze</button>
          <button id="cookie-accept" style="appearance:none;border:0;background:#0a84ff;color:#fff;padding:.7rem 1rem;border-radius:10px;font-weight:600;">Accetta tutti</button>
        </div>
      </div>
    `;

    document.body.appendChild(wrap);

    document.getElementById('cookie-accept').onclick = function(){
      savePrefs({necessary:true, analytics:true, marketing:true, ts: Date.now()});
      removeBanner();
    };
    document.getElementById('cookie-reject').onclick = function(){
      savePrefs({necessary:true, analytics:false, marketing:false, ts: Date.now()});
      removeBanner();
    };
    document.getElementById('cookie-customize').onclick = function(){
      openPanel();
    };
  }

  function removeBanner(){
    const el = document.getElementById('cookie-banner');
    if(el) el.remove();
  }

  function openPanel(){
    let panel = document.getElementById('cookie-panel');
    if(panel){
      panel.style.display = 'block';
      return;
    }
    panel = document.createElement('div');
    panel.id = 'cookie-panel';
    panel.style.position = 'fixed';
    panel.style.inset = '0';
    panel.style.background = 'rgba(0,0,0,.45)';
    panel.style.backdropFilter = 'blur(2px)';
    panel.style.zIndex = '2147483647';
    panel.innerHTML = `
      <div role="dialog" aria-modal="true" aria-labelledby="cookie-title" style="position:relative;margin:7vh auto 0;background:#fff;border-radius:16px;width:min(800px,92vw);box-shadow:0 10px 30px rgba(0,0,0,.2);">
        <div style="padding:18px 18px 0; display:flex; justify-content:space-between; align-items:center;">
          <h3 id="cookie-title" style="margin:0;font-size:1.25rem;color:#1d1d1f;">Preferenze cookie</h3>
          <button id="cookie-close" style="background:transparent;border:0;font-size:28px;color:#6e6e73;cursor:pointer;line-height:1;">&times;</button>
        </div>
        <div style="padding:0 18px 18px;">
          <p style="color:#6e6e73;">Seleziona le categorie da attivare. I cookie necessari sono sempre attivi perché indispensabili al funzionamento del sito.</p>
          <div style="display:grid; gap:10px;">
            ${buildSwitch('Necessari','necessary', true, 'Sempre attivi; salvataggio preferenze, sicurezza, bilanciamento carico.')}
            ${buildSwitch('Analitici','analytics', false, 'Misurano l’uso del sito in forma aggregata.')}
            ${buildSwitch('Marketing','marketing', false, 'Contenuti e annunci personalizzati.')}
          </div>
          <div style="display:flex; gap:8px; justify-content:flex-end; margin-top:14px;">
            <button id="cookie-decline" style="appearance:none;border:1px solid rgba(0,0,0,.12);background:#fff;color:#1d1d1f;padding:.7rem 1rem;border-radius:10px;font-weight:600;">Rifiuta non necessari</button>
            <button id="cookie-save" style="appearance:none;border:0;background:#0a84ff;color:#fff;padding:.7rem 1rem;border-radius:10px;font-weight:600;">Salva preferenze</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    const current = getPrefs() || {necessary:true, analytics:false, marketing:false};
    ['analytics','marketing'].forEach(cat => {
      const el = panel.querySelector(`input[data-cat="${cat}"]`);
      if(el) el.checked = !!current[cat];
    });

    panel.querySelector('#cookie-close').onclick = ()=> panel.remove();
    panel.addEventListener('click', (e)=>{ if(e.target===panel) panel.remove(); });
    panel.querySelector('#cookie-decline').onclick = function(){
      savePrefs({necessary:true, analytics:false, marketing:false, ts: Date.now()});
      panel.remove();
      removeBanner();
    };
    panel.querySelector('#cookie-save').onclick = function(){
      const prefs = {
        necessary:true,
        analytics: !!panel.querySelector('input[data-cat="analytics"]').checked,
        marketing: !!panel.querySelector('input[data-cat="marketing"]').checked,
        ts: Date.now()
      };
      savePrefs(prefs);
      panel.remove();
      removeBanner();
    };
  }

  function buildSwitch(label, cat, disabled, desc){
    const id = 'sw_'+cat;
    return `
      <div style="border:1px solid rgba(0,0,0,.08); border-radius:12px; padding:12px;">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
          <div>
            <div style="font-weight:600; color:#1d1d1f;">${label}</div>
            <div style="color:#6e6e73; font-size:.95rem;">${desc}</div>
          </div>
          <label style="display:inline-flex; align-items:center; gap:10px;">
            <input type="checkbox" ${disabled ? 'checked disabled' : ''} data-cat="${cat}" aria-label="${label}" />
            <span style="font-size:.95rem; color:${disabled? '#6e6e73':'#1d1d1f'};">${disabled? 'Sempre attivi':'Attivi'}</span>
          </label>
        </div>
      </div>`;
  }

  // Expose a public function
  window.showCookiePreferences = openPanel;

  // Init
  document.addEventListener('DOMContentLoaded', function(){
    const prefs = getPrefs();
    if(!prefs){ buildBanner(); }
    applyPrefs(prefs || {necessary:true, analytics:false, marketing:false});
  });
})();
