import React from 'react';
import { ArrowLeft, Cookie as CookieIcon, Settings, Shield, BarChart3, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

export const Cookie = () => {
  const { t } = useLanguage();

  const cookieTypes = [
    {
      name: t('cookie-type-necessary'),
      description: t('cookie-type-necessary-desc'),
      duration: t('cookie-duration-session'),
      legal: t('cookie-legal-necessary'),
      color: 'bg-green-500',
      icon: Shield
    },
    {
      name: t('cookie-type-analytics'),
      description: t('cookie-type-analytics-desc'),
      duration: t('cookie-duration-24months'),
      legal: t('cookie-legal-consent'),
      color: 'bg-blue-500',
      icon: BarChart3
    },
    {
      name: t('cookie-type-marketing'),
      description: t('cookie-type-marketing-desc'),
      duration: t('cookie-duration-12months'),
      legal: t('cookie-legal-consent'),
      color: 'bg-purple-500',
      icon: Target
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
              {t('cookie-back-home')}
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-warning/20 rounded-2xl flex items-center justify-center">
                <CookieIcon className="h-8 w-8 text-warning" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {t('cookie-title')}
                </h1>
                <p className="text-background/80 text-lg mt-2">
                  {t('cookie-subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* What are cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CookieIcon className="h-6 w-6 text-warning" />
                {t('cookie-what-are')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t('cookie-what-are-desc')}
              </p>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">{t('cookie-types-title')}</h2>
            <div className="grid gap-6">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${cookie.color}/10 rounded-lg flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${cookie.color.replace('bg-', 'text-')}`} />
                        </div>
                        {cookie.name}
                        <Badge variant="outline" className="ml-auto">
                          {cookie.duration}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        {cookie.description}
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">{t('cookie-legal-basis')}: </span>
                        <span className="text-muted-foreground">{cookie.legal}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Third Party Services */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-accent" />
                {t('cookie-third-party')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Google Analytics 4</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('cookie-google-analytics-desc')}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Google Maps</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('cookie-google-maps-desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Manage Preferences */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">
                {t('cookie-manage-preferences')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t('cookie-manage-desc')}
              </p>
              <Button variant="outline" className="mr-4">
                {t('cookie-manage-button')}
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/privacy">
                  {t('cookie-privacy-policy')}
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('cookie-back-home')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};