import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-20">
      {/* MRR Chart Card */}
      <div className="bg-white/5 rounded-lg p-4 w-full max-w-md">
        <Image
          src="/mrr-graph.jpg"
          alt="MRR Growth Chart"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>

      {/* Testimonial Content */}
      <div className="max-w-md">
        <blockquote className="text-2xl font-medium mb-6">
          "Without ShipFast I might have never launched my SaaS and I would
          still be at $0 MRR."
        </blockquote>

        <div className="flex items-center gap-3">
          <Image
            src="/jack-avatar.jpg"
            alt="Jack Friks"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">Jack Friks</p>
            <a
              href="https://post-bridge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ADE80] hover:underline text-sm"
            >
              Built post-bridge.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
