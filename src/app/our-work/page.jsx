"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OurWorkPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-12 mt-[12em] bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="page-header mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Work</h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Our Work</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Work Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Maritime Innovation",
                description:
                  "Leading the development of cutting-edge maritime technologies and solutions for safer, more efficient shipping operations.",
                image: "/images/maritime-innovation.jpg",
                link: "/work/maritime-innovation",
              },
              {
                title: "Safety Technology",
                description:
                  "Developing and implementing advanced safety systems and protocols to enhance maritime operations safety.",
                image: "/images/safety-tech.jpg",
                link: "/work/safety-technology",
              },
              {
                title: "Environmental Solutions",
                description:
                  "Creating sustainable technologies and practices to reduce maritime environmental impact and promote ocean conservation.",
                image: "/images/environmental.jpg",
                link: "/work/environmental",
              },
              {
                title: "Digital Maritime",
                description:
                  "Advancing digital transformation in maritime operations through AI, IoT, and blockchain solutions.",
                image: "/images/digital-maritime.jpg",
                link: "/work/digital-maritime",
              },
              {
                title: "Research & Development",
                description:
                  "Conducting pioneering research in maritime technology and fostering innovation through collaborative projects.",
                image: "/images/research.jpg",
                link: "/work/research",
              },
              {
                title: "Industry Collaboration",
                description:
                  "Building partnerships with maritime stakeholders to drive technological advancement and standardization.",
                image: "/images/collaboration.jpg",
                link: "/work/collaboration",
              },
              {
                title: "Training & Education",
                description:
                  "Providing comprehensive training programs and educational resources for maritime professionals.",
                image: "/images/training.jpg",
                link: "/work/training",
              },
              {
                title: "Certification Services",
                description:
                  "Offering certification and validation services for maritime technologies and systems.",
                image: "/images/certification.jpg",
                link: "/work/certification",
              },
              {
                title: "Maritime Cybersecurity",
                description:
                  "Developing solutions to protect maritime operations from cyber threats and ensure digital resilience.",
                image: "/images/cybersecurity.jpg",
                link: "/work/cybersecurity",
              },
              {
                title: "Future Technologies",
                description:
                  "Exploring and developing next-generation maritime technologies for the future of shipping.",
                image: "/images/future-tech.jpg",
                link: "/work/future-technologies",
              },
            ].map((area, index) => (
              <div key={index} className="relative group overflow-hidden">
                <div className="entry-item entry-primary h-[400px] relative">
                  <div className="entry-media h-full">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="entry-footer absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h2 className="entry-title text-2xl font-bold mb-3">
                      {area.title}
                    </h2>
                    <p className="entry-summary text-white/90 mb-4">
                      {area.description}
                    </p>
                    <Link
                      href={area.link}
                      className="btn inline-flex items-center px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
                    >
                      Find Out More
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                  <Link
                    href={area.link}
                    className="absolute inset-0"
                    aria-label={`Read more about ${area.title}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Research Papers",
                  description:
                    "Access our latest research publications and technical papers",
                  icon: "📄",
                  link: "/resources/papers",
                },
                {
                  title: "Innovation Hub",
                  description:
                    "Explore our innovation projects and initiatives",
                  icon: "💡",
                  link: "/resources/innovation",
                },
                {
                  title: "Technical Documentation",
                  description: "Browse technical specifications and guidelines",
                  icon: "📚",
                  link: "/resources/documentation",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link
                    href={resource.link}
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurWorkPage;
