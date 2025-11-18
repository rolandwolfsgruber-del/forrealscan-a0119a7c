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

        <h1 className="text-4xl font-bold mb-8">Impressum / Legal Notice</h1>
        
        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Company Information</h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Service Provider:</strong> ForRealScan</p>
              <p><strong className="text-foreground">Location:</strong> Italy</p>
              <p><strong className="text-foreground">Email:</strong> <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Responsible for Content</h2>
            <p className="text-muted-foreground">
              ForRealScan Owner<br />
              Email: <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">VAT Identification Number</h2>
            <p className="text-muted-foreground">
              [To be added - VAT/Tax Number placeholder]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Liability for Content:</strong> The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are responsible for our own content on these pages. However, we are not obligated to monitor transmitted or stored third-party information or investigate circumstances pointing to illegal activity.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Liability for Links:</strong> Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Copyright:</strong> The content and works created by the site operators on these pages are subject to Italian and international copyright law. Duplication, processing, distribution, or any form of commercialization beyond the scope of copyright law requires the prior written consent of the respective author or creator.
            </p>
          </section>

          <section className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground italic">
              This is a preliminary legal notice template. It can be edited and refined with specific legal details as required by Italian law and EU regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
