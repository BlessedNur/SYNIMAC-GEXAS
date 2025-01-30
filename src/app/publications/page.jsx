"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicationsPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-12 mt-[4em] md:mt-[12em] bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="page-header mb-12">
            <h1 className="text-4xl font-bold mb-4">Publications</h1>
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
                  <span>Publications</span>
                </li>
              </ol>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  SYNIMAC GEXAS publishes comprehensive resources on maritime
                  technology, safety innovations, and industry standards. Our
                  publications are available in digital and print formats,
                  covering the latest developments in maritime innovation and
                  safety.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">
                    Digital Publications Platform
                  </h2>
                  <p className="text-blue-800">
                    Visit our new ePublications platform for instant access to
                    our digital collection. Available on multiple devices with
                    advanced search and bookmarking features.
                  </p>
                  <Link
                    href="/epublications"
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
                  >
                    Access Digital Library
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

                <h2 className="text-2xl font-bold mb-4">
                  Publication Categories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Technical Standards",
                      description:
                        "Industry standards and technical specifications for maritime technology",
                      image:
                        "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=400",
                    },
                    {
                      title: "Safety Guidelines",
                      description:
                        "Comprehensive safety protocols and best practices",
                      image:
                        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=400",
                    },
                    {
                      title: "Innovation Reports",
                      description:
                        "Latest developments in maritime technology and innovation",
                      image:
                        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400",
                    },
                    {
                      title: "Research Papers",
                      description:
                        "Academic and industry research publications",
                      image:
                        "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=400",
                    },
                  ].map((category, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="relative h-48">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h2>
                  <p className="mb-4">For publication inquiries and orders:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-600"
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
                      publications@synimac.org
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-600"
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky mt-[6em] top-24">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-6">
                    <h3 className="text-lg  font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/publications/catalog"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Publication Catalog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/publications/standards"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Technical Standards
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/publications/research"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Research Papers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/publications/guidelines"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Safety Guidelines
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=400"
                      alt="Latest Publication"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-semibold">
                      New Release
                    </span>
                    <h3 className="text-lg font-semibold mt-2">
                      Maritime Innovation Report 2025
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Comprehensive analysis of emerging maritime technologies
                      and their impact.
                    </p>
                    <Link
                      href="/publications/latest"
                      className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublicationsPage;
