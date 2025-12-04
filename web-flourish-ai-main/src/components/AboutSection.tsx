import { Calculator, TrendingUp, Shield } from "lucide-react";
import teamMeeting from "@/assets/team-meeting-office.png";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {t('about-title')}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                {t('about-desc')}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className={`flex items-start gap-4 transition-all duration-700 delay-100 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('about-feature1-title')}</h3>
                  <p className="text-muted-foreground text-justify">
                    {t('about-feature1-desc')}
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-4 transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('about-feature2-title')}</h3>
                  <p className="text-muted-foreground text-justify">
                    {t('about-feature2-desc')}
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-4 transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('about-feature3-title')}</h3>
                  <p className="text-muted-foreground text-justify">
                    {t('about-feature3-desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={teamMeeting} 
                alt={t('about-image-alt')}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">1975</div>
                    <div className="text-sm text-muted-foreground">{t('about-founded-label')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">{t('about-clients-label')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};