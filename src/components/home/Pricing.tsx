import Image from "next/image";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    originalPrice: "$299",
    price: "$199",
    features: [
      { name: "NextJS boilerplate", included: true },
      { name: "SEO & Blog", included: true },
      { name: "Mailgun emails", included: true },
      { name: "Stripe / Lemon Squeezy", included: true },
      { name: "MongoDB / Supabase", included: true },
      { name: "Google Oauth & Magic Links", included: true },
      { name: "Components & animations", included: true },
      { name: "ChatGPT prompts for terms & privacy", included: true },
      { name: "Discord community & Leaderboard", included: false },
      { name: "$1,210 worth of discounts", included: false },
      { name: "Lifetime updates", included: false },
    ],
  },
  {
    name: "All-in",
    originalPrice: "$349",
    price: "$249",
    features: [
      { name: "NextJS boilerplate", included: true },
      { name: "SEO & Blog", included: true },
      { name: "Mailgun emails", included: true },
      { name: "Stripe / Lemon Squeezy", included: true },
      { name: "MongoDB / Supabase", included: true },
      { name: "Google Oauth & Magic Links", included: true },
      { name: "Components & animations", included: true },
      { name: "ChatGPT prompts for terms & privacy", included: true },
      { name: "Discord community & Leaderboard", included: true },
      { name: "$1,210 worth of discounts", included: true },
      { name: "Lifetime updates", included: true, tag: "Updated 4 weeks ago" },
    ],
  },
  {
    name: "ShipFast + CodeFast",
    originalPrice: "$648",
    price: "$299",
    isBundle: true,
    features: [
      { name: "Everything in All-in, and..." },
      {
        name: "CodeFast ($299 value)",
        description: "Learn to code in weeks, not months",
        subFeatures: [
          "12 hours of content",
          "Build a SaaS from 0",
          "Entrepreneur mindset",
        ],
      },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <span className="text-[#FFB224]">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Save hours of repetitive code,
          <br />
          ship fast, get profitable!
        </h2>
        <p className="text-[#4ADE80] flex items-center justify-center gap-2">
          <span className="text-xl">$100 off</span> for the first 6460 customers
          (13 left)
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-8 ${
              plan.isBundle ? "border border-[#4ADE80]" : "bg-white/5"
            }`}
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium">{plan.name}</h3>
                {plan.isBundle && (
                  <span className="text-xs text-[#4ADE80] px-2 py-1 rounded bg-[#4ADE80]/10">
                    BUNDLE
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-500 line-through text-sm">
                  {plan.originalPrice}
                </span>
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-400">USD</span>
              </div>
            </div>

            <div className="space-y-4">
              {plan.features.map((feature, index) => (
                <div key={index}>
                  {feature.subFeatures ? (
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm">←</span>
                        <span className="italic">{feature.name}</span>
                      </div>
                      <div className="ml-6 p-4 rounded bg-black/20">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 h-5 rounded bg-[#4ADE80]/20 flex items-center justify-center">
                            <span className="text-[#4ADE80] text-xs">CF</span>
                          </div>
                          <span>{feature.description}</span>
                        </div>
                        <ul className="space-y-1 ml-4">
                          {feature.subFeatures.map((sub, idx) => (
                            <li
                              key={idx}
                              className="text-sm list-disc text-gray-400"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex gap-1">
                          {[...Array(8)].map((_, i) => (
                            <Image
                              key={i}
                              src="/student-avatar.jpg"
                              alt="Student"
                              width={20}
                              height={20}
                              className="rounded-full w-5 h-5 -ml-1 first:ml-0"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          1,000+ students love CodeFast
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      {feature.included !== undefined ? (
                        feature.included ? (
                          <Check className="w-5 h-5 text-[#4ADE80]" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500" />
                        )
                      ) : null}
                      <span className="text-gray-300">{feature.name}</span>
                      {feature.tag && (
                        <span className="text-xs text-[#4ADE80] px-2 py-1 rounded bg-[#4ADE80]/10">
                          {feature.tag}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              className={`w-full mt-8 py-3 px-4 rounded-lg font-medium ${
                plan.isBundle
                  ? "bg-[#4ADE80] text-black hover:bg-[#4ADE80]/90"
                  : "bg-[#FFB224] text-black hover:bg-[#FFB224]/90"
              }`}
            >
              Get ShipFast{plan.isBundle ? " + CodeFast" : ""}
            </button>
            <p className="text-center text-sm text-gray-400 mt-4">
              Pay once. Build unlimited projects!
            </p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="mt-32 text-center">
        <blockquote className="text-2xl mb-6">
          I was able to launch my project in just one day! I made 170$ already.
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/mateus-avatar.webp"
            alt="Mateus De Nardo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex items-center gap-2">
            <span className="font-medium">Mateus De Nardo</span>
            <span className="text-[#4ADE80] text-sm px-2 py-1 rounded bg-[#4ADE80]/10">
              Built a SaaS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
