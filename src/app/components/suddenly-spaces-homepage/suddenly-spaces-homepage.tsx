import { useState } from "react";
import cx from "classix";

/**
 * Logo icon component for SuddenlySpaces branding.
 * Extracted for reusability and to keep the header markup clean.
 */
const Logo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SuddenlySpaces logo"
  >
    <g clipPath="url(#clip0_0_146)">
      <path
        d="M7.26018 4.90608L12 0.16626H5.34665L1.7472 3.76571V10.0855L0 11.8321H6.65354L10.2534 8.23248V4.90589H7.26018V4.90608ZM1.98314 9.84971V7.02343L8.60437 0.402198H11.4306C10.3172 1.51561 4.85926 6.97358 1.98314 9.84971ZM5.44449 0.402198H8.27095L1.98314 6.68983V3.86337L5.44449 0.402198ZM7.02443 5.14201H9.85071L3.39618 11.5965H0.568615L7.02425 5.14201H7.02443ZM6.55588 11.5965H3.7296L10.0172 5.30872V8.135L6.55569 11.5965H6.55588Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_146">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const SuddenlySpacesHomepage = () => {
  // Tab state controls which property category is being searched (commercial or residential)
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">(
    "commercial"
  );

  // Pricing mode toggles between hourly and monthly rate displays
  const [pricingMode, setPricingMode] = useState<"hourly" | "monthly">(
    "hourly"
  );

  // Price range with fixed min and adjustable max via slider
  const [priceRange, setPriceRange] = useState({ min: 500, max: 2500 });

  // Search filter state
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [spaceType, setSpaceType] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-b-[#e5e7eb] px-8 py-4">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="flex items-baseline">
            <span className="font-primary-bold text-base tracking-wide">
              SUDDENLY
            </span>
            <span className="font-primary text-base tracking-wide">SPACES</span>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <button className="font-primary text-sm text-[#000000] hover:text-[#4a5568]">
            Switch to Tenant
          </button>
          <button className="rounded-full bg-[#000000] px-6 py-2 font-primary text-sm text-[#ffffff] hover:bg-[#2d3748]">
            List Your Space
          </button>
          <div className="flex items-center gap-2">
            <span className="text-lg">🌐</span>
            <span className="font-primary text-sm">EN</span>
          </div>
          <button className="font-primary text-sm text-[#000000] hover:text-[#4a5568]">
            Sign Up
          </button>
          <button className="font-primary text-sm text-[#000000] hover:text-[#4a5568]">
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center px-8 pt-24">
        <h1 className="text-center font-primary-bold text-6xl leading-tight text-[#ff0000]">
          Let&apos;s Find Your Ideal Space
        </h1>
        <p className="mt-4 text-center font-primary text-2xl text-[#000000]">
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Tabs */}
        <div className="mt-16 flex gap-8">
          <button
            onClick={() => setActiveTab("commercial")}
            className={cx(
              "pb-2 font-primary text-sm",
              activeTab === "commercial"
                ? "border-b-2 border-b-[#000000] text-[#000000]"
                : "text-[#637381]"
            )}
          >
            Commercial
          </button>
          <button
            onClick={() => setActiveTab("residential")}
            className={cx(
              "pb-2 font-primary text-sm",
              activeTab === "residential"
                ? "border-b-2 border-b-[#000000] text-[#000000]"
                : "text-[#637381]"
            )}
          >
            Residential
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex w-full max-w-6xl items-center gap-4 rounded-lg border border-[#e5e7eb] bg-[#ffffff] px-6 py-4 shadow-sm">
          {/* Location Input */}
          <div className="flex flex-1 flex-col gap-1">
            <label className="font-primary text-xs text-[#637381]">
              Location
            </label>
            <input
              type="text"
              placeholder="Type a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-none bg-transparent font-primary text-sm text-[#000000] outline-none placeholder:text-[#9ca3af]"
            />
          </div>

          <div className="h-10 w-px bg-[#e5e7eb]" />

          {/* Property Type Dropdown */}
          <div className="flex flex-1 flex-col gap-1">
            <label className="font-primary text-xs text-[#637381]">
              Property Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="cursor-pointer border-none bg-transparent font-primary text-sm text-[#000000] outline-none"
            >
              <option value="">Select</option>
              <option value="office">Office</option>
              <option value="retail">Retail</option>
              <option value="warehouse">Warehouse</option>
            </select>
          </div>

          <div className="h-10 w-px bg-[#e5e7eb]" />

          {/* Hourly/Monthly Toggle */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 rounded-full bg-[#f3f4f6] p-1">
              <button
                onClick={() => setPricingMode("hourly")}
                className={cx(
                  "rounded-full px-4 py-1 font-primary text-sm",
                  pricingMode === "hourly"
                    ? "bg-[#000000] text-[#ffffff]"
                    : "bg-transparent text-[#637381]"
                )}
              >
                Hourly
              </button>
              <button
                onClick={() => setPricingMode("monthly")}
                className={cx(
                  "rounded-full px-4 py-1 font-primary text-sm",
                  pricingMode === "monthly"
                    ? "bg-[#000000] text-[#ffffff]"
                    : "bg-transparent text-[#637381]"
                )}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className="h-10 w-px bg-[#e5e7eb]" />

          {/* Space Type Dropdown */}
          <div className="flex flex-1 flex-col gap-1">
            <label className="font-primary text-xs text-[#637381]">
              Space Type
            </label>
            <select
              value={spaceType}
              onChange={(e) => setSpaceType(e.target.value)}
              className="cursor-pointer border-none bg-transparent font-primary text-sm text-[#000000] outline-none"
            >
              <option value="">Select</option>
              <option value="private">Private Office</option>
              <option value="shared">Shared Workspace</option>
              <option value="meeting">Meeting Room</option>
            </select>
          </div>

          <div className="h-10 w-px bg-[#e5e7eb]" />

          {/* Price Range */}
          <div className="flex flex-1 flex-col gap-2">
            <label className="font-primary text-xs text-[#637381]">Price</label>
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#000000] px-2 py-0.5 font-primary text-xs text-[#ffffff]">
                ${priceRange.min}
              </span>
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    max: parseInt(e.target.value),
                  }))
                }
                className="flex-1 accent-[#000000]"
              />
              <span className="rounded bg-[#000000] px-2 py-0.5 font-primary text-xs text-[#ffffff]">
                ${priceRange.max}
              </span>
            </div>
          </div>

          <div className="h-10 w-px bg-[#e5e7eb]" />

          {/* Search Button */}
          <button className="rounded-full bg-[#000000] px-8 py-2.5 font-primary text-sm text-[#ffffff] hover:bg-[#2d3748]">
            Search
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-t-[#e5e7eb] px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="font-primary text-sm text-[#000000]">
            © SuddenlySpaces, 2024
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="font-primary-bold text-sm text-[#000000]">
                Company
              </span>
              <a
                href="#"
                className="font-primary text-sm text-[#000000] hover:text-[#4a5568]"
              >
                About
              </a>
              <a
                href="#"
                className="font-primary text-sm text-[#000000] hover:text-[#4a5568]"
              >
                Careers
              </a>
              <a
                href="#"
                className="font-primary text-sm text-[#000000] hover:text-[#4a5568]"
              >
                Press
              </a>
              <a
                href="#"
                className="font-primary text-sm text-[#000000] hover:text-[#4a5568]"
              >
                Contact Us
              </a>
            </div>

            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-[#000000] hover:text-[#4a5568]"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="text-[#000000] hover:text-[#4a5568]"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-[#000000] hover:text-[#4a5568]"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="text-[#000000] hover:text-[#4a5568]"
                aria-label="YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="font-primary text-sm text-[#000000] hover:text-[#4a5568]"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="font-primary text-sm text-[#000000] hover:text-[#4a5568]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
