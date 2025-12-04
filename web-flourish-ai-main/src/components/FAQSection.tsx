import { useState, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const FAQSection = () => {
  const { t, currentLanguage } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Reset FAQ state when language changes
  useEffect(() => {
    setOpenFAQ(null);
  }, [currentLanguage]);

  const faqs = [
    { qKey: 'faq-q1', aKey: 'faq-a1' },
    { qKey: 'faq-q2', aKey: 'faq-a2' },
    { qKey: 'faq-q3', aKey: 'faq-a3' },
    { qKey: 'faq-q4', aKey: 'faq-a4' },
    { qKey: 'faq-q5', aKey: 'faq-a5' },
    { qKey: 'faq-q6', aKey: 'faq-a6' },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-medium">{t('faq-title')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t('faq-title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-justify">
            {t('faq-subtitle')}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const delay = index * 100;
            return (
              <Card 
                key={index}
                className={`border-border/50 hover:shadow-md transition-all duration-700 ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors rounded-t-lg"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {t(faq.qKey)}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`
                    overflow-hidden transition-all duration-300 
                    ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-border/30 pt-4">
                        <p className="text-muted-foreground leading-relaxed text-justify">
                          {t(faq.aKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-600 ${isVisible ? 'animate-fade-in-slow opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {t('faq-cta-title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-justify">
              {t('faq-cta-subtitle')}
            </p>
            <button 
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-glow text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              {t('faq-cta-button')}
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};