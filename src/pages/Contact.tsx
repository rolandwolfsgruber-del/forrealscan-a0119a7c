import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Mail, Send, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Language, translations } from '@/lib/translations';
import { LANGUAGE_STORAGE_KEY } from '@/lib/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Contact = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['de', 'en', 'it', 'es', 'fr'].includes(stored)) {
      return stored as Language;
    }
    const browserLang = navigator.language.split('-')[0];
    if (['de', 'en', 'it', 'es', 'fr'].includes(browserLang)) {
      return browserLang as Language;
    }
    return 'de';
  });

  const t = translations[language];

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t.contact_success_title,
        description: `${t.contact_success_message} ${formData.email}`,
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header with Back Button and Language Selector */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.common_back}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-xs uppercase">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? 'bg-accent' : ''}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="text-center mb-12">
          <Mail className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">{t.contact_title}</h1>
          <p className="text-muted-foreground text-lg">
            {t.contact_subtitle}
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t.contact_name}</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t.contact_name_placeholder}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t.contact_email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.contact_email_placeholder}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t.contact_message}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.contact_message_placeholder}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px] resize-y"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>{t.contact_sending}</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t.contact_send}
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-2">
              {t.contact_direct}
            </p>
            <a
              href="mailto:info@forrealscan.com"
              className="text-primary hover:underline font-medium"
            >
              info@forrealscan.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
