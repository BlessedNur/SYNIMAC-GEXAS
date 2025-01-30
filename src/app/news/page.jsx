"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ITEMS_PER_PAGE = 6; // Define how many items you want per page

const WhatsNewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample news items array
  const newsItems = [
    {
      date: "30 January 2025",
      image:
        "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=800",
      title: "SYNIMAC Launches New Maritime AI Safety System",
      description:
        "Revolutionary artificial intelligence system enhances vessel navigation and collision avoidance capabilities.",
      link: "/news/maritime-ai-safety-system",
    },
    {
      date: "25 January 2025",
      image:
        "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=800",
      title: "Global Maritime Technology Standards Update",
      description:
        "New standards for maritime technology implementation and cybersecurity protocols announced.",
      link: "/news/technology-standards-update",
    },
    {
      date: "20 January 2025",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
      title: "Innovation Workshop Series Announced",
      description:
        "SYNIMAC GEXAS to host international workshops on maritime technology innovation.",
      link: "/news/innovation-workshops",
    },
    {
      date: "15 January 2025",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800",
      title: "Maritime Safety Technology Report Released",
      description:
        "Comprehensive analysis of emerging maritime safety technologies and their impact on shipping.",
      link: "/news/safety-technology-report",
    },
    {
      date: "10 January 2025",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800",
      title: "Partnership with Global Tech Leaders",
      description:
        "Strategic collaboration announced to advance maritime digitalization initiatives.",
      link: "/news/tech-partnership",
    },
    {
      date: "05 January 2025",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800",
      title: "Smart Port Technology Implementation",
      description:
        "New smart port solutions deployed to enhance maritime operations efficiency.",
      link: "/news/smart-port-tech",
    },
  ];

  // Calculate total pages based on items length
  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);

  // Function to generate pagination range with ellipsis
  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    // Always show first page
    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 1 && i < totalPages) {
        range.push(i);
      }
    }

    // Always show last page
    if (totalPages > 1) range.push(totalPages);

    // Add dots where needed
    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  // Get current items to display based on current page
  const currentItems = newsItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Navbar />
      <section className="py-12 mt-[4em] md:mt-[12em] bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-header mb-8">
            <h1 className="text-4xl font-bold mb-4">What's New</h1>
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
                  <Link href="/media" className="hover:text-blue-600">
                    Media Centre
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
                  <span>Latest News</span>
                </li>
              </ol>
            </nav>
          </div>

          <div className="mb-8">
            <p className="text-gray-600">
              Click here to view{" "}
              <Link
                href="/news/archives"
                className="text-blue-600 hover:text-blue-700"
              >
                archives
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="card shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href={item.link} className="hover:text-blue-600">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
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

          {/* Updated Pagination */}
          <div className="mt-12 flex justify-center">
            <nav
              className="flex items-center justify-between"
              aria-label="Pagination"
            >
              <div className="flex flex-1 justify-between sm:hidden">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium
                    ${
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium
                    ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  Next
                </button>
              </div>

              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div className="flex items-center space-x-1">
                  {/* Previous button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center rounded-md px-2 py-2
                      ${
                        currentPage === 1
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Page numbers */}
                  {getPaginationRange().map((page, index) => (
                    <React.Fragment key={index}>
                      {page === "..." ? (
                        <span className="px-3 py-2">
                          <MoreHorizontal className="h-5 w-5 text-gray-400" />
                        </span>
                      ) : (
                        <button
                          onClick={() => setCurrentPage(Number(page))}
                          className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                            ${
                              currentPage === page
                                ? "z-10 bg-blue-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
                            }`}
                        >
                          {page}
                        </button>
                      )}
                    </React.Fragment>
                  ))}

                  {/* Next button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center rounded-md px-2 py-2
                      ${
                        currentPage === totalPages
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </nav>
          </div>

          {/* Page indicator */}
          <div className="mt-4 text-center text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WhatsNewPage;
