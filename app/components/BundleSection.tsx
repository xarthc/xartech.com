"use client";
import { useState } from "react";

export default function BundleSection() {
  const services = [
    {
      id: "web",
      title: "Web & App",
      desc: "Complete digital ecosystem for your business.",
      features: [
        "Next.js Website",
        "Cross-platform App",
        "API Backend",
        "Admin Dashboard",
      ],
    },
    {
      id: "video",
      title: "Video & Socials",
      desc: "Boost your social presence with premium content.",
      features: [
        "4K Video Editing",
        "Short-form Reels",
        "Social Media Mgmt",
        "Thumbnail Design",
      ],
    },
    {
      id: "uiux",
      title: "UI/UX & Web",
      desc: "From pixel-perfect design to high-speed code.",
      features: [
        "Figma Design",
        "Responsive Development",
        "User Journey Mapping",
        "SEO Optimization",
      ],
    },
    {
      id: "full",
      title: "Full Package",
      desc: "Everything included. Maximum value.",
      features: [
        "Web + App",
        "Design + Video",
        "Priority Support",
        "Fast Delivery",
      ],
    },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="w-full bg-surface py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-semibold mb-4">
          Technical Packages
        </h2>

        <p className="text-gray-600 mb-14">
          Select the package that fits your needs
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {services.map(service => {
            const active = selected === service.id;

            return (
              <div
                key={service.id}
                onClick={() =>
                  setSelected(prev =>
                    prev === service.id ? null : service.id
                  )
                }
                className={`
                  cursor-pointer rounded-3xl p-8 text-left
                  transition-all duration-300 border
                  ${active
                    ? "bg-black text-white border-black shadow-2xl scale-105"
                    : "bg-white hover:shadow-xl hover:scale-102 border-gray-200"}
                `}
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className={`mb-6 text-sm ${active ? "text-gray-300" : "text-gray-600"}`}>
                  {service.desc}
                </p>

                <ul className="space-y-2 text-sm">
                  {service.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>

                <button
                  className={`
                    mt-8 w-full py-3 rounded-xl font-medium transition
                    ${active
                      ? "bg-white text-black"
                      : "bg-gray-200 hover:bg-black hover:text-white"}
                  `}
                >
                  {active ? "Selected" : "Select Package"}
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
