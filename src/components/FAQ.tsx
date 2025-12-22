import { Language, translations } from '@/lib/translations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Theme } from '@/components/ThemeToggle';

interface FAQProps {
  language: Language;
  theme?: Theme;
}

export const FAQ = ({ language, theme }: FAQProps) => {
  const t = translations[language];

  const faqs = [
    { question: t.faq_q1, answer: t.faq_a1 },
    { question: t.faq_q2, answer: t.faq_a2 },
    { question: t.faq_q3, answer: t.faq_a3 },
    { question: t.faq_q4, answer: t.faq_a4 },
    { question: t.faq_q5, answer: t.faq_a5 },
    { question: t.faq_q6, answer: t.faq_a6 },
    { question: t.faq_q7, answer: t.faq_a7 },
    { question: t.faq_q8, answer: t.faq_a8 },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-veritas to-robo bg-clip-text text-transparent">
              {t.faq_title}
            </span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4 md:space-y-5">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 75}>
                <AccordionItem
                  value={`item-${index}`}
                  className="group bg-card border-2 border-border rounded-xl px-4 sm:px-6 md:px-7 py-1 data-[state=open]:border-primary/60 data-[state=open]:shadow-lg hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 0% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                    }}
                  />

                  <AccordionTrigger className="text-left font-bold text-sm sm:text-base hover:no-underline py-4 sm:py-5 hover:text-primary transition-colors relative z-10">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-5 relative z-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
