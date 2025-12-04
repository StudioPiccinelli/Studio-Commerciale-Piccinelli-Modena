import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import { useLanguage } from "@/hooks/useLanguage";

export const HeroSection = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroOffice})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl text-center md:text-left">

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t('hero-title')}
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 animate-fade-in space-y-2">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t('hero-subtitle').split('\n')[0]}
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t('hero-subtitle').split('\n')[1]}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in">
            <Button
              onClick={scrollToContact}
              variant="hero"
              size="xl"
              className="group"
            >
              {t('hero-cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.querySelector("#storia")?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 hover:bg-primary/5"
            >
              {t('hero-cta-secondary')}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};