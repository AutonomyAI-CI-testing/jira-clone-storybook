import React from "react";

/**
 * TestCard component
 * A self-contained UI panel that visually replicates a Figma design.
 * Used for testing and demonstration purposes.
 *
 * Design specifications:
 * - Dark theme (bg-[#2a2a2a])
 * - Custom brand colors: burnt orange (bg-[#a0522d]), muted orange (text-[#c07040])
 * - Fixed layout with specific spacing and typography
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="font-sans flex max-w-xs flex-col gap-4 rounded-lg bg-[#2a2a2a] p-5 text-white"
    >
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <GearIcon />
      </header>

      <div className="flex items-center gap-1">
        <ChevronUpIcon />
        <span className="text-xs text-[#c07040]">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-2 flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <ChevronUpIcon />
          <h3 className="text-base font-bold">Add New Design</h3>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="pat" className="flex items-center gap-1 text-sm">
            Personal Access Token
            <InfoIcon />
          </label>
          <input
            id="pat"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="focus:border-blue-500 rounded-md border border-[#444] bg-[#1a1a1a] p-2 text-sm focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="design-url"
            className="flex items-center gap-1 text-sm"
          >
            Design URL
            <InfoIcon />
          </label>
          <input
            id="design-url"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="focus:border-blue-500 rounded-md border border-[#444] bg-[#1a1a1a] p-2 text-sm focus:outline-none"
          />
        </div>

        <div className="flex justify-between gap-3">
          <button
            type="button"
            className="flex-1 rounded-lg bg-[#a0522d] px-5 py-2 text-sm text-white transition-colors hover:bg-[#8b4513]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg bg-[#a0522d] px-5 py-2 text-sm text-white transition-colors hover:bg-[#8b4513]"
          >
            Prepare
          </button>
        </div>
      </section>

      <footer className="mt-2">
        <h3 className="text-base font-bold">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};

// --- Sub-components (Icons) ---

const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M11.995 2.215a.75.75 0 0 1 .53 0c.532.115.932.551.932 1.096v.121a3.75 3.75 0 0 0 1.096.53c.545.006 1.05.183 1.455.589.405.405.582.91.589 1.455v.121a3.75 3.75 0 0 0 .53 1.096c.115.532.551.932 1.096.932h.121a3.75 3.75 0 0 0 1.096.53c.545.006.91.551.91 1.096v.121a3.75 3.75 0 0 0 .53 1.096c.115.532.551.932 1.096.932h.121a3.75 3.75 0 0 0 .53 1.096c.006.545.183 1.05.589 1.455.405.405.91.582 1.455.589v.121a3.75 3.75 0 0 0 1.096.53c.532.115.932.551.932 1.096v.121a3.75 3.75 0 0 0 .53 1.096c.006.545.183.91.589 1.455.405.405.91.582 1.455.589v.121a3.75 3.75 0 0 0 .53 1.096c.115.532.551.932 1.096.932h.121a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h.121a3.75 3.75 0 0 0 1.096-.53c.532-.115.932-.551.932-1.096v-.121a3.75 3.75 0 0 0 .53-1.096c.006-.545.183-.91.589-1.455a.75.75 0 0 1 1.06-1.06 6.75 6.75 0 1 0-7.38-7.38c-.405-.405-.582-.91-.589-1.455a3.75 3.75 0 0 0-1.096-.53v-.121a.75.75 0 0 1-.932-1.096Z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path
      fillRule="evenodd"
      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 0-1.061-1.061L5.94 8.94a.75.75 0 0 0 1.06 1.06l1.94-1.94h.001Z"
      clipRule="evenodd"
    />
  </svg>
);
