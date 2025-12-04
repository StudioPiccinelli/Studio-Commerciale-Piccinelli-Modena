import { Calendar, MapPin, Users, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TimelineSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const timelineData = [
    {
      year: "1975",
      titleKey: "timeline-1975-title",
      descKey: "timeline-1975-desc",
      icon: Calendar,
      color: "primary"
    },
    {
      year: "1980-2000",
      titleKey: "timeline-1980-title",
      descKey: "timeline-1980-desc",
      icon: MapPin,
      color: "accent"
    },
    {
      year: "2000-2022",
      titleKey: "timeline-2000-title",
      descKey: "timeline-2000-desc",
      icon: Award,
      color: "warning"
    },
    {
      year: "2022",
      titleKey: "timeline-2022-title",
      descKey: "timeline-2022-desc",
      icon: MapPin,
      color: "primary"
    },
  {
      year: t('timeline-year-today'),
      titleKey: "timeline-today-title",
      descKey: "timeline-today-desc",
      icon: Users,
      color: "accent",
      highlight: true
    }
  ];

  return (
    <section ref={sectionRef} id="storia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t('timeline-title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
            {t('timeline-subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary h-full rounded-full opacity-20"></div>
          
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            const delay = index * 150;
            
            return (
              <div 
                key={index}
                className={`relative flex items-center mb-6 md:mb-8 transition-all duration-700 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${delay}ms` }}
              >
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-4 md:text-right' : 'md:pl-4'}`}>
                  <div className={`
                    bg-card rounded-lg p-4 md:p-5 shadow-sm border border-border/50 
                    hover:shadow-md hover:scale-[1.01] transition-all duration-300 
                    ${item.highlight ? 'ring-1 ring-primary/20 bg-gradient-to-br from-card to-primary/5' : ''}
                  `}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center
                        ${item.color === 'primary' ? 'bg-primary text-primary-foreground' : ''}
                        ${item.color === 'accent' ? 'bg-accent text-accent-foreground' : ''}
                        ${item.color === 'warning' ? 'bg-warning text-warning-foreground' : ''}
                      `}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className={`
                        text-base font-bold 
                        ${item.color === 'primary' ? 'text-primary' : ''}
                        ${item.color === 'accent' ? 'text-accent' : ''}
                        ${item.color === 'warning' ? 'text-warning' : ''}
                      `}>
                        {item.year}
                      </div>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                      {t(item.titleKey)}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                      {t(item.descKey)}
                    </p>

                    {item.highlight && (
                      <div className="mt-3 p-2 bg-gradient-to-r from-primary to-primary-glow rounded-md">
                        <p className="text-white font-medium text-center text-xs">
                          {t('timeline-highlight')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shadow-md hover:scale-110 transition-transform duration-300">
                  <div className={`
                    w-2 h-2 rounded-full
                    ${item.color === 'primary' ? 'bg-primary' : ''}
                    ${item.color === 'accent' ? 'bg-accent' : ''}
                    ${item.color === 'warning' ? 'bg-warning' : ''}
                    ${item.highlight ? 'bg-gradient-to-r from-primary to-accent animate-pulse' : ''}
                  `}></div>
                </div>

                {/* Mobile Timeline Indicator */}
                <div className="md:hidden absolute left-0 top-0 w-0.5 h-full bg-border rounded-full">
                  <div className={`
                    absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-background
                    ${item.color === 'primary' ? 'bg-primary' : ''}
                    ${item.color === 'accent' ? 'bg-accent' : ''}
                    ${item.color === 'warning' ? 'bg-warning' : ''}
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};