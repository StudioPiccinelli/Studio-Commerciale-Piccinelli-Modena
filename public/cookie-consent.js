<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cookie Policy - Studio Commerciale Piccinelli</title>
  <link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <meta name="color-scheme" content="light dark">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.7;
      color: #1d1d1f;
      background: #fafafa;
    }
    .header {
      background: rgba(255,255,255,0.85);
      backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 1px solid rgba(0,0,0,0.06);
      position: sticky; top: 0; z-index: 20;
    }
    .nav-container { 
      max-width: 1100px; 
      margin: 0 auto; 
      padding: 0.9rem 1.25rem; 
      display: flex; 
      align-items: center; 
      justify-content: space-between; 
    }
    .logo { 
      font-weight: 600; 
      color: #1d1d1f; 
      text-decoration: none; 
      font-size: 1.1rem;
    }
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: #007aff;
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 500;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: #0051d5;
    }
    .hero { 
      padding: 4.5rem 1.25rem 2.5rem; 
      text-align: center; 
      background: linear-gradient(135deg, #fafafa 0%, #f5f5f7 100%); 
    }
    .hero h1 { 
      font-size: clamp(2rem, 3.5vw, 3rem); 
      margin: 0 0 0.5rem; 
      letter-spacing: -0.02em; 
      font-weight: 700;
    }
    .hero p { 
      color: #6e6e73; 
      max-width: 720px; 
      margin: 0.5rem auto 0; 
      font-size: 1.05rem; 
    }
    .updated { 
      font-size: 0.9rem; 
      color: #6e6e73; 
      margin-top: 0.5rem;
    }
    .container { 
      max-width: 1100px; 
      margin: 0 auto; 
      padding: 2.5rem 1.25rem 4rem; 
    }
    .grid { 
      display: grid; 
      gap: 1.5rem; 
      grid-template-columns: 2fr 1fr; 
    }
    @media (max-width: 900px) {
      .grid { grid-template-columns: 1fr; }
      .sidebar { order: 2; }
    }
    .card {
      background: #fff; 
      border: 1px solid rgba(0,0,0,0.06); 
      border-radius: 16px; 
      padding: 1.75rem 2rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.05);
      margin-bottom: 1.5rem;
    }
    h2 { 
      font-size: 1.5rem; 
      margin: 0 0 1rem; 
      font-weight: 600;
      color: #1d1d1f;
    }
    h3 { 
      font-size: 1.2rem; 
      margin: 1.5rem 0 0.75rem; 
      font-weight: 600;
      color: #1d1d1f;
    }
    h4 {
      font-size: 1.05rem;
      margin: 1.25rem 0 0.5rem;
      font-weight: 600;
      color: #1d1d1f;
    }
    p { 
      color: #1d1d1f; 
      margin: 0.75rem 0;
    }
    ul, ol { 
      padding-left: 1.5rem; 
      margin: 0.75rem 0;
    }
    li { 
      color: #1d1d1f; 
      margin: 0.5rem 0;
    }
    a { 
      color: #007aff; 
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .callout {
      border-left: 4px solid #0a84ff;
      padding: 1rem 1.25rem;
      background: #f5f8ff;
      border-radius: 12px;
      margin: 1rem 0;
    }
    .callout-warning {
      border-left-color: #ff9500;
      background: #fff8f0;
    }
    .callout-success {
      border-left-color: #34c759;
      background: #f0fdf4;
    }
    .callout-info {
      border-left-color: #5856d6;
      background: #f5f5ff;
    }
    strong { font-weight: 600; }
    .badge {
      display: inline-block;
      padding: 0.25rem 0.6rem;
      background: #e5e5e7;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 500;
      margin-right: 0.5rem;
    }
    .badge-blue { background: #e5f1ff; color: #0a84ff; }
    .badge-green { background: #e8f5e9; color: #34c759; }
    .badge-orange { background: #fff3e0; color: #ff9500; }
    .badge-purple { background: #f3f2ff; color: #5856d6; }
    .toc {
      position: sticky;
      top: 100px;
    }
    .toc-list {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
    }
    .toc-list li {
      margin: 0.4rem 0;
    }
    .toc-list a {
      color: #1d1d1f;
      display: block;
      padding: 0.4rem 0.75rem;
      border-radius: 8px;
      transition: background 0.2s;
    }
    .toc-list a:hover {
      background: #f5f5f7;
      text-decoration: none;
    }
    .manage-btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #007aff 0%, #0051d5 100%);
      color: white;
      border-radius: 12px;
      font-weight: 600;
      text-decoration: none;
      margin-top: 1rem;
      transition: transform 0.2s;
    }
    .manage-btn:hover {
      transform: translateY(-2px);
      text-decoration: none;
    }
    .footer {
      background: #1d1d1f;
      color: #a1a1a6;
      text-align: center;
      padding: 2.5rem 1rem;
      border-top: 1px solid #424245;
    }
    .footer a {
      color: #fff;
      text-decoration: none;
      margin: 0 0.75rem;
    }
    .footer a:hover {
      text-decoration: underline;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      font-size: 0.95rem;
    }
    th, td {
      text-align: left;
      padding: 0.75rem;
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }
    th {
      background: #f5f5f7;
      font-weight: 600;
    }
    .browser-icon {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-right: 0.5rem;
    }
    code {
      background: #f5f5f7;
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-family: ui-monospace, 'SF Mono', Monaco, monospace;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="nav-container">
      <a class="logo" href="/">Studio Commerciale Piccinelli</a>
      <a href="/" class="back-btn">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 3L1.5 8L6.5 13M2 8H14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Torna alla Home
      </a>
    </div>
  </header>

  <section class="hero">
    <h1>Cookie Policy</h1>
    <p>Informativa dettagliata sull'utilizzo dei cookie e tecnologie similari sul nostro sito web</p>
    <p class="updated">Ultimo aggiornamento: 5 dicembre 2025</p>
  </section>

  <main class="container">
    <div class="grid">
      <div class="main-content">
        
        <!-- Sezione 1 -->
        <div class="card" id="section-1">
          <h2>1. Cosa sono i Cookie</h2>
          
          <p>I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell'utente (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.</p>

          <h3>Come funzionano i cookie</h3>
          <p>Quando visiti un sito web, il server del sito invia al tuo browser un cookie contenente informazioni specifiche. Il browser memorizza questo cookie sul tuo dispositivo. Alle visite successive, il browser rinvia automaticamente il cookie al server, permettendo al sito di "ricordare" le tue preferenze e azioni precedenti.</p>

          <h3>A cosa servono</h3>
          <ul>
            <li><strong>Funzionamento del sito:</strong> permettono la navigazione e l'uso di funzionalità base (es. carrello, login)</li>
            <li><strong>Ricordare preferenze:</strong> salvano le scelte dell'utente (es. lingua, consenso cookie)</li>
            <li><strong>Migliorare l'esperienza:</strong> personalizzano contenuti e funzionalità</li>
            <li><strong>Analisi e statistiche:</strong> misurano traffico e comportamento degli utenti</li>
            <li><strong>Marketing:</strong> mostrano contenuti pubblicitari rilevanti</li>
          </ul>

          <div class="callout callout-info">
            <strong>Nota importante:</strong> I cookie non sono virus o programmi. Sono semplici file di testo che non possono eseguire codice o accedere ai file del tuo computer. Non possono danneggiare il dispositivo né installare malware.
          </div>
        </div>

        <!-- Sezione 2 -->
        <div class="card" id="section-2">
          <h2>2. Titolare del Trattamento</h2>
          <p><strong>Studio Commerciale Piccinelli</strong></p>
          <p>
            Via Emilia Centro, 75<br>
            41121 Modena (MO), Italia<br>
            Tel: 059/218032<br>
            Fax: 059/867 2225<br>
            Email: <a href="mailto:info@assoprof.it">info@assoprof.it</a><br>
            PEC: <a href="mailto:studiopiccinelli@pec.it">studiopiccinelli@pec.it</a><br>
            P.IVA: 00385320361
          </p>
        </div>

        <!-- Sezione 3 -->
        <div class="card" id="section-3">
          <h2>3. Tipologie di Cookie</h2>

          <h3>3.1 Classificazione per origine</h3>
          
          <h4>Cookie di prima parte (First-party cookies)</h4>
          <p>Cookie installati direttamente dal sito web che stai visitando (in questo caso, studiocommercialepiccinelli.com). Solo questo sito può leggere questi cookie.</p>

          <h4>Cookie di terze parti (Third-party cookies)</h4>
          <p>Cookie installati da domini diversi da quello del sito che stai visitando. Vengono impostati da servizi esterni integrati nel sito (es. Google Maps, video YouTube, social media).</p>

          <h3>3.2 Classificazione per durata</h3>

          <h4>Cookie di sessione (Session cookies)</h4>
          <p>Cookie temporanei che vengono cancellati automaticamente quando chiudi il browser. Servono per gestire la sessione di navigazione (es. tenere traccia degli elementi nel carrello).</p>

          <h4>Cookie persistenti (Persistent cookies)</h4>
          <p>Cookie che rimangono memorizzati sul dispositivo per un periodo prestabilito (da pochi giorni fino a 24 mesi). Servono a ricordare le preferenze tra una visita e l'altra.</p>

          <h3>3.3 Classificazione per finalità</h3>

          <div class="callout">
            <h4 style="margin-top: 0;">Cookie Tecnici (Strettamente Necessari)</h4>
            <p><span class="badge-green badge">Nessun consenso richiesto</span></p>
            <p>Sono essenziali per il funzionamento del sito. Senza questi cookie, alcune funzionalità base non potrebbero operare. Vengono installati senza necessità di consenso preventivo.</p>
            <p><strong>Esempi:</strong></p>
            <ul style="margin-bottom: 0;">
              <li>Cookie di navigazione per gestire la sessione</li>
              <li>Cookie per memorizzare le preferenze sui cookie</li>
              <li>Cookie di sicurezza (es. protezione CSRF)</li>
              <li>Cookie per il bilanciamento del carico del server</li>
            </ul>
          </div>

          <div class="callout callout-info">
            <h4 style="margin-top: 0;">Cookie Analitici e di Performance</h4>
            <p><span class="badge-blue badge">Consenso richiesto</span></p>
            <p>Raccolgono informazioni su come gli utenti utilizzano il sito (pagine visitate, tempo di permanenza, errori). I dati sono aggregati e anonimi.</p>
            <p><strong>Esempi:</strong></p>
            <ul style="margin-bottom: 0;">
              <li>Google Analytics (se anonimizzato e configurato correttamente, può essere equiparato a cookie tecnico)</li>
              <li>Vercel Analytics (raccoglie statistiche aggregate senza identificare singoli utenti)</li>
              <li>Hotjar, Matomo e similari</li>
            </ul>
          </div>

          <div class="callout callout-warning">
            <h4 style="margin-top: 0;">Cookie di Profilazione e Marketing</h4>
            <p><span class="badge-orange badge">Consenso esplicito richiesto</span></p>
            <p>Tracciano la navigazione per creare profili degli utenti e mostrare pubblicità personalizzata in base agli interessi.</p>
            <p><strong>Esempi:</strong></p>
            <ul style="margin-bottom: 0;">
              <li>Facebook Pixel</li>
              <li>Google Ads / DoubleClick</li>
              <li>LinkedIn Insights</li>
              <li>Cookie di retargeting</li>
            </ul>
          </div>
        </div>

        <!-- Sezione 4 -->
        <div class="card" id="section-4">
          <h2>4. Cookie Utilizzati su Questo Sito</h2>

          <p>Il sito <strong>studiocommercialepiccinelli.com</strong> utilizza esclusivamente cookie tecnici e cookie analitici di prima parte. <strong>Non utilizziamo cookie di profilazione né Google Analytics.</strong></p>

          <h3>4.1 Cookie Tecnici (Prima Parte)</h3>
          
          <table>
            <thead>
              <tr>
                <th>Nome Cookie</th>
                <th>Finalità</th>
                <th>Durata</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>cookie_consent</code></td>
                <td>Memorizza le preferenze dell'utente riguardo ai cookie</td>
                <td>12 mesi</td>
                <td>Prima parte - Tecnico</td>
              </tr>
              <tr>
                <td><code>language</code></td>
                <td>Salva la lingua selezionata dall'utente</td>
                <td>12 mesi</td>
                <td>Prima parte - Tecnico</td>
              </tr>
              <tr>
                <td><code>session_id</code></td>
                <td>Gestisce la sessione di navigazione</td>
                <td>Sessione</td>
                <td>Prima parte - Tecnico</td>
              </tr>
            </tbody>
          </table>

          <div class="callout callout-success">
            <strong>Conformità GDPR:</strong> Questi cookie tecnici non richiedono il consenso preventivo dell'utente in quanto strettamente necessari per il funzionamento del sito (art. 122 Codice Privacy italiano, come modificato dal D.Lgs. 101/2018).
          </div>

          <h3>4.2 Vercel Analytics</h3>
          
          <p>Il sito è ospitato su <strong>Vercel</strong>, che raccoglie automaticamente alcuni dati di navigazione aggregati per:</p>
          <ul>
            <li>Monitorare le performance del sito (tempi di caricamento, errori)</li>
            <li>Statistiche di traffico aggregate (numero di visitatori, pagine viste)</li>
            <li>Individuare problemi tecnici e migliorare l'infrastruttura</li>
          </ul>

          <p><strong>Caratteristiche di Vercel Analytics:</strong></p>
          <ul>
            <li><span class="badge-green badge">Privacy-friendly</span> Non utilizza cookie persistenti</li>
            <li><span class="badge-green badge">Anonimizzato</span> Gli indirizzi IP sono mascherati</li>
            <li><span class="badge-green badge">Aggregato</span> I dati non identificano singoli utenti</li>
            <li><span class="badge-green badge">GDPR compliant</span> Conforme alle normative europee</li>
          </ul>

          <p><strong>Dati raccolti da Vercel:</strong></p>
          <ul>
            <li>URL della pagina visitata</li>
            <li>Referrer (sito da cui provieni)</li>
            <li>User agent (browser e sistema operativo, senza identificazione univoca)</li>
            <li>Timestamp di accesso</li>
            <li>IP anonimizzato (ultimi ottetti mascherati)</li>
          </ul>

          <p><strong>Durata conservazione:</strong> I log di Vercel sono conservati per un massimo di 30 giorni.</p>

          <p>Per maggiori informazioni sulla privacy di Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">https://vercel.com/legal/privacy-policy</a></p>

          <div class="callout">
            <strong>Base giuridica:</strong> Art. 6.1.f GDPR (interesse legittimo del Titolare a garantire la sicurezza e il corretto funzionamento del sito).
          </div>
        </div>

        <!-- Sezione 5 -->
        <div class="card" id="section-5">
          <h2>5. Cookie di Terze Parti</h2>

          <p>Il sito può integrare contenuti o servizi di terze parti che potrebbero installare i propri cookie. Questi soggetti agiscono come autonomi titolari del trattamento.</p>

          <h3>5.1 Google Maps</h3>
          <p><strong>Quando viene utilizzato:</strong> Se nel sito è presente una mappa interattiva</p>
          <p><strong>Cookie installati:</strong> Google può installare cookie per il funzionamento del servizio Maps</p>
          <p><strong>Finalità:</strong> Visualizzazione mappe, geolocalizzazione, misurazione interazioni</p>
          <p><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a></p>
          <p><strong>Come disattivare:</strong> <a href="https://adssettings.google.com/" target="_blank" rel="noopener">Impostazioni annunci Google</a></p>

          <h3>5.2 Google reCAPTCHA</h3>
          <p><strong>Quando viene utilizzato:</strong> Nei moduli di contatto per prevenire spam e bot</p>
          <p><strong>Cookie installati:</strong> <code>_GRECAPTCHA</code></p>
          <p><strong>Finalità:</strong> Distinguere utenti umani da bot automatizzati</p>
          <p><strong>Durata:</strong> 6 mesi</p>
          <p><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a></p>

          <div class="callout callout-warning">
            <strong>Nota importante:</strong> I cookie di Google Maps e reCAPTCHA vengono installati solo se accetti la categoria "Cookie Analitici" o se interagisci con i rispettivi servizi. Puoi rifiutarli tramite il banner cookie.
          </div>

          <h3>5.3 Cookie NON utilizzati</h3>
          <p>Questo sito <strong>NON utilizza:</strong></p>
          <ul>
            <li>❌ Google Analytics (GA4 o Universal Analytics)</li>
            <li>❌ Facebook Pixel</li>
            <li>❌ LinkedIn Insight Tag</li>
            <li>❌ Cookie di advertising/remarketing</li>
            <li>❌ Cookie di profilazione</li>
          </ul>
        </div>

        <!-- Sezione 6 -->
        <div class="card" id="section-6">
          <h2>6. Trasferimenti Extra-UE</h2>

          <h3>6.1 Vercel Inc. (Stati Uniti)</h3>
          <p>Vercel è una società con sede negli Stati Uniti. I dati di navigazione possono essere trasferiti e trattati in server localizzati negli USA.</p>

          <p><strong>Garanzie per il trasferimento:</strong></p>
          <ul>
            <li><strong>Clausole Contrattuali Standard (SCC):</strong> Vercel ha adottato le SCC approvate dalla Commissione Europea</li>
            <li><strong>Misure supplementari:</strong> Crittografia in transito (TLS) e a riposo, controlli di accesso, anonimizzazione IP</li>
            <li><strong>SOC 2 Type II:</strong> Certificazione per sicurezza e privacy dei dati</li>
          </ul>

          <h3>6.2 Google (Irlanda / Stati Uniti)</h3>
          <p>Se utilizzi servizi Google integrati nel sito (Maps, reCAPTCHA), i dati possono essere trasferiti a Google LLC (USA) attraverso Google Ireland Ltd. Google applica:</p>
          <ul>
            <li>Clausole Contrattuali Standard (SCC)</li>
            <li>Data Processing Addendum (DPA)</li>
            <li>Misure tecniche supplementari</li>
          </ul>

          <p>Per maggiori dettagli: <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener">https://business.safety.google/privacy/</a></p>
        </div>

        <!-- Sezione 7 -->
        <div class="card" id="section-7">
          <h2>7. Gestione delle Preferenze Cookie</h2>

          <h3>7.1 Banner Cookie</h3>
          <p>Al primo accesso al sito, viene visualizzato un banner che ti permette di:</p>
          <ul>
            <li><strong>Accettare tutti i cookie:</strong> abilita tutte le categorie</li>
            <li><strong>Rifiutare i cookie non necessari:</strong> accetta solo i cookie tecnici</li>
            <li><strong>Personalizzare:</strong> scegli quali categorie accettare</li>
          </ul>

          <h3>7.2 Modificare le Preferenze</h3>
          <p>Puoi modificare le tue scelte in qualsiasi momento:</p>
          <ol>
            <li>Clicca su "Gestisci Cookie" nel footer del sito</li>
            <li>Seleziona o deseleziona le categorie desiderate</li>
            <li>Clicca su "Salva preferenze"</li>
          </ol>

          <a href="#" onclick="if(window.showCookiePreferences) window.showCookiePreferences(); return false;" class="manage-btn">
            🍪 Gestisci Cookie Ora
          </a>

          <div class="callout callout-success" style="margin-top: 1.5rem;">
            <strong>Le tue scelte sono rispettate:</strong> Le preferenze vengono salvate sul tuo dispositivo e applicate automaticamente alle visite successive. Puoi cambiarle in qualsiasi momento senza conseguenze sulla navigazione.
          </div>
        </div>

        <!-- Sezione 8 -->
        <div class="card" id="section-8">
          <h2>8. Come Disabilitare i Cookie dal Browser</h2>

          <p>Puoi gestire i cookie direttamente dalle impostazioni del tuo browser. Ecco le guide per i browser più comuni:</p>

          <h3>Google Chrome</h3>
          <ol>
            <li>Apri Chrome → menu (⋮) → <strong>Impostazioni</strong></li>
            <li>Clicca su <strong>Privacy e sicurezza</strong> → <strong>Cookie e altri dati dei siti</strong></li>
            <li>Scegli l'opzione desiderata:
              <ul>
                <li>"Consenti tutti i cookie"</li>
                <li>"Blocca i cookie di terze parti in modalità di navigazione in incognito"</li>
                <li>"Blocca i cookie di terze parti"</li>
                <li>"Blocca tutti i cookie (sconsigliato)"</li>
              </ul>
            </li>
          </ol>
          <p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Guida ufficiale Chrome →</a></p>

          <h3>Mozilla Firefox</h3>
          <ol>
            <li>Apri Firefox → menu (☰) → <strong>Impostazioni</strong></li>
            <li>Clicca su <strong>Privacy e sicurezza</strong></li>
            <li>Nella sezione "Cookie e dati dei siti web" scegli:
              <ul>
                <li>"Standard" (blocca tracker noti)</li>
                <li>"Restrittiva" (blocca più tracker e cookie)</li>
                <li>"Personalizzata" (configura a tuo piacimento)</li>
              </ul>
            </li>
          </ol>
          <p><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener">Guida ufficiale Firefox →</a></p>

          <h3>Safari (macOS / iOS)</h3>
          <p><strong>Su Mac:</strong></p>
          <ol>
            <li>Apri Safari → <strong>Preferenze</strong> (⌘ + ,)</li>
            <li>Vai alla scheda <strong>Privacy</strong></li>
            <li>Spunta "Blocca tutti i cookie" (potrebbe causare malfunzionamenti)</li>
          </ol>
          <p><strong>Su iPhone/iPad:</strong></p>
          <ol>
            <li>Apri <strong>Impostazioni</strong> → <strong>Safari</strong></li>
            <li>Attiva <strong>"Impedisci monitoraggio intersito"</strong></li>
            <li>Attiva <strong>"Blocca tutti i cookie"</strong> se desideri bloccarli completamente</li>
          </ol>
          <p><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Guida ufficiale Safari →</a></p>

          <h3>Microsoft Edge</h3>
          <ol>
            <li>Apri Edge → menu (⋯) → <strong>Impostazioni</strong></li>
            <li>Clicca su <strong>Cookie e autorizzazioni del sito</strong> → <strong>Cookie e dati dei siti</strong></li>
            <li>Scegli l'opzione desiderata o gestisci eccezioni</li>
          </ol>
          <p><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Guida ufficiale Edge →</a></p>

          <h3>Opera</h3>
          <ol>
            <li>Apri Opera → menu → <strong>Impostazioni</strong> (Alt + P)</li>
            <li>Clicca su <strong>Privacy e sicurezza</strong> → <strong>Cookie e altri dati dei siti</strong></li>
            <li>Configura le preferenze desiderate</li>
          </ol>

          <div class="callout callout-warning">
            <strong>Attenzione:</strong> Disabilitare completamente i cookie potrebbe compromettere il funzionamento di molti siti web, impedendo l'accesso a determinate funzionalità (es. login, carrello, personalizzazioni).
          </div>
        </div>

        <!-- Sezione 9 -->
        <div class="card" id="section-9">
          <h2>9. Cookie Flash e Web Beacon</h2>

          <h3>9.1 Cookie Flash (LSO - Local Shared Objects)</h3>
          <p>I cookie Flash sono file utilizzati dal plugin Adobe Flash Player per memorizzare informazioni. Non vengono gestiti dal browser ma direttamente da Flash Player.</p>
          <p><strong>Questo sito NON utilizza cookie Flash.</strong></p>
          <p>Se desideri gestire i cookie Flash sul tuo dispositivo: <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" target="_blank" rel="noopener">Gestore impostazioni Flash →</a></p>

          <h3>9.2 Web Beacon / Pixel Tag</h3>
          <p>I web beacon sono piccole immagini trasparenti incorporate nelle pagine web o nelle email, utilizzate per tracciare l'apertura e l'interazione.</p>
          <p><strong>Questo sito NON utilizza web beacon di terze parti per tracciamento pubblicitario.</strong></p>
        </div>

        <!-- Sezione 10 -->
        <div class="card" id="section-10">
          <h2>10. Diritti dell'Interessato</h2>

          <p>In qualità di interessato, hai il diritto di:</p>

          <ul>
            <li><strong>Accesso:</strong> ottenere conferma dell'esistenza di cookie e conoscere quali dati sono stati raccolti</li>
            <li><strong>Rettifica:</strong> correggere dati inesatti</li>
            <li><strong>Cancellazione:</strong> chiedere la rimozione dei dati (compatibilmente con gli obblighi di legge)</li>
            <li><strong>Opposizione:</strong> opporti al trattamento per motivi legittimi</li>
            <li><strong>Limitazione:</strong> richiedere la limitazione del trattamento</li>
            <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato</li>
            <li><strong>Revoca del consenso:</strong> revocare il consenso ai cookie in qualsiasi momento</li>
          </ul>

          <h3>Come esercitare i diritti</h3>
          <p>Puoi esercitare i tuoi diritti inviando una richiesta a:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@assoprof.it">info@assoprof.it</a></li>
            <li><strong>PEC:</strong> <a href="mailto:studiopiccinelli@pec.it">studiopiccinelli@pec.it</a></li>
            <li><strong>Posta:</strong> Via Emilia Centro, 75 - 41121 Modena (MO)</li>
          </ul>
          <p><strong>Oggetto:</strong> "Esercizio diritti privacy - Cookie"</p>

          <h3>Reclamo all'Autorità Garante</h3>
          <p>Hai il diritto di proporre reclamo al Garante per la protezione dei dati personali:</p>
          <p>
            <strong>Garante Privacy</strong><br>
            Piazza Venezia, 11 - 00187 Roma<br>
            Tel: +39 06 696771<br>
            Email: <a href="mailto:garante@gpdp.it">garante@gpdp.it</a><br>
            Sito: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">www.garanteprivacy.it</a>
          </p>
        </div>

        <!-- Sezione 11 -->
        <div class="card" id="section-11">
          <h2>11. Aggiornamenti della Cookie Policy</h2>

          <p>Questa Cookie Policy può essere aggiornata periodicamente per riflettere:</p>
          <ul>
            <li>Modifiche normative</li>
            <li>Cambiamenti nelle tecnologie utilizzate</li>
            <li>Aggiunte o rimozioni di servizi di terze parti</li>
            <li>Miglioramenti nelle pratiche di privacy</li>
          </ul>

          <p>In caso di modifiche sostanziali, ti informeremo tramite:</p>
          <ul>
            <li>Avviso sul sito con evidenza della data di aggiornamento</li>
            <li>Richiesta di nuovo consenso, se necessario</li>
          </ul>

          <p><strong>Data ultimo aggiornamento: 5 dicembre 2025</strong></p>
          <p>Le versioni precedenti sono disponibili su richiesta scrivendo a <a href="mailto:info@assoprof.it">info@assoprof.it</a>.</p>
        </div>

        <!-- Sezione 12 -->
        <div class="card" id="section-12">
          <h2>12. Link Utili e Risorse</h2>

          <h3>Normativa di riferimento</h3>
          <ul>
            <li><a href="https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0679" target="_blank" rel="noopener">Regolamento (UE) 2016/679 (GDPR)</a></li>
            <li><a href="https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9677876" target="_blank" rel="noopener">Linee guida cookie del Garante Privacy</a></li>
            <li><a href="https://www.garanteprivacy.it/temi/cookie" target="_blank" rel="noopener">Sezione Cookie del Garante</a></li>
          </ul>

          <h3>Risorse per la privacy</h3>
          <ul>
            <li><a href="https://edpb.europa.eu/edpb_it" target="_blank" rel="noopener">Comitato Europeo per la Protezione dei Dati (EDPB)</a></li>
            <li><a href="https://www.youronlinechoices.com/it/" target="_blank" rel="noopener">Your Online Choices - Gestione cookie pubblicitari</a></li>
            <li><a href="https://www.aboutcookies.org/" target="_blank" rel="noopener">About Cookies - Informazioni generali</a></li>
          </ul>

          <h3>Documenti correlati</h3>
          <ul>
            <li><a href="/privacy.html">Informativa Privacy completa</a></li>
            <li><a href="/">Torna alla Home</a></li>
          </ul>
        </div>

      </div>

      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="card toc">
          <h3 style="margin-top: 0;">Indice</h3>
          <ol class="toc-list">
            <li><a href="#section-1">1. Cosa sono i Cookie</a></li>
            <li><a href="#section-2">2. Titolare</a></li>
            <li><a href="#section-3">3. Tipologie di Cookie</a></li>
            <li><a href="#section-4">4. Cookie Utilizzati</a></li>
            <li><a href="#section-5">5. Cookie di Terze Parti</a></li>
            <li><a href="#section-6">6. Trasferimenti Extra-UE</a></li>
            <li><a href="#section-7">7. Gestione Preferenze</a></li>
            <li><a href="#section-8">8. Disabilitare dal Browser</a></li>
            <li><a href="#section-9">9. Flash e Web Beacon</a></li>
            <li><a href="#section-10">10. Diritti</a></li>
            <li><a href="#section-11">11. Aggiornamenti</a></li>
            <li><a href="#section-12">12. Link Utili</a></li>
          </ol>

          <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(0,0,0,0.06);">
            <a href="#" onclick="if(window.showCookiePreferences) window.showCookiePreferences(); return false;" class="manage-btn" style="width: 100%; text-align: center; display: block;">
              🍪 Gestisci Cookie
            </a>
          </div>
        </div>

        <div class="card" style="margin-top: 1.5rem;">
          <h3 style="margin-top: 0;">Riepilogo Privacy</h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <span style="color: #34c759; font-size: 1.2rem;">✓</span>
                <strong>Cookie tecnici</strong>
              </div>
              <p style="margin: 0; color: #6e6e73; font-size: 0.85rem;">Necessari per il funzionamento</p>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <span style="color: #34c759; font-size: 1.2rem;">✓</span>
                <strong>Vercel Analytics</strong>
              </div>
              <p style="margin: 0; color: #6e6e73; font-size: 0.85rem;">Privacy-friendly, dati aggregati</p>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <span style="color: #ff3b30; font-size: 1.2rem;">✗</span>
                <strong>Google Analytics</strong>
              </div>
              <p style="margin: 0; color: #6e6e73; font-size: 0.85rem;">Non utilizzato</p>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <span style="color: #ff3b30; font-size: 1.2rem;">✗</span>
                <strong>Profilazione</strong>
              </div>
              <p style="margin: 0; color: #6e6e73; font-size: 0.85rem;">Non utilizziamo cookie di profilazione</p>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top: 1.5rem;">
          <h3 style="margin-top: 0;">Hai domande?</h3>
          <p style="font-size: 0.9rem; color: #6e6e73; margin-bottom: 1rem;">
            Contattaci per chiarimenti sui cookie o sulla privacy
          </p>
          <p style="font-size: 0.9rem; margin: 0;">
            <strong>Email:</strong><br>
            <a href="mailto:info@assoprof.it">info@assoprof.it</a>
          </p>
        </div>
      </aside>
    </div>
  </main>

  <footer class="footer">
    <p>
      © 2025 Studio Commerciale Piccinelli. Tutti i diritti riservati.
    </p>
    <p style="margin-top: 0.5rem;">
      <a href="/">Home</a> | 
      <a href="/privacy.html">Privacy Policy</a> | 
      <a href="/cookie.html">Cookie Policy</a> |
      <a href="#" onclick="if(window.showCookiePreferences) window.showCookiePreferences(); return false;">Gestisci Cookie</a>
    </p>
  </footer>

</body>
</html>
