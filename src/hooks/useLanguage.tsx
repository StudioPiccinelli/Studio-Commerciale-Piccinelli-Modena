import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export type Language = 'it' | 'en' | 'fr' | 'es' | 'tr' | 'sq' | 'zh' | 'de' | 'ro';

type TranslationEntry = Partial<Record<Language, string>>;

type Translations = Record<string, TranslationEntry>;

const translations: Translations = {
  'nav-history': {
    it: 'Storia',
    en: 'History',
    fr: 'Histoire',
    es: 'Historia',
    tr: 'Tarih',
    sq: 'Historia',
    zh: '历史',
    de: 'Geschichte',
    ro: 'Istorie'
  },
  'nav-services': {
    it: 'Servizi',
    en: 'Services',
    fr: 'Services',
    es: 'Servicios',
    tr: 'Hizmetler',
    sq: 'Shërbimet',
    zh: '服务',
    de: 'Dienstleistungen',
    ro: 'Servicii'
  },
  'nav-contact': {
    it: 'Contatti',
    en: 'Contact',
    fr: 'Contact',
    es: 'Contacto',
    tr: 'İletişim',
    sq: 'Kontakti',
    zh: '联系',
    de: 'Kontakt',
    ro: 'Contact'
  },
  'hero-title': {
    it: 'Oltre la consulenza',
    en: 'Beyond consulting',
    fr: 'Au-delà du conseil',
    es: 'Más allá de la consultoría',
    tr: 'Danışmanlığın ötesinde',
    sq: 'Përtej konsulencës',
    zh: '超越咨询',
    de: 'Jenseits der Beratung',
    ro: 'Dincolo de consultanță'
  },
  'hero-subtitle': {
    it: 'Cinquant\'anni di competenza professionale al servizio della Vostra crescita aziendale\nSoluzioni strategiche innovative per un futuro solido e sostenibile',
    en: 'Fifty years of professional expertise dedicated to Your business growth.\nInnovative strategic solutions for a solid and sustainable future.',
    fr: 'Cinquante années d\'expertise professionnelle au service de Votre croissance d\'entreprise.\nSolutions stratégiques innovantes pour un avenir solide et durable.',
    es: 'Cincuenta años de experiencia profesional al servicio de Su crecimiento empresarial.\nSoluciones estratégicas innovadoras para un futuro sólido y sostenible.',
    tr: 'İş büyümenize adanmış elli yıllık profesyonel uzmanlık.\nSağlam ve sürdürülebilir bir gelecek için yenilikçi stratejik çözümler.',
    sq: 'Pesëdhjetë vjet ekspertizë profesionale në shërbim të rritjes së biznesit Tuaj.\nZgjidhje strategjike novatore për një të ardhme solide dhe të qëndrueshme.',
    zh: '五十年专业知识致力于您的业务增长。\n为稳固且可持续的未来提供创新战略解决方案。',
    de: 'Fünfzig Jahre professionelle Expertise im Dienste Ihres Unternehmenswachstums.\nInnovative strategische Lösungen für eine solide und nachhaltige Zukunft.',
    ro: 'Cincizeci de ani de expertiză profesională dedicată creșterii afacerii Dumneavoastră.\nSoluții strategice inovatoare pentru un viitor solid și sustenabil.'
  },
  'hero-cta': {
    it: 'Inizia ora',
    en: 'Start now',
    fr: 'Commencer maintenant',
    es: 'Empezar ahora',
    tr: 'Şimdi başla',
    sq: 'Fillo tani',
    zh: '现在开始',
    de: 'Jetzt beginnen',
    ro: 'Începe acum'
  },
  // Timeline Section
  'timeline-title': {
    it: 'La Nostra Storia',
    en: 'Our History',
    fr: 'Notre Histoire',
    es: 'Nuestra Historia',
    tr: 'Tarihimiz',
    sq: 'Historia Jonë',
    zh: '我们的历史',
    de: 'Unsere Geschichte',
    ro: 'Istoria Noastră'
  },
  'timeline-subtitle': {
    it: 'Mezzo secolo di evoluzione e crescita al servizio delle imprese',
    en: 'Half a century of evolution and growth serving businesses',
    fr: 'Un demi-siècle d\'évolution et de croissance au service des entreprises',
    es: 'Medio siglo de evolución y crecimiento al servicio de las empresas',
    tr: 'İşletmelere hizmet eden yarım asırlık gelişim ve büyüme',
    sq: 'Gjysmë shekulli evolucion dhe rritje në shërbim të ndërmarrjeve',
    zh: '半个世纪为企业服务的发展历程',
    de: 'Ein halbes Jahrhundert Entwicklung und Wachstum im Dienste der Unternehmen',
    ro: 'O jumătate de secol de evoluție și creștere în serviciul companiilor'
  },
  'timeline-1975-title': {
    it: 'Le Origini',
    en: 'The Origins',
    fr: 'Les Origines',
    es: 'Los Orígenes',
    tr: 'Başlangıç',
    sq: 'Origjina',
    zh: '起源',
    de: 'Die Anfänge',
    ro: 'Originile'
  },
  'timeline-1975-desc': {
    it: 'Fondazione dello Studio da parte del Dott. Franco Piccinelli, in concomitanza con la riforma tributaria italiana. Nascita di un approccio innovativo e interdisciplinare, aggregando figure professionali complementari in un momento di profonda trasformazione del sistema fiscale.',
    en: 'Foundation of the Studio by Dr. Franco Piccinelli, coinciding with the Italian tax reform. Birth of an innovative and interdisciplinary approach, bringing together complementary professionals during a period of profound transformation of the tax system.',
    fr: 'Fondation du Studio par le Dr Franco Piccinelli, en concomitance avec la réforme fiscale italienne. Naissance d\'une approche innovante et interdisciplinaire, rassemblant des professionnels complémentaires lors d\'une période de transformation profonde du système fiscal.',
    es: 'Fundación del Estudio por el Dr. Franco Piccinelli, coincidiendo con la reforma tributaria italiana. Nacimiento de un enfoque innovador e interdisciplinario, reuniendo profesionales complementarios durante un período de profunda transformación del sistema fiscal.',
    tr: 'Dr. Franco Piccinelli tarafından İtalyan vergi reformu ile eş zamanlı olarak Stüdyonun kurulması. Vergi sisteminin köklü dönüşüm döneminde tamamlayıcı profesyonelleri bir araya getiren yenilikçi ve disiplinler arası yaklaşımın doğuşu.',
    sq: 'Themelimi i Studios nga Dr. Franco Piccinelli, përkon me reformën tatimore italiane. Lindja e një qasjeje novatore dhe ndërdisiplinare, duke bashkuar profesionistë plotësues gjatë një periudhe transformimi të thellë të sistemit tatimor.',
    zh: '弗兰科·皮奇内利博士在意大利税收改革期间创立工作室。在税收制度深刻变革时期，诞生了创新的跨学科方法，汇集互补的专业人士。',
    de: 'Gründung des Studios durch Dr. Franco Piccinelli im Zuge der italienischen Steuerreform. Entstehung eines innovativen, interdisziplinären Ansatzes, der in einer Phase tiefgreifender Veränderungen des Steuersystems komplementäre Fachleute zusammenführt.',
    ro: 'Înființarea studioului de către dr. Franco Piccinelli, concomitent cu reforma fiscală italiană. Nașterea unei abordări inovatoare și interdisciplinare, reunind profesioniști complementari într-o perioadă de profunde transformări ale sistemului fiscal.'
  },
  'timeline-1980-title': {
    it: 'Crescita con il Territorio',
    en: 'Growth with the Territory',
    fr: 'Croissance avec le Territoire',
    es: 'Crecimiento con el Territorio',
    tr: 'Bölge ile Büyüme',
    sq: 'Rritje me Territorin',
    zh: '与区域共同成长',
    de: 'Wachstum mit der Region',
    ro: 'Creștere odată cu teritoriul'
  },
  'timeline-1980-desc': {
    it: 'Decenni di crescita accompagnando l\'evoluzione dell\'economia modenese. Assistenza alle aziende del territorio attraverso generazioni imprenditoriali, testimoni dei tradizionali passaggi generazionali e delle trasformazioni del tessuto produttivo locale.',
    en: 'Decades of growth accompanying the evolution of the Modena economy. Assistance to local companies through entrepreneurial generations, witnessing traditional generational transitions and transformations of the local productive fabric.',
    fr: 'Des décennies de croissance accompagnant l\'évolution de l\'économie de Modène. Assistance aux entreprises du territoire à travers les générations entrepreneuriales, témoins des transitions générationnelles traditionnelles et des transformations du tissu productif local.',
    es: 'Décadas de crecimiento acompañando la evolución de la economía de Módena. Asistencia a las empresas del territorio a través de generaciones empresariales, testigos de las transiciones generacionales tradicionales y las transformaciones del tejido productivo local.',
    tr: 'Modena ekonomisinin evrimine eşlik eden on yıllarca süren büyüme. Geleneksel nesil geçişlerine ve yerel üretim dokusunun dönüşümlerine tanıklık eden girişimci nesiller boyunca bölge şirketlerine yardım.',
    sq: 'Dekada rritje duke shoqëruar evolucionin e ekonomisë së Modenas. Ndihmë ndërmarrjeve të territorit përmes brezave sipërmarrës, dëshmitarë të kalimeve tradicionale brezore dhe transformimeve të indeve prodhuese lokale.',
    zh: '几十年的发展伴随着摩德纳经济的演变。通过企业家世代为当地企业提供支持，见证传统的世代传承和当地生产结构的转型。',
    de: 'Jahrzehnte des Wachstums, begleitet von der Entwicklung der Wirtschaft von Modena. Unterstützung lokaler Unternehmen über Unternehmergenerationen hinweg, Zeugnis traditioneller Generationswechsel und Veränderungen des lokalen Produktionsgefüges.',
    ro: 'Decenii de creștere care au însoțit evoluția economiei din Modena. Asistență pentru companiile locale de-a lungul generațiilor antreprenoriale, martori ai tranzițiilor generaționale tradiționale și ai transformărilor țesutului productiv local.'
  },
  'timeline-2000-title': {
    it: 'Sede Storica',
    en: 'Historic Headquarters',
    fr: 'Siège Historique',
    es: 'Sede Histórica',
    tr: 'Tarihi Merkez',
    sq: 'Selia Historike',
    zh: '历史总部',
    de: 'Historischer Sitz',
    ro: 'Sediu Istoric'
  },
  'timeline-2000-desc': {
    it: 'Operatività dalla prestigiosa sede di Corso Canalgrande 79, nel cuore storico di Modena. Una scelta strategica che unisce tradizione e funzionalità, testimoniando l\'impegno verso l\'eccellenza professionale nel contesto urbano di valore.',
    en: 'Operations from the prestigious headquarters at Corso Canalgrande 79, in the historic heart of Modena. A strategic choice that combines tradition and functionality, demonstrating commitment to professional excellence in a valuable urban context.',
    fr: 'Opérations depuis le prestigieux siège de Corso Canalgrande 79, au cœur historique de Modène. Un choix stratégique qui unit tradition et fonctionnalité, témoignant de l\'engagement vers l\'excellence professionnelle dans un contexte urbain de valeur.',
    es: 'Operaciones desde la prestigiosa sede de Corso Canalgrande 79, en el corazón histórico de Módena. Una elección estratégica que une tradición y funcionalidad, demostrando el compromiso hacia la excelencia profesional en un contexto urbano de valor.',
    tr: 'Modena\'nın tarihi kalbinde, prestijli Corso Canalgrande 79 merkezinden operasyonlar. Geleneği ve işlevselliği birleştiren stratejik bir seçim, değerli kentsel bağlamda profesyonel mükemmelliğe bağlılığı gösteriyor.',
    sq: 'Operacione nga selia prestigjioze në Corso Canalgrande 79, në zemrën historike të Modenas. Një zgjedhje strategjike që bashkon traditën dhe funksionalitetin, duke dëshmuar angazhimin drejt përsosmërisë profesionale në një kontekst urban me vlerë.',
    zh: '从位于摩德纳历史中心的著名总部Corso Canalgrande 79开展业务。这一战略选择将传统与功能性相结合，展现了在宝贵城市环境中对专业卓越的承诺。',
    de: 'Tätigkeit vom prestigeträchtigen Sitz in der Corso Canalgrande 79 im historischen Herzen Modenas. Eine strategische Entscheidung, die Tradition und Funktionalität vereint und das Bekenntnis zu beruflicher Exzellenz in einem wertvollen städtischen Kontext belegt.',
    ro: 'Activitate din prestigiosul sediu de pe Corso Canalgrande 79, în inima istorică a Modenei. O alegere strategică ce îmbină tradiția și funcționalitatea, demonstrând angajamentul pentru excelență profesională într-un context urban valoros.'
  },
  'timeline-2022-title': {
    it: 'Nuova Sede',
    en: 'New Headquarters',
    fr: 'Nouveau Siège',
    es: 'Nueva Sede',
    tr: 'Yeni Merkez',
    sq: 'Selia e Re',
    zh: '新总部',
    de: 'Neuer Hauptsitz',
    ro: 'Sediu Nou'
  },
  'timeline-2022-desc': {
    it: 'Trasferimento nei moderni locali di Via Emilia Centro, 75, ampliando gli spazi e le possibilità di servizio. Una posizione strategica che conferma la presenza nel centro cittadino e migliora l\'accessibilità per la clientela.',
    en: 'Relocation to modern premises at Via Emilia Centro, 75, expanding spaces and service possibilities. A strategic position that confirms presence in the city center and improves accessibility for clients.',
    fr: 'Déménagement dans les locaux modernes de Via Emilia Centro, 75, élargissant les espaces et les possibilités de service. Une position stratégique qui confirme la présence au centre-ville et améliore l\'accessibilité pour la clientèle.',
    es: 'Traslado a las modernas instalaciones de Via Emilia Centro, 75, ampliando los espacios y las posibilidades de servicio. Una posición estratégica que confirma la presencia en el centro de la ciudad y mejora la accesibilidad para la clientela.',
    tr: 'Via Emilia Centro, 75\'teki modern tesislere taşınma, alanları ve hizmet olanaklarını genişletme. Şehir merkezindeki varlığı doğrulayan ve müşteriler için erişilebilirliği artıran stratejik bir konum.',
    sq: 'Transferimi në ambientet moderne të Via Emilia Centro, 75, duke zgjeruar hapësirat dhe mundësitë e shërbimit. Një pozicion strategjik që konfirmon praninë në qendër të qytetit dhe përmirëson aksesueshmërinë për klientët.',
    zh: '迁至Via Emilia Centro 75号现代化办公场所，扩大空间和服务可能性。这一战略位置确认了在市中心的存在，并改善了客户的可达性。',
    de: 'Umzug in moderne Räumlichkeiten in Via Emilia Centro 75, mit Erweiterung der Flächen und Servicemöglichkeiten. Eine strategische Lage, die die Präsenz im Stadtzentrum bestätigt und die Erreichbarkeit für Kunden verbessert.',
    ro: 'Mutare în spațiile moderne din Via Emilia Centro, 75, extinzând spațiile și posibilitățile de serviciu. O poziție strategică ce confirmă prezența în centrul orașului și îmbunătățește accesibilitatea pentru clienți.'
  },
  'timeline-today-title': {
    it: 'Team di Eccellenza',
    en: 'Team of Excellence',
    fr: 'Équipe d\'Excellence',
    es: 'Equipo de Excelencia',
    tr: 'Mükemmellik Takımı',
    sq: 'Ekip Përsosmërie',
    zh: '卓越团队',
    de: 'Exzellenzteam',
    ro: 'Echipă de excelență'
  },
  'timeline-today-desc': {
    it: 'Tre soci - Dott. Guerzoni Paolo, Dott. Lucchi Giovanni, Dott. Cornia Gian Marco - guidano un team di 10 professionisti. Un organico specializzato che garantisce competenza e innovazione per affrontare le sfide del futuro.',
    en: 'Three partners - Dr. Guerzoni Paolo, Dr. Lucchi Giovanni, Dr. Cornia Gian Marco - lead a team of 10 professionals. A specialized staff that ensures competence and innovation to face future challenges.',
    fr: 'Trois associés - Dr. Guerzoni Paolo, Dr. Lucchi Giovanni, Dr. Cornia Gian Marco - dirigent une équipe de 10 professionnels. Un personnel spécialisé qui garantit compétence et innovation pour relever les défis de l\'avenir.',
    es: 'Tres socios - Dr. Guerzoni Paolo, Dr. Lucchi Giovanni, Dr. Cornia Gian Marco - lideran un equipo de 10 profesionales. Un personal especializado que garantiza competencia e innovación para enfrentar los desafíos del futuro.',
    tr: 'Üç ortak - Dr. Guerzoni Paolo, Dr. Lucchi Giovanni, Dr. Cornia Gian Marco - 10 profesyonelden oluşan bir ekibi yönetiyor. Geleceğin zorluklarıyla başa çıkmak için yetkinlik ve yeniliği garanti eden uzman kadro.',
    sq: 'Tre partnerë - Dr. Guerzoni Paolo, Dr. Lucchi Giovanni, Dr. Cornia Gian Marco - udhëheqin një ekip prej 10 profesionistësh. Një staf i specializuar që garanton kompetencë dhe inovacion për të përballuar sfidat e së ardhmes.',
    zh: '三位合伙人 - Paolo Guerzoni博士、Giovanni Lucchi博士、Gian Marco Cornia博士 - 领导着一个由10名专业人士组成的团队。专业的工作人员确保有能力和创新来应对未来的挑战。',
    de: 'Drei Partner – Dr. Guerzoni Paolo, Dr. Lucchi Giovanni, Dr. Cornia Gian Marco – führen ein Team von 10 Fachleuten. Ein spezialisiertes Team, das Kompetenz und Innovation garantiert, um die Herausforderungen der Zukunft zu meistern.',
    ro: 'Trei parteneri – dr. Guerzoni Paolo, dr. Lucchi Giovanni, dr. Cornia Gian Marco – conduc o echipă de 10 profesioniști. Un personal specializat care asigură competență și inovație pentru a face față provocărilor viitorului.'
  },
  'timeline-highlight': {
    it: '50 anni di esperienza al servizio delle imprese modenesi',
    en: '50 years of experience serving Modena businesses',
    fr: '50 ans d\'expérience au service des entreprises de Modène',
    es: '50 años de experiencia al servicio de las empresas de Módena',
    tr: 'Modena işletmelerine hizmet eden 50 yıllık deneyim',
    sq: '50 vjet përvojë në shërbim të ndërmarrjeve të Modenas',
    zh: '50年服务摩德纳企业的经验',
    de: '50 Jahre Erfahrung im Dienste der Unternehmen Modenas',
    ro: '50 de ani de experiență în slujba companiilor din Modena'
  },
  // About Section
  'about-title': {
    it: 'Esperienza che fa la differenza',
    en: 'Experience that makes the difference',
    fr: 'Une expérience qui fait la différence',
    es: 'Experiencia que marca la diferencia',
    tr: 'Fark yaratan deneyim',
    sq: 'Përvojë që bën diferencën',
    zh: '令人印象深刻的经验',
    de: 'Erfahrung, die den Unterschied macht',
    ro: 'Experiență care face diferența'
  },
  'about-desc': {
    it: 'Lo Studio Commerciale Piccinelli rappresenta un punto di riferimento nella consulenza fiscale e societaria, coniugando tradizione professionale ed innovazione metodologica. La nostra prassi operativa si fonda su una consolidata competenza tecnica, l\'utilizzo di tecnologie all\'avanguardia e un approccio personalizzato alle specifiche esigenze di ciascun Cliente.',
    en: 'Studio Commerciale Piccinelli represents a benchmark in tax and corporate consulting, combining professional tradition with methodological innovation. Our operational practice is founded on consolidated technical expertise, the use of cutting-edge technologies, and a personalized approach to the specific needs of each Client.',
    fr: 'Studio Commerciale Piccinelli représente une référence en matière de conseil fiscal et sociétaire, conjuguant tradition professionnelle et innovation méthodologique. Notre pratique opérationnelle repose sur une expertise technique consolidée, l\'utilisation de technologies de pointe et une approche personnalisée répondant aux besoins spécifiques de chaque Client.',
    es: 'Studio Commerciale Piccinelli representa un referente en consultoría fiscal y societaria, conjugando tradición profesional e innovación metodológica. Nuestra práctica operativa se fundamenta en una consolidada competencia técnica, el uso de tecnologías de vanguardia y un enfoque personalizado hacia las necesidades específicas de cada Cliente.',
    tr: 'Studio Commerciale Piccinelli, profesyonel geleneği metodolojik yenilikle birleştirerek vergi ve kurumsal danışmanlıkta bir referans noktasıdır. Operasyonel uygulamalarımız, konsolide teknik uzmanlık, son teknoloji kullanımı ve her Müşterinin özel ihtiyaçlarına kişiselleştirilmiş yaklaşım üzerine kurulmuştur.',
    sq: 'Studio Commerciale Piccinelli përfaqëson një pikë reference në këshillimin tatimor dhe shoqëror, duke kombinuar traditën profesionale me inovacionin metodologjik. Praktika jonë operacionale bazohet në ekspertizë teknike të konsoliduar, përdorimin e teknologjive të avancuara dhe një qasje të personalizuar ndaj nevojave specifike të çdo Klienti.',
    zh: 'Piccinelli商业工作室是税务和公司咨询领域的标杆，将专业传统与方法论创新相结合。我们的运营实践建立在成熟的技术专长、尖端技术的运用以及针对每位客户具体需求的个性化方法之上。',
    de: 'Studio Commerciale Piccinelli stellt einen Maßstab in der Steuer- und Unternehmensberatung dar und verbindet professionelle Tradition mit methodologischer Innovation. Unsere operative Praxis gründet sich auf konsolidierte technische Expertise, den Einsatz modernster Technologien und einen personalisierten Ansatz für die spezifischen Bedürfnisse jedes Mandanten.',
    ro: 'Studio Commerciale Piccinelli reprezintă un punct de referință în consultanța fiscală și corporativă, îmbinând tradiția profesională cu inovația metodologică. Practica noastră operațională se bazează pe expertiză tehnică consolidată, utilizarea tehnologiilor de ultimă generație și o abordare personalizată adaptată nevoilor specifice ale fiecărui Client.'
  },
  'about-feature1-title': {
    it: 'Competenza consolidata',
    en: 'Established expertise',
    fr: 'Compétence établie',
    es: 'Competencia establecida',
    tr: 'Yerleşik uzmanlık',
    sq: 'Kompetencë e konsoliduar',
    zh: '成熟的专业知识',
    de: 'Fundierte Kompetenz',
    ro: 'Competență consolidată'
  },
  'about-feature1-desc': {
    it: '50 anni di esperienza nel settore fiscale e societario al servizio delle imprese modenesi',
    en: '50 years of experience in tax and corporate sector serving Modena businesses',
    fr: '50 ans d\'expérience dans le secteur fiscal et sociétaire au service des entreprises de Modène',
    es: '50 años de experiencia en el sector fiscal y societario al servicio de las empresas de Módena',
    tr: 'Modena işletmelerine hizmet eden vergi ve kurumsal sektörde 50 yıllık deneyim',
    sq: '50 vjet përvojë në sektorin tatimor dhe shoqëror në shërbim të ndërmarrjeve të Modenas',
    zh: '在税务和公司部门为摩德纳企业服务50年的经验',
    de: '50 Jahre Erfahrung im Steuer- und Unternehmensbereich im Dienste der Unternehmen von Modena',
    ro: '50 de ani de experiență în domeniul fiscal și corporativ în slujba companiilor din Modena'
  },
  'about-feature2-title': {
    it: 'Tecnologie all\'avanguardia',
    en: 'Cutting-edge technologies',
    fr: 'Technologies de pointe',
    es: 'Tecnologías de vanguardia',
    tr: 'Son teknoloji',
    sq: 'Teknologji të avancuara',
    zh: '尖端技术',
    de: 'Spitzentechnologien',
    ro: 'Tehnologii de vârf'
  },
  'about-feature2-desc': {
    it: 'Strumenti digitali moderni per garantire efficienza e precisione nei nostri servizi',
    en: 'Modern digital tools to ensure efficiency and precision in our services',
    fr: 'Outils numériques modernes pour garantir l\'efficacité et la précision de nos services',
    es: 'Herramientas digitales modernas para garantizar eficiencia y precisión en nuestros servicios',
    tr: 'Hizmetlerimizde verimlilik ve hassasiyet sağlamak için modern dijital araçlar',
    sq: 'Mjete digjitale moderne për të garantuar efikasitet dhe precizion në shërbimet tona',
    zh: '现代数字工具确保我们服务的效率和精确性',
    de: 'Moderne digitale Werkzeuge zur Sicherstellung von Effizienz und Präzision in unseren Dienstleistungen',
    ro: 'Instrumente digitale moderne pentru a asigura eficiență și precizie în serviciile noastre'
  },
  'about-feature3-title': {
    it: 'Attenzione al cliente',
    en: 'Customer attention',
    fr: 'Attention au client',
    es: 'Atención al cliente',
    tr: 'Müşteri odaklılık',
    sq: 'Vëmendje ndaj klientit',
    zh: '客户关注',
    de: 'Kundenorientierung',
    ro: 'Atenție la client'
  },
  'about-feature3-desc': {
    it: 'Approccio personalizzato e supporto dedicato per ogni fase del vostro percorso aziendale',
    en: 'Personalized approach and dedicated support for every phase of your business journey',
    fr: 'Approche personnalisée et support dédié pour chaque phase de votre parcours d\'entreprise',
    es: 'Enfoque personalizado y soporte dedicado para cada fase de su recorrido empresarial',
    tr: 'İş yolculuğunuzun her aşaması için kişiselleştirilmiş yaklaşım ve özel destek',
    sq: 'Qasje e personalizuar dhe mbështetje e dedikuar për çdo fazë të udhëtimit tuaj biznesi',
    zh: '为您的商业旅程每个阶段提供个性化方法和专门支持',
    de: 'Personalisierter Ansatz und dedizierte Unterstützung für jede Phase Ihrer Unternehmensreise',
    ro: 'Abordare personalizată și suport dedicat pentru fiecare etapă a parcursului dvs. de afaceri'
  },
  // Services Section
  'services-title': {
    it: 'I Nostri Servizi',
    en: 'Our Services',
    fr: 'Nos Services',
    es: 'Nuestros Servicios',
    tr: 'Hizmetlerimiz',
    sq: 'Shërbimet Tona',
    zh: '我们的服务',
    de: 'Unsere Dienstleistungen',
    ro: 'Serviciile Noastre'
  },
  'services-subtitle': {
    it: 'Servizi professionali completi e integrati per supportare strategicamente la crescita della Vostra azienda in ogni fase del suo percorso di sviluppo.',
    en: 'We provide comprehensive and integrated professional services to strategically support the growth and consolidation of Your company at every stage of its development path.',
    fr: 'Nous fournissons des services professionnels complets et intégrés pour soutenir stratégiquement la croissance et la consolidation de Votre entreprise à chaque étape de son parcours de développement.',
    es: 'Brindamos servicios profesionales completos e integrados para apoyar estratégicamente el crecimiento y la consolidación de Su empresa en cada etapa de su trayectoria de desarrollo.',
    tr: 'Şirketinizin gelişim yolculuğunun her aşamasında büyümesini ve konsolidasyonunu stratejik olarak desteklemek için kapsamlı ve entegre profesyonel hizmetler sunuyoruz.',
    sq: 'Ofrojmë shërbime profesionale të plota dhe të integruara për të mbështetur strategjikisht rritjen dhe konsolidimin e Kompanisë Tuaj në çdo fazë të rrugës së zhvillimit të saj.',
    zh: '我们提供全面和综合的专业服务，以战略性地支持贵公司在其发展道路的每个阶段的增长和巩固。',
    de: 'Wir bieten umfassende und integrierte professionelle Dienstleistungen, um das Wachstum und die Konsolidierung Ihres Unternehmens in jeder Phase seines Entwicklungspfads strategisch zu unterstützen.',
    ro: 'Oferim servicii profesionale complete și integrate pentru a susține strategic creșterea și consolidarea Companiei Dumneavoastră în fiecare etapă a traseului său de dezvoltare.'
  },
  'services-special-title': {
    it: 'Servizi Specialistici',
    en: 'Specialist Services',
    fr: 'Services Spécialisés',
    es: 'Servicios Especializados',
    tr: 'Uzman Hizmetler',
    sq: 'Shërbime Specialiste',
    zh: '专业服务',
    de: 'Spezialdienstleistungen',
    ro: 'Servicii Specializate'
  },
  'services-special-subtitle': {
    it: 'Soluzioni avanzate per le sfide del futuro',
    en: 'Advanced solutions for future challenges',
    fr: 'Solutions avancées pour les défis de l\'avenir',
    es: 'Soluciones avanzadas para los desafíos del futuro',
    tr: 'Geleceğin zorlukları için gelişmiş çözümler',
    sq: 'Zgjidhje të avancuara për sfidat e së ardhmes',
    zh: '应对未来挑战的先进解决方案',
    de: 'Fortgeschrittene Lösungen für zukünftige Herausforderungen',
    ro: 'Soluții avansate pentru provocările viitorului'
  },
  // Contact Section
  'contact-title': {
    it: 'Contattaci Oggi',
    en: 'Contact Us Today',
    fr: 'Contactez-nous Aujourd\'hui',
    es: 'Contáctanos Hoy',
    tr: 'Bugün Bize Ulaşın',
    sq: 'Na Kontaktoni Sot',
    zh: '今天联系我们',
    de: 'Kontaktieren Sie uns noch heute',
    ro: 'Contactați-ne astăzi'
  },
  'contact-subtitle': {
    it: 'Il nostro Studio è a Vostra disposizione\nContattateci per una consulenza professionale personalizzata',
    en: 'Our Firm is at Your disposal.\nContact us for personalized professional consulting',
    fr: 'Notre Cabinet est à Votre disposition.\nContactez-nous pour un conseil professionnel personnalisé',
    es: 'Nuestro Despacho está a Su disposición.\nContáctenos para una consultoría profesional personalizada',
    tr: 'Büromuz hizmetinizdedir.\nKişiselleştirilmiş profesyonel danışmanlık için bizimle iletişime geçin',
    sq: 'Zyra jonë është në dispozicionin Tuaj.\nNa kontaktoni për këshillim profesional të personalizuar',
    zh: '我们的事务所随时为您服务。\n请联系我们获得个性化专业咨询',
    de: 'Unsere Kanzlei steht Ihnen zur Verfügung.\nKontaktieren Sie uns für eine personalisierte professionelle Beratung',
    ro: 'Biroul nostru este la dispoziția Dumneavoastră.\nContactați-ne pentru consultanță profesională personalizată'
  },
  'contact-form-title': {
    it: 'Richiedi una Consulenza',
    en: 'Request a Consultation',
    fr: 'Demander une Consultation',
    es: 'Solicitar una Consulta',
    tr: 'Danışmanlık Talep Et',
    sq: 'Kërkoni një Konsultim',
    zh: '请求咨询',
    de: 'Beratung anfordern',
    ro: 'Solicitați o consultație'
  },
  'contact-form-subtitle': {
    it: 'Compila il modulo e ti ricontatteremo entro 24 ore',
    en: 'Fill out the form and we will contact you within 24 hours',
    fr: 'Remplissez le formulaire et nous vous recontacterons dans les 24 heures',
    es: 'Complete el formulario y nos pondremos en contacto dentro de 24 horas',
    tr: 'Formu doldurun, 24 saat içinde size ulaşacağız',
    sq: 'Plotësoni formularin dhe ne do t\'ju kontaktojmë brenda 24 orëve',
    zh: '填写表格，我们将在24小时内与您联系',
    de: 'Füllen Sie das Formular aus und wir kontaktieren Sie innerhalb von 24 Stunden',
    ro: 'Completați formularul și vă vom contacta în 24 de ore'
  },
  // FAQ Section
  'faq-title': {
    it: 'Domande Frequenti',
    en: 'Frequently Asked Questions',
    fr: 'Questions Fréquemment Posées',
    es: 'Preguntas Frecuentes',
    tr: 'Sıkça Sorulan Sorular',
    sq: 'Pyetje të Shpeshta',
    zh: '常见问题',
    de: 'Häufig gestellte Fragen',
    ro: 'Întrebări frecvente'
  },
  'faq-subtitle': {
    it: 'Trova rapidamente le risposte alle domande più comuni sui nostri servizi',
    en: 'Quickly find answers to the most common questions about our services',
    fr: 'Trouvez rapidement les réponses aux questions les plus courantes sur nos services',
    es: 'Encuentre rápidamente respuestas a las preguntas más comunes sobre nuestros servizi',
    tr: 'Hizmetlerimiz hakkında en yaygın soruların yanıtlarını hızlıca bulun',
    sq: 'Gjeni shpejt përgjigje për pyetjet më të zakonshme rreth shërbimeve tona',
    zh: '快速找到关于我们服务的最常见问题的答案',
    de: 'Finden Sie schnell Antworten auf die häufigsten Fragen zu unseren Leistungen',
    ro: 'Găsiți rapid răspunsuri la cele mai frecvente întrebări despre serviciile noastre'
  },
  'faq-cta-title': {
    it: 'Non hai trovato quello che cercavi?',
    en: 'Didn\'t find what you were looking for?',
    fr: 'Vous n\'avez pas trouvé ce que vous cherchiez?',
    es: '¿No encontraste lo que buscabas?',
    tr: 'Aradığınızı bulamadınız mı?',
    sq: 'Nuk gjetët atë që kërkonit?',
    zh: '没有找到您要找的内容？',
    de: 'Haben Sie nicht gefunden, wonach Sie gesucht haben?',
    ro: 'Nu ați găsit ceea ce căutați?'
  },
  'faq-cta-subtitle': {
    it: 'Contattaci direttamente per ricevere una risposta personalizzata alle tue domande. Il nostro team è sempre disponibile per aiutarti.',
    en: 'Contact us directly to receive a personalized answer to your questions. Our team is always available to help you.',
    fr: 'Contactez-nous directement pour recevoir une réponse personnalisée à vos questions. Notre équipe est toujours disponible pour vous aider.',
    es: 'Contáctanos directamente para recibir una respuesta personalizada a tus preguntas. Nuestro equipo siempre está disponible para ayudarte.',
    tr: 'Sorularınıza kişiselleştirilmiş yanıt almak için doğrudan bizimle iletişime geçin. Ekibimiz size yardımcı olmak için her zaman hazır.',
    sq: 'Na kontaktoni drejtpërdrejt për të marrë një përgjigje të personalizuar për pyetjet tuaja. Ekipi ynë është gjithmonë i disponueshëm për t\'ju ndihmuar.',
    zh: '直接联系我们，获得针对您问题的个性化答案。我们的团队随时为您提供帮助。',
    de: 'Kontaktieren Sie uns direkt, um eine persönliche Antwort auf Ihre Fragen zu erhalten. Unser Team steht Ihnen jederzeit zur Verfügung.',
    ro: 'Contactați-ne direct pentru a primi un răspuns personalizat la întrebările dumneavoastră. Echipa noastră este întotdeauna disponibilă pentru a vă ajuta.'
  },
  'faq-cta-button': {
    it: 'Contattaci Ora',
    en: 'Contact Us Now',
    fr: 'Contactez-nous Maintenant',
    es: 'Contáctanos Ahora',
    tr: 'Şimdi Bize Ulaşın',
    sq: 'Na Kontaktoni Tani',
    zh: '立即联系我们',
    de: 'Kontaktieren Sie uns jetzt',
    ro: 'Contactați-ne acum'
  },
  // Footer Section
  'footer-company-desc': {
    it: 'Da 50 anni al servizio delle imprese modenesi\nTradizione, competenza e innovazione per la vostra crescita aziendale',
    en: '50 years serving Modena businesses.\nTradition, expertise and innovation for your business growth.',
    fr: '50 ans au service des entreprises de Modène.\nTradition, expertise et innovation pour votre croissance d\'entreprise.',
    es: '50 años sirviendo a las empresas de Módena.\nTradición, experiencia e innovación para el crecimiento de su negocio.',
    tr: '50 yıldır Modena işletmelerine hizmet veriyoruz.\nİş büyümeniz için gelenek, uzmanlık ve yenilik.',
    sq: '50 vjet duke shërbyer ndërmarrjet e Modenas.\nTraditë, ekspertizë dhe inovacion për rritjen e biznesit tuaj.',
    zh: '50年为摩德纳企业服务。\n为您的业务增长提供传统、专业知识和创新。',
    de: 'Seit 50 Jahren im Dienst der Unternehmen in Modena.\nTradition, Kompetenz und Innovation für das Wachstum Ihres Unternehmens.',
    ro: 'De 50 de ani în serviciul companiilor din Modena.\nTradiție, competență și inovație pentru creșterea afacerii dvs.'
  },
  'footer-address': {
    it: 'Sede Operativa',
    en: 'Operating Headquarters',
    fr: 'Siège Opérationnel',
    es: 'Sede Operativa',
    tr: 'Operasyon Merkezi',
    sq: 'Selia Operative',
    zh: '运营总部',
    de: 'Betriebssitz',
    ro: 'Sediu operativ'
  },
  'footer-phone': {
    it: 'Telefono',
    en: 'Phone',
    fr: 'Téléphone',
    es: 'Teléfono',
    tr: 'Telefon',
    sq: 'Telefoni',
    zh: '电话',
    de: 'Telefon',
    ro: 'Telefon'
  },
  'footer-hours': {
    it: 'Orari',
    en: 'Hours',
    fr: 'Horaires',
    es: 'Horarios',
    tr: 'Saatler',
    sq: 'Orari',
    zh: '营业时间',
    de: 'Zeiten',
    ro: 'Program'
  },
  'footer-weekdays': {
    it: 'Lun - Ven: 8:30 - 18:00',
    en: 'Mon - Fri: 8:30 - 18:00',
    fr: 'Lun - Ven: 8:30 - 18:00',
    es: 'Lun - Vie: 8:30 - 18:00',
    tr: 'Pts - Cum: 8:30 - 18:00',
    sq: 'Hën - Pre: 8:30 - 18:00',
    zh: '周一至周五：8:30 - 18:00',
    de: 'Mo - Fr: 8:30 - 18:00',
    ro: 'Lun - Vin: 8:30 - 18:00'
  },
  'footer-saturday': {
    it: 'Sab: Su appuntamento',
    en: 'Sat: By appointment',
    fr: 'Sam: Sur rendez-vous',
    es: 'Sáb: Con cita previa',
    tr: 'Cts: Randevu ile',
    sq: 'Sht: Me takim',
    zh: '周六：预约',
    de: 'Sa: Nach Vereinbarung',
    ro: 'Sâm: Cu programare'
  },
  'footer-services': {
    it: 'Servizi',
    en: 'Services',
    fr: 'Services',
    es: 'Servicios',
    tr: 'Hizmetler',
    sq: 'Shërbimet',
    zh: '服务',
    de: 'Dienstleistungen',
    ro: 'Servicii'
  },
  'footer-company': {
    it: 'Studio',
    en: 'Firm',
    fr: 'Studio',
    es: 'Estudio',
    tr: 'Stüdyo',
    sq: 'Studio',
    zh: '事务所',
    de: 'Kanzlei',
    ro: 'Studio'
  },
  'footer-support': {
    it: 'Supporto',
    en: 'Support',
    fr: 'Support',
    es: 'Soporte',
    tr: 'Destek',
    sq: 'Mbështetje',
    zh: '支持',
    de: 'Unterstützung',
    ro: 'Suport'
  },
  'footer-copyright': {
    it: 'Studio Commerciale Piccinelli. Tutti i diritti riservati.',
    en: 'Studio Commerciale Piccinelli. All rights reserved.',
    fr: 'Studio Commerciale Piccinelli. Tous droits réservés.',
    es: 'Studio Commerciale Piccinelli. Todos los derechos reservados.',
    tr: 'Studio Commerciale Piccinelli. Tüm hakları saklıdır.',
    sq: 'Studio Commerciale Piccinelli. Të gjitha të drejtat e rezervuara.',
    zh: 'Piccinelli商业工作室。保留所有权利。',
    de: 'Studio Commerciale Piccinelli. Alle Rechte vorbehalten.',
    ro: 'Studio Commerciale Piccinelli. Toate drepturile rezervate.'
  },
  'footer-badge': {
    it: '50 anni di esperienza professionale',
    en: '50 years of professional experience',
    fr: '50 ans d\'expérience professionnelle',
    es: '50 años de experiencia profesional',
    tr: '50 yıllık profesyonel deneyim',
    sq: '50 vjet përvojë profesionale',
    zh: '50年专业经验',
    de: '50 Jahre Berufserfahrung',
    ro: '50 de ani de experiență profesională'
  },
  'footer-badge-desc': {
    it: 'Dal 1975 al servizio delle imprese del territorio modenese',
    en: 'Since 1975 serving businesses in the Modena territory',
    fr: 'Depuis 1975 au service des entreprises du territoire de Modène',
    es: 'Desde 1975 al servicio de las empresas del territorio de Módena',
    tr: '1975\'ten beri Modena bölgesindeki işletmelere hizmet',
    sq: 'Që nga 1975 në shërbim të ndërmarrjeve të territorit të Modenas',
    zh: '自1975年以来为摩德纳地区的企业服务',
    de: 'Seit 1975 im Dienste der Unternehmen in der Region Modena',
    ro: 'Din 1975 în serviciul companiilor din zona Modena'
  },
  'footer-back-to-top': {
    it: 'Torna su',
    en: 'Back to top',
    fr: 'Haut de page',
    es: 'Volver arriba',
    tr: 'Başa dön',
    sq: 'Kthehu lart',
    zh: '回到顶部',
    de: 'Nach oben',
    ro: 'Înapoi sus'
  },

  // Hero extras
  'hero-badge': { it: '50 anni di esperienza', en: '50 years of experience', fr: "50 ans d'expérience", es: '50 años de experiencia', tr: '50 yıllık deneyim', sq: '50 vjet përvojë', zh: '50年经验' },
  'hero-cta-secondary': { 
    it: 'Scopri la nostra storia', 
    en: 'Discover our history', 
    fr: 'Découvrez notre histoire', 
    es: 'Descubre nuestra historia', 
    tr: 'Hikayemizi keşfedin', 
    sq: 'Zbuloni historinë tonë', 
    zh: '了解我们的历史',
    de: 'Entdecken Sie unsere Geschichte',
    ro: 'Descoperiți istoria noastră'
  },
  'hero-stat-years': { 
    it: 'Anni di esperienza', 
    en: 'Years of experience', 
    fr: "Années d'expérience", 
    es: 'Años de experiencia', 
    tr: 'Deneyim yılı', 
    sq: 'Vite përvoje', 
    zh: '从业年限',
    de: 'Jahre Erfahrung',
    ro: 'Ani de experiență' 
  },
  'hero-stat-professionals': { 
    it: 'Professionisti', 
    en: 'Professionals', 
    fr: 'Professionnels', 
    es: 'Profesionales', 
    tr: 'Profesyoneller', 
    sq: 'Profesionistë', 
    zh: '专业人士',
    de: 'Fachleute',
    ro: 'Profesioniști'
  },
  'hero-stat-partners': { 
    it: 'Soci', 
    en: 'Partners', 
    fr: 'Associés', 
    es: 'Socios', 
    tr: 'Ortaklar', 
    sq: 'Partnerë', 
    zh: '合伙人',
    de: 'Partner',
    ro: 'Parteneri'
  },
  
  // Timeline extras
  'timeline-year-today': { it: 'Oggi', en: 'Today', fr: "Aujourd'hui", es: 'Hoy', tr: 'Bugün', sq: 'Sot', zh: '今天', de: 'Heute', ro: 'Astăzi' },

  // Services - main (with correct keys)
  'services-accounting-title': {
    it: 'Contabilità e Bilanci',
    en: 'Accounting and Financial Statements',
    fr: 'Comptabilité et États Financiers',
    es: 'Contabilidad y Estados Financieros',
    tr: 'Muhasebe ve Mali Tablolar',
    sq: 'Kontabilitet dhe Bilance',
    zh: '会计与财务报表',
    de: 'Buchhaltung und Jahresabschluss',
    ro: 'Contabilitate și Bilanțuri'
  },
  'services-accounting-desc': {
    it: 'Gestione completa della contabilità aziendale, bilanci civilistici e fiscali con tecnologie moderne e reporting avanzato.',
    en: 'Complete management of corporate accounting, statutory and tax financial statements with modern technologies and advanced reporting.',
    fr: 'Gestion complète de la comptabilité d\'entreprise, bilans statutaires et fiscaux avec technologies modernes et reporting avancé.',
    es: 'Gestión completa de la contabilidad empresarial, balances civiles y fiscales con tecnologías modernas y reporting avanzado.',
    tr: 'Modern teknolojiler ve gelişmiş raporlama ile kurumsal muhasebe, yasal ve vergi mali tablolarının tam yönetimi.',
    sq: 'Menaxhim i plotë i kontabilitetit të kompanisë, bilancet civile dhe tatimore me teknologji moderne dhe raportim të avancuar.',
    zh: '使用现代技术和先进报告完全管理企业会计、法定和税务财务报表。',
    de: 'Vollständige Verwaltung der Unternehmensbuchhaltung, zivil- und steuerrechtliche Bilanzen mit modernen Technologien und fortgeschrittener Berichterstattung.',
    ro: 'Gestionarea completă a contabilității companiei, bilanțuri civile și fiscale cu tehnologii moderne și raportare avansată.'
  },
  'services-tax-title': {
    it: 'Consulenza Fiscale',
    en: 'Tax Consulting',
    fr: 'Conseil Fiscal',
    es: 'Consultoría Fiscal',
    tr: 'Vergi Danışmanlığı',
    sq: 'Këshillim Tatimor',
    zh: '税务咨询',
    de: 'Steuerberatung',
    ro: 'Consultanță Fiscală'
  },
  'services-tax-desc': {
    it: 'Ottimizzazione fiscale strategica, pianificazione tributaria e supporto completo per adempimenti e normative.',
    en: 'Strategic tax optimization, tax planning and full support for compliance and regulations.',
    fr: 'Optimisation fiscale stratégique, planification fiscale et support complet pour la conformité et réglementations.',
    es: 'Optimización fiscal estratégica, planificación tributaria y soporte completo para cumplimiento y normativas.',
    tr: 'Stratejik vergi optimizasyonu, vergi planlaması ve uyumluluk ve mevzuat için tam destek.',
    sq: 'Optimizim strategjik tatimor, planifikim tatimor dhe mbështetje e plotë për përputhshmëri dhe rregullore.',
    zh: '战略性税务优化、税务规划和法规合规的全面支持。',
    de: 'Strategische Steueroptimierung, Steuerplanung und vollständige Unterstützung bei Compliance und Vorschriften.',
    ro: 'Optimizare fiscală strategică, planificare tributară și suport complet pentru conformitate și reglementări.'
  },
  'services-corporate-title': {
    it: 'Consulenza Societaria',
    en: 'Corporate Consulting',
    fr: 'Conseil en Société',
    es: 'Consultoría Societaria',
    tr: 'Kurumsal Danışmanlık',
    sq: 'Këshillim Shoqëror',
    zh: '公司咨询',
    de: 'Gesellschaftsberatung',
    ro: 'Consultanță Corporativă'
  },
  'services-corporate-desc': {
    it: 'Supporto strategico per costituzioni, trasformazioni, fusioni, scissioni e governance aziendale.',
    en: 'Strategic support for incorporations, transformations, mergers, demergers and corporate governance.',
    fr: 'Support stratégique pour constitutions, transformations, fusions, scissions et gouvernance d\'entreprise.',
    es: 'Soporte estratégico para constituciones, transformaciones, fusiones, escisiones y gobierno corporativo.',
    tr: 'Kuruluşlar, dönüşümler, birleşmeler, bölünmeler ve kurumsal yönetim için stratejik destek.',
    sq: 'Mbështetje strategjike për themelime, transformime, bashkime, ndarje dhe qeverisje korporative.',
    zh: '为公司注册、转型、合并、分立和公司治理提供战略支持。',
    de: 'Strategische Unterstützung für Gründungen, Umwandlungen, Fusionen, Spaltungen und Unternehmensführung.',
    ro: 'Suport strategic pentru constituiri, transformări, fuziuni, diviziuni și guvernanță corporativă.'
  },
  'services-audit-title': {
    it: 'Revisione Legale',
    en: 'Statutory Audit',
    fr: 'Audit Légal',
    es: 'Auditoría Legal',
    tr: 'Yasal Denetim',
    sq: 'Auditim Ligjor',
    zh: '法定审计',
    de: 'Gesetzliche Prüfung',
    ro: 'Audit Legal'
  },
  'services-audit-desc': {
    it: 'Revisione contabile, due diligence e compliance normativa con standard internazionali.',
    en: 'Audit, due diligence and regulatory compliance following international standards.',
    fr: 'Audit, due diligence et conformité réglementaire selon les normes internationales.',
    es: 'Auditoría, due diligence y cumplimiento regulatorio siguiendo estándares internacionales.',
    tr: 'Uluslararası standartları takip eden denetim, durum tespiti ve mevzuat uyumluluğu.',
    sq: 'Auditim, hulumtim dhe përputhshmëri rregullatore duke ndjekur standardet ndërkombëtare.',
    zh: '按照国际标准进行审计、尽职调查和监管合规。',
    de: 'Prüfung, Due Diligence und regulatorische Compliance nach internationalen Standards.',
    ro: 'Audit, due diligence și conformitate regulatorie urmărind standardele internaționale.'
  },
  'services-organization-title': {
    it: 'Organizzazione Aziendale',
    en: 'Business Organization',
    fr: 'Organisation d\'Entreprise',
    es: 'Organización Empresarial',
    tr: 'İşletme Organizasyonu',
    sq: 'Organizim Biznesor',
    zh: '企业组织',
    de: 'Unternehmensorganisation',
    ro: 'Organizare Empresarială'
  },
  'services-organization-desc': {
    it: 'Analisi e ottimizzazione dei processi aziendali, implementazione di sistemi di controllo di gestione e KPI.',
    en: 'Analysis and optimization of business processes, implementation of management control systems and KPIs.',
    fr: 'Analyse et optimisation des processus d\'entreprise, implémentation de systèmes de contrôle de gestion et KPI.',
    es: 'Análisis y optimización de procesos empresariales, implementación de sistemas de control de gestión y KPI.',
    tr: 'İş süreçlerinin analizi ve optimizasyonu, yönetim kontrol sistemleri ve KPI implementasyonu.',
    sq: 'Analizë dhe optimizim i proceseve të biznesit, implementim i sistemeve të kontrollit të menaxhimit dhe KPI.',
    zh: '业务流程分析和优化，实施管理控制系统和KPI。',
    de: 'Analyse und Optimierung von Geschäftsprozessen, Implementierung von Management-Kontrollsystemen und KPIs.',
    ro: 'Analiză și optimizare a proceselor de afaceri, implementarea sistemelor de control al managementului și KPI.'
  },
  'services-control-title': {
    it: 'Controllo di Gestione',
    en: 'Management Control',
    fr: 'Contrôle de Gestion',
    es: 'Control de Gestión',
    tr: 'Yönetim Kontrolü',
    sq: 'Kontroll Menaxhimi',
    zh: '管理控制',
    de: 'Management-Kontrolle',
    ro: 'Control de Gestiune'
  },
  'services-control-desc': {
    it: 'Budget, analisi degli scostamenti, reporting direzionale e supporto alle decisioni strategiche.',
    en: 'Budgeting, variance analysis, management reporting and strategic decision support.',
    fr: 'Budget, analyse des écarts, reporting de direction et support aux décisions stratégiques.',
    es: 'Presupuesto, análisis de variaciones, reporting directivo y soporte a decisiones estratégicas.',
    tr: 'Bütçeleme, varyans analizi, yönetim raporlaması ve stratejik karar desteği.',
    sq: 'Buxhetim, analizë e ndryshimeve, raportim menaxhues dhe mbështetje vendimesh strategjike.',
    zh: '预算编制、差异分析、管理报告和战略决策支持。',
    de: 'Budgetierung, Abweichungsanalyse, Management-Reporting und strategische Entscheidungsunterstützung.',
    ro: 'Bugetare, analiză de varianțe, raportare managerială și suport pentru decizii strategice.'
  },
  'services-business-plan-title': {
    it: 'Business Plan',
    en: 'Business Plan',
    fr: 'Plan d\'Affaires',
    es: 'Plan de Negocios',
    tr: 'İş Planı',
    sq: 'Plan Biznesi',
    zh: '商业计划',
    de: 'Geschäftsplan',
    ro: 'Plan de Afaceri'
  },
  'services-business-plan-desc': {
    it: 'Elaborazione di business plan per startup, accesso al credito e valutazione di investimenti.',
    en: 'Development of business plans for startups, access to credit and investment evaluation.',
    fr: 'Développement de plans d\'affaires pour startups, accès au crédit et évaluation d\'investissements.',
    es: 'Desarrollo de planes de negocio para startups, acceso al crédito y evaluación de inversiones.',
    tr: 'Startup\'lar için iş planı geliştirme, krediye erişim ve yatırım değerlendirmesi.',
    sq: 'Zhvillim planesh biznesi për startup, qasje në kredit dhe vlerësim investimesh.',
    zh: '为初创企业开发商业计划，信贷准入和投资评估。',
    de: 'Entwicklung von Geschäftsplänen für Startups, Kreditzugang und Investitionsbewertung.',
    ro: 'Dezvoltarea planurilor de afaceri pentru startup-uri, acces la credit și evaluarea investițiilor.'
  },
  'services-compliance-title': {
    it: 'Adempimenti Societari',
    en: 'Corporate Compliance',
    fr: 'Conformité Société',
    es: 'Cumplimiento Societario',
    tr: 'Kurumsal Uyumluluk',
    sq: 'Përputhshmëri Shoqërore',
    zh: '公司合规',
    de: 'Gesellschaftsrecht-Compliance',
    ro: 'Conformitate Corporativă'
  },
  'services-compliance-desc': {
    it: 'Gestione assemblee, verbali, depositi, comunicazioni obbligatorie e registro imprese.',
    en: 'Management of meetings, minutes, filings, mandatory communications and business registry.',
    fr: 'Gestion des assemblées, procès-verbaux, dépôts, communications obligatoires et registre des entreprises.',
    es: 'Gestión de asambleas, actas, depósitos, comunicaciones obligatorias y registro de empresas.',
    tr: 'Toplantılar, tutanaklar, dosyalamalar, zorunlu iletişimler ve işletme kayıt yönetimi.',
    sq: 'Menaxhim mbledhjesh, procesverbale, depozitimesh, komunikimesh të detyrueshme dhe regjistër biznesi.',
    zh: '管理会议、会议记录、备案、强制性通信和企业注册。',
    de: 'Verwaltung von Versammlungen, Protokollen, Einreichungen, Pflichtmitteilungen und Unternehmensregister.',
    ro: 'Gestionarea adunărilor, proceselor verbale, depunerilor, comunicărilor obligatorii și registrului companiilor.'
  },
  'services-declarations-title': {
    it: 'Dichiarazioni Fiscali',
    en: 'Tax Returns',
    fr: 'Déclarations Fiscales',
    es: 'Declaraciones Fiscales',
    tr: 'Vergi Beyannameleri',
    sq: 'Deklarata Tatimore',
    zh: '税务申报',
    de: 'Steuererklärungen',
    ro: 'Declarații Fiscale'
  },
  'services-declarations-desc': {
    it: "Modelli Unico, IRAP, IVA, 770, dichiarazioni dei sostituti d'imposta e assistenza fiscale.",
    en: 'Income tax, regional tax, VAT, withholding tax returns and tax assistance.',
    fr: 'Impôt sur le revenu, taxe régionale, TVA, déclarations d\'impôt à la source et assistance fiscale.',
    es: 'Impuesto sobre la renta, impuesto regional, IVA, declaraciones de impuesto retenido y asistencia fiscal.',
    tr: 'Gelir vergisi, bölgesel vergi, KDV, stopaj vergisi beyannameleri ve vergi yardımı.',
    sq: 'Tatim mbi të ardhurat, tatim rajonal, TVSH, deklarata të taksës mbajtëse dhe ndihmë tatimore.',
    zh: '所得税、地方税、增值税、代扣代缴税申报和税务协助。',
    de: 'Einkommensteuer, regionale Steuer, Mehrwertsteuer, Quellensteuer-Erklärungen und Steuerbetreuung.',
    ro: 'Impozit pe venit, impozit regional, TVA, declarații de impozit reținut la sursă și asistență fiscală.'
  },
  'services-succession-title': {
    it: "Passaggi Generazionali",
    en: 'Generational Transfers',
    fr: 'Transferts Générationnels',
    es: 'Transferencias Generacionales',
    tr: 'Nesil Transferleri',
    sq: 'Transferime Brezore',
    zh: '代际传承',
    de: 'Generationswechsel',
    ro: 'Transferuri Generaționale'
  },
  'services-succession-desc': {
    it: 'Pianificazione successoria, patti di famiglia, holding familiari e trasferimenti aziendali.',
    en: 'Succession planning, family agreements, family holdings and business transfers.',
    fr: 'Planification successorale, pactes familiaux, holdings familiaux et transferts d\'entreprises.',
    es: 'Planificación sucesoria, pactos familiares, holdings familiares y transferencias empresariales.',
    tr: 'Veraset planlaması, aile anlaşmaları, aile holdingleri ve iş transferleri.',
    sq: 'Planifikim trashëgimie, marrëveshje familjare, holding familjarë dhe transferime biznesi.',
    zh: '继承规划、家庭协议、家族控股和企业转让。',
    de: 'Nachfolgeplanung, Familienverträge, Familien-Holdings und Unternehmensübertragungen.',
    ro: 'Planificare succesorală, acorduri familiale, holdinguri familiale și transferuri de afaceri.'
  },
  'services-crisis-title': {
    it: "Crisi d'Impresa",
    en: 'Business Crisis',
    fr: 'Crise d\'Entreprise',
    es: 'Crisis Empresarial',
    tr: 'İşletme Krizi',
    sq: 'Krizë Biznesi',
    zh: '企业危机',
    de: 'Unternehmenskrise',
    ro: 'Criză Empresarială'
  },
  'services-crisis-desc': {
    it: 'Procedure concorsuali, composizione crisi, ristrutturazione del debito e continuità aziendale.',
    en: 'Insolvency procedures, crisis composition, debt restructuring and business continuity.',
    fr: 'Procédures d\'insolvabilité, composition de crise, restructuration de dette et continuité d\'entreprise.',
    es: 'Procedimientos de insolvencia, composición de crisis, reestructuración de deuda y continuidad empresarial.',
    tr: 'İflas prosedürleri, kriz kompozisyonu, borç yeniden yapılandırması ve iş sürekliliği.',
    sq: 'Procedura falimentimi, kompozim krize, ristrukturim borxhi dhe vazhdimësi biznesi.',
    zh: '破产程序、危机处理、债务重组和业务连续性。',
    de: 'Insolvenzverfahren, Krisenkomposition, Schuldensanierung und Geschäftskontinuität.',
    ro: 'Proceduri de insolvență, compunerea crizei, restructurarea datoriilor și continuitatea afacerii.'
  },
  'services-labor-title': {
    it: 'Consulenza del Lavoro',
    en: 'Labor Consulting',
    fr: 'Conseil du Travail',
    es: 'Consultoría Laboral',
    tr: 'İş Danışmanlığı',
    sq: 'Këshillim Pune',
    zh: '劳动咨询',
    de: 'Arbeitsberatung',
    ro: 'Consultanță Muncă'
  },
  'services-labor-desc': {
    it: 'Elaborazione buste paga mensili, Gestione pratiche INPS, Pratiche INAIL, Consulenza contrattualistica per assunzioni, CCNL applicabili e Consulenza su welfare aziendale.',
    en: 'Monthly payroll processing, INPS procedures management, INAIL procedures, Contractual consulting for hiring, applicable collective agreements and Corporate welfare consulting.',
    fr: 'Traitement mensuel de la paie, Gestion des procédures INPS, Procédures INAIL, Conseil contractuel pour les embauches, conventions collectives applicables et Conseil en welfare d\'entreprise.',
    es: 'Procesamiento de nómina mensual, Gestión de procedimientos INPS, Procedimientos INAIL, Consultoría contractual para contrataciones, convenios colectivos aplicables y Consultoría en welfare corporativo.',
    tr: 'Aylık bordro işleme, INPS prosedür yönetimi, INAIL prosedürleri, İşe alım için sözleşme danışmanlığı, uygulanabilir toplu sözleşmeler ve Kurumsal refah danışmanlığı.',
    sq: 'Përpunim pagash mujore, Menaxhim proceduresh INPS, Procedura INAIL, Këshillim kontraktual për punësime, marrëveshje kolektive aplikuese dhe Këshillim për mirëqenien e kompanisë.',
    zh: '月度工资处理、INPS程序管理、INAIL程序、招聘合同咨询、适用的集体协议和企业福利咨询。',
    de: 'Monatliche Gehaltsabrechnung, INPS-Verfahrensverwaltung, INAIL-Verfahren, Vertragsberatung für Einstellungen, anwendbare Tarifverträge und Unternehmenswohlfahrtsberatung.',
    ro: 'Procesare lunară a salariilor, Gestionare proceduri INPS, Proceduri INAIL, Consultanță contractuală pentru angajări, contracte colective aplicabile și Consultanță welfare corporativ.'
  },

  'services-special-0-title': {
    it: 'Startup e Innovazione',
    en: 'Startups and Innovation',
    fr: 'Startups et Innovation',
    es: 'Startups e Innovación',
    tr: 'Startup ve İnovasyon',
    sq: 'Startup dhe Inovacion',
    zh: '初创企业和创新',
    de: 'Startups und Innovation',
    ro: 'Startup-uri și Inovație'
  },
  'services-special-0-desc': {
    it: 'Costituzione startup innovative e supporto alla crescita con approccio moderno e dinamico.',
    en: 'Incorporation of innovative startups and growth support with a modern, dynamic approach.',
    fr: 'Constitution de startups innovantes et soutien à la croissance avec une approche moderne et dynamique.',
    es: 'Constitución de startups innovadoras y soporte al crecimiento con enfoque moderno y dinámico.',
    tr: 'Yenilikçi startup kuruluşu ve modern, dinamik yaklaşımla büyüme desteği.',
    sq: 'Themelim startup novatorë dhe mbështetje rritjeje me qasje moderne dhe dinamike.',
    zh: '成立创新初创企业并以现代动态方法支持增长。',
    de: 'Gründung innovativer Startups und Wachstumsunterstützung mit modernem, dynamischem Ansatz.',
    ro: 'Constituirea startup-urilor inovatoare și sprijinirea creșterii cu o abordare modernă și dinamică.'
  },
  'services-special-1-title': {
    it: 'Internazionalizzazione',
    en: 'Internationalization',
    fr: 'Internationalisation',
    es: 'Internacionalización',
    tr: 'Uluslararasılaştırma',
    sq: 'Ndërkombëtarizim',
    zh: '国际化',
    de: 'Internationalisierung',
    ro: 'Internaționalizare'
  },
  'services-special-1-desc': {
    it: 'Supporto per l\'espansione internazionale e consulenza per mercati esteri.',
    en: 'Support for international expansion and consulting for foreign markets.',
    fr: 'Support pour l\'expansion internationale et conseil pour les marchés étrangers.',
    es: 'Soporte para expansión internacional y consultoría para mercados extranjeros.',
    tr: 'Uluslararası genişleme desteği ve yabancı pazarlar için danışmanlık.',
    sq: 'Mbështetje për zgjerim ndërkombëtar dhe këshillim për tregje të huaja.',
    zh: '支持国际扩张和外国市场咨询。',
    de: 'Unterstützung für internationale Expansion und Beratung für Auslandsmärkte.',
    ro: 'Sprijin pentru expansiunea internațională și consultanță pentru piețele străine.'
  },
  'services-special-2-title': {
    it: 'Stabili Organizzazioni',
    en: 'Permanent Establishments',
    fr: 'Établissements Stables',
    es: 'Establecimientos Permanentes',
    tr: 'Daimi İşyerleri',
    sq: 'Organizata të Qëndrueshme',
    zh: '常设机构',
    de: 'Betriebsstätten',
    ro: 'Sedii Permanente'
  },
  'services-special-2-desc': {
    it: 'Analisi, costituzione e gestione fiscale di stabili organizzazioni estere, con supporto completo per adempimenti tributari, contabili e amministrativi in regime nazionale e internazionale.',
    en: 'Analysis, establishment and tax management of foreign permanent establishments, with complete support for tax, accounting and administrative compliance under national and international regulations.',
    fr: 'Analyse, constitution et gestion fiscale d\'établissements stables étrangers, avec support complet pour les obligations fiscales, comptables et administratives en régime national et international.',
    es: 'Análisis, constitución y gestión fiscal de establecimientos permanentes extranjeros, con soporte completo para obligaciones tributarias, contables y administrativas en régimen nacional e internacional.',
    tr: 'Yabancı daimi işyerlerinin analizi, kurulması ve vergi yönetimi, ulusal ve uluslararası mevzuat altında vergi, muhasebe ve idari uyumluluk için tam destek.',
    sq: 'Analizë, themelim dhe menaxhim fiskal i organizatave të qëndrueshme të huaja, me mbështetje të plotë për detyrimet tatimore, kontabël dhe administrative në regjim kombëtar dhe ndërkombëtar.',
    zh: '分析、设立和管理外国常设机构的税务，在国内和国际制度下提供税务、会计和行政合规的全面支持。',
    de: 'Analyse, Gründung und steuerliche Verwaltung ausländischer Betriebsstätten, mit vollständiger Unterstützung für steuerliche, buchhalterische und administrative Compliance unter nationalen und internationalen Vorschriften.',
    ro: 'Analiză, constituire și gestionare fiscală a sediilor permanente străine, cu suport complet pentru obligații fiscale, contabile și administrative în regim național și internațional.'
  },

  // FAQ items
  'faq-q1': {
    it: 'Quali servizi offrite per le startup?',
    en: 'What services do you offer for startups?',
    fr: 'Quels services offrez-vous pour les startups?',
    es: 'Qué servicios ofrecen para las startups?',
    tr: 'Startup\'lar için hangi hizmetleri sunuyorsunuz?',
    sq: 'Çfarë shërbimesh ofroni për startup-et?',
    zh: '您为初创企业提供哪些服务？',
    de: 'Welche Dienstleistungen bieten Sie für Startups an?',
    ro: 'Ce servicii oferiți pentru startup-uri?'
  },
  'faq-a1': {
    it: 'Offriamo un pacchetto completo per startup che include costituzione societaria, apertura partite IVA, consulenza fiscale iniziale, supporto per business plan e accompagnamento nelle prime fasi di crescita. Ci occupiamo anche degli aspetti normativi specifici per startup innovative.',
    en: 'We offer a complete package for startups including company incorporation, VAT registration, initial tax consulting, business plan support and guidance during the early growth stages. We also handle regulatory aspects specific to innovative startups.',
    fr: 'Nous offrons un package complet pour les startups incluant la constitution de société, l\'enregistrement TVA, le conseil fiscal initial, le support pour plan d\'affaires et l\'accompagnement durant les premières phases de croissance. Nous gérons aussi les aspects réglementaires spécifiques aux startups innovantes.',
    es: 'Ofrecemos un paquete completo para startups que incluye constitución societaria, registro de IVA, consultoría fiscal inicial, soporte para plan de negocios y acompañamiento en las primeras fases de crecimiento. También manejamos aspectos regulatorios específicos para startups innovadoras.',
    tr: 'Şirket kuruluşu, KDV kaydı, başlangıç vergi danışmanlığı, iş planı desteği ve erken büyüme aşamalarında rehberlik içeren startup\'lar için eksiksiz bir paket sunuyoruz. Ayrıca yenilikçi startup\'lara özel düzenleyici konuları da ele alıyoruz.',
    sq: 'Ofrojmë një paketë të plotë për startup-et që përfshin themelimin e kompanisë, regjistrimin e TVSH-së, konsulencë tatimore fillestare, mbështetje për plan biznesi dhe udhëzime gjatë fazave të hershme të rritjes. Gjithashtu trajtojmë aspektet rregullatore specifike për startup-et novatore.',
    zh: '我们為初創企業提供完整的服務包，包括公司註冊、增值稅登記、初始稅務諮詢、商業計劃支持以及早期成長階段的指導。我們還處理創新初創企業的特定監管方面。',
    de: 'Wir bieten ein umfassendes Paket für Startups an, das Unternehmensgründung, USt-Registrierung, erste Steuerberatung, Business-Plan-Unterstützung und Begleitung in den frühen Wachstumsphasen umfasst. Wir kümmern uns auch um regulatorische Aspekte speziell für innovative Startups.',
    ro: 'Oferim un pachet complet pentru startup-uri care include înființarea companiei, înregistrarea TVA, consultanță fiscală inițială, suport pentru planul de afaceri și îndrumarea în fazele timpurii de creștere. Ne ocupăm și de aspectele de reglementare specifice startup-urilor inovatoare.'
  },
  'faq-q2': {
    it: 'Come si svolge la prima consulenza?',
    en: 'How does the first consultation take place?',
    fr: 'Comment se déroule la première consultation?',
    es: 'Cómo se desarrolla la primera consulta?',
    tr: 'İlk danışmanlık nasıl gerçekleşir?',
    sq: 'Si zhvillohet konsulenca e parë?',
    zh: '首次咨询是如何进行的？',
    de: 'Wie läuft die erste Beratung ab?',
    ro: 'Cum se desfășoară prima consultație?'
  },
  'faq-a2': {
    it: "La prima consulenza è un incontro conoscitivo gratuito di circa un'ora dove analizziamo insieme le vostre esigenze, valutiamo la situazione attuale e definiamo un piano di intervento personalizzato. Potete prenotarla chiamandoci o compilando il form di contatto.",
    en: 'The first consultation is a free introductory meeting of about one hour where we analyze your needs, assess the current situation and define a personalized action plan. You can book it by calling us or filling out the contact form.',
    fr: 'La première consultation est une rencontre d\'introduction gratuite d\'environ une heure où nous analysons vos besoins, évaluons la situation actuelle et définissons un plan d\'action personnalisé. Vous pouvez la réserver en nous appelant ou en remplissant le formulaire de contact.',
    es: 'La primera consulta es una reunión introductoria gratuita de aproximadamente una hora donde analizamos sus necesidades, evaluamos la situación actual y definimos un plan de acción personalizado. Puede reservarla llamándonos o completando el formulario de contacto.',
    tr: 'İlk danışmanlık, ihtiyaçlarınızı analiz ettiğimiz, mevcut durumu değerlendirdiğimiz ve kişiselleştirilmiş bir eylem planı tanımladığımız yaklaşık bir saatlik ücretsiz tanışma toplantısıdır. Bizi arayarak veya iletişim formunu doldurarak rezervasyon yapabilirsiniz.',
    sq: 'Konsulenca e parë është një takim prezantues falas rreth një ore ku analizojmë nevojat tuaja, vlerësojmë situatën aktuale dhe përcaktojmë një plan veprimi të personalizuar. Mund ta rezervoni duke na telefonuar ose duke plotësuar formularin e kontaktit.',
    zh: '首次諮詢是一次約一小時的免費見面會，我們將分析您的需求，評估當前情況並制定個性化的行動計劃。您可以通過致電或填寫聯繫表格來預約。',
    de: 'Die erste Beratung ist ein kostenloses Kennenlerngespräch von etwa einer Stunde, bei dem wir Ihre Bedürfnisse analysieren, die aktuelle Situation bewerten und einen personalisierten Aktionsplan definieren. Sie können einen Termin vereinbaren, indem Sie uns anrufen oder das Kontaktformular ausfüllen.',
    ro: 'Prima consultație este o întâlnire introductivă gratuită de aproximativ o oră în care analizăm nevoile dumneavoastră, evaluăm situația actuală și definim un plan de acțiune personalizat. Puteți face o programare sunându-ne sau completând formularul de contact.'
  },
  'faq-q3': {
    it: 'Quali sono i vostri orari di apertura?',
    en: 'What are your opening hours?',
    fr: 'Quels sont vos horaires d\'ouverture?',
    es: 'Cuáles son sus horarios de apertura?',
    tr: 'Çalışma saatleriniz nedir?',
    sq: 'Cilat janë orët tuaja të hapjes?',
    zh: '您的营业时间是什么？',
    de: 'Was sind Ihre Öffnungszeiten?',
    ro: 'Care este programul dumneavoastră de lucru?'
  },
  'faq-a3': {
    it: 'Siamo aperti dal lunedì al venerdì dalle 8:30 alle 18:00. Il sabato siamo disponibili solo su appuntamento per casi urgenti. Offriamo anche consulenze online per chi non può raggiungerci fisicamente.',
    en: 'We are open Monday to Friday from 8:30 to 18:00. On Saturdays we are available by appointment for urgent cases. We also provide online consultations for those who cannot reach us in person.',
    fr: 'Nous sommes ouverts du lundi au vendredi de 8h30 à 18h00. Le samedi nous sommes disponibles sur rendez-vous pour les cas urgents. Nous proposons aussi des consultations en ligne pour ceux qui ne peuvent pas nous atteindre physiquement.',
    es: 'Estamos abiertos de lunes a viernes de 8:30 a 18:00. Los sábados estamos disponibles con cita previa para casos urgentes. También ofrecemos consultas en línea para quienes no pueden visitarnos físicamente.',
    tr: 'Pazartesi\'den Cuma\'ya 8:30-18:00 saatleri arasında açığız. Cumartesi günleri acil durumlar için randevu ile müsaitiz. Fiziksel olarak bize ulaşamayan kişiler için çevrimiçi danışmanlık da sağlıyoruz.',
    sq: 'Jemi të hapur nga e hëna në të premte nga 8:30 në 18:00. Të shtunave jemi të disponueshëm me takim për raste urgjente. Ofrojmë gjithashtu konsulenca online për ata që nuk mund të na arrijnë fizikisht.',
    zh: '我們週一至週五上午8:30至下午6:00營業。週六僅限緊急情況預約服務。我們也為無法親自前來的客戶提供在線諮詢。',
    de: 'Wir sind Montag bis Freitag von 8:30 bis 18:00 Uhr geöffnet. Samstags sind wir nach Vereinbarung für dringende Fälle verfügbar. Wir bieten auch Online-Beratungen für diejenigen an, die uns nicht persönlich besuchen können.',
    ro: 'Suntem deschiși de luni până vineri de la 8:30 la 18:00. Sâmbăta suntem disponibili cu programare pentru cazuri urgente. Oferim și consultanțe online pentru cei care nu ne pot vizita personal.'
  },
  'faq-q4': {
    it: 'Gestite anche clienti internazionali?',
    en: 'Do you also manage international clients?',
    fr: 'Gérez-vous aussi des clients internationaux?',
    es: 'También gestionan clientes internacionales?',
    tr: 'Uluslararası müşterilerle de çalışıyor musunuz?',
    sq: 'A menaxhoni edhe klientë ndërkombëtarë?',
    zh: '您也管理国际客户吗？',
    de: 'Betreuen Sie auch internationale Mandanten?',
    ro: 'Gestionați și clienți internaționali?'
  },
  'faq-a4': {
    it: 'Sì, abbiamo esperienza nella gestione di clienti internazionali e offriamo supporto multilingue (italiano, inglese, francese, spagnolo, turco, albanese, cinese). Gestiamo fiscalità internazionale, transfer pricing e compliance per aziende con operazioni cross-border.',
    en: 'Yes, we have experience managing international clients and offer multilingual support (Italian, English, French, Spanish, Turkish, Albanian, Chinese). We handle international taxation, transfer pricing and compliance for companies with cross-border operations.',
    fr: 'Oui, nous avons de l\'expérience dans la gestion de clients internationaux et offrons un support multilingue (italien, anglais, français, espagnol, turc, albanais, chinois). Nous gérons la fiscalité internationale, les prix de transfert et la conformité pour les entreprises avec opérations transfrontalières.',
    es: 'Sí, tenemos experiencia gestionando clientes internacionales y ofrecemos soporte multilingüe (italiano, inglés, francés, español, turco, albanés, chino). Manejamos fiscalidad internacional, precios de transferencia y cumplimiento para empresas con operaciones transfronterizas.',
    tr: 'Evet, uluslararası müşterileri yönetme konusunda deneyimimiz var ve çok dilli destek sunuyoruz (İtalyanca, İngilizce, Fransızca, İspanyolca, Türkçe, Arnavutça, Çince). Sınır ötesi operasyonları olan şirketler için uluslararası vergilendirme, transfer fiyatlandırması ve uyumluluk konularını ele alıyoruz.',
    sq: 'Po, kemi përvojë në menaxhimin e klientëve ndërkombëtarë dhe ofrojmë mbështetje shumëgjuhëshe (italisht, anglisht, frëngjisht, spanjisht, turqisht, shqip, kineze). Trajtojmë taksimin ndërkombëtar, çmimet e transferimit dhe përputhshmërinë për kompanitë me operacione ndërkufitare.',
    zh: '是的，我們在管理國際客戶方面經驗豐富，並提供多語言支持（意大利語、英語、法語、西班牙語、土耳其語、阿爾巴尼亞語、中文）。我們處理跨境業務公司的國際稅務、轉移定價和合規事務。',
    de: 'Ja, wir haben Erfahrung in der Betreuung internationaler Mandanten und bieten mehrsprachige Unterstützung (Italienisch, Englisch, Französisch, Spanisch, Türkisch, Albanisch, Chinesisch). Wir kümmern uns um internationale Besteuerung, Verrechnungspreise und Compliance für Unternehmen mit grenzüberschreitenden Geschäften.',
    ro: 'Da, avem experiență în gestionarea clienților internaționali și oferim suport multilingv (italiană, engleză, franceză, spaniolă, turcă, albaneză, chineză). Ne ocupăm de impozitarea internațională, prețurile de transfer și conformitatea pentru companiile cu operațiuni transfrontaliere.'
  },
  'faq-q5': {
    it: 'Quali tecnologie utilizzate?',
    en: 'Which technologies do you use?',
    fr: 'Quelles technologies utilisez-vous?',
    es: 'Qué tecnologías utilizan?',
    tr: 'Hangi teknolojileri kullanıyorsunuz?',
    sq: 'Çfarë teknologjish përdorni?',
    zh: '您使用哪些技术？',
    de: 'Welche Technologien verwenden Sie?',
    ro: 'Ce tehnologii utilizați?'
  },
  'faq-a5': {
    it: "Utilizziamo software all'avanguardia per contabilità, dichiarazioni fiscali e controllo di gestione. Offriamo anche portali clienti online per monitorare lo stato dei lavori e accedere ai documenti. La digitalizzazione ci permette efficienza e trasparenza nei rapporti con i clienti.",
    en: 'We use state-of-the-art software for accounting, tax returns and management control. We also offer online client portals to monitor work status and access documents. Digitization allows us to be efficient and transparent with clients.',
    fr: 'Nous utilisons des logiciels de pointe pour la comptabilité, les déclarations fiscales et le contrôle de gestion. Nous offrons aussi des portails clients en ligne pour surveiller l\'état des travaux et accéder aux documents. La numérisation nous permet d\'être efficaces et transparents avec les clients.',
    es: 'Utilizamos software de vanguardia para contabilidad, declaraciones fiscales y control de gestión. También ofrecemos portales de clientes en línea para monitorear el estado de los trabajos y acceder a documentos. La digitalización nos permite ser eficientes y transparentes con los clientes.',
    tr: 'Muhasebe, vergi beyannameleri ve yönetim kontrolü için son teknoloji yazılımlar kullanıyoruz. Ayrıca işlerin durumunu izlemek ve belgelere erişmek için çevrimiçi müşteri portalları da sunuyoruz. Dijitalleşme müşterilerle verimli ve şeffaf olmamızı sağlıyor.',
    sq: 'Përdorim software të avancuar për kontabilitet, deklarata tatimore dhe kontroll menaxhimi. Ofrojmë gjithashtu portale online klientësh për të monitoruar statusin e punëve dhe për të pasur qasje në dokumente. Dixhitalizimi na lejon të jemi efikas dhe transparent me klientët.',
    zh: '我們使用最先進的軟件進行會計、納稅申報和管理控制。我們還提供在線客戶門戶，用於監控工作狀態和訪問文檔。數字化使我們能夠與客戶保持高效和透明的關係。',
    de: 'Wir verwenden modernste Software für Buchhaltung, Steuererklärungen und Management-Kontrolle. Wir bieten auch Online-Kundenportale zur Überwachung des Arbeitsstatus und zum Zugriff auf Dokumente. Die Digitalisierung ermöglicht uns Effizienz und Transparenz im Umgang mit Mandanten.',
    ro: 'Folosim software de ultimă generație pentru contabilitate, declarații fiscale și control de gestiune. Oferim și portale online pentru clienți pentru a monitoriza starea lucrărilor și a accesa documentele. Digitalizarea ne permite să fim eficienți și transparenți cu clienții.'
  },
  'faq-q6': {
    it: 'Come vengono calcolati i vostri onorari?',
    en: 'How are your fees calculated?',
    fr: 'Comment sont calculés vos honoraires?',
    es: 'Cómo se calculan sus honorarios?',
    tr: 'Ücretleriniz nasıl hesaplanıyor?',
    sq: 'Si llogariten tarifat tuaja?',
    zh: '您的费用是如何计算的？',
    de: 'Wie werden Ihre Honorare berechnet?',
    ro: 'Cum sunt calculate onorariile dumneavoastră?'
  },
  'faq-a6': {
    it: 'I nostri onorari variano in base al tipo di servizio e alla complessità del lavoro. Offriamo preventivi trasparenti e personalizzati, con la possibilità di accordi a canone fisso per servizi continuativi. La prima consulenza è sempre gratuita.',
    en: 'Our fees vary according to the type of service and the complexity of the work. We provide transparent, personalized quotes with the possibility of fixed-fee agreements for ongoing services. The first consultation is always free.',
    fr: 'Nos honoraires varient selon le type de service et la complexité du travail. Nous fournissons des devis transparents et personnalisés, avec la possibilité d\'accords à tarif fixe pour les services continus. La première consultation est toujours gratuite.',
    es: 'Nuestros honorarios varían según el tipo de servicio y la complejidad del trabajo. Proporcionamos cotizaciones transparentes y personalizadas, con la posibilidad de acuerdos de tarifa fija para servicios continuos. La primera consulta siempre es gratuita.',
    tr: 'Ücretlerimiz hizmet türü ve işin karmaşıklığına göre değişir. Sürekli hizmetler için sabit ücret anlaşmaları olanağıyla şeffaf, kişiselleştirilmiş teklifler sunuyoruz. İlk danışmanlık her zaman ücretsizdir.',
    sq: 'Tarifat tona ndryshojnë sipas llojit të shërbimit dhe kompleksitetit të punës. Ofrojmë kuota transparente dhe të personalizuara, me mundësinë e marrëveshjeve me tarif fiks për shërbimet e vazhdueshme. Konsulenca e parë është gjithmonë falas.',
    zh: '我們的費用根據服務類型和工作複雜性而變化。我們提供透明的個性化報價，對於持續性服務可簽訂固定費用協議。首次諮詢始終免費。',
    de: 'Unsere Honorare variieren je nach Art der Dienstleistung und Komplexität der Arbeit. Wir bieten transparente, personalisierte Angebote mit der Möglichkeit von Pauschalvereinbarungen für laufende Dienstleistungen. Die erste Beratung ist immer kostenlos.',
    ro: 'Onorariile noastre variază în funcție de tipul serviciului și complexitatea lucrării. Oferim oferte transparente și personalizate, cu posibilitatea de acorduri cu tarif fix pentru servicii continue. Prima consultație este întotdeauna gratuită.'
  },

  // Contact extras
  'contact-location': { it: 'Sede Operativa', en: 'Operating Headquarters', fr: 'Siège Opérationnel', es: 'Sede Operativa', tr: 'Operasyon Merkezi', sq: 'Selia Operative', zh: '运营总部', de: 'Betriebssitz', ro: 'Sediu operativ' },
  'contact-phone': { it: 'Telefono', en: 'Phone', fr: 'Téléphone', es: 'Teléfono', tr: 'Telefon', sq: 'Telefoni', zh: '电话', de: 'Telefon', ro: 'Telefon' },
  'contact-email-label': { it: 'Email', en: 'Email', fr: 'E-mail', es: 'Correo electrónico', tr: 'E-posta', sq: 'Email', zh: '电子邮件', de: 'E-Mail', ro: 'Email' },
  'contact-hours-title': { it: 'Orari di Apertura', en: 'Opening Hours', fr: 'Horaires d’ouverture', es: 'Horario de apertura', tr: 'Açılış Saatleri', sq: 'Orari i hapjes', zh: '营业时间', de: 'Öffnungszeiten', ro: 'Program de lucru' },
  'contact-weekdays-label': { it: 'Lunedì - Venerdì', en: 'Monday - Friday', fr: 'Lundi - Vendredi', es: 'Lunes - Viernes', tr: 'Pazartesi - Cuma', sq: 'E hënë - E premte', zh: '周一至周五', de: 'Montag - Freitag', ro: 'Luni - Vineri' },
  'contact-saturday-label': { it: 'Sabato', en: 'Saturday', fr: 'Samedi', es: 'Sábado', tr: 'Cumartesi', sq: 'E shtunë', zh: '周六', de: 'Samstag', ro: 'Sâmbătă' },
  'contact-saturday-note': { it: 'Su appuntamento', en: 'By appointment', fr: 'Sur rendez-vous', es: 'Con cita previa', tr: 'Randevu ile', sq: 'Me takim', zh: '需预约', de: 'Nach Vereinbarung', ro: 'Cu programare' },
  'contact-map-title': { it: 'Come Raggiungerci', en: 'How to reach us', fr: 'Comment nous atteindre', es: 'Cómo llegar', tr: 'Bize nasıl ulaşılır', sq: 'Si të na arrini', zh: '如何到达我们', de: 'So erreichen Sie uns', ro: 'Cum ajungeți la noi' },
  'contact-map-desc': { it: 'Siamo situati nel centro di Modena, facilmente raggiungibili', en: 'We are located in the center of Modena, easily reachable', fr: 'Nous sommes situés au centre de Modène, facilement accessibles', es: 'Estamos en el centro de Módena, de fácil acceso', tr: 'Modena merkezindeyiz, kolay ulaşılabilir', sq: 'Ndodhemi në qendër të Modenës, lehtësisht të arritshëm', zh: '我们位于摩德纳市中心，交通便利', de: 'Wir befinden uns im Zentrum von Modena und sind gut erreichbar', ro: 'Suntem situați în centrul Modenei, ușor accesibili' },
  'contact-map-button': { it: 'Apri in Google Maps', en: 'Open in Google Maps', fr: 'Ouvrir dans Google Maps', es: 'Abrir en Google Maps', tr: "Google Haritalar'da aç", sq: 'Hap në Google Maps', zh: '在 Google 地图中打开', de: 'In Google Maps öffnen', ro: 'Deschide în Google Maps' },
  'contact-form-name': { it: 'Nome e Cognome *', en: 'Full Name *', fr: 'Nom et Prénom *', es: 'Nombre y Apellidos *', tr: 'Ad Soyad *', sq: 'Emri dhe Mbiemri *', zh: '姓名 *' },
  'contact-form-email': { it: 'Email *', en: 'Email *', fr: 'E-mail *', es: 'Correo electrónico *', tr: 'E-posta *', sq: 'Email *', zh: '电子邮件 *' },
  'contact-form-phone': { it: 'Telefono', en: 'Phone', fr: 'Téléphone', es: 'Teléfono', tr: 'Telefon', sq: 'Telefoni', zh: '电话' },
  'contact-form-company': { it: 'Azienda', en: 'Company', fr: 'Entreprise', es: 'Empresa', tr: 'Şirket', sq: 'Kompania', zh: '公司' },
  'contact-form-message': { it: 'Messaggio *', en: 'Message *', fr: 'Message *', es: 'Mensaje *', tr: 'Mesaj *', sq: 'Mesazh *', zh: '留言 *' },
  'contact-placeholder-name': { it: 'Il tuo nome completo', en: 'Your full name', fr: 'Votre nom complet', es: 'Tu nombre completo', tr: 'Tam adınız', sq: 'Emri juaj i plotë', zh: '您的全名' },
  'contact-placeholder-email': { it: 'la-tua-email@example.com', en: 'your-email@example.com', fr: 'votre-email@example.com', es: 'tu-correo@example.com', tr: 'e-posta@example.com', sq: 'email-i-juaj@example.com', zh: '您的邮箱@example.com' },
  'contact-placeholder-phone': { it: '+39 123 456 7890', en: '+39 123 456 7890', fr: '+39 123 456 7890', es: '+39 123 456 7890', tr: '+39 123 456 7890', sq: '+39 123 456 7890', zh: '+39 123 456 7890' },
  'contact-placeholder-company': { it: 'Nome della tua azienda', en: 'Your company name', fr: 'Nom de votre entreprise', es: 'Nombre de tu empresa', tr: 'Şirket adınız', sq: 'Emri i kompanisë suaj', zh: '您的公司名称' },
  'contact-placeholder-message': { it: 'Descrivi brevemente le tue esigenze o domande...', en: 'Briefly describe your needs or questions...', fr: 'Décrivez brièvement vos besoins ou questions...', es: 'Describe brevemente tus necesidades o preguntas...', tr: 'İhtiyaçlarınızı veya sorularınızı kısaca açıklayın...', sq: 'Përshkruani shkurt nevojat ose pyetjet tuaja...', zh: '简要描述您的需求或问题...' },
  'contact-privacy-label': { it: "Ho letto e accetto l' informativa sulla privacy", en: 'I have read and accept the privacy policy', fr: "J'ai lu et j'accepte la politique de confidentialité", es: 'He leído y acepto la política de privacidad', tr: 'Gizlilik politikasını okudum ve kabul ediyorum', sq: 'Kam lexuar dhe pranoj politikën e privatësisë', zh: '我已阅读并接受隐私政策' },
  'contact-privacy-link': { it: 'informativa sulla privacy', en: 'privacy policy', fr: 'politique de confidentialité', es: 'política de privacidad', tr: 'gizlilik politikası', sq: 'politika e privatësisë', zh: '隐私政策' },
  'contact-sending': { it: 'Invio in corso...', en: 'Sending...', fr: 'Envoi en cours...', es: 'Enviando...', tr: 'Gönderiliyor...', sq: 'Duke dërguar...', zh: '发送中...', de: 'Wird gesendet...', ro: 'Se trimite...' },
  'contact-submit': { it: 'Invia Richiesta', en: 'Send Request', fr: 'Envoyer la demande', es: 'Enviar solicitud', tr: 'Talebi Gönder', sq: 'Dërgo Kërkesën', zh: '发送请求', de: 'Anfrage senden', ro: 'Trimite cererea' },
  'contact-toast-title': { it: 'Richiesta inviata!', en: 'Request sent!', fr: 'Demande envoyée !', es: '¡Solicitud enviada!', tr: 'Talep gönderildi!', sq: 'Kërkesa u dërgua!', zh: '请求已发送！', de: 'Anfrage gesendet!', ro: 'Cerere trimisă!' },
  'contact-toast-desc': { it: 'Ti ricontatteremo a breve per fornirti maggiori informazioni.', en: 'We will contact you shortly with more information.', fr: "Nous vous contacterons bientôt pour plus d'informations.", es: 'Nos pondremos en contacto contigo en breve con más información.', tr: 'Kısa süre içinde daha fazla bilgiyle sizinle iletişime geçeceğiz.', sq: 'Do t’ju kontaktojmë së shpejti me më shumë informacione.', zh: '我们会尽快与您联系，提供更多信息。', de: 'Wir werden Sie in Kürze mit weiteren Informationen kontaktieren.', ro: 'Vă vom contacta în curând cu mai multe informații.' },
  // Contact addresses
  'contact-address-line1': { it: 'Via Emilia Centro, 75', en: 'Via Emilia Centro, 75', fr: 'Via Emilia Centro, 75', es: 'Via Emilia Centro, 75', tr: 'Via Emilia Centro, 75', sq: 'Via Emilia Centro, 75', zh: 'Via Emilia Centro, 75', de: 'Via Emilia Centro, 75', ro: 'Via Emilia Centro, 75' },
  'contact-address-line2': { it: '41121 Modena (MO)', en: '41121 Modena (MO)', fr: '41121 Modène (MO)', es: '41121 Módena (MO)', tr: '41121 Modena (MO)', sq: '41121 Modena (MO)', zh: '41121 摩德纳 (MO)', de: '41121 Modena (MO)', ro: '41121 Modena (MO)' },
  'contact-address-country': { it: 'Italia', en: 'Italy', fr: 'Italie', es: 'Italia', tr: 'İtalya', sq: 'Itali', zh: '意大利', de: 'Italien', ro: 'Italia' },
  'contact-map-address': { it: 'Via Emilia Centro, 75 - Modena', en: 'Via Emilia Centro, 75 - Modena', fr: 'Via Emilia Centro, 75 - Modène', es: 'Via Emilia Centro, 75 - Módena', tr: 'Via Emilia Centro, 75 - Modena', sq: 'Via Emilia Centro, 75 - Modena', zh: 'Via Emilia Centro, 75 - 摩德纳', de: 'Via Emilia Centro, 75 - Modena', ro: 'Via Emilia Centro, 75 - Modena' },

  // Footer extras
  'footer-address-line1': { it: 'Via Emilia Centro, 75', en: 'Via Emilia Centro, 75', fr: 'Via Emilia Centro, 75', es: 'Via Emilia Centro, 75', tr: 'Via Emilia Centro, 75', sq: 'Via Emilia Centro, 75', zh: 'Via Emilia Centro, 75', de: 'Via Emilia Centro, 75', ro: 'Via Emilia Centro, 75' },
  'footer-address-line2': { it: '41121 Modena (MO)', en: '41121 Modena (MO)', fr: '41121 Modène (MO)', es: '41121 Módena (MO)', tr: '41121 Modena (MO)', sq: '41121 Modena (MO)', zh: '41121 摩德纳 (MO)', de: '41121 Modena (MO)', ro: '41121 Modena (MO)' },
  'footer-address-country': { it: 'Italia', en: 'Italy', fr: 'Italie', es: 'Italia', tr: 'İtalya', sq: 'Itali', zh: '意大利', de: 'Italien', ro: 'Italia' },
  'footer-vat-label': { it: 'P.IVA', en: 'VAT No.', fr: 'N° TVA', es: 'N.º IVA', tr: 'KDV No', sq: 'NIPT', zh: '增值税号', de: 'USt-IdNr.', ro: 'CIF' },
  'footer-register': { it: 'Albo Dottori Commercialisti di Modena', en: 'Register of Chartered Accountants of Modena', fr: 'Ordre des experts-comptables de Modène', es: 'Registro de contadores de Módena', tr: 'Modena Yeminli Mali Müşavirler Sicili', sq: 'Regjistri i Kontabilistëve të Çertifikuar të Modenës', zh: '摩德纳注册会计师名录', de: 'Register der Wirtschaftsprüfer von Modena', ro: 'Registrul experților contabili din Modena' },

  // About extras
  'about-image-alt': { it: 'Team professionale in riunione', en: 'Professional team in meeting', fr: 'Équipe professionnelle en réunion', es: 'Equipo profesional en reunión', tr: 'Toplantıda profesyonel ekip', sq: 'Ekip profesional në mbledhje', zh: '专业团队会议', de: 'Professionelles Team in Besprechung', ro: 'Echipă profesională în ședință' },
  'about-founded-label': { it: 'Anno di fondazione', en: 'Year of foundation', fr: 'Année de fondation', es: 'Año de fundación', tr: 'Kuruluş yılı', sq: 'Viti i themelimit', zh: '成立年份', de: 'Gründungsjahr', ro: 'Anul fondării' },
  'about-clients-label': { it: 'Clienti assistiti', en: 'Clients assisted', fr: 'Clients assistés', es: 'Clientes atendidos', tr: 'Desteklenen müşteriler', sq: 'Klientë të asistuar', zh: '服务客户', de: 'Betreute Kunden', ro: 'Clienți asistați' },

  // Footer links
  'footer-link-tax-consulting': { it: 'Consulenza Fiscale', en: 'Tax Consulting', fr: 'Conseil Fiscal', es: 'Consultoría Fiscal', tr: 'Vergi Danışmanlığı', sq: 'Këshillim Tatimor', zh: '税务咨询', de: 'Steuerberatung', ro: 'Consultanță fiscală' },
  'footer-link-corporate-consulting': { it: 'Consulenza Societaria', en: 'Corporate Consulting', fr: 'Conseil en Société', es: 'Consultoría Societaria', tr: 'Kurumsal Danışmanlık', sq: 'Këshillim Shoqëror', zh: '公司咨询', de: 'Gesellschaftsberatung', ro: 'Consultanță corporativă' },
  'footer-link-accounting': { it: 'Contabilità e Bilanci', en: 'Accounting and Financial Statements', fr: 'Comptabilité et États Financiers', es: 'Contabilidad y Estados Financieros', tr: 'Muhasebe ve Mali Tablolar', sq: 'Kontabilitet dhe Bilance', zh: '会计与财务报表', de: 'Buchhaltung und Jahresabschluss', ro: 'Contabilitate și bilanțuri' },
  'footer-link-audit': { it: 'Revisione Legale', en: 'Statutory Audit', fr: 'Audit Légal', es: 'Auditoría Legal', tr: 'Yasal Denetim', sq: 'Auditim Ligjor', zh: '法定审计', de: 'Gesetzliche Prüfung', ro: 'Audit legal' },
  'footer-link-management-control': { it: 'Controllo di Gestione', en: 'Management Control', fr: 'Contrôle de Gestion', es: 'Control de Gestión', tr: 'Yönetim Kontrolü', sq: 'Kontroll Menaxhimi', zh: '管理控制', de: 'Management-Kontrolle', ro: 'Control de gestiune' },
  'footer-link-business-plan': { it: 'Business Plan', en: 'Business Plan', fr: 'Plan d\'Affaires', es: 'Plan de Negocios', tr: 'İş Planı', sq: 'Plan Biznesi', zh: '商业计划', de: 'Geschäftsplan', ro: 'Plan de afaceri' },
  'footer-link-history': { it: 'La Nostra Storia', en: 'Our History', fr: 'Notre Histoire', es: 'Nuestra Historia', tr: 'Tarihimiz', sq: 'Historia Jonë', zh: '我们的历史', de: 'Unsere Geschichte', ro: 'Istoria noastră' },
  'footer-link-team': { it: 'Il Team', en: 'The Team', fr: 'L\'Équipe', es: 'El Equipo', tr: 'Ekip', sq: 'Ekipi', zh: '团队', de: 'Das Team', ro: 'Echipa' },
  'footer-link-contact': { it: 'Contatti', en: 'Contact', fr: 'Contact', es: 'Contacto', tr: 'İletişim', sq: 'Kontakti', zh: '联系', de: 'Kontakt', ro: 'Contact' },
  'footer-link-privacy': { it: 'Privacy Policy', en: 'Privacy Policy', fr: 'Politique de Confidentialité', es: 'Política de Privacidad', tr: 'Gizlilik Politikası', sq: 'Politika e Privatësisë', zh: '隐私政策', de: 'Datenschutzrichtlinie', ro: 'Politica de confidențialitate' },
  'footer-link-cookie': { it: 'Cookie Policy', en: 'Cookie Policy', fr: 'Politique des Cookies', es: 'Política de Cookies', tr: 'Çerez Politikası', sq: 'Politika e Cookie-ve', zh: 'Cookie政策', de: 'Cookie-Richtlinie', ro: 'Politica de cookie-uri' },
  'footer-follow-us': { it: 'Seguici', en: 'Follow us', fr: 'Suivez-nous', es: 'Síguenos', tr: 'Bizi takip edin', sq: 'Na ndiqni', zh: '关注我们', de: 'Folgen Sie uns', ro: 'Urmărește-ne' },
  'footer-link-faq': { it: 'FAQ', en: 'FAQ', fr: 'FAQ', es: 'Preguntas Frecuentes', tr: 'SSS', sq: 'Pyetje të Shpeshta', zh: '常见问题', de: 'FAQ', ro: 'Întrebări frecvente' },

  // Privacy page translations
  'privacy-title': { it: 'Informativa sulla Privacy', en: 'Privacy Policy', fr: 'Politique de Confidentialité', es: 'Política de Privacidad', tr: 'Gizlilik Politikası', sq: 'Politika e Privatësisë', zh: '隐私政策', de: 'Datenschutzrichtlinie', ro: 'Politica de confidențialitate' },
  'privacy-subtitle': { it: 'Ai sensi del Regolamento UE 2016/679 (GDPR)', en: 'Under EU Regulation 2016/679 (GDPR)', fr: 'Selon le Règlement UE 2016/679 (RGPD)', es: 'Bajo el Reglamento UE 2016/679 (RGPD)', tr: 'AB Yönetmeliği 2016/679 (GDPR) kapsamında', sq: 'Sipas Rregullores së BE-së 2016/679 (GDPR)', zh: '根据欧盟法规 2016/679 (GDPR)', de: 'Gemäß EU-Verordnung 2016/679 (DSGVO)', ro: 'În conformitate cu Regulamentul UE 2016/679 (GDPR)' },
  'privacy-back-home': { it: 'Torna alla Home', en: 'Back to Home', fr: 'Retour à l\'Accueil', es: 'Volver al Inicio', tr: 'Ana Sayfaya Dön', sq: 'Kthehu në Fillim', zh: '返回首页', de: 'Zurück zur Startseite', ro: 'Înapoi la Pagina Principală' },
  'privacy-last-update': { it: 'Ultimo aggiornamento:', en: 'Last updated:', fr: 'Dernière mise à jour:', es: 'Última actualización:', tr: 'Son güncelleme:', sq: 'Përditësimi i fundit:', zh: '最后更新：', de: 'Letzte Aktualisierung:', ro: 'Ultima actualizare:' },
  'privacy-august': { it: 'agosto', en: 'August', fr: 'août', es: 'agosto', tr: 'Ağustos', sq: 'gusht', zh: '八月', de: 'August', ro: 'august' },
  'privacy-gdpr-compliance': { it: 'In conformità alle normative europee sulla protezione dei dati', en: 'In compliance with European data protection regulations', fr: 'En conformité avec les réglementations européennes sur la protection des données', es: 'En cumplimiento de las regulaciones europeas de protección de datos', tr: 'Avrupa veri koruma yönetmeliklerine uygun olarak', sq: 'Në përputhje me rregulloret evropiane për mbrojtjen e të dhënave', zh: '符合欧洲数据保护法规', de: 'In Übereinstimmung mit den europäischen Datenschutzbestimmungen', ro: 'În conformitate cu reglementările europene privind protecția datelor' },
  'privacy-data-controller': { it: 'Titolare del Trattamento', en: 'Data Controller', fr: 'Responsable du Traitement', es: 'Responsable del Tratamiento', tr: 'Veri Sorumlusu', sq: 'Përgjegjësi i Trajtimit', zh: '数据控制者', de: 'Verantwortlicher', ro: 'Operator de date' },
  'privacy-section-1-title': { it: 'Tipologie di Dati Trattati', en: 'Types of Data Processed', fr: 'Types de Données Traitées', es: 'Tipos de Datos Procesados', tr: 'İşlenen Veri Türleri', sq: 'Llojet e të Dhënave të Përpunuara', zh: '处理的数据类型', de: 'Arten der verarbeiteten Daten', ro: 'Tipurile de date prelucrate' },
  'privacy-section-1-content': { it: 'Trattiamo dati anagrafici, di contatto, contrattuali e fiscali necessari per l\'erogazione dei servizi professionali, dati di navigazione e comunicazioni inviate tramite i nostri moduli di contatto.', en: 'We process personal, contact, contractual and tax data necessary for the provision of professional services, navigation data and communications sent through our contact forms.', fr: 'Nous traitons les données personnelles, de contact, contractuelles et fiscales nécessaires à la fourniture de services professionnels, les données de navigation et les communications envoyées via nos formulaires de contact.', es: 'Procesamos datos personales, de contacto, contractuales y fiscales necesarios para la prestación de servicios profesionales, datos de navegación y comunicaciones enviadas a través de nuestros formularios de contacto.', tr: 'Profesyonel hizmetlerin sağlanması için gerekli kişisel, iletişim, sözleşmeli ve vergi verilerini, navigasyon verilerini ve iletişim formlarımız aracılığıyla gönderilen iletişimleri işleriz.', sq: 'Ne përpunojmë të dhëna personale, kontakti, kontraktuale dhe fiskale të nevojshme për ofrimin e shërbimeve profesionale, të dhëna navigimi dhe komunikime të dërguara përmes formularëve tanë të kontaktit.', zh: '我们处理提供专业服务所需的个人、联系、合同和税务数据，导航数据以及通过我们的联系表单发送的通信。' },
  'privacy-section-2-title': { it: 'Finalità e Basi Giuridiche', en: 'Purposes and Legal Bases', fr: 'Finalités et Bases Juridiques', es: 'Finalidades y Bases Legales', tr: 'Amaçlar ve Yasal Dayanaklar', sq: 'Qëllimet dhe Bazat Ligjore', zh: '目的和法律依据', de: 'Zwecke und Rechtsgrundlagen', ro: 'Scopuri și Baze Legale' },
  'privacy-section-2-content': { it: 'I dati vengono trattati per rispondere alle richieste di informazioni, eseguire incarichi professionali, adempiere agli obblighi di legge, tutelare i nostri diritti e inviare comunicazioni informative ai clienti esistenti.', en: 'Data is processed to respond to information requests, execute professional assignments, comply with legal obligations, protect our rights and send informational communications to existing clients.', fr: 'Les données sont traitées pour répondre aux demandes d\'information, exécuter des missions professionnelles, respecter les obligations légales, protéger nos droits et envoyer des communications informatives aux clients existants.', es: 'Los datos se procesan para responder a solicitudes de información, ejecutar asignaciones profesionales, cumplir con obligaciones legales, proteger nuestros derechos y enviar comunicaciones informativas a clientes existentes.', tr: 'Veriler bilgi taleplerine yanıt vermek, profesyonel görevleri yerine getirmek, yasal yükümlülükleri yerine getirmek, haklarımızı korumak ve mevcut müşterilere bilgilendirme iletişimi göndermek için işlenir.', sq: 'Të dhënat përpunohen për t\'iu përgjigjur kërkesave për informacion, për të ekzekutuar detyra profesionale, për të përmbushur detyrimet ligjore, për të mbrojtur të drejtat tona dhe për të dërguar komunikime informative te klientët ekzistues.', zh: '数据处理是为了回应信息请求、执行专业任务、遵守法律义务、保护我们的权利以及向现有客户发送信息通信。' },
  'privacy-section-3-title': { it: 'Comunicazione e Destinatari', en: 'Communication and Recipients', fr: 'Communication et Destinataires', es: 'Comunicación y Destinatarios', tr: 'İletişim ve Alıcılar', sq: 'Komunikimi dhe Marrësit', zh: '通信和接收者', de: 'Kommunikation und Empfänger', ro: 'Comunicare și Destinatari' },
  'privacy-section-3-content': { it: 'I dati possono essere comunicati a fornitori IT, consulenti, società di servizi e autorità competenti. Manteniamo un elenco aggiornato dei responsabili del trattamento disponibile su richiesta.', en: 'Data may be communicated to IT providers, consultants, service companies and competent authorities. We maintain an updated list of data processors available upon request.', fr: 'Les données peuvent être communiquées aux fournisseurs informatiques, consultants, sociétés de services et autorités compétentes. Nous maintenons une liste actualisée des responsables du traitement disponible sur demande.', es: 'Los datos pueden comunicarse a proveedores de TI, consultores, empresas de servicios y autoridades competentes. Mantenemos una lista actualizada de los responsables del tratamiento disponible bajo solicitud.', tr: 'Veriler BT sağlayıcıları, danışmanlar, hizmet şirketleri ve yetkili otoritelere iletilebilir. Talep üzerine mevcut olan veri işleyicilerin güncellenmiş bir listesini tutuyoruz.', sq: 'Të dhënat mund të komunikohen me ofruesit e IT-së, konsulentët, kompanitë e shërbimeve dhe autoritetet kompetente. Ne mbajmë një listë të përditësuar të përpunuesve të të dhënave të disponueshme me kërkesë.', zh: '数据可能会传达给IT提供商、顾问、服务公司和主管部门。我们保持一份应要求提供的数据处理者的更新列表。' },
  'privacy-section-4-title': { it: 'Tempi di Conservazione', en: 'Retention Periods', fr: 'Durées de Conservation', es: 'Períodos de Retención', tr: 'Saklama Süreleri', sq: 'Afatet e Ruajtjes', zh: '保留期限', de: 'Aufbewahrungsfristen', ro: 'Perioade de păstrare' },
  'privacy-section-4-content': { it: 'I dati vengono conservati per i tempi necessari alle finalità del trattamento: 12 mesi per le richieste di contatto, fino a 10 anni per la documentazione amministrativo-contabile secondo gli obblighi di legge.', en: 'Data is retained for the time necessary for processing purposes: 12 months for contact requests, up to 10 years for administrative-accounting documentation according to legal obligations.', fr: 'Les données sont conservées pendant la durée nécessaire aux finalités du traitement : 12 mois pour les demandes de contact, jusqu\'à 10 ans pour la documentation administrativo-comptable selon les obligations légales.', es: 'Los datos se conservan durante el tiempo necesario para los fines del procesamiento: 12 meses para solicitudes de contacto, hasta 10 años para documentación administrativo-contable según las obligaciones legales.', tr: 'Veriler işleme amaçları için gerekli süre boyunca saklanır: iletişim talepleri için 12 ay, yasal yükümlülüklere göre idari-muhasebe belgeleri için 10 yıla kadar.', sq: 'Të dhënat ruhen për kohën e nevojshme për qëllimet e përpunimit: 12 muaj për kërkesat e kontaktit, deri në 10 vjet për dokumentacionin administrativ-kontabël sipas detyrimeve ligjore.', zh: '数据保留处理目的所需的时间：联系请求12个月，根据法律义务行政会计文件最多10年。' },
  'privacy-your-rights': { it: 'I Tuoi Diritti', en: 'Your Rights', fr: 'Vos Droits', es: 'Tus Derechos', tr: 'Haklarınız', sq: 'Të drejtat tuaja', zh: '您的权利', de: 'Ihre Rechte', ro: 'Drepturile Dumneavoastră' },
  'privacy-rights-description': { it: 'Hai il diritto di accedere, rettificare, cancellare, limitare il trattamento dei tuoi dati e di opporti al loro utilizzo. Puoi anche richiedere la portabilità dei dati e revocare il consenso in qualsiasi momento.', en: 'You have the right to access, rectify, delete, limit the processing of your data and object to their use. You can also request data portability and withdraw consent at any time.', fr: 'Vous avez le droit d\'accéder, rectifier, supprimer, limiter le traitement de vos données et de vous opposer à leur utilisation. Vous pouvez également demander la portabilité des données et retirer votre consentement à tout moment.', es: 'Tienes derecho a acceder, rectificar, eliminar, limitar el procesamiento de tus datos y oponerte a su uso. También puedes solicitar la portabilidad de datos y retirar el consentimiento en cualquier momento.', tr: 'Verilerinize erişme, düzeltme, silme, işlemeyi sınırlama ve kullanımlarına itiraz etme hakkınız vardır. Ayrıca veri taşınabilirliği talep edebilir ve herhangi bir zamanda rızanızı geri çekebilirsiniz.', sq: 'Keni të drejtën të aksesoni, korrigjoni, fshini, kufizoni përpunimin e të dhënave tuaja dhe të kundërshtoni përdorimin e tyre. Gjithashtu mund të kërkoni portabilitetin e të dhënave dhe të tërheqni pëlqimin në çdo kohë.', zh: '您有权访问、纠正、删除、限制数据处理并反对其使用。您还可以请求数据可携性并随时撤回同意。' },
  'privacy-contact-us': { it: 'Contattaci per esercitare i tuoi diritti', en: 'Contact us to exercise your rights', fr: 'Contactez-nous pour exercer vos droits', es: 'Contáctanos para ejercer tus derechos', tr: 'Haklarınızı kullanmak için bizimle iletişime geçin', sq: 'Na kontaktoni për të ushtruar të drejtat tuaja', zh: '联系我们行使您的权利', de: 'Kontaktieren Sie uns, um Ihre Rechte auszuüben', ro: 'Contactați-ne pentru a vă exercita drepturile' },

  // Cookie page translations  
  'cookie-title': { it: 'Cookie Policy', en: 'Cookie Policy', fr: 'Politique des Cookies', es: 'Política de Cookies', tr: 'Çerez Politikası', sq: 'Politika e Cookie-ve', zh: 'Cookie政策', de: 'Cookie-Richtlinie', ro: 'Politica de cookie-uri' },
  'cookie-subtitle': { it: 'Informazioni sull\'uso di cookie e tecnologie similari', en: 'Information on the use of cookies and similar technologies', fr: 'Informations sur l\'utilisation des cookies et technologies similaires', es: 'Información sobre el uso de cookies y tecnologías similares', tr: 'Çerezler ve benzer teknolojilerin kullanımı hakkında bilgi', sq: 'Informacion për përdorimin e cookie-ve dhe teknologjive të ngjashme', zh: '关于使用Cookie和类似技术的信息', de: 'Informationen zur Verwendung von Cookies und ähnlichen Technologien', ro: 'Informații despre utilizarea cookie-urilor și a tehnologiilor similare' },
  'cookie-back-home': { it: 'Torna alla Home', en: 'Back to Home', fr: 'Retour à l\'Accueil', es: 'Volver al Inicio', tr: 'Ana Sayfaya Dön', sq: 'Kthehu në Fillim', zh: '返回首页', de: 'Zurück zur Startseite', ro: 'Înapoi la Pagina Principală' },
  'cookie-what-are': { it: 'Cosa sono i Cookie', en: 'What are Cookies', fr: 'Que sont les Cookies', es: 'Qué son las Cookies', tr: 'Çerezler Nedir', sq: 'Çfarë janë Cookie-t', zh: '什么是Cookie', de: 'Was sind Cookies', ro: 'Ce sunt Cookie-urile' },
  'cookie-what-are-desc': { it: 'I cookie sono piccoli file di testo che i siti web inviano al tuo dispositivo per migliorare l\'esperienza di navigazione, analizzare il traffico e personalizzare i contenuti.', en: 'Cookies are small text files that websites send to your device to improve browsing experience, analyze traffic and personalize content.', fr: 'Les cookies sont de petits fichiers texte que les sites web envoient à votre appareil pour améliorer l\'expérience de navigation, analyser le trafic et personnaliser le contenu.', es: 'Las cookies son pequeños archivos de texto que los sitios web envían a tu dispositivo para mejorar la experiencia de navegación, analizar el tráfico y personalizar el contenido.', tr: 'Çerezler, web sitelerinin tarama deneyimini iyileştirmek, trafiği analiz etmek ve içeriği kişiselleştirmek için cihazınıza gönderdiği küçük metin dosyalarıdır.', sq: 'Cookie-t janë skedarë të vegjël teksti që faqet e internetit i dërgojnë pajisjes suaj për të përmirësuar përvojën e shfletimit, për të analizuar trafikun dhe për të personalizuar përmbajtjen.', zh: 'Cookie是网站发送到您设备的小文本文件，用于改善浏览体验、分析流量和个性化内容。' },
  'cookie-types-title': { it: 'Tipologie di Cookie', en: 'Types of Cookies', fr: 'Types de Cookies', es: 'Tipos de Cookies', tr: 'Çerez Türleri', sq: 'Llojet e Cookie-ve', zh: 'Cookie类型', de: 'Cookie-Typen', ro: 'Tipuri de Cookie-uri' },
  'cookie-type-necessary': { it: 'Cookie Necessari', en: 'Necessary Cookies', fr: 'Cookies Nécessaires', es: 'Cookies Necesarias', tr: 'Gerekli Çerezler', sq: 'Cookie të Nevojshëm', zh: '必要Cookie', de: 'Notwendige Cookies', ro: 'Cookie-uri Necesare' },
  'cookie-type-necessary-desc': { it: 'Assicurano il funzionamento del sito e la gestione delle preferenze utente.', en: 'Ensure website functionality and manage user preferences.', fr: 'Assurent le fonctionnement du site et gèrent les préférences utilisateur.', es: 'Aseguran la funcionalidad del sitio web y gestionan las preferencias del usuario.', tr: 'Web sitesi işlevselliğini sağlar ve kullanıcı tercihlerini yönetir.', sq: 'Sigurojnë funksionalitetin e faqes së internetit dhe menaxhojnë preferencat e përdoruesit.', zh: '确保网站功能并管理用户偏好。' },
  'cookie-type-analytics': { it: 'Cookie Analitici', en: 'Analytics Cookies', fr: 'Cookies Analytiques', es: 'Cookies Analíticas', tr: 'Analitik Çerezler', sq: 'Cookie Analitike', zh: '分析Cookie', de: 'Analyse-Cookies', ro: 'Cookie-uri Analitice' },
  'cookie-type-analytics-desc': { it: 'Misurano l\'uso del sito e le performance in forma aggregata.', en: 'Measure website usage and performance in aggregate form.', fr: 'Mesurent l\'utilisation du site et les performances sous forme agrégée.', es: 'Miden el uso del sitio web y el rendimiento de forma agregada.', tr: 'Web sitesi kullanımını ve performansını toplu formda ölçer.', sq: 'Matësin përdorimin e faqes së internetit dhe performancën në formë të përmbledhur.', zh: '以汇总形式测量网站使用情况和性能。' },
  'cookie-type-marketing': { it: 'Cookie di Marketing', en: 'Marketing Cookies', fr: 'Cookies Marketing', es: 'Cookies de Marketing', tr: 'Pazarlama Çerezleri', sq: 'Cookie Marketingu', zh: '营销Cookie', de: 'Marketing-Cookies', ro: 'Cookie-uri de Marketing' },
  'cookie-type-marketing-desc': { it: 'Creano profili per mostrare contenuti e annunci personalizzati.', en: 'Create profiles to show personalized content and advertisements.', fr: 'Créent des profils pour afficher du contenu et des publicités personnalisés.', es: 'Crean perfiles para mostrar contenido y anuncios personalizados.', tr: 'Kişiselleştirilmiş içerik ve reklamlar göstermek için profiller oluşturur.', sq: 'Krijojnë profile për të treguar përmbajtje dhe reklama të personalizuara.', zh: '创建配置文件以显示个性化内容和广告。' },
  'cookie-duration-session': { it: 'Sessione', en: 'Session', fr: 'Session', es: 'Sesión', tr: 'Oturum', sq: 'Seancë', zh: '会话', de: 'Sitzung', ro: 'Sesiune' },
  'cookie-duration-24months': { it: '24 mesi', en: '24 months', fr: '24 mois', es: '24 meses', tr: '24 ay', sq: '24 muaj', zh: '24个月', de: '24 Monate', ro: '24 luni' },
  'cookie-duration-12months': { it: '12 mesi', en: '12 months', fr: '12 mois', es: '12 meses', tr: '12 ay', sq: '12 muaj', zh: '12个月', de: '12 Monate', ro: '12 luni' },
  'cookie-legal-necessary': { it: 'Necessità del servizio', en: 'Service necessity', fr: 'Nécessité du service', es: 'Necesidad del servicio', tr: 'Hizmet gerekliliği', sq: 'Nevoja e shërbimit', zh: '服务必要性', de: 'Dienstnotwendigkeit', ro: 'Necesitate serviciu' },
  'cookie-legal-consent': { it: 'Consenso', en: 'Consent', fr: 'Consentement', es: 'Consentimiento', tr: 'Rıza', sq: 'Pëlqim', zh: '同意', de: 'Zustimmung', ro: 'Consimțământ' },
  'cookie-legal-basis': { it: 'Base giuridica', en: 'Legal basis', fr: 'Base juridique', es: 'Base legal', tr: 'Yasal dayanak', sq: 'Baza ligjore', zh: '法律依据', de: 'Rechtsgrundlage', ro: 'Bază legală' },
  'cookie-third-party': { it: 'Servizi di Terze Parti', en: 'Third Party Services', fr: 'Services Tiers', es: 'Servicios de Terceros', tr: 'Üçüncü Taraf Hizmetleri', sq: 'Shërbimet e Palëve të Treta', zh: '第三方服务', de: 'Drittanbieter-Dienste', ro: 'Servicii terțe' },
  'cookie-google-analytics-desc': { it: 'Utilizzato per misurare il traffico del sito con IP anonimizzati.', en: 'Used to measure website traffic with anonymized IPs.', fr: 'Utilisé pour mesurer le trafic du site avec des IP anonymisées.', es: 'Utilizado para medir el tráfico del sitio web con IPs anonimizadas.', tr: 'Anonim IP\'ler ile web sitesi trafiğini ölçmek için kullanılır.', sq: 'Përdoret për të matur trafikun e faqes së internetit me IP të anonimizuara.', zh: '用于使用匿名IP测量网站流量。' },
  'cookie-google-maps-desc': { it: 'Utilizzato per visualizzare mappe interattive quando presenti nel sito.', en: 'Used to display interactive maps when present on the site.', fr: 'Utilisé pour afficher des cartes interactives lorsqu\'elles sont présentes sur le site.', es: 'Utilizado para mostrar mapas interactivos cuando están presentes en el sitio.', tr: 'Sitede mevcut olduğunda etkileşimli haritaları görüntülemek için kullanılır.', sq: 'Përdoret për të shfaqur harta interaktive kur janë të pranishme në faqe.', zh: '用于在网站上显示交互式地图。' },
  'cookie-manage-preferences': { it: 'Gestisci le Preferenze', en: 'Manage Preferences', fr: 'Gérer les Préférences', es: 'Gestionar Preferencias', tr: 'Tercihleri Yönet', sq: 'Menaxho Preferencat', zh: '管理偏好' },
  'cookie-manage-desc': { it: 'Puoi modificare le tue preferenze sui cookie in qualsiasi momento.', en: 'You can modify your cookie preferences at any time.', fr: 'Vous pouvez modifier vos préférences de cookies à tout moment.', es: 'Puedes modificar tus preferencias de cookies en cualquier momento.', tr: 'Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz.', sq: 'Mund të modifikoni preferencat tuaja të cookie-ve në çdo kohë.', zh: '您可以随时修改您的Cookie偏好。' },
  'cookie-manage-button': { it: 'Gestisci Cookie', en: 'Manage Cookies', fr: 'Gérer les Cookies', es: 'Gestionar Cookies', tr: 'Çerezleri Yönet', sq: 'Menaxho Cookie-t', zh: '管理Cookie' },
  'cookie-privacy-policy': { it: 'Informativa Privacy', en: 'Privacy Policy', fr: 'Politique de Confidentialité', es: 'Política de Privacidad', tr: 'Gizlilik Politikası', sq: 'Politika e Privatësisë', zh: '隐私政策' },
  'footer-link-request-consult': { it: 'Richiedi Consulenza', en: 'Request Consultation' },
  'footer-link-docs': { it: 'Documenti Utili', en: 'Useful Documents' },
  'footer-link-client-area': { it: 'Area Clienti', en: 'Client Area' }
};

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // 1. Check URL parameter first
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang') as Language;
      if (urlLang && ['it', 'en', 'fr', 'es', 'tr', 'sq', 'zh', 'de', 'ro'].includes(urlLang)) {
        return urlLang;
      }
    } catch {}
    
    // 2. Then check localStorage
    try {
      const saved = localStorage.getItem('language') as Language;
      if (saved && ['it', 'en', 'fr', 'es', 'tr', 'sq', 'zh', 'de', 'ro'].includes(saved)) {
        return saved;
      }
    } catch {}
    
    return 'it';
  });

  const changeLanguage = (lang: Language) => {
    if (!['it', 'en', 'fr', 'es', 'tr', 'sq', 'zh', 'de', 'ro'].includes(lang)) {
      console.error('[i18n] Invalid language code:', lang);
      return;
    }
    
    try {
      console.log('[i18n] changeLanguage ->', lang);
    } catch {}
    
    setCurrentLanguage(lang);
    
    // Save to localStorage
    try { 
      localStorage.setItem('language', lang); 
    } catch (error) {
      console.error('[i18n] Failed to save language to localStorage:', error);
    }
    
    // Update URL parameter while preserving hash
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch (error) {
      console.error('[i18n] Failed to update URL:', error);
    }
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[currentLanguage] ?? entry.en ?? entry.it ?? key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};