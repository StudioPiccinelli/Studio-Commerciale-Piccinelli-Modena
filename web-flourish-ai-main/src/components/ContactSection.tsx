import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contatti" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t('contact-title')}
            </span>
          </h2>
          <div className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-center space-y-1">
            <p>{t('contact-subtitle').split('\n')[0]}</p>
            <p>{t('contact-subtitle').split('\n')[1]}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="group relative border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-fade-in overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="pb-4 relative">
              <CardTitle className="flex flex-col gap-4 text-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-bold">{t('contact-location')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                {t('contact-address-line1')}<br />
                {t('contact-address-line2')}<br />
                {t('contact-address-country')}
              </p>
            </CardContent>
          </Card>

          <Card className="group relative border-border/50 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="pb-4 relative">
              <CardTitle className="flex flex-col gap-4 text-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <Phone className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-bold">{t('contact-phone')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground text-sm">
                <a href="tel:+39059218032" className="hover:text-accent transition-colors font-medium inline-flex items-center gap-2 group/link">
                  Tel. +39 059 / 218032
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                </a>
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Fax: 059 / 867 2225
              </p>
            </CardContent>
          </Card>

          <Card className="group relative border-border/50 hover:border-warning/30 hover:shadow-2xl hover:shadow-warning/10 transition-all duration-500 animate-fade-in overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-warning/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="pb-4 relative">
              <CardTitle className="flex flex-col gap-4 text-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-warning/20 to-warning/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <Mail className="h-6 w-6 text-warning group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-bold">{t('contact-email-label')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground text-sm">
                <a href="mailto:info@assoprof.it" className="hover:text-warning transition-colors font-medium inline-flex items-center gap-2 group/link">
                  info@assoprof.it
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                </a>
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                PEC: <a href="mailto:studiopiccinelli@pec.it" className="hover:text-warning transition-colors font-medium inline-flex items-center gap-2 group/link">
                  studiopiccinelli@pec.it
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="group relative border-border/50 hover:border-success/30 hover:shadow-2xl hover:shadow-success/10 transition-all duration-500 animate-fade-in overflow-hidden" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="pb-4 relative">
              <CardTitle className="flex flex-col gap-4 text-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-success/20 to-success/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <Clock className="h-6 w-6 text-success group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-bold">{t('contact-hours-title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 relative">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">{t('contact-weekdays-label')}</span>
                <span className="font-bold text-foreground">8:30 - 18:00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">{t('contact-saturday-label')}</span>
                <span className="font-bold text-foreground">{t('contact-saturday-note')}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('contact-map-title')}</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">
              {t('contact-map-desc')}
            </p>
          </div>
          
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.346!2d10.925891715577027!3d44.64758898909853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e4e53d4b888b1%3A0x7b60e0c7b9b7c1c0!2sVia%20Emilia%20Centro%2C%2075%2C%2041121%20Modena%20MO%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Commerciale Piccinelli Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};