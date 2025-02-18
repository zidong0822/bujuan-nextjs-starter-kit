import Image from "next/image";
const VideoDemo = () => {
  return (
    <div className="mt-32 max-w-4xl mx-auto">
      {/* Title */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="text-gray-400">The code in 3 minutes</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="rotate-90"
        >
          <path
            d="M20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M15 17.5H3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Video Container */}
      <div className="relative w-full pt-[56.25%] bg-white/5 rounded-lg overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/W3Pb3v_GpoE"
          title="ShipFast tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Testimonial */}
      <div className="mt-16 text-center">
        <blockquote className="text-2xl mb-6">
          It&apos;s a game changer. Comes with an easy-to-follow tutorial, and
          saves a ton of time.
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/yifan-avatar.jpeg"
            alt="Yifan Goh"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex items-center gap-2">
            <span className="font-medium">Yifan Goh</span>
            <span className="text-[#4ADE80] text-sm px-2 py-1 rounded bg-[#4ADE80]/10">
              Built an AI tool
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDemo;
