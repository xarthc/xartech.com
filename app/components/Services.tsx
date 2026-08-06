"use client";

// import { useRouter } from "next/navigation";

export default function ServicesShowcase() {
  // const router = useRouter();

  const services = [
    {
      category: "Digital Solutions",
      title: "Web Development",
      description:
        "Modern, fast, and scalable websites built to grow your business and deliver seamless user experiences...",
      tags: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "JavaScript",
        "REST APIs",
        "Firebase",
        "Supabase",
      ],
      video: "/web-video3.mp4",
      route: "/services/web",
    },
    {
      category: "Mobile Technology",
      title: "App Development",
      description:
        "High-performance mobile applications designed to deliver smooth user experiences and scalable functionality...",
      tags: [
        "iOS",
        "Android",
        "Flutter",
        "React Native",
        "Swift",
        "Kotlin",
      ],
      video: "/app-video2.mp4",
      route: "/services/app",
    },
    {
      category: "Product Design",
      title: "UI/UX Design",
      description:
        "User-centered interfaces crafted to improve usability, engagement, and overall digital experience...",
      tags: [
        "Wireframes",
        "Prototypes",
        "Figma",
        "Design Systems",
        "User Research",
        "Behance",
      ],
      video: "/ui-video3.mp4",
      route: "/services/ui",
    },
    {
      category: "Brand Identity",
      title: "Graphic Design",
      description:
        "Creative visuals and brand systems that communicate your identity and make a lasting impression...",
      tags: [
        "Branding",
        "Logos",
        "Social Media",
        "Illustrations",
        "Adobe Creative Suite",
        "Dribbble",
      ],
      video: "/graphic-video1.mp4",
      route: "/services/graphics",
    },
    {
      category: "Media Production",
      title: "Video Editing",
      description:
        "Professional video editing and motion graphics that transform raw footage into compelling visual stories...",
      tags: [
        "Motion",
        "Editing",
        "Content",
        "Adobe Premiere Pro",
        "After Effects",
        "Final Cut Pro",
        "DaVinci Resolve",
        "Vimeo",
      ],
      video: "/videoedit-video1.mp4",
      route: "/services/videos",
    },
  ];

  // Routing disabled for maintenance
  /*
  const handleNavigation = (route: string) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    router.push(route);
  };
  */

  return (
    <section
      id="services"
      className="w-full bg-surface py-10 md:py-18 px-4 sm:px-6"
      style={{ fontFamily: "Be Vietnam Pro" }}
    >
      {/* Label */}
      <div
        data-aos="fade-right"
        className="max-w-7xl mx-auto mb-6 md:mb-8"
      >
        <p className="text-base md:text-lg font-medium flex items-center gap-2">
          <span className="text-xl">•</span> Our Services
        </p>
      </div>

      {/* Heading */}
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        className="max-w-7xl mx-auto mb-10 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-semibold leading-tight md:leading-[1.15] tracking-tight max-w-3xl">
          We design, build, and deliver digital solutions that drive real
          business growth.
        </h2>
      </div>

      {/* Services Container */}
      <div className="bg-black text-white max-w-7xl mx-auto space-y-6 md:space-y-12 rounded-[24px] md:rounded-[36px] p-4 sm:p-6 md:p-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              group
              flex flex-col md:flex-row items-center gap-8 md:gap-16
              p-4 sm:p-6 md:p-10
              rounded-2xl md:rounded-3xl
              transition-all duration-500
              hover:bg-gray-800
              hover:shadow-md
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Content */}
            <div
              data-aos="fade-right"
              className="w-full md:w-1/2 space-y-4 md:space-y-6"
            >
              <p className="text-sm text-gray-200">
                • {service.category}
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {service.title}
              </h2>

              <p className="text-white leading-relaxed text-sm md:text-base max-w-md">
                {service.description}
              </p>

              <div className="flex gap-2 md:gap-3 pt-2 md:pt-4 flex-wrap">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 md:px-4 py-1 text-xs md:text-sm rounded-full border border-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Video */}
            <div
              data-aos="fade-left"
              className="w-full md:w-1/2"
            >
              <div className="rounded-2xl md:rounded-3xl bg-white p-3 sm:p-4 md:p-8 overflow-hidden">
                <div className="aspect-video overflow-hidden rounded-lg md:rounded-xl">
                  <video
                    src={service.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}