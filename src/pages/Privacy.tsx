import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <p className="text-muted-foreground">
              This is a placeholder privacy policy page. Please add your privacy policy here according to GDPR, CCPA, or other applicable data protection regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <p className="text-muted-foreground">
              Information about what data you collect, how you use it, and how users can control their data should be added here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted-foreground">
              Information about cookie usage and tracking technologies should be added here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
            <p className="text-muted-foreground">
              Information about user rights (access, deletion, portability, etc.) should be added here.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
