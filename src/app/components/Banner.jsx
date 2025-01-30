import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Bell,
  Newspaper,
} from "lucide-react";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: "Revolutionizing Battery Technology",
      subtitle: "Future of Energy Storage",
      description:
        "Leading the transformation in sustainable energy solutions with next-generation battery technology and innovative storage solutions",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
      cta: { text: "Explore Solutions", link: "/solutions" },
      theme: "dark",
      citation: "Based on McKinsey's 2030 battery demand forecast $CITE_1",
    },
    {
      title: "Advanced Manufacturing Excellence",
      subtitle: "3D Printing & Digital Solutions",
      description:
        "Pioneering the future of manufacturing with state-of-the-art 3D printing and digital manufacturing technologies",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      cta: { text: "Discover Technology", link: "/technology" },
      theme: "light",
      citation: "Inspired by EOS GmbH professional solutions $CITE_2",
    },
    {
      title: "Innovation Hub Launch",
      subtitle: "Workforce Development",
      description:
        "Join our state-of-the-art innovation hub featuring advanced manufacturing technology and comprehensive training programs",
      image:
        "https://images.unsplash.com/photo-1565514020179-026b92b2d1b5?auto=format&fit=crop&q=80",
      cta: { text: "Join Program", link: "/innovation-hub" },
      theme: "dark",
      citation: "Program based on Miami's Advanced Manufacturing Hub $CITE_3",
    },
    {
      title: "Sustainable Process Innovation",
      subtitle: "Water Recovery Technology",
      description:
        "Implementing cutting-edge filtration technologies for sustainable industrial water management",
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80",
      cta: { text: "Learn More", link: "/sustainability" },
      theme: "light",
      citation: "Featuring PPG's innovative filtration technologies $CITE_4",
    },
  ];

  const news = [
    {
      category: "Technology",
      title: "New AI-Powered Manufacturing System Launched",
      date: "2h ago",
    },
    {
      category: "Innovation",
      title: "Breakthrough in Sustainable Energy Storage",
      date: "4h ago",
    },
    {
      category: "Events",
      title: "Global Innovation Summit 2025 Registration Open",
      date: "6h ago",
    },
  ];

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden mt-[72px]"
      style={{ height: "calc(100vh - 72px)", minHeight: "600px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
              currentSlide === index
                ? "opacity-100 translate-x-0 scale-100"
                : index < currentSlide
                ? "opacity-0 -translate-x-full scale-95"
                : "opacity-0 translate-x-full scale-95"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[3000ms] ease-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
              }}
            >
              <div
                className={`absolute inset-0 ${
                  slide.theme === "dark"
                    ? "bg-gradient-to-r from-black/80 via-black/60 to-transparent"
                    : "bg-gradient-to-r from-white/80 via-white/60 to-transparent"
                }`}
              />
            </div>

            <div className="relative h-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              <div className="flex flex-col justify-center h-full max-w-3xl">
                <div
                  className={`text-${
                    slide.theme === "dark" ? "white" : "gray-900"
                  }`}
                >
                  <div
                    className="mb-4 transform translate-y-8 opacity-0 transition-all duration-700 delay-300"
                    style={{
                      transform: currentSlide === index ? "translateY(0)" : "",
                      opacity: currentSlide === index ? 1 : 0,
                    }}
                  >
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold">
                      {slide.subtitle}
                    </span>
                  </div>
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight transform translate-y-8 opacity-0 transition-all duration-700 delay-500"
                    style={{
                      transform: currentSlide === index ? "translateY(0)" : "",
                      opacity: currentSlide === index ? 1 : 0,
                    }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl leading-relaxed transform translate-y-8 opacity-0 transition-all duration-700 delay-700"
                    style={{
                      transform: currentSlide === index ? "translateY(0)" : "",
                      opacity: currentSlide === index ? 1 : 0,
                    }}
                  >
                    {slide.description}
                  </p>
                  <div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 transform translate-y-8 opacity-0 transition-all duration-700 delay-1000"
                    style={{
                      transform: currentSlide === index ? "translateY(0)" : "",
                      opacity: currentSlide === index ? 1 : 0,
                    }}
                  >
                    <a
                      href={slide.cta.link}
                      className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 hover:border-blue-700 transition-colors duration-200"
                    >
                      {slide.cta.text}
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <span className="text-sm opacity-75">{slide.citation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-24 sm:bottom-[2rem] left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-800 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-200 rounded-full ${
                currentSlide === index
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-800 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="hidden absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white backdrop-blur-sm">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
            {news.map((item, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  {index === 0 ? (
                    <Bell className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  ) : (
                    <Newspaper className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  )}
                  <div className="min-w-0">
                    <span className="text-blue-400 text-sm font-medium block">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-medium mt-1 truncate">
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
