import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Company Info - Centered */}
        <div className="space-y-6 text-center max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">Studio Commerciale Piccinelli</h3>
            <div className="text-sm md:text-base text-background/80 leading-relaxed text-center space-y-1">
              <p>{t('footer-company-desc').split('\n')[0]}</p>
              <p>{t('footer-company-desc').split('\n')[1]}</p>
            </div>
          </div>

          {/* Contact Info - Centered */}
          <div className="space-y-4 text-left inline-block">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{t('footer-address')}</p>
                <p className="text-background/80 text-sm">
                  {t('footer-address-line1')}<br />
                  {t('footer-address-line2')}, {t('footer-address-country')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary-glow flex-shrink-0" />
              <div>
                <p className="font-medium">{t('footer-phone')}</p>
                <a 
                  href="tel:+39059218032" 
                  className="text-background/80 text-sm hover:text-primary-glow transition-colors"
                >
                  Tel. +39 059 / 218032
                </a>
                <p className="text-background/80 text-sm mt-1">
                  Fax: 059 / 867 2225
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary-glow flex-shrink-0" />
              <div>
                <p className="font-medium">{t('contact-email-label')}</p>
                <a 
                  href="mailto:info@assoprof.it" 
                  className="text-background/80 text-sm hover:text-primary-glow transition-colors"
                >
                  info@assoprof.it
                </a>
                <p className="text-background/80 text-sm mt-1">
                  PEC: <a 
                    href="mailto:studiopiccinelli@pec.it" 
                    className="hover:text-primary-glow transition-colors"
                  >
                    studiopiccinelli@pec.it
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{t('footer-hours')}</p>
                <div className="text-background/80 text-sm space-y-1">
                  <p>{t('footer-weekdays')}</p>
                  <p>{t('footer-saturday')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 justify-center mt-8">
            <span className="font-medium">{t('footer-follow-us')}</span>
            <a 
              href="https://www.linkedin.com/company/studio-commerciale-piccinelli" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-primary-glow transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="text-background/60 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-xs md:text-sm">© {currentYear} {t('footer-copyright')}</p>
                <p className="mt-1 text-xs md:text-sm">
                  {t('footer-vat-label')}: 00385320361 | {t('footer-register')}
                </p>
              </div>
              <div className="flex gap-4 text-center">
                <a 
                  href="/privacy" 
                  className="hover:text-primary-glow transition-colors"
                >
                  {t('footer-link-privacy')}
                </a>
                <span>|</span>
                <a 
                  href="/cookie" 
                  className="hover:text-primary-glow transition-colors"
                >
                  {t('footer-link-cookie')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};