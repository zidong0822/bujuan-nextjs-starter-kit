import { Crown } from "lucide-react";

const BottomCTA = () => {
  return (
    <div className="mt-32 text-center">
      <div className="inline-block mb-4">
        <Crown className="w-8 h-8" />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Boost your app, launch, earn
      </h2>
      
      <p className="text-gray-400 mb-8">
        Don&apos;t waste time on Stripe subscriptions or designing a pricing section...
      </p>
      
      <button className="bg-[#FFB224] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#FFB224]/90 inline-flex items-center gap-2">
        <span className="text-lg">⚡</span>
        Get ShipFast
      </button>
    </div>
  );
};

export default BottomCTA; 