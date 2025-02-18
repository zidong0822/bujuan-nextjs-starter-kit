import Image from "next/image";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Jack F.",
    rating: 5,
    text: "I shipped in 6 days as a noob coder... This is awesome",
    video: true,
  },
  {
    name: "Larry",
    rating: 5,
    text: "I've already made back the money I spent!",
    video: true,
  },
  {
    name: "Sergiu Chiriac",
    text: "Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!",
    avatar: "/sergiu-avatar.jpeg",
  },
  {
    name: "Victor Abeledo",
    isTwitter: true,
    text: "Marc, I got your boilerplate and having the payments setup with Stripe + user auth is a blessing. This will save me like 6 months of work for every new project I sign up.",
    date: "4:55 AM · Sep 1, 2023",
    likes: 12,
  },
  {
    name: "Alex Martinez",
    rating: 5,
    text: "Everything you need to ship your SaaS ASAP",
    video: true,
  },
  {
    name: "Juanjo Veallo",
    text: "I made more in 6 days than the minimum wage here in Spain! It would have taken me months to get the website without ShipFast.",
    avatar: "/juanjo-avatar.png",
  },
  {
    name: "Jaya B.",
    text: "I managed to make a sell for 5 figures in two weeks! Best investment I've made in so long.",
    avatar: "/jaya-avatar.jpg",
  },
  {
    name: "Tom Finlay",
    rating: 5,
    text: "Just got my first customer. I've 4x my investment.",
    video: true,
  },
  {
    name: "Silvestre",
    text: "Even though it's Christmas, I'm shipping anyway thanks to well made tutorials! Not even holidays can stop me!",
    avatar: "/silvestre-avatar.jpg",
  },
];

const TestimonialsWall = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          6437 makers built AI tools, SaaS, and more
        </h2>
        <p className="text-gray-400">
          They made their first $ online, and some even quit their 9-5!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 relative">
            {testimonial.video && (
              <div className="absolute top-4 right-4">
                <Play className="w-5 h-5" />
              </div>
            )}

            <div className="flex items-start gap-3 mb-3">
              {testimonial.avatar ? (
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="w-10 h-10 bg-gray-700 rounded-full" />
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{testimonial.name}</span>
                  {testimonial.rating && (
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {testimonial.isTwitter && (
                  <span className="text-sm text-gray-500">
                    {testimonial.date}
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-300">{testimonial.text}</p>

            {testimonial.isTwitter && (
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span>❤️ {testimonial.likes}</span>
                <span>💬 Reply</span>
                <span>🔄 Copy link</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsWall;
