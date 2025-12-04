import React from 'react';
import { ArrowLeft, Shield, Users, FileText, Clock, Mail, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

export const Privacy = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('privacy-section-1-title'),
      content: t('privacy-section-1-content'),
      icon: Shield
    },
    {
      title: t('privacy-section-2-title'), 
      content: t('privacy-section-2-content'),
      icon: FileText
    },
    {
      title: t('privacy-section-3-title'),
      content: t('privacy-section-3-content'),
      icon: Users
    },
    {
      title: t('privacy-section-4-title'),
      content: t('privacy-section-4-content'),
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-glow hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              {t('privacy-back-home')}
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-glow" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {t('privacy-title')}
                </h1>
                <p className="text-background/80 text-lg mt-2">
                  {t('privacy-subtitle')}
                </p>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm">
                  <strong>{t('privacy-last-update')}</strong> 13 {t('privacy-august')} 2025
                </p>
                <p className="text-background/80 text-sm mt-1">
                  {t('privacy-gdpr-compliance')}
                </p>
             </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Info Card */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                {t('privacy-data-controller')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Studio Commerciale Piccinelli</strong></p>
                <p>{t('contact-address-line1')}</p>
                <p>{t('contact-address-line2')}, {t('contact-address-country')}</p>
                <p>{t('contact-phone')}: Tel. 059 / 218032 - Fax: 059 / 867 2225</p>
                <p>{t('contact-email-label')}: 
                  <a href="mailto:info@assoprof.it" className="text-primary hover:underline ml-1">
                    info@assoprof.it
                  </a>
                </p>
                <p>PEC: <a href="mailto:studiopiccinelli@pec.it" className="text-primary hover:underline">studiopiccinelli@pec.it</a></p>
                <p>P.IVA: 00385320361</p>
              </div>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="grid gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-slate max-w-none">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {section.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Rights Section */}
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">
                {t('privacy-your-rights')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-justify">
                {t('privacy-rights-description')}
              </p>
              <div className="bg-card rounded-lg p-4 border border-primary/10">
                <p className="font-medium text-sm">
                  {t('privacy-contact-us')}: 
                  <a href="mailto:info@assoprof.it" className="text-primary hover:underline ml-1">
                    info@assoprof.it
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('privacy-back-home')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};