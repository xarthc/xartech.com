"use client";
import { useState } from "react";

export default function ContactSection() {
  const services = [
    "Website",
    "App",
    "UI/UX",
    "Graphic Design",
    "Video Editing",
  ];

  const currencies = ["USD", "INR", "EUR", "GBP"];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [currency, setCurrency] = useState("USD");
  const [budget, setBudget] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service you are interested in.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget,
          currency,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully 🚀");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        setSelectedServices([]);
        setBudget("");
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      alert("Server error ❌");
    }
  };

  return (
    <section
      id="contactUs"
      className="w-full bg-surface text-black py-10 md:py-16 px-4 sm:px-6"
      style={{ fontFamily: "Be Vietnam Pro" }}
    >
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-20">
        <p
          data-aos="fade-right"
          className="text-base md:text-lg font-medium flex items-center gap-2"
        >
          <span className="text-xl">•</span> We’re explorers
        </p>

        <h2
          data-aos="fade-left"
          className="text-3xl sm:text-4xl md:text-[52px] font-semibold leading-tight md:leading-[1.15] tracking-tight"
        >
          Ready to take next step with us?
        </h2>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-white px-5 sm:px-8 md:px-16 py-10 md:py-20 rounded-[24px] md:rounded-[36px] shadow-2xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          {/* Left Side */}
          <div>
            <button
              data-aos="fade-right"
              className="border border-gray-300 px-5 py-2 rounded-full text-sm text-gray-500"
            >
              Contact us
            </button>

            <h2
              data-aos="fade-right"
              data-aos-delay="50"
              className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-6 md:mt-8 leading-tight"
            >
              Let’s make <br /> an impact
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name + Company */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div data-aos="fade-up">
                <label className="text-sm text-gray-500">Name</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

              <div data-aos="fade-up">
                <label className="text-sm text-gray-500">Company</label>
                <input
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div data-aos="fade-up" data-aos-delay="100">
                <label className="text-sm text-gray-500">Your Email</label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="150">
                <label className="text-sm text-gray-500">Your Phone</label>
                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>
            </div>

            {/* Services */}
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-sm text-gray-600 mb-4">
                I’m interested in...
              </p>

              <div
                className="flex flex-wrap gap-3 md:gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {services.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-full border transition
                      ${
                        selectedServices.includes(service)
                          ? "bg-black text-white border-black"
                          : "border-gray-300 hover:bg-gray-100"
                      }
                    `}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div data-aos="fade-up" data-aos-delay="400">
              <label className="text-sm text-gray-600">
                Project Budget
              </label>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <select
                  required
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="border border-gray-300 rounded-full px-5 py-3 focus:outline-none sm:w-[140px]"
                >
                  {currencies.map((cur) => (
                    <option key={cur} value={cur}>
                      {cur}
                    </option>
                  ))}
                </select>

                <input
                  required
                  type="number"
                  placeholder="Enter Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div data-aos="fade-up" data-aos-delay="500">
              <label className="text-sm text-gray-600">
                Tell us about your project.
              </label>

              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 focus:outline-none mt-4 resize-none"
                placeholder="Write something concise..."
              />
            </div>

            {/* Submit */}
            <button
              data-aos="zoom-in"
              data-aos-delay="400"
              type="submit"
              className="w-full bg-black text-white py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}