"use client";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
}
