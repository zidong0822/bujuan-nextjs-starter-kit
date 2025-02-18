import Image from "next/image";

const Intro = () => {
  return (
    <div className="mt-32 max-w-3xl mx-auto text-center">
      {/* Award Card */}
      <div className="relative w-[240px] h-[240px] mx-auto mb-8">
        <Image
          src="/maker-award.png"
          alt="Maker of the Year 2023"
          width={240}
          height={240}
          className="rounded-lg"
        />
      </div>

      {/* Introduction */}
      <h2 className="text-2xl font-medium mb-4">Hey, it&apos;s Marc 👋</h2>

      <div className="space-y-6 text-gray-400">
        <p>
          In 2018, I believed I was Mark Zuckerberg,
          <br />
          built a startup for 1 year, and got 0 users...
        </p>

        <p>
          A few years after my burnout, I restarted the journey differently: I
          shipped like a madman —
          <a href="#" className="text-white underline">
            16 startups in 2 years
          </a>
          . Now I&apos;m happy and earn $45,000 a month.
        </p>

        <p>
          I realized I was doing the same thing over and over: set up DNS
          records, listen to Stripe webhooks, design pricing section... So I
          built ShipFast for 3 reasons:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-left max-w-2xl mx-auto">
          <li>
            <span className="text-white font-medium">Save time</span> and focus
            on what matters: building a business
          </li>
          <li>
            <span className="text-white font-medium">Avoid headaches</span> like
            emails ending in spam or handling Stripe subscriptions
          </li>
          <li>
            <span className="text-white font-medium">Get profitable fast</span>
            —the more you ship, the more you learn, the more you earn
          </li>
        </ol>

        <p>
          <span className="text-white">135,000+ people</span> trust me on
          Twitter, Product Hunt awarded me{" "}
          <a href="#" className="text-white underline">
            Maker of the Year 2023
          </a>
          , and{" "}
          <a href="#" className="text-white underline">
            6437 indie makers
          </a>{" "}
          are using ShipFast to launch startups quickly, scroll to see what they
          say.
        </p>
      </div>
    </div>
  );
};

export default Intro;
