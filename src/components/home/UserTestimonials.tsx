import Image from "next/image";

const UserTestimonials = () => (
  <div className="flex items-center gap-4">
    <div className="flex -space-x-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden"
        >
          <Image
            src={`/avatar-${i}.jpeg`}
            alt="User"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
    <div className="flex items-center gap-2">
      <div className="text-[#FBD86F]">★★★★★</div>
      <span className="text-gray-400">6437 makers ship faster</span>
    </div>
  </div>
);

export default UserTestimonials; 