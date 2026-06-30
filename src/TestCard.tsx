import React from 'react';

/**
 * Icons used in the TestCard component.
 * SVGs are kept as constants to keep the JSX clean and readable.
 */
const ICONS = {
  GEAR: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8.00007 1.33331C4.31814 1.33331 1.3334 4.31805 1.3334 7.99998C1.3334 11.6819 4.31814 14.6666 8.00007 14.6666C11.682 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31805 11.682 1.33331 8.00007 1.33331ZM12.9834 5.38331L12.0167 5.76665V7.125L12.9834 7.50831C13.0601 7.23331 13.1201 6.91665 13.1201 6.55831C13.1201 6.19998 13.0517 5.86665 12.9834 5.38331ZM12.9834 8.41665L12.0167 8.79998V10.1583L12.9834 10.5416C13.0517 10.0583 13.1201 9.77498 13.1201 9.40831C13.1201 9.04165 13.0601 8.68331 12.9834 8.41665ZM3.01673 5.38331C2.95673 5.86665 2.8784 6.19998 2.8784 6.55831C2.8784 6.91665 2.94673 7.23331 3.01673 7.50831L3.9834 7.125V5.76665L3.01673 5.38331ZM3.01673 8.41665C2.94673 8.68331 2.8784 9.04165 2.8784 9.40831C2.8784 9.77498 2.95673 10.0583 3.01673 10.5416L3.9834 10.1583V8.79998L3.01673 8.41665ZM8.00007 13.3333C7.5734 13.3333 7.14673 13.2649 6.71173 13.125L5.7334 12.725V11.2333L6.09173 11.1333C6.3984 11.0566 6.64173 10.9999 6.91673 10.9999H9.0834C9.3584 10.9999 9.60173 11.0566 9.9084 11.1333L10.2667 11.2333V12.725L9.2884 13.125C8.8534 13.2649 8.42673 13.3333 8.00007 13.3333ZM8.00007 2.66665C8.42673 2.66665 8.8534 2.73498 9.2884 2.87498L10.2667 3.27498V4.76665L9.9084 4.86665C9.60173 4.94331 9.3584 4.99998 9.0834 4.99998H6.91673C6.64173 4.99998 6.3984 4.94331 6.09173 4.86665L5.7334 4.76665V3.27498L6.71173 2.87498C7.14673 2.73498 7.5734 2.66665 8.00007 2.66665Z" fill="#B5B5B5"/>
    </svg>
  ),
  CHEVRON_UP: (color = "#B2B2B1") => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 3.5L2.5 7L3.1975 7.61L6 4.985L8.8025 7.61L9.5 7L6 3.5Z" fill={color}/>
    </svg>
  ),
  INFO: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 0C2.6865 0 0 2.6865 0 6C0 9.3135 2.6865 12 6 12C9.3135 12 12 9.3135 12 6C12 2.6865 9.3135 0 6 0ZM6.75 9H5.25V5.25H6.75V9ZM6.75 4.5H5.25V3H6.75V4.5Z" fill="#A3A3A2"/>
    </svg>
  ),
};

/**
 * TestCard component for managing UI designs.
 * Styled with a dark theme targeting a refined tool-like aesthetic.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 text-white max-w-sm rounded-lg shadow-xl">
      {/* Header Row: Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h1>
        <button aria-label="Settings" className="hover:opacity-80 transition-opacity focus:outline-none">
          {ICONS.GEAR}
        </button>
      </div>

      {/* Subtitle / Path Row */}
      <div className="flex items-center gap-2 mb-6">
        {ICONS.CHEVRON_UP("#8B9291")}
        <span className="text-[#8b9291] text-xs truncate" title="From entire frame to a single element">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer for visual rhythm */}
      <div className="h-6" aria-hidden="true" />

      {/* Main Content Section */}
      <section aria-labelledby="add-design-heading">
        <div className="flex items-center gap-2 mb-4">
          {ICONS.CHEVRON_UP("#B2B2B1")}
          <h2 id="add-design-heading" className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h2>
        </div>


        {/* Form Group: Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor="pat" className="text-[#a3a3a2] text-xs font-semibold">
              Personal Access Token
            </label>
            <span title="Figma Personal Access Token">{ICONS.INFO}</span>
          </div>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md bg-[#1e1e1e] border border-[#3a3a3a] text-white text-xs placeholder:text-[#737470] focus:outline-none focus:ring-1 focus:ring-[#7a3f2a] transition-shadow"
          />
        </div>

        {/* Form Group: Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor="designUrl" className="text-[#a3a3a2] text-xs font-semibold">
              Design URL
            </label>
            <span title="Figma File URL">{ICONS.INFO}</span>
          </div>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md bg-[#1e1e1e] border border-[#3a3a3a] text-white text-xs placeholder:text-[#737470] focus:outline-none focus:ring-1 focus:ring-[#7a3f2a] transition-shadow"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 bg-[#7a3f2a] text-[#8c8078] rounded-lg px-4 py-2 font-semibold text-xs hover:brightness-110 active:brightness-90 transition-all focus:outline-none focus:ring-2 focus:ring-[#7a3f2a]">
            Awesome
          </button>
          <button className="flex-1 bg-[#7a3f2a] text-[#8c8078] rounded-lg px-4 py-2 font-semibold text-xs hover:brightness-110 active:brightness-90 transition-all focus:outline-none focus:ring-2 focus:ring-[#7a3f2a]">
            Prepare
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <section aria-labelledby="recent-breakdowns-heading">
        <h2 id="recent-breakdowns-heading" className="text-[#b5b5b5] font-semibold text-sm">
          Recent Breakdowns
        </h2>
      </section>
    </div>
  );
};

