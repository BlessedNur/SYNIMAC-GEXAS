"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const missionRef = useRef(null);
  const innovationsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const quickLinks = [
    {
      name: "Our Mission & Vision",
      onClick: () => scrollToSection(missionRef),
    },
    {
      name: "Our Innovations",
      onClick: () => scrollToSection(innovationsRef),
    },
    {
      name: "Contact Us",
      onClick: () => scrollToSection(contactRef),
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-12 mt-[4em] md:mt-[12em] bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose max-w-none">
                <header className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Introduction to SYNIMAC GEXAS
                  </h1>
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
                        <Link href="/about" className="hover:text-blue-600">
                          About SYNIMAC GEXAS
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
                        <span className="text-gray-400">Introduction</span>
                      </li>
                    </ol>
                  </nav>
                </header>

                <div className="space-y-6">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    SYNIMAC GEXAS - Synergistic Maritime Innovation and
                    Advancement Center - is a pioneering organization dedicated
                    to advancing maritime technology, safety, and sustainable
                    development in the global maritime sector.
                  </p>

                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg my-8">
                    <Image
                      src="/images/synimac_headquarters.jpg"
                      alt="SYNIMAC GEXAS Headquarters"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div ref={innovationsRef} className="space-y-4 text-gray-600">
                    <p>
                      As a leading maritime innovation center, SYNIMAC GEXAS
                      serves as a crucial nexus between industry, research, and
                      technological advancement in the maritime sector. Our
                      organization is committed to driving forward the future of
                      maritime operations through cutting-edge research,
                      technological innovation, and sustainable practices.
                    </p>

                    <p>
                      Founded with the vision of transforming maritime
                      operations through innovation, SYNIMAC GEXAS has
                      established itself as a key player in developing and
                      implementing advanced maritime solutions. Our work spans
                      across various crucial areas including:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 my-6">
                      <li>Maritime Safety and Security Innovation</li>
                      <li>Environmental Protection Technologies</li>
                      <li>Digital Maritime Solutions</li>
                      <li>Sustainable Shipping Practices</li>
                      <li>Maritime Education and Training</li>
                    </ul>
                  </div>

                  <div className="space-y-8 mt-12">
                    <section ref={missionRef}>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Our Mission
                      </h2>
                      <p className="text-gray-600">
                        To lead the transformation of the maritime industry
                        through innovative technologies, sustainable practices,
                        and comprehensive solutions that enhance safety,
                        efficiency, and environmental protection in maritime
                        operations.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Our Vision
                      </h2>
                      <p className="text-gray-600">
                        To be the global leader in maritime innovation, driving
                        the industry towards a more sustainable, efficient, and
                        technologically advanced future.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Core Values
                      </h2>
                      <ul className="space-y-4">
                        {[
                          {
                            title: "Innovation",
                            desc: "Continuously pushing boundaries in maritime technology",
                          },
                          {
                            title: "Sustainability",
                            desc: "Promoting environmentally responsible maritime practices",
                          },
                          {
                            title: "Excellence",
                            desc: "Maintaining the highest standards in all our endeavors",
                          },
                          {
                            title: "Collaboration",
                            desc: "Fostering partnerships for comprehensive solutions",
                          },
                          {
                            title: "Safety",
                            desc: "Prioritizing maritime safety in all innovations",
                          },
                        ].map((value, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                              <svg
                                className="h-4 w-4 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <span className="font-semibold text-gray-900">
                                {value.title}:
                              </span>
                              <span className="text-gray-600 ml-1">
                                {value.desc}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <div
                      ref={contactRef}
                      className="bg-gray-50 rounded-xl p-8 mt-12"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Contact Information
                      </h3>
                      <div className="space-y-4 text-gray-600">
                        <p>
                          SYNIMAC GEXAS
                          <br />
                          Maritime Innovation Center
                          <br />
                          Digital Harbor Complex
                          <br />
                          CM 00237
                        </p>
                        <div className="flex flex-col space-y-2">
                          <a
                            href="mailto:synimacgexas@gmail.com"
                            className="flex items-center hover:text-blue-600"
                          >
                            <svg
                              className="h-5 w-5 mr-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            synimacgexas@gmail.com
                          </a>
                          <a
                            href="tel:+6565557890"
                            className="flex items-center hover:text-blue-600"
                          >
                            <svg
                              className="h-5 w-5 mr-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +65 6555 7890
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-[13em] space-y-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Quick Links
                    </h3>
                    <nav className="space-y-2">
                      {quickLinks.map((link, index) => (
                        <button
                          key={index}
                          onClick={link.onClick}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors w-full text-left"
                        >
                          <svg
                            className="h-4 w-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {link.name}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Related Documents
                    </h3>
                    <nav className="space-y-2">
                      {[
                        {
                          name: "Annual Report 2024",
                          href: "/documents/annual-report",
                        },
                        {
                          name: "Innovation Brief",
                          href: "/documents/innovation-brief",
                        },
                        {
                          name: "Sustainability Report",
                          href: "/documents/sustainability",
                        },
                        {
                          name: "Corporate Brochure",
                          href: "/documents/brochure",
                        },
                      ].map((doc, index) => (
                        <Link
                          key={index}
                          href={doc.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <svg
                            className="h-4 w-4 mr-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          {doc.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
