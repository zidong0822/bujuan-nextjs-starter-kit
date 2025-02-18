import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What do I get exactly?",
    id: "what-do-i-get",
  },
  {
    question: "What are the ShipFast Leaderboards?",
    id: "leaderboards",
  },
  {
    question: "What are the ShipFast Discounts?",
    id: "discounts",
  },
  {
    question: "Javascript or Typescript?",
    id: "javascript-typescript",
  },
  {
    question: "/app router or /pages router?",
    id: "router-type",
  },
  {
    question: "My tech stack is different, can I still use it?",
    id: "tech-stack",
  },
  {
    question: "Is it a website template?",
    id: "template",
  },
  {
    question: "How is ShipFast better than other boilerplates?",
    id: "comparison",
  },
  {
    question: "Are there any other costs associated?",
    id: "other-costs",
  },
  {
    question: "How often is ShipFast updated?",
    id: "updates",
  },
  {
    question: "Can I get a refund?",
    id: "refund",
  },
  {
    question: "Can I use PayPal?",
    id: "paypal",
  },
];

const FAQ = () => {
  return (
    <div className="mt-32 max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Have another question? Contact me on{" "}
            <a href="#" className="underline">
              Twitter
            </a>{" "}
            or by{" "}
            <a href="#" className="underline">
              email
            </a>
            .
          </p>
        </div>

        <div className="md:w-2/3">
          <div className="space-y-2">
            {faqs.map((faq) => (
              <button
                key={faq.id}
                className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-white/5 text-left"
              >
                <span>{faq.question}</span>
                <Plus className="w-5 h-5 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 