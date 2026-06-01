import { useState } from "react";
import cx from "classix";

// SVG icon paths
const COPY_ICON_PATH =
  "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m4-6h.01m-6 0a6 6 0 11-12 0 6 6 0 0112 0z";
const CHEVRON_DOWN_ICON_PATH = "M19 14l-7-7m0 0L5 14m7-7v12";
const INFO_ICON_PATH =
  "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z";

// Icon button wrapper - used for header, info icons
const IconButton = ({ className = "" }: { className?: string }) => (
  <button className={`p-0 ${className}`}>
    <svg
      className="text-stone-600 h-3 w-3"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path fillRule="evenodd" d={INFO_ICON_PATH} clipRule="evenodd" />
    </svg>
  </button>
);

// Collapsible section header with chevron icon
const CollapsibleHeader = ({
  title,
  isExpanded,
  onToggle,
}: {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className="hover:bg-stone-950 flex w-full items-center justify-between px-5 py-3 transition-colors"
  >
    <span className="text-stone-500 text-xs font-semibold">{title}</span>
    <svg
      className={cx(
        "text-stone-500 h-4 w-4 transition-transform",
        isExpanded && "rotate-180"
      )}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={CHEVRON_DOWN_ICON_PATH}
      />
    </svg>
  </button>
);

// Input field with label and info icon
const FormField = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: "text" | "password";
  placeholder: string;
}) => (
  <div>
    <label className="text-stone-400 mb-2 flex items-center gap-2 text-xs font-semibold">
      {label}
      <IconButton className="hover:bg-stone-800 rounded" />
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-stone-950 border-stone-800 text-stone-300 placeholder-stone-700 focus:border-stone-600 w-full rounded border px-3 py-2 text-xs transition-colors focus:outline-none"
    />
  </div>
);

export const TestCard = () => {
  const [isAgentExpanded, setIsAgentExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div
      id="testElem"
      className="flex min-h-screen items-center justify-center bg-black p-4"
    >
      <div className="border-stone-800 w-full max-w-2xl overflow-hidden rounded-lg border bg-black">
        {/* Header */}
        <div className="border-stone-800 flex items-center justify-between border-b px-5 py-4">
          <h1 className="text-stone-400 text-sm font-semibold">
            UI magician Agent
          </h1>
          <button className="hover:bg-stone-900 rounded p-1 transition-colors">
            <svg
              className="text-stone-500 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={COPY_ICON_PATH}
              />
            </svg>
          </button>
        </div>

        {/* Collapsible Section 1: UI magician Agent Description */}
        <div className="border-stone-800 border-b">
          <CollapsibleHeader
            title="From entire frame to a singl..."
            isExpanded={isAgentExpanded}
            onToggle={() => setIsAgentExpanded(!isAgentExpanded)}
          />
          {isAgentExpanded && (
            <div className="text-stone-600 px-5 pb-3 text-xs">
              <p>
                Convert your Figma designs into production-ready React
                components automatically.
              </p>
            </div>
          )}
        </div>

        {/* Collapsible Section 2: Add New Design */}
        <div className="border-stone-800 border-b">
          <CollapsibleHeader
            title="Add New Design"
            isExpanded={isDesignExpanded}
            onToggle={() => setIsDesignExpanded(!isDesignExpanded)}
          />
          {isDesignExpanded && (
            <div className="space-y-4 px-5 pb-4">
              <FormField
                label="Personal Access Token"
                type="password"
                placeholder="Enter your Figma API token"
              />
              <FormField
                label="Design URL"
                type="text"
                placeholder="https://figma.com/file/..."
              />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="bg-stone-950 flex gap-3 px-5 py-4">
          <button className="bg-stone-700 text-stone-300 hover:bg-stone-600 flex-1 rounded px-4 py-2 text-xs font-semibold transition-colors">
            Awesome
          </button>
          <button className="bg-amber-900 text-amber-100 hover:bg-amber-800 flex-1 rounded px-4 py-2 text-xs font-semibold transition-colors">
            Prepare
          </button>
        </div>

        {/* Footer */}
        <div className="border-stone-800 border-t bg-black px-5 py-3">
          <p className="text-stone-600 text-xs">Recent Breakdowns</p>
        </div>
      </div>
    </div>
  );
};
