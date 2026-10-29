import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * A static reproduction of the supplied Figma frame. It takes no props and is not
 * wired into the app, so it deliberately avoids the semantic theme tokens: the
 * frame's near-black panel and rust buttons have no role token, and the role tokens
 * would render it light. Colours come from palette variables this project already
 * declares; type, radii and spacing use the project's own scale.
 */
const ICON = "shrink-0 text-[var(--DarkNeutral1100)]";
const LIGHT_TEXT = "text-[var(--DarkNeutral1100)]";
const FIELD =
  "h-16 w-full rounded-md border border-[var(--Neutral500)] bg-[var(--DarkNeutral200)] px-8 font-primary text-base text-[var(--DarkNeutral1100)] outline-none placeholder:text-[var(--Neutral500)]";

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 py-10 font-primary text-[var(--Neutral500)]">
      <div className="flex items-center justify-between">
        <h1 className={`font-primary-black text-2xl ${LIGHT_TEXT}`}>
          UI magician Agent
        </h1>
        <IoSettingsOutline aria-hidden className={ICON} size={24} />
      </div>

      <div className="mt-10 flex items-center gap-3">
        <IoChevronUp aria-hidden className={ICON} size={20} />
        <span className="truncate text-base">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <IoChevronUp aria-hidden className={ICON} size={20} />
        <h2 className={`font-primary-black text-xl ${LIGHT_TEXT}`}>
          Add New Design
        </h2>
      </div>

      <label className="mt-12 block">
        <span className="grid grid-cols-[318px_1fr] items-center">
          <span className={`font-primary-bold text-lg ${LIGHT_TEXT}`}>
            Personal Access Token
          </span>
          <IoInformationCircleOutline aria-hidden className={ICON} size={20} />
        </span>
        <input
          className={`mt-6 ${FIELD}`}
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </label>

      <label className="mt-8 block">
        <span className="grid grid-cols-[318px_1fr] items-center">
          <span className={`font-primary-bold text-lg ${LIGHT_TEXT}`}>
            Design URL
          </span>
          <IoInformationCircleOutline aria-hidden className={ICON} size={20} />
        </span>
        <input
          className={`mt-6 ${FIELD}`}
          placeholder="https://www.figma.com/file/"
        />
      </label>

      <div className="mt-14 flex gap-8 pl-12">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-20 flex-1 rounded-md bg-[var(--Orange800)] font-primary text-base text-[var(--Neutral500)]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className={`mt-20 font-primary-black text-xl ${LIGHT_TEXT}`}>
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
