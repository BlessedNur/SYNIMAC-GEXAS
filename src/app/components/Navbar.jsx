import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search, Phone, HelpCircle } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Add this near your other state declarations
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Add this useEffect to handle body scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 200) {
        // Always show navbar at the top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  // Update the generateAllPages function to include both navbar and footer links
  const generateAllPages = () => {
    const pages = [];

    // Add navbar items and their submenus
    navItems.forEach((item) => {
      pages.push({
        title: item.title,
        path: item.href,
        category: "Main Navigation",
        description: `Main section for ${item.title}`,
      });

      item.submenu.forEach((subItem) => {
        const subItemSlug = subItem.toLowerCase().replace(/\s+/g, "-");
        pages.push({
          title: subItem,
          path: `${item.href}/${subItemSlug}`,
          category: item.title,
          description: `${subItem} section under ${item.title}`,
        });
      });
    });

    // Add footer quick links
    quickLinks.forEach((section) => {
      section.links.forEach((link) => {
        pages.push({
          title: link.name,
          path: link.href,
          category: section.title,
          description: `${link.name} under ${section.title}`,
        });
      });
    });

    // Add additional pages with detailed content
    return [
      ...pages,
      // About section details
      {
        title: "Company Overview",
        path: "/about",
        category: "About Synimac Gexas",
        description:
          "Complete overview of our company history, mission, and values",
      },
     
      // Media Centre details
      {
        title: "Latest Press Releases",
        path: "/media",
        category: "Media Centre",
        description: "Most recent company announcements and press releases",
      },
      // Knowledge Centre details
     
      {
        title: "Training Programs",
        path: "/knowledge",
        category: "Knowledge Centre",
        description:
          "Browse our comprehensive training programs and certifications",
      },
      // Resources details
      {
        title: "Resources Overview",
        path: "/resources",
        category: "Resources",
      },
      {
        title: "FAQ Database",
        path: "/faq",
        category: "Resources",
        description: "Comprehensive database of frequently asked questions",
      },
      // Support pages
      {
        title: "24/7 Support Portal",
        path: "/support",
        category: "Support",
        description: "Access our support services and help desk",
      },
      {
        title: "Contact Information",
        path: "/contact",
        category: "Contact",
        description: "Get in touch with our team and find our locations",
      },
      // Legal pages from footer
      {
        title: "Privacy Policy",
        path: "/privacy",
        category: "Legal",
        description: "Our privacy policy and data protection practices",
      },
      {
        title: "Terms of Service",
        path: "/terms",
        category: "Legal",
        description: "Terms and conditions for using our services",
      },
      {
        title: "Security",
        path: "/security",
        category: "Legal",
        description: "Information about our security measures and practices",
      },
      {
        title: "Compliance",
        path: "/compliance",
        category: "Legal",
        description: "Details about our regulatory compliance and standards",
      },
      {
        title: "Sitemap",
        path: "/sitemap",
        category: "Site Navigation",
        description: "Complete overview of website structure",
      },
    ];
  };

  const quickLinks = [
    {
      title: "About Synimac Gexas",
      links: [
        { name: "Company Profile", href: "/about" },
        // { name: "Our Mission", href: "/about#mission" },
        // { name: "Our Vision", href: "/about#vision" },
        // { name: "Contact Us", href: "/about#contact" },
      ],
    },
    {
      title: "Media Centre",
      links: [
        { name: "News & Updates", href: "/media" },
        // { name: "Press Releases", href: "/media#press" },
        // { name: "Events", href: "/media#events" },
        // { name: "Media Library", href: "/media#library" },
      ],
    },
    {
      title: "Our Work",
      links: [
        { name: "Projects", href: "/our-work" },
        // { name: "Services", href: "/our-work#services" },
        // { name: "Technologies", href: "/our-work#technologies" },
        // { name: "Achievements", href: "/our-work#achievements" },
      ],
    },
    {
      title: "Knowledge Centre",
      links: [
        { name: "Publications", href: "/publications" },
        // { name: "Research", href: "/knowledge" },
        // { name: "Resources", href: "/resources" },
        // { name: "Support", href: "/support" },
      ],
    },
  ];

  // Enhanced search function with category grouping
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const allPages = generateAllPages();
      const filtered = allPages.filter((page) => {
        const searchStr =
          `${page.title} ${page.description} ${page.category}`.toLowerCase();
        return searchStr.includes(query.toLowerCase());
      });

      // Group results by category
      const groupedResults = filtered.reduce((acc, page) => {
        if (!acc[page.category]) {
          acc[page.category] = [];
        }
        acc[page.category].push(page);
        return acc;
      }, {});

      setSearchResults(groupedResults);
      setShowSearchResults(true);
    } else {
      setSearchResults({});
      setShowSearchResults(false);
    }
  };

  // Your existing navItems array...

  const navItems = [
    {
      title: "About Synimac Gexas",
      href: "/about",
      submenu: ["Overview", "Leadership", "Global Presence", "Careers"],
    },
    {
      title: "Media Centre",
      href: "/media",
      submenu: ["Press Releases", "News", "Events", "Media Library"],
    },
    {
      title: "Our Work",
      href: "/our-work",
      submenu: ["Solutions", "Industries", "Case Studies", "Innovation"],
    },
    {
      title: "Publications",
      href: "/publications",
      submenu: ["Reports", "Whitepapers", "Journals", "Archives"],
    },
    {
      title: "Knowledge Centre",
      href: "/knowledge",
      submenu: ["Research", "Training", "Documentation", "Support"],
    },
    {
      title: "What's New",
      href: "/news",
      submenu: ["Latest News", "Updates", "Blog", "Newsletter"],
    },
    {
      title: "Events",
      href: "/events",
      submenu: ["Schedule", "Registration", "Virtual Events", "Past Events"],
    },
    {
      title: "Resources",
      href: "/resources",
      submenu: ["Downloads", "Tools", "Guidelines", "FAQ"],
    },
  ];

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ... Previous utility bar code ... */}
      <div className="bg-gray-100 hidden md:block">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="flex justify-end items-center h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-600">
              <a
                href="/contact"
                className="hover:text-blue-700 flex items-center"
              >
                <Phone className="h-4 w-4 mr-1" />
                Contact Us
              </a>
              <a
                href="/support"
                className="hover:text-blue-700 flex items-center"
              >
                <HelpCircle className="h-4 w-4 mr-1" />
                24/7 Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* ... Logo code ... */}
            <div className="flex-shrink-0 flex gap-2 md:gap-3 items-center">
              <img
                src="/images/synimac_logo_page-0001-removebg-preview.png"
                alt="Synimac Gexas Logo"
                className="h-16 md:h-[6.5em] w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent leading-tight">
                  S.Y.N.I.M.A.C
                </span>
                <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent leading-tight">
                  GEXAS
                </span>
              </div>
            </div>
            {/* Enhanced Desktop Search with Categories */}
            <div
              className="hidden md:flex items-center relative"
              ref={searchRef}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search entire site..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setShowSearchResults(true)}
                  className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />

                {/* Enhanced Search Results Dropdown */}
                {showSearchResults && Object.keys(searchResults).length > 0 && (
                  <div className="absolute top-full mt-2 w-[32rem] bg-white rounded-lg shadow-lg border border-gray-200 max-h-[32rem] overflow-y-auto z-50">
                    {Object.entries(searchResults).map(
                      ([category, results]) => (
                        <div
                          key={category}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <div className="px-4 py-2 bg-gray-50">
                            <h3 className="text-sm font-semibold text-gray-700">
                              {category}
                            </h3>
                          </div>
                          <div>
                            {results.map((result, index) => (
                              <a
                                key={index}
                                href={result.path}
                                className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-150"
                                onClick={() => setShowSearchResults(false)}
                              >
                                <div className="flex items-start">
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">
                                      {result.title}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                      {result.description}
                                    </div>
                                    <div className="text-xs text-blue-600 mt-1">
                                      {result.path}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* No Results Message */}
                {showSearchResults &&
                  Object.keys(searchResults).length === 0 &&
                  searchQuery && (
                    <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                      <p className="text-sm text-gray-500">
                        No results found for "{searchQuery}"
                      </p>
                    </div>
                  )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>{" "}
          </div>
        </div>

        {/* ... Rest of your navigation code ... */}
        <div className="hidden md:block bg-blue-700">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex">
                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="px-6 py-4 text-white hover:bg-blue-800 text-sm font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`${
            isOpen
              ? "opacity-80 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } fixed inset-0 h-screen bg-black transition-opacity duration-300 ease-in-out z-40 md:hidden`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 h-screen w-[22rem] bg-white transform transition-transform duration-300 ease-in-out z-50 md:hidden flex flex-col`}
        >
          {/* Fixed Header */}
          <div className="p-4 border-b border-gray-200 bg-white">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img
                  src="/images/synimac_logo_page-0001-removebg-preview.png"
                  alt="Synimac Gexas Logo"
                  className="h-14 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent leading-tight">
                    S.Y.N.I.M.A.C
                  </span>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent leading-tight">
                    GEXAS
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {/* Mobile Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Mobile Navigation Items with Accordion */}
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block py-3 text-gray-800 hover:text-blue-700 font-medium border-b border-gray-200 last:border-0"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              {/* Mobile Utility Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="flex items-center text-gray-600 hover:text-blue-700"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Us
                  </a>
                  <a
                    href="/support"
                    className="flex items-center text-gray-600 hover:text-blue-700"
                  >
                    <HelpCircle className="h-5 w-5 mr-2" />
                    24/7 Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
