/**
 * TestCard — smoke test.
 *
 * A self-contained reproduction of a small Figma frame (the "UI magician Agent"
 * panel). It takes no props, imports nothing from the app, and exists only to
 * confirm a design can be rendered as a React component. Approximate fidelity
 * is intentional; nothing here is wired into a route or screen.
 */

const gearIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const chevronUpSmall = (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 4L4 1L7 4" />
  </svg>
);

const chevronUpLarge = (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1.5 6.5L6 2L10.5 6.5" />
  </svg>
);

const infoIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="7" />
    <path d="M7.5 6.8v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const fieldClass =
  "h-9 w-full border bg-[#272822] px-4 font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470] outline-none";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1e] px-5 pb-16 pt-5 font-primary-bold text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]">{gearIcon}</span>
      </div>

      <div className="mt-4 flex items-center gap-2 pl-1">
        <span className="text-[#b5b5b5]">{chevronUpSmall}</span>
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-1 pl-1.5">
        <span className="text-[#b5b5b5]">{chevronUpLarge}</span>
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-5">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <span className="text-[#b5b5b5]">{infoIcon}</span>
      </div>

      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mt-3 border-[#a5adad] placeholder:text-[#737470] ${fieldClass}`}
      />

      <div className="mt-3 flex items-center gap-5">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <span className="text-[#b5b5b5]">{infoIcon}</span>
      </div>

      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className={`mt-3 border-2 border-[#929291] text-[10.5px] leading-[12.71px] placeholder:text-[#71726e] ${fieldClass}`}
      />

      <div className="mt-6 flex gap-4 pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
