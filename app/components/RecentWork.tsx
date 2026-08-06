export default function RecentWork() {
  const works = [
    {
      title: "TripGo Hospitality",
      tag: "WEB DEVELOPMENT",
      image: "/Screenshot 2025-10-23 at 7.22.29 PM.png",
      link: "https://devanshi54.wixsite.com/tripgo-hospitality",
    },
    {
      title: "Vaya App",
      tag: "APP DEVELOPMENT",
      image: "/Screenshot 2026-03-17 at 4.08.08 PM.png",
      link: "https://drive.google.com/file/d/1Ki9keFvc8Ygro6QpMo04Ng2WHK56k5GO/view",
    },
    {
     

      title: "GeoVerse",
      tag: "VEDIO EDIT",
      image: "/Screenshot 2026-03-18 at 4.31.03 PM.png",
      link: "https://drive.google.com/file/d/1F-WAH0fIaCMWOB_XrDwPDtk5L6U4CDP1/view?usp=sharing",
    },
    {
      title: "Dyslexia",
      tag: "WEB DEVELOPMENT",
      image: "/Screenshot 2025-10-23 at 7.23.34 PM.png",
      link: "https://sarthak2226cseai11.wixsite.com/my-site-12",
    },
    {
      title: "Dello Music UI System",
      tag: "UI / UX",
      image: "/Screenshot 2026-03-18 at 4.33.27 PM.png",
      link: "https://drive.google.com/file/d/1UParq7DgGxz6CavAUob7GKSiPcWfMbzy/view",
    },
    {
       title: "Claire",
      tag: "WEBSITE DESIGN",
      image: "/Screenshot 2026-03-17 at 4.10.18 PM.png",
      link: "https://drive.google.com/file/d/1y4nuxFBFppXUJnAAuab4k96KHXNxHX5v/view",
    },
  ];

  return (
    <section id="recent" className="w-full bg-surface text-black py-1 px-6" style={{fontFamily:"Be Vietnam Pro"}}>
      {/* Feature works label */}
     <div 
     data-aos="fade-right"
     className="max-w-7xl mx-auto mb-8">
      <p 
      className="text-lg font-medium flex items-center gap-2">
        <span className="text-xl">•</span>Recent Works
        </p>
      </div> 

        {/* Large Statement */}
      <div 
       data-aos="fade-right"
      data-aos-delay="50"
      className="max-w-7xl mx-auto mb-20">

        <h2 
        className="text-[48px] md:text-[56px] font-semibold leading-[1.15] tracking-tight max-w-3xl">
Building modern digital solutions that elevate brands and drive results. </h2>
      </div>
      
      <div className="max-w-7xl mx-auto bg-white px-20 py-20 rounded-4xl">

        {/* Heading */}
        <div
        data-aos="fade-up"
        className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold">
            Recent Works
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A glimpse into some of the digital experiences we’ve crafted
            for our global clients.
          </p>
        </div>

        {/* Cards */}
        <div
       
        className="grid md:grid-cols-2 gap-8 hover:shadow-black">
          {works.map((work, i) => (
            <a
             data-aos="zoom-in"
              key={i}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-gray-900"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs tracking-widest text-gray-300">
                  {work.tag}
                </p>
                <h3 className="text-2xl font-semibold mt-1">
                  {work.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
