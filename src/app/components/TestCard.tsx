import { HiChevronUp, HiOutlineCog, HiOutlineInformationCircle } from "react-icons/hi";
import cx from "classix";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained: no props, no state, no handlers.
 *
 * Colours are literal Tailwind arbitrary values on purpose. `theme.colors` in
 * tailwind.config.js is a full override, so stock Tailwind colours such as
 * `bg-gray-800` compile to nothing, and the design's warm near-black / rust
 * palette has no equivalent semantic role in the token set.
 */

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const FIELD_INPUT =
  "w-full rounded-sm border border-[#8a8886] bg-[#2a2826] py-3 pr-4 pl-10 text-base text-[#e5e5e5] placeholder:text-[#8a8886] focus:outline-none";

const ACTION_BUTTON =
  "w-[168px] rounded-lg bg-[#a4401c] px-8 py-3 text-base text-[#c9c7c5]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1917] px-10 py-12 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog size={26} aria-hidden="true" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-base text-[#b0aca8]">
      <HiChevronUp size={20} className="shrink-0" aria-hidden="true" />
      <span className="min-w-0 truncate">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <HiChevronUp size={22} className="shrink-0" aria-hidden="true" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8 space-y-6">
      {FIELDS.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-4">
            <label htmlFor={field.id} className="text-base">
              {field.label}
            </label>
            <HiOutlineInformationCircle size={20} aria-hidden="true" />
          </div>
          <input
            id={field.id}
            type="text"
            placeholder={field.placeholder}
            className={cx("mt-3", FIELD_INPUT)}
          />
        </div>
      ))}
    </div>

    <div className="mt-10 flex justify-center gap-8">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[120px] font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
