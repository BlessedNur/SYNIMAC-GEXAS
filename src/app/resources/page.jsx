"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResourcesPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-12 mt-[4em] md:mt-[12em] bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="row justify-content-center">
            {/* Main Content Column */}
            <div className="col-lg-12 col-xl-7">
              <article className="article">
                <header className="mb-12">
                  <h1 className="text-4xl font-bold mb-4">
                    Documents and Resources
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
                        <span>Resources</span>
                      </li>
                    </ol>
                  </nav>
                </header>

                <div className="content">
                  <p className="lead text-lg text-gray-600 mb-8">
                    SYNIMAC GEXAS provides comprehensive resources and
                    documentation for maritime safety and security in the Gulf
                    of Guinea region.
                  </p>

                  {/* Document Repository Section */}
                  <div className="bg-blue-50 rounded-xl p-8 mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                      Document Repository
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">
                          Official Documents
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Maritime Safety Reports
                          </li>
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Security Guidelines
                          </li>
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Regional Cooperation Frameworks
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">
                          Technical Resources
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Safety Protocols
                          </li>
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Training Materials
                          </li>
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Best Practices Guides
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gray-50 rounded-xl p-8 mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Document Requests
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
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
                            docs@synimac.org
                          </li>
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
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
                            +241 XX XXX XXX
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Technical Support
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
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
                            support@synimac.org
                          </li>
                          <li className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-3 text-blue-600"
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
                            +241 XX XXX XXX
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold mb-4">
                        Online Services
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/resources/database"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
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
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                            Maritime Database
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/training"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
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
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                            Training Portal
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold mb-4">
                        Forms & Applications
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/resources/forms"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
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
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                            Download Forms
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/certificates"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
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
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                            Certificates
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold mb-4">
                        Latest Updates
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/news"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
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
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                            News & Announcements
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/events"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
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
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                            Upcoming Events
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResourcesPage;
