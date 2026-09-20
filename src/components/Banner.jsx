"use client";

import Link from "next/link";
import Image from "next/image";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Discover Ideas That Can Change the Future",
    description:
      "Explore innovative startup ideas, discover new opportunities, and get inspired by creative entrepreneurs.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Turn Your Idea Into Something Bigger",
    description:
      "Share your startup idea with the community, get valuable feedback, and take the first step toward building it.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Innovate. Share. Discuss. Grow.",
    description:
      "Connect with creative minds, discuss new concepts, validate ideas, and build something meaningful together.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  },
];

const Banner = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="h-[500px] md:h-[580px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                className="object-cover"
                sizes="100vw"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#0F172A]/75" />

              {/* Content */}
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 lg:px-10">
                <div className="max-w-3xl text-white">
                  {/* Badge */}
                  <span className="mb-5 inline-block rounded-full bg-[#FBBF24] px-4 py-2 text-sm font-semibold text-[#0F172A]">
                    Startup & Innovation
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
                    {slide.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href="/ideas"
                      className="inline-flex items-center rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white transition hover:bg-[#1D4ED8]"
                    >
                      Explore Ideas
                      <span className="ml-2 text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;