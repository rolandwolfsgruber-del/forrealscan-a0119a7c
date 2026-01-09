import { useEffect } from 'react';

// Environment variables for AdSense configuration
// Set these in Vercel/Lovable environment settings:
// - VITE_ADSENSE_SLOT_ID: Your AdSense ad slot ID (e.g., "1234567890")
const ADSENSE_SLOT_ID = import.meta.env.VITE_ADSENSE_SLOT_ID;
const ADSENSE_CLIENT = 'ca-pub-7086576267073548'; // Your publisher ID (already in index.html)

interface AdSenseProps {
  className?: string;
}

export const AdSense = ({ className = '' }: AdSenseProps) => {
  useEffect(() => {
    // Only push ad if slot ID is configured and adsbygoogle exists
    if (ADSENSE_SLOT_ID && typeof window !== 'undefined') {
      try {
        // @ts-expect-error adsbygoogle is loaded externally
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        if (import.meta.env.DEV) {
          console.error('AdSense error:', e);
        }
      }
    }
  }, []);

  // Don't render anything if slot ID is not configured
  if (!ADSENSE_SLOT_ID) {
    return null;
  }

  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center', margin: '40px 0' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={ADSENSE_SLOT_ID}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
