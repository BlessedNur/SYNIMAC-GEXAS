import React from "react";
import {
  Facebook,
  Youtube,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  HelpCircle,
} from "lucide-react";

function Footer() {
  const quickLinks = [
    {
      title: "About Synimac Gexas",
      links: [
        { name: "Overview", href: "/about/overview" },
        { name: "Leadership", href: "/about/leadership" },
        { name: "Global Presence", href: "/about/global-presence" },
        { name: "Careers", href: "/about/careers" },
      ],
    },
    {
      title: "Our Work",
      links: [
        { name: "Solutions", href: "/our-work/solutions" },
        { name: "Industries", href: "/our-work/industries" },
        { name: "Case Studies", href: "/our-work/case-studies" },
        { name: "Innovation", href: "/our-work/innovation" },
      ],
    },
    {
      title: "Knowledge Centre",
      links: [
        { name: "Research", href: "/knowledge/research" },
        { name: "Training", href: "/knowledge/training" },
        { name: "Documentation", href: "/knowledge/documentation" },
        { name: "Support", href: "/knowledge/support" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Downloads", href: "/resources/downloads" },
        { name: "Tools", href: "/resources/tools" },
        { name: "Guidelines", href: "/resources/guidelines" },
        { name: "FAQ", href: "/resources/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1a237e] text-white">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/synimac-logo-white.png"
              alt="SYNIMAC GEXAS Logo"
              className="h-12 lg:h-16"
            />
            <p className="text-sm">
              SYNIMAC GEXAS
              <br />
              Maritime Innovation Center
              <br />
              Digital Harbor Complex
              <br />
              CM 00237
            </p>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white hover:underline flex items-center gap-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact and Social */}
        <div className="mt-8 lg:mt-12 pt-8 border-t border-indigo-800">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com/SynimacGexas"
                  className="text-white hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@SynimacGexas"
                  className="text-white hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="mailto:synimacgexas@gmail.com"
                  className="text-white hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="text-sm">synimacgexas@gmail.com</span>
                </a>
                <a
                  href="tel:+6565557890"
                  className="text-white hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="text-sm">+65 6555 7890</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-300 w-full lg:w-auto text-center lg:text-right">
              © {new Date().getFullYear()} SYNIMAC GEXAS Pte Ltd. All rights
              reserved.
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 lg:mt-8 pt-4 border-t border-indigo-800">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-300">
            <a href="/privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white hover:underline">
              Terms of Service
            </a>
            <a href="/security" className="hover:text-white hover:underline">
              Security
            </a>
            <a href="/compliance" className="hover:text-white hover:underline">
              Compliance
            </a>
            <a href="/sitemap" className="hover:text-white hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
