"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MediaCenterPage = () => {
  const newsImages = [
    "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800", // Container ship
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800", // Maritime operations
    "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=800", // Port crane
    "https://images.unsplash.com/photo-1574610420626-a8c69e7206db?q=80&w=800", // Maritime safety
  ];

  const videoThumbnails = [
    "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=800", // Vessel bridge
    "https://images.unsplash.com/photo-1589930765934-99eee05d0a6b?q=80&w=800", // Maritime training
    "https://images.unsplash.com/photo-1544956222-3e98c27a6d31?q=80&w=800", // Maritime tech
  ];

  const resourceImages = [
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800", // Image library
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800", // Press kit
  ];

  return (
    <>
      <Navbar />
      <section className="py-12 mt-[4em] md:mt-[12em] bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="page-header mb-12">
            <h1 className="text-4xl font-bold mb-4">Media Centre</h1>
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
                  <span>Media Centre</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Latest News Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-600 font-semibold">Latest News</span>
              </div>
              <Link
                href="/news"
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                View All News
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={imageUrl}
                      alt={`Maritime News ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        22 January 2025
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      <Link href="/news/1" className="hover:text-blue-600">
                        Maritime Safety Updates for 2025
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      New guidelines for maritime safety protocols have been
                      implemented...
                    </p>
                    <Link
                      href="/news/1"
                      className="text-blue-600 hover:text-blue-700 flex items-center"
                    >
                      Continue Reading
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
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mb-16">
            <div className="bg-blue-50 px-4 py-2 rounded-lg inline-block mb-8">
              <span className="text-blue-600 font-semibold">Contact Us</span>
            </div>
            <p className="text-gray-600 mb-8">
              The Media Centre is staffed between 9.00 and 5.30 UK time, Monday
              to Friday, by members of the Communications team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Head of Communications",
                  name: "John Smith",
                  tel: "+44 20 7587 3274",
                  email: "media@synimac.org",
                },
                {
                  title: "Media Relations Officer",
                  name: "Sarah Johnson",
                  tel: "+44 20 7587 3191",
                  email: "media@synimac.org",
                },
                {
                  title: "Press Officer",
                  name: "Michael Brown",
                  tel: "+44 20 7587 3134",
                  email: "media@synimac.org",
                },
              ].map((contact, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    {contact.title}
                  </h3>
                  <h4 className="text-gray-700 mb-4">{contact.name}</h4>
                  <div className="space-y-2">
                    <a
                      href={`tel:${contact.tel}`}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
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
                      {contact.tel}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
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
                      {contact.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multimedia Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-600 font-semibold">Multimedia</span>
              </div>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                View All Videos
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
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoThumbnails.map((imageUrl, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48 group">
                    <Image
                      src={imageUrl}
                      alt={`Video Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4l12 6-12 6z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">
                      Maritime Safety Briefing
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Resources Section */}
          <div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg inline-block mb-8">
              <span className="text-blue-600 font-semibold">
                Media Resources
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Image Library",
                  description:
                    "Access our comprehensive collection of maritime images",
                  image: resourceImages[0],
                },
                {
                  title: "Press Kit",
                  description:
                    "Download logos, fact sheets, and other press materials",
                  image: resourceImages[1],
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl"
                >
                  <div className="relative h-64">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 p-6 flex flex-col justify-end">
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-white/80 mb-4">
                        {resource.description}
                      </p>
                      <Link
                        href="/resources"
                        className="text-white flex items-center"
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
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MediaCenterPage;
