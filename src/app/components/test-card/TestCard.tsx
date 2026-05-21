import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] h-[508px] bg-elevation-surface p-5 flex flex-col gap-4 font-primary text-[11.5px]">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-font-subtle text-[13.5px] font-semibold">
          UI magician Agent
        </h1>
        {/* Settings Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-icon-subtle"
        >
          <path
            d="M13.5 8a5.5 5.5 0 0 1-.25 1.65l1.42.82a7 7 0 0 0 0-4.94l-1.42.82A5.5 5.5 0 0 1 13.5 8zm-1.65-4.75l-.82-1.42a7 7 0 0 0-4.94 0l.82 1.42A5.5 5.5 0 0 1 8 2.5a5.5 5.5 0 0 1 1.65.25zM2.5 8a5.5 5.5 0 0 1 .25-1.65l-1.42-.82a7 7 0 0 0 0 4.94l1.42-.82A5.5 5.5 0 0 1 2.5 8zm1.65 4.75l.82 1.42a7 7 0 0 0 4.94 0l-.82-1.42A5.5 5.5 0 0 1 8 13.5a5.5 5.5 0 0 1-1.65-.25zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="flex items-center gap-2 text-font-subtlest">
        {/* Chevron Icon */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 2l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11.5px]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 text-font-subtle text-[13.5px] font-semibold">
        {/* Chevron Icon */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 2l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Add New Design</span>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-3">
        {/* Personal Access Token Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <label className="text-font-subtlest text-[10.5px] font-semibold">
              Personal Access Token
            </label>
            {/* Info Icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-icon-subtle"
            >
              <circle
                cx="6"
                cy="6"
                r="5"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M6 5v3M6 3.5v.5"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxx"
            className="bg-transparent border border-border-input rounded px-2 py-1.5 text-font-subtlest text-[10.5px] placeholder:text-font-disabled focus:outline-none focus:border-border-focused"
          />
        </div>

        {/* Design URL Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <label className="text-font-subtlest text-[10.5px] font-semibold">
              Design URL
            </label>
            {/* Info Icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-icon-subtle"
            >
              <circle
                cx="6"
                cy="6"
                r="5"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M6 5v3M6 3.5v.5"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-transparent border border-border-input rounded px-2 py-1.5 text-font-subtlest text-[10.5px] placeholder:text-font-disabled focus:outline-none focus:border-border-focused"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-2">
        <button className="flex-1 bg-background-warning-bold text-font-inverse font-semibold rounded px-3 py-2 text-[11.5px] hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-background-warning-bold text-font-inverse font-semibold rounded px-3 py-2 text-[11.5px] hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="text-font-subtle text-[13.5px] font-semibold mt-auto">
        Recent Breakdowns
      </div>
    </div>
  );
};
