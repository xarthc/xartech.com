"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="about"
      className="w-full bg-surface py-10 md:py-16 px-4 sm:px-6"
      style={{ fontFamily: "Be Vietnam Pro" }}
    >
      {/* Label */}
      <div
        data-aos="fade-right"
        className="max-w-7xl mx-auto mb-6 md:mb-8"
      >
        <p className="text-base md:text-lg font-medium flex items-center gap-2 text-shadow-2xl">
          <span className="text-xl">•</span> About Us
        </p>
      </div>

      {/* Heading */}
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        className="max-w-7xl mx-auto mb-10 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-semibold leading-tight md:leading-[1.15] tracking-tight max-w-3xl">
          Where creativity meets strategy to build meaningful experiences.
        </h2>
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="100"
        className="max-w-7xl mx-auto bg-white rounded-[24px] md:rounded-[36px] px-5 sm:px-8 md:px-16 py-10 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-24 shadow-2xl"
      >
        {/* LEFT SIDE */}
        {/* <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full max-w-[380px]">
            <p className="text-base md:text-lg font-medium mb-6 md:mb-8 flex items-center gap-2">
              <span className="text-xl">•</span> Who we are
            </p> */}

            {/* Video Card */}
            {/* <div className="bg-surface rounded-[20px] md:rounded-[28px] p-4 md:p-6 w-full shadow-2xl">
              <div className="relative w-full aspect-video rounded-[18px] md:rounded-[22px] overflow-hidden">
                <video
                  ref={videoRef}
                  src="/blackvideo1.mp4"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={handleToggle}
                />

                {!isPlaying && (
                  <button
                    onClick={handleToggle}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl transition hover:scale-110">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="black"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between mt-4 md:mt-5">
                <p className="text-sm font-semibold">
                  Xartech Showreel
                </p> */}

                {/* small decorative icon */}
                {/* <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/xartechLogo.webp"
                    alt="icon"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* RIGHT SIDE */}
       <div className="text-center w-full max-w-2xl mx-auto">
  <h2
    data-aos="fade-left"
    className="text-3xl sm:text-4xl md:text-[44px] leading-tight md:leading-[1.15] tracking-tight font-semibold mb-6 md:mb-8"
  >
    We are design-first creative studio
  </h2>

  <p
    data-aos="fade-left"
    className="text-gray-700 leading-relaxed md:leading-[1.75] mb-6 text-base md:text-[17px]"
  >
    We believe in the power of purposeful design to solve real business
    challenges. Every line, color, and interaction is crafted with intent,
    creating experiences that connect and drive impact. Our mission is to turn
    ideas into strategic, visual solutions that resonate deeply and support our
    clients’ goals.
  </p>

  <p
    data-aos="fade-left"
    className="text-gray-700 leading-relaxed md:leading-[1.75] mb-8 md:mb-10 text-base md:text-[17px]"
  >
    For us, design isn’t just a visual, it’s an influential tool that helps
    brands achieve lasting success.
  </p>

  <button
    data-aos="fade-left"
    data-aos-delay="50"
    className="relative bg-surface overflow-hidden px-6 md:px-8 py-3 rounded-full group font-medium cursor-pointer w-full sm:w-auto"
    onClick={() => router.push("/about-us")}
  >
    <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300"></span>

    <span className="relative z-10 text-black group-hover:text-white transition">
      About us →
    </span>
  </button>
</div>
      </div>
    </section>
  );
}