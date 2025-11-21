import { FileText, ImageIcon } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StoryCheckProps {
  language: Language;
}

export const StoryCheck = ({ language }: StoryCheckProps) => {
  const t = translations[language];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t.story_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Text Analysis Block */}
          <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <FileText className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>
              <CardTitle className="text-xl mb-4">
                {t.story_text_title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t.story_text_desc}
              </p>
            </CardContent>
          </Card>

          {/* Story Check Block */}
          <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <ImageIcon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>
              <CardTitle className="text-xl mb-4">
                {t.story_check_title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t.story_check_desc}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
