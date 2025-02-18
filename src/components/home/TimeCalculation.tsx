import { CloudRain } from "lucide-react";

const TimeCalculation = () => {
  return (
    <div className="mt-20 max-w-2xl mx-auto text-center">
      <div className="space-y-2 text-lg">
        <p>
          <span className="text-[#FF6B6B]">4 hrs</span> to set up emails
        </p>
        <p>
          + <span className="text-[#FF6B6B]">6 hrs</span> designing a landing page
        </p>
        <p>
          + <span className="text-[#FF6B6B]">4 hrs</span> to handle Stripe webhooks
        </p>
        <p>
          + <span className="text-[#FF6B6B]">2 hrs</span> for SEO tags
        </p>
        <p>
          + <span className="text-[#FF6B6B]">1 hr</span> applying for Google Oauth
        </p>
        <p>
          + <span className="text-[#FF6B6B]">3 hrs</span> for DNS records
        </p>
        <p>
          + <span className="text-[#FF6B6B]">2 hrs</span> for protected API routes
        </p>
        <p>
          + <span className="text-[#FF6B6B]">∞ hrs</span> overthinking...
        </p>
        <div className="pt-4 flex items-center justify-center gap-2">
          <span>=</span>
          <span className="text-[#FF6B6B] font-medium">22+ hours</span>
          <span>of headaches</span>
          <CloudRain className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <p className="mt-8 text-gray-400 flex items-center justify-center gap-2">
        <span>↓</span>
        <span>There&apos;s an easier way</span>
      </p>
    </div>
  );
};

export default TimeCalculation; 