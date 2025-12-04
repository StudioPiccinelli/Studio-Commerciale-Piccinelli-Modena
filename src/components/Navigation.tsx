import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Linkedin } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLanguage, type Language } from "@/hooks/useLanguage";

interface NavigationProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export const Navigation = (_props: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pendingLang, setPendingLang] = useState<Language | null>(null);
  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
  ];

  const { t, currentLanguage: currentLang, changeLanguage } = useLanguage();
  
  const menuItems = [
    { href: "#contatti", key: "nav-contact" },
    { href: "#servizi", key: "nav-services" },
    { href: "#storia", key: "nav-history" },
  ];

  // Sort menu items alphabetically by translated label in the current language (safe for unsupported locales)
  const sortedMenuItems = [...menuItems].sort((a, b) => {
    const aLabel = t(a.key);
    const bLabel = t(b.key);
    try {
      return aLabel.localeCompare(bLabel, currentLang);
    } catch {
      return aLabel.localeCompare(bLabel);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure emoji flags render across desktop via Twemoji fallback
  useEffect(() => {
    let mounted = true;
    const run = async () => {
      const { default: twemoji } = await import('twemoji');
      requestAnimationFrame(() => {
        if (!mounted) return;
        document.querySelectorAll('header .emoji').forEach((node) => {
          twemoji.parse(node as HTMLElement, {
            folder: 'svg',
            ext: '.svg',
            base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/',
          });
        });
      });
    };
    run();
    return () => { mounted = false; };
  }, [currentLang, isMenuOpen]);

  // Close mobile menu immediately after language actually updates
  useEffect(() => {
    if (pendingLang && pendingLang === currentLang) {
      setIsMenuOpen(false);
      setPendingLang(null);
    }
  }, [currentLang, pendingLang]);

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex flex-col hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-xl font-semibold text-foreground">
              Studio Commerciale Piccinelli
            </span>
            <span className="text-[0.65rem] md:text-xs bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-medium">
              di Guerzoni Paolo, Lucchi Giovanni e Cornia Gian Marco
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {sortedMenuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-primary transition-colors relative group py-2"
                >
                  {t(item.key)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 border-border/50">
                  <span key={`flag-${currentLang}`} className="text-lg emoji">{currentLanguage.flag}</span>
                  <span>{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onSelect={(e) => {
                      e.preventDefault();
                      setPendingLang(lang.code);
                      changeLanguage(lang.code);
                    }}
                    className={`flex items-center gap-3 cursor-pointer ${
                      lang.code === currentLang ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <span key={`flag-item-${lang.code}`} className="text-lg emoji">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50 animate-slide-in-right">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {sortedMenuItems.map((item) => {
                  if (item.key === 'nav-contact') {
                    return (
                      <div key={item.key} className="flex items-center justify-between py-2 border-b border-border/20">
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="text-left text-foreground/80 hover:text-primary transition-colors"
                        >
                          {t(item.key)}
                        </button>
                        <a 
                          href="https://www.linkedin.com/company/studio-commerciale-piccinelli" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    );
                  }
                  
                  return (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left py-2 text-foreground/80 hover:text-primary transition-colors border-b border-border/20"
                    >
                      {t(item.key)}
                    </button>
                  );
                })}
                
                <div className="pt-2 border-t border-border/20">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setPendingLang(lang.code);
                            changeLanguage(lang.code);
                          }}
                          className={`flex items-center gap-2 rounded-md border border-border/30 px-3 py-2 hover:bg-muted transition-colors ${
                            lang.code === currentLang ? 'ring-2 ring-primary/50' : ''
                          }`}
                        >
                          <span key={`flag-mobile-item-${lang.code}`} className="text-lg emoji">{lang.flag}</span>
                          <span className="text-sm">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};