import Image from "next/image";

const TechStackDemo = () => (
  <div className="relative">
    <div className="relative rounded-lg overflow-hidden border border-gray-800/30">
      <Image
        src="/demo.a9a3174c.png"
        alt="Tech Stack: NextJS, Tailwind, MongoDB, Stripe, and more"
        width={800}
        height={600}
        className="w-full h-auto"
        priority
      />
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-40" />
    </div>
  </div>
);

export default TechStackDemo; 