import cx from "classix";
import { FiSettings } from "react-icons/fi";

// Reusable icon components for consistent design system
const ChevronLeftIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 text-[#8B9291]"
  >
    <path
      d="M6 4L3 7l3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 text-[#8B9291]"
  >
    <path
      d="M3 7l3-3 3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8B9291]"
  >
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7 10V7M7 5h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Shared input styles for form consistency
const inputBaseStyles = "w-full rounded bg-[#272822] px-2.5 py-1.5 font-semibold text-[11.5px] outline-none";
const inputPlaceholderStyle = "placeholder:text-[#737470]";

// Action button component to eliminate duplication
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className={cx(
      "flex-1 rounded-md bg-[#843A17] px-3 py-1.5",
      "font-semibold text-[11.5px] text-[#8C8078]",
      "transition-opacity duration-150 hover:opacity-90 active:opacity-80"
    )}
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 rounded-lg bg-[#1C1D17] p-5">
      {/* Card header with agent title and settings access */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-semibold text-[13.5px] text-[#B5B5B5]">
          UI magician Agent
        </h2>
        <FiSettings className="text-[#A3A3A2]" size={16} />
      </div>

      {/* Collapsible breadcrumb or subtitle - truncated for space efficiency */}
      <div className="mb-4 flex items-center gap-2">
        <ChevronLeftIcon />
        <p className="truncate font-semibold text-[11.5px] text-[#A4A4A3]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer */}
      <div className="mb-4" />

      {/* Collapsible section header for design configuration */}
      <div className="mb-3 flex items-center gap-2">
        <ChevronUpIcon />
        <h3 className="font-semibold text-[13.5px] text-[#B5B5B5]">
          Add New Design
        </h3>
      </div>

      {/* Figma API authentication field */}
      <div className="mb-3">
        <div className="mb-1.5 flex items-center gap-1.5">
          <label
            htmlFor="personal-token"
            className="font-semibold text-[11.5px] text-[#A4A4A3]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="personal-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(
            inputBaseStyles,
            "border border-[#A5ADAD] text-[10.5px] text-[#737470]",
            inputPlaceholderStyle,
            "focus:border-[#A5ADAD]"
          )}
        />
      </div>

      {/* Figma file URL input - accepts design file links */}
      <div className="mb-4">
        <div className="mb-1.5 flex items-center gap-1.5">
          <label
            htmlFor="design-url"
            className="font-semibold text-[11.5px] text-[#A4A4A3]"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={cx(
            inputBaseStyles,
            "border-2 border-[#929291] text-[#71726E]",
            "placeholder:text-[#71726E]",
            "focus:border-[#929291]"
          )}
        />
      </div>

      {/* Primary action buttons */}
      <div className="mb-4 flex gap-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Section for displaying breakdown history */}
      <div>
        <h3 className="font-semibold text-[13.5px] text-[#B0B0B0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Copyright footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="font-semibold text-[11.5px] text-[#A4A4A3]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
