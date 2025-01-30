"use client";
import React from "react";
import { Search, ChevronRight, Calendar, MapPin, FileText } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PressBriefingsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-[1350px] mx-auto mt-[12em]  bg-white">
        {/* Page Header */}
        <div className="bg-gray-50 border-b ">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                Latest Press Briefings
              </h1>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  <li>
                    <a href="/" className="text-blue-600 hover:text-blue-800">
                      Home
                    </a>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <a
                      href="/media-centre"
                      className="ml-4 text-blue-600 hover:text-blue-800"
                    >
                      Media Centre
                    </a>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="ml-4 text-gray-700">
                      Latest Press Briefings
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Archives Link */}
          <div className="mb-12">
            <p className="text-gray-600">
              Click here to view Press Releases from past years (eg: 2024, 2023,
              2022, etc.):&nbsp;
              <a href="/archives" className="text-blue-600 hover:text-blue-800">
                archives
              </a>
            </p>
          </div>

          {/* Press Briefings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image:
                  "https://wwwcdn.imo.org/localresources/en/MediaCentre/WhatsNew/PublishingImages/Galaxy Leader_banner_medium.jpg",
                date: "22 January 2025",
                title: "Statement on the release of the Galaxy Leader crew",
                description:
                  "IMO Secretary-General Mr. Arsenio Dominguez has welcomed the release of the crew of the MV Galaxy Leader, after more than a year in captivity.",
                link: "/press-briefings/galaxy-leader-crew-release",
              },
              {
                image:
                  "https://wwwcdn.imo.org/localresources/en/MediaCentre/WhatsNew/PublishingImages/EgyptOffice.jpg",
                date: "20 January 2025",
                title:
                  "IMO launches Regional Presence Office for the MENA region in Alexandria, Egypt",
                description:
                  "New office will coordinate technical assistance for countries in the region in the areas of maritime safety, security and environmental sustainability.",
                link: "/press-briefings/regional-office-egypt",
              },
              {
                image:
                  "https://wwwcdn.imo.org/localresources/en/MediaCentre/WhatsNew/PublishingImages/WMD 2025 launch_banner_medium.jpg",
                date: "17 January 2025",
                title:
                  "IMO Secretary-General joins school children to launch ocean-themed World Maritime Day 2025",
                description:
                  "'Our ocean, Our obligation, Our opportunity' theme launched for 2025",
                link: "/press-briefings/world-maritime-day-2025",
              },
              {
                image:
                  "https://wwwcdn.imo.org/localresources/en/MediaCentre/WhatsNew/PublishingImages/PressBriefing2025 copy.jpg",
                date: "15 January 2025",
                title:
                  "Dark fleet, decarbonization and geopolitical pressures remain top maritime focus areas in 2025",
                description:
                  "Range of pressing issues to be addressed this year by the world's shipping regulator.",
                link: "/press-briefings/maritime-focus-2025",
              },
            ].map((briefing, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={briefing.image}
                      alt={briefing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                      {briefing.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    <a href={briefing.link}>{briefing.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4">{briefing.description}</p>
                  <a
                    href={briefing.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read more <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav
              className="flex items-center space-x-2"
              aria-label="Pagination"
            >
              <span className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
                1
              </span>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50"
              >
                3
              </a>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
