import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ShipFast - 快速启动你的创业项目",
  description:
    "使用我们的启动模板，在几天内而不是几周内完成产品上线。包含支付系统、邮件服务、用户认证等预集成功能。",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 英雄部分 */}
      <div className="flex-1">
        <Hero />

        {/* 特性展示部分 */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <Features />
          </div>
        </section>

        {/* 定价部分 */}
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <Pricing />
          </div>
        </section>

        {/* 用户推荐部分 */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <Testimonials />
          </div>
        </section>
      </div>

      {/* 页脚 */}
      <Footer />
    </main>
  );
}
