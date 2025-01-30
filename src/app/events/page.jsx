"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Maritime Safety Conference 2025",
      date: "15-16 March 2025",
      location: "Libreville, Gabon",
      description:
        "Annual conference focusing on maritime safety standards and regulations in the Gulf of Guinea region.",
      image:
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800",
      category: "Conference",
    },
    {
      id: 2,
      title: "Maritime Training Workshop",
      date: "20 April 2025",
      location: "Port-Gentil, Gabon",
      description:
        "Professional development workshop for maritime safety experts and industry professionals.",
      image:
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800",
      category: "Workshop",
    },
    {
      id: 3,
      title: "SYNIMAC GEXAS Annual Meeting",
      date: "10 May 2025",
      location: "Douala, Cameroon",
      description:
        "Annual general meeting for all members to discuss strategic initiatives and industry developments.",
      image:
        "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=800",
      category: "Meeting",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Maritime Security Symposium",
      date: "15 January 2025",
      location: "Lagos, Nigeria",
      description:
        "Discussion on maritime security challenges and solutions in West Africa.",
      image:
        "https://images.unsplash.com/photo-1574610420626-a8c69e7206db?q=80&w=800",
      category: "Symposium",
    },
    // Add more past events...
  ];

  return (
    <>
      <Navbar />
      <section className="py-12 mt-[4em] md:mt-[12em] bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="page-header mb-12">
            <h1 className="text-4xl font-bold mb-4">SYNIMAC GEXAS Events</h1>
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
                  <span>Events</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Upcoming Events Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-600 font-semibold">
                  Upcoming Events
                </span>
              </div>
              <Link
                href="/events/calendar"
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                View Calendar
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {event.date}
                      </span>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-gray-500">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link
                        href={`/events/${event.id}`}
                        className="hover:text-blue-600"
                      >
                        {event.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/events/${event.id}`}
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
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg inline-block mb-8">
              <span className="text-blue-600 font-semibold">Past Events</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48 md:h-auto">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center mb-3 text-gray-500">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        <Link
                          href={`/events/${event.id}`}
                          className="hover:text-blue-600"
                        >
                          {event.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <Link
                        href={`/events/${event.id}`}
                        className="text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        View Details
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

export default EventsPage;
