import Image from "next/image";

const platforms = [
  { name: "Hacker News", logo: "/hacker-news.svg" },
  { name: "Product Hunt", logo: "/product-hunt.svg" },
  { name: "X", logo: "/x-twitter.svg" },
  { name: "Reddit", logo: "/reddit.svg" },
];

const FeaturedOn = () => {
  return (
    <div className="mt-20 text-center">
      <p className="text-gray-500 mb-6">Featured on</p>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {platforms.map((platform) => (
          <Image
            key={platform.name}
            src={platform.logo}
            alt={platform.name}
            width={32}
            height={32}
            className="opacity-50 hover:opacity-75 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedOn;
