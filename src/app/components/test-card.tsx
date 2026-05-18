export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[400px] rounded bg-[#1e1e1a] p-8">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-bold text-xl text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {/* Gear Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5]"
        >
          <path
            d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M13.5 8C13.5 8.4 13.45 8.78 13.36 9.14L14.82 10.27C14.94 10.36 14.97 10.53 14.89 10.66L13.49 13.04C13.41 13.17 13.25 13.22 13.11 13.17L11.38 12.46C11.04 12.72 10.67 12.94 10.27 13.11L10 14.93C9.98 15.07 9.86 15.17 9.72 15.17H6.92C6.78 15.17 6.66 15.07 6.64 14.93L6.37 13.11C5.97 12.94 5.6 12.72 5.26 12.46L3.53 13.17C3.39 13.22 3.23 13.17 3.15 13.04L1.75 10.66C1.67 10.53 1.7 10.36 1.82 10.27L3.28 9.14C3.19 8.78 3.14 8.4 3.14 8C3.14 7.6 3.19 7.22 3.28 6.86L1.82 5.73C1.7 5.64 1.67 5.47 1.75 5.34L3.15 2.96C3.23 2.83 3.39 2.78 3.53 2.83L5.26 3.54C5.6 3.28 5.97 3.06 6.37 2.89L6.64 1.07C6.66 0.93 6.78 0.83 6.92 0.83H9.72C9.86 0.83 9.98 0.93 10 1.07L10.27 2.89C10.67 3.06 11.04 3.28 11.38 3.54L13.11 2.83C13.25 2.78 13.41 2.83 13.49 2.96L14.89 5.34C14.97 5.47 14.94 5.64 14.82 5.73L13.36 6.86C13.45 7.22 13.5 7.6 13.5 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Collapsible Accordion Item */}
      <div className="mb-16 flex items-center gap-3">
        {/* Chevron Up Icon */}
        <svg
          width="16"
          height="12"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8b9291]"
        >
          <path
            d="M1 7L6 2L11 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-semibold text-sm text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8 flex items-center gap-3">
        {/* Chevron Up Icon */}
        <svg
          width="16"
          height="12"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b2b2b1]"
        >
          <path
            d="M1 7L6 2L11 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="font-bold text-lg text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-3">
          <label
            htmlFor="token"
            className="font-semibold text-sm text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          {/* Info Circle Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#a4a4a3]"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="6.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M7.5 10.5V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="7.5" cy="5" r="0.75" fill="currentColor" />
          </svg>
        </div>
        <input
          id="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border-2 border-[#a5adad] bg-[#272822] px-4 py-3 font-semibold text-sm text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <label
            htmlFor="url"
            className="font-semibold text-sm text-[#a3a3a2]"
          >
            Design URL
          </label>
          {/* Info Circle Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#a3a3a2]"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="6.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M7.5 10.5V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="7.5" cy="5" r="0.75" fill="currentColor" />
          </svg>
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-4 py-3 font-semibold text-sm text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-10 flex gap-4">
        <button className="rounded bg-[#843a17] px-8 py-3 font-semibold text-sm text-[#c99b7a]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-8 py-3 font-semibold text-sm text-[#c99b7a]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="font-bold text-xl text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
