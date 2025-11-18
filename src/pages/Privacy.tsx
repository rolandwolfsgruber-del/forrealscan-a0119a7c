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

        <h1 className="text-4xl font-bold mb-8">Privacy Policy / Datenschutz</h1>
        
        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-muted-foreground">
              ForRealScan is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Data Controller</h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Service Provider:</strong> ForRealScan<br />
              <strong className="text-foreground">Location:</strong> Italy<br />
              <strong className="text-foreground">Email:</strong> <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Data We Collect</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">Images You Upload:</strong> When you use our AI analysis service, you upload images for processing. These images are processed in real-time and are not permanently stored on our servers unless you explicitly save results.</p>
              <p><strong className="text-foreground">Technical Data:</strong> We automatically collect technical information such as IP address, browser type, device information, and access times for security and analytics purposes.</p>
              <p><strong className="text-foreground">Contact Information:</strong> If you contact us via email or contact form, we collect your name, email address, and message content.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Purpose of Data Processing</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">AI Image Analysis:</strong> To provide our core service of detecting AI-generated content in images.</p>
              <p><strong className="text-foreground">Service Improvement:</strong> To analyze usage patterns and improve our service quality.</p>
              <p><strong className="text-foreground">Communication:</strong> To respond to your inquiries and provide customer support.</p>
              <p><strong className="text-foreground">Legal Compliance:</strong> To comply with applicable laws and regulations.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cookies and Tracking</h2>
            <div className="text-muted-foreground space-y-3">
              <p>We use cookies and similar tracking technologies to enhance your experience:</p>
              <p><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly.</p>
              <p><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</p>
              <p><strong className="text-foreground">Advertising Cookies:</strong> Used to display relevant advertisements (e.g., Google AdSense).</p>
              <p>You can manage cookie preferences in your browser settings.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Sharing and Third Parties</h2>
            <div className="text-muted-foreground space-y-3">
              <p>We do not sell your personal data. We may share data with:</p>
              <p><strong className="text-foreground">AI Service Providers:</strong> Third-party AI processing services that analyze uploaded images.</p>
              <p><strong className="text-foreground">Analytics Providers:</strong> Services like Google Analytics to understand website usage.</p>
              <p><strong className="text-foreground">Advertising Networks:</strong> Services like Google AdSense for displaying ads.</p>
              <p><strong className="text-foreground">Legal Obligations:</strong> When required by law or to protect our rights.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights (GDPR)</h2>
            <div className="text-muted-foreground space-y-3">
              <p>Under GDPR, you have the following rights:</p>
              <p><strong className="text-foreground">Right of Access:</strong> Request a copy of your personal data.</p>
              <p><strong className="text-foreground">Right to Rectification:</strong> Correct inaccurate or incomplete data.</p>
              <p><strong className="text-foreground">Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten").</p>
              <p><strong className="text-foreground">Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.</p>
              <p><strong className="text-foreground">Right to Object:</strong> Object to processing of your data for direct marketing or other purposes.</p>
              <p><strong className="text-foreground">Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</p>
              <p>To exercise these rights, contact us at: <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law. Uploaded images are processed in real-time and deleted immediately after analysis unless you choose to save results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. This includes encryption, secure servers, and access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our service is not intended for children under 16 years of age. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact Us</h2>
            <p className="text-muted-foreground">
              For any questions or concerns about this Privacy Policy or our data practices, please contact us at:<br />
              <strong className="text-foreground">Email:</strong> <a href="mailto:info@forrealscan.com" className="text-primary hover:underline">info@forrealscan.com</a>
            </p>
          </section>

          <section className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground italic">
              This Privacy Policy is a GDPR-compatible template and can be further customized with specific legal details as required by your jurisdiction and business practices.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
