import Image from "next/image";
import ProductHuntBadge from "./ProductHuntBadge";
import MainTitle from "./MainTitle";
import Description from "./Description";
import CTAButton from "./CTAButton";
import DiscountInfo from "./DiscountInfo";
import UserTestimonials from "./UserTestimonials";
import TechStackDemo from "./TechStackDemo";

const Hero = () => {
  return (
    <section
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-title"
    >
      {/* 左侧内容 */}
      <div className="flex flex-col space-y-8 max-w-2xl">
        <ProductHuntBadge />
        <MainTitle id="hero-title" />
        <Description />
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton />
          <DiscountInfo />
        </div>
        <UserTestimonials />
      </div>

      {/* 右侧技术栈展示 */}
      <div className="relative">
        <TechStackDemo />
      </div>
    </section>
  );
};

export default Hero;
