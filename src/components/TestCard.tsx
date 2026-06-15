import React from "react";
import {
  IoSettingsOutline,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

/**
 * TestCard - A smoke-test component reproducing a UI magician Agent panel.
 *
 * NOTE: This component uses inline styles for colors and backgrounds to ensure
 * consistent rendering regardless of Tailwind content glob configuration.
 * Layout structure is handled via Tailwind utility classes.
 */

const COLORS = {
  background: "#1e1e1e",
  surface: "#2a2a2a",
  border: "#444444",
  accent: "#c1622a",
  text: "#ffffff",
  placeholder: "#888888",
};

export const TestCard = (): JSX.Element => {
  const inputStyle: React.CSSProperties = {
    backgroundColor: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    color: COLORS.text,
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: COLORS.accent,
    color: COLORS.text,
    borderRadius: "8px",
  };

  return (
    <div
      id="testElem"
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.text,
        minHeight: "100vh",
      }}
      className="flex w-full flex-col p-4"
    >
      {/* Header Row: Title and Settings */}
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="text-2xl" aria-label="Settings" />
      </header>

      {/* Status/Context Subtitle */}
      <div className="mb-6 flex items-center gap-2">
        <IoChevronUp className="text-xl" aria-hidden="true" />
        <span style={{ color: COLORS.accent }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer to match design layout */}
      <div className="mb-6 h-6" aria-hidden="true" />

      {/* Main Action Section */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <IoChevronUp className="text-xl" aria-hidden="true" />
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>

        {/* Input: Personal Access Token */}
        <div className="mb-4 flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="accessToken" className="text-sm">
              Personal Access Token
            </label>
            <IoInformationCircleOutline
              className="text-base"
              aria-label="More information"
            />
          </div>
          <input
            id="accessToken"
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={inputStyle}
            className="rounded-md p-2 text-sm placeholder:text-[#888888] focus:outline-none"
          />
        </div>

        {/* Input: Design URL */}
        <div className="mb-6 flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="designUrl" className="text-sm">
              Design URL
            </label>
            <IoInformationCircleOutline
              className="text-base"
              aria-label="More information"
            />
          </div>
          <input
            id="designUrl"
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            style={inputStyle}
            className="rounded-md p-2 text-sm placeholder:text-[#888888] focus:outline-none"
          />
        </div>

        {/* Action Buttons Row */}
        <div className="mb-6 flex gap-4">
          <button
            style={buttonStyle}
            className="px-6 py-2 text-sm font-semibold"
          >
            Awesome
          </button>
          <button
            style={buttonStyle}
            className="px-6 py-2 text-sm font-semibold"
          >
            Prepare
          </button>
        </div>
      </section>

      {/* Footer Section Heading */}
      <h2 className="text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
