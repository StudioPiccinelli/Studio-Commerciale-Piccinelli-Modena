import { 
  Calculator, FileText, Users, Shield, BarChart3, 
  Laptop, CheckSquare, Building, Clock, Zap,
  TrendingUp, Globe, Building2
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ServicesSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const mainServices = [
    {
      titleKey: "services-accounting-title",
      descKey: "services-accounting-desc",
      icon: Calculator,
      color: "primary"
    },
    {
      titleKey: "services-tax-title",
      descKey: "services-tax-desc",
      icon: FileText,
      color: "accent"
    },
    {
      titleKey: "services-corporate-title",
      descKey: "services-corporate-desc",
      icon: Users,
      color: "primary"
    },
    {
      titleKey: "services-audit-title",
      descKey: "services-audit-desc",
      icon: Shield,
      color: "accent"
    },
    {
      titleKey: "services-organization-title",
      descKey: "services-organization-desc",
      icon: BarChart3,
      color: "primary"
    },
    {
      titleKey: "services-control-title",
      descKey: "services-control-desc",
      icon: TrendingUp,
      color: "accent"
    },
    {
      titleKey: "services-business-plan-title",
      descKey: "services-business-plan-desc",
      icon: Laptop,
      color: "primary"
    },
    {
      titleKey: "services-compliance-title",
      descKey: "services-compliance-desc",
      icon: CheckSquare,
      color: "accent"
    },
    {
      titleKey: "services-declarations-title",
      descKey: "services-declarations-desc",
      icon: FileText,
      color: "primary"
    },
    {
      titleKey: "services-succession-title",
      descKey: "services-succession-desc",
      icon: Building,
      color: "accent"
    },
    {
      titleKey: "services-crisis-title",
      descKey: "services-crisis-desc",
      icon: Clock,
      color: "warning"
    },
    {
      titleKey: "services-labor-title",
      descKey: "services-labor-desc",
      icon: Users,
      color: "primary"
    }
  ];

  const specialServices = [
    { titleKey: 'services-special-0-title', descKey: 'services-special-0-desc', icon: Zap, gradient: 'from-primary to-primary-glow' },
    { titleKey: 'services-special-1-title', descKey: 'services-special-1-desc', icon: Globe, gradient: 'from-accent to-success' },
    { titleKey: 'services-special-2-title', descKey: 'services-special-2-desc', icon: Building2, gradient: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section ref={sectionRef} id="servizi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t('services-title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify">
            {t('services-subtitle')}
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 100;
            return (
              <div
                key={index}
                className={`group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div className={`
                  w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110
                  ${service.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground' : ''}
                  ${service.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent text-accent group-hover:text-accent-foreground' : ''}
                  ${service.color === 'warning' ? 'bg-warning/10 group-hover:bg-warning text-warning group-hover:text-warning-foreground' : ''}
                `}>
                  <Icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  {t(service.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Special Services */}
        <div className="space-y-8">
          <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in-slow opacity-100' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {t('services-special-title')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center">
              {t('services-special-subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialServices.map((service, index) => {
              const Icon = service.icon;
              const delay = (mainServices.length + index + 3) * 100;
              return (
                <div
                  key={index}
                  className={`
                    relative overflow-hidden rounded-2xl p-8 border-2 border-transparent
                    bg-gradient-to-br ${service.gradient} text-white
                    hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl
                    ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}
                  `}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">
                      {t(service.titleKey)}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed text-justify">
                      {t(service.descKey)}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};