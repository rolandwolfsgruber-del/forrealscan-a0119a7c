import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Imprint = () => {
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

        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Legal Information</h2>
            <p className="text-muted-foreground">
              This is a placeholder imprint page. Please add your legal information here according to your jurisdiction's requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              Company Name: [Your Company]<br />
              Address: [Your Address]<br />
              Email: [Your Email]<br />
              Phone: [Your Phone]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Responsible for Content</h2>
            <p className="text-muted-foreground">
              [Your Name or Responsible Person]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
