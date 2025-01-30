"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const KnowledgeCentrePage = () => {
  return (
    <>
      <Navbar />
      <section className="py-12 mt-[4em] md:mt-[12em] bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <article className="article">
                <header>
                  <h1 className="text-4xl font-bold mb-4">
                    Maritime Technology Knowledge Centre
                  </h1>
                  <nav className="flex mb-8" aria-label="Breadcrumb">
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
                        <span>Knowledge Centre</span>
                      </li>
                    </ol>
                  </nav>
                </header>

                <div className="prose max-w-none">
                  <p className="text-xl font-semibold text-blue-600 mb-6">
                    "Advancing Maritime Innovation Through Knowledge"
                  </p>

                  <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000"
                      alt="Maritime Technology Centre"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-gray-700 mb-6">
                    The Maritime Technology Knowledge Centre serves as a central
                    hub for maritime innovation, technology research, and
                    industry best practices. We provide comprehensive resources
                    and information services to support maritime professionals,
                    researchers, and industry partners in advancing maritime
                    technology and safety standards.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        title: "Digital Resources",
                        description:
                          "Access our extensive collection of technical documentation, research papers, and industry standards",
                        icon: (
                          <svg
                            className="w-12 h-12 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        ),
                      },
                      {
                        title: "Research Database",
                        description:
                          "Explore our comprehensive database of maritime technology research and innovation",
                        icon: (
                          <svg
                            className="w-12 h-12 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        ),
                      },
                    ].map((resource, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md"
                      >
                        <div className="mb-4">{resource.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600">{resource.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg
                          className="w-6 h-6 text-blue-600 mt-1 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <div>
                          <h3 className="font-semibold mb-1">
                            Research Support
                          </h3>
                          <p className="text-gray-600">
                            Expert assistance in maritime technology research
                            and development
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-6 h-6 text-blue-600 mt-1 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                        <div>
                          <h3 className="font-semibold mb-1">
                            Technical Documentation
                          </h3>
                          <p className="text-gray-600">
                            Access to comprehensive technical specifications and
                            standards
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <aside className="sticky mt-[6] top-24 space-y-6">
                {/* Quick Links Widget */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/knowledge/search"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Search Knowledge Base
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/knowledge/technical-library"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Technical Library
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/knowledge/research"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Research Papers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/knowledge/standards"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Industry Standards
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Latest Updates Widget */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Latest Updates
                    </h3>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <span className="text-sm text-blue-600">
                          Technical Update
                        </span>
                        <h4 className="font-medium mt-1">
                          New Safety Standards Released
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Updated guidelines for maritime technology
                          implementation
                        </p>
                      </div>
                      <div className="border-b pb-4">
                        <span className="text-sm text-blue-600">Research</span>
                        <h4 className="font-medium mt-1">
                          Innovation in Maritime AI
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Latest developments in maritime artificial
                          intelligence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-3 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        knowledge@synimac.org
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-3 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        +44 (0)20 7123 4567
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default KnowledgeCentrePage;
