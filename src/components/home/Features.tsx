import { AtSign, CreditCard, User, Database, Search, Paintbrush, MoreHorizontal } from "lucide-react";

const features = [
  { icon: AtSign, label: "Emails", isActive: true },
  { icon: CreditCard, label: "Payments" },
  { icon: User, label: "Login" },
  { icon: Database, label: "Database" },
  { icon: Search, label: "SEO" },
  { icon: Paintbrush, label: "Style" },
  { icon: MoreHorizontal, label: "More" },
];

const Features = () => {
  return (
    <div className="mt-20">
      {/* Launch Time */}
      <div className="text-center mb-8">
        <code className="text-[#4ADE80] bg-[#4ADE80]/10 px-2 py-1 rounded">
          const launch_time = &quot;06:52 PM&quot;;
        </code>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
        Supercharge your app instantly,<br />
        launch faster, make $
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 text-lg">
        Login users, process payments and send emails at lightspeed. Spend your time building 
        your startup, not integrating APIs. ShipFast provides you with the boilerplate code you 
        need to launch, FAST.
      </p>

      {/* Feature Icons */}
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {features.map((feature) => (
          <div 
            key={feature.label}
            className={`flex flex-col items-center gap-2 ${
              feature.isActive ? "text-[#FFB224]" : "text-gray-500"
            }`}
          >
            <feature.icon className="w-6 h-6" />
            <span className="text-sm">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features; 