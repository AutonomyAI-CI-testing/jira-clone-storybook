import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" panel.
 * Colours are approximated from the reference frame; the palette it uses has no
 * counterpart in the semantic tokens, so it is declared here and nowhere else.
 */
const fieldClassName =
  "w-full rounded-md border-2 border-[#8b8177] bg-[#2a1d16] px-4 py-5 text-base outline-none placeholder:text-[#6f665f]";

const buttonClassName =
  "rounded-md bg-[#8f4a20] px-10 py-5 font-primary text-lg text-[#cbbfb6]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-8 bg-[#1e1410] p-8 font-primary-light text-base text-[#c8c3bd]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary text-xl">UI magician Agent</h2>
      <FiSettings aria-hidden="true" className="shrink-0 text-2xl" />
    </div>

    <div className="-mt-2 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className="shrink-0 text-xl" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className="shrink-0 text-2xl" />
      <h3 className="font-primary text-xl">Add New Design</h3>
    </div>

    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-personal-access-token">
          Personal Access Token
        </label>
        <FiInfo aria-hidden="true" className="shrink-0 text-lg" />
      </div>
      <input
        id="test-card-personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={fieldClassName}
      />
    </div>

    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-design-url">Design URL</label>
        <FiInfo aria-hidden="true" className="shrink-0 text-lg" />
      </div>
      <input
        id="test-card-design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={fieldClassName}
      />
    </div>

    <div className="flex gap-6">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={buttonClassName}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-12 font-primary text-xl">Recent Breakdowns</h3>
  </div>
);
