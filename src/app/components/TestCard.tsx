import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * TestCard — self-contained reproduction of the attached Figma panel
 * ("UI magician Agent" / Add New Design). Takes no props.
 *
 * Colours come from the raw palette variables declared in
 * src/app/styles/app.css, so the panel renders the same in every theme.
 * Values are a close approximation of the design, not its exact tokens.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-12 font-primary-light text-[var(--DarkNeutral1000)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary text-[22px] leading-none text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h1>
        <RiSettings3Line
          aria-hidden
          size={28}
          className="shrink-0 text-[var(--DarkNeutral1100)]"
        />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <RiArrowUpSLine
          aria-hidden
          size={26}
          className="shrink-0 text-[var(--DarkNeutral1100)]"
        />
        <p className="truncate text-[18px] text-[var(--DarkNeutral800)]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-14 flex items-center gap-3">
        <RiArrowUpSLine
          aria-hidden
          size={26}
          className="shrink-0 text-[var(--DarkNeutral1100)]"
        />
        <h2 className="text-[20px] text-[var(--DarkNeutral1100)]">
          Add New Design
        </h2>
      </div>

      <label
        htmlFor="test-card-token"
        className="mt-9 flex items-center gap-3 text-[16px] text-[var(--DarkNeutral900)]"
      >
        Personal Access Token
        <RiInformationLine aria-hidden size={22} className="shrink-0" />
      </label>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className="mt-4 h-[70px] w-full border-2 border-[var(--DarkNeutral350)] bg-[var(--DarkNeutral200)] px-6 text-[16px] text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
      />

      <label
        htmlFor="test-card-url"
        className="mt-8 flex items-center gap-3 text-[16px] text-[var(--DarkNeutral900)]"
      >
        Design URL
        <RiInformationLine aria-hidden size={22} className="shrink-0" />
      </label>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-4 h-[70px] w-full border-2 border-[var(--DarkNeutral350)] bg-[var(--DarkNeutral200)] px-6 text-[16px] text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
      />

      <div className="mt-10 flex justify-end gap-6">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-[70px] w-[170px] rounded-md bg-[var(--Orange800)] text-[18px] text-[var(--DarkNeutral900)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-16 text-[20px] text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
