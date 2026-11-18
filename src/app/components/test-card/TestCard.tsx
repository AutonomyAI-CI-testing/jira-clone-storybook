import { FaCog } from "react-icons/fa";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

/**
 * TestCard
 *
 * A self-contained re-creation of the "UI magician Agent" panel from the Figma frame.
 * Smoke-test component: it takes no props, holds no state and submits nothing.
 *
 * Colours are the frame's own literal values on purpose. The repo's semantic tokens are
 * theme-scoped and describe this app's own surfaces, so none of them names a near-black
 * panel with rust buttons. The nearest declared token is noted beside each literal.
 */

const inputClassName =
  // nearest tokens: border --DarkNeutral500, fill --DarkNeutral250
  "h-[54px] w-full rounded-sm border border-[#6e6e6e] bg-[#2b2b2b] px-4 text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]";

const fieldLabelClassName = "text-sm text-[#c0c0c0]";

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}): JSX.Element => (
  <div className="flex items-center gap-2">
    <label htmlFor={htmlFor} className={fieldLabelClassName}>
      {children}
    </label>
    <HiInformationCircle size={18} className="text-[#c0c0c0]" />
  </div>
);

export const TestCard = (): JSX.Element => (
  // nearest token for the panel fill: --DarkNeutral100
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 py-8 font-primary text-[#c7c7c7]"
  >
    <div className="flex items-center justify-between">
      {/* nearest token for the heading text: --DarkNeutral1100 */}
      <h2 className="font-primary-bold text-xl text-[#e6e6e6]">
        UI magician Agent
      </h2>
      <button type="button" aria-label="Open settings" className="text-[#e6e6e6]">
        <FaCog size={22} />
      </button>
    </div>

    <button
      type="button"
      className="mt-5 flex w-full items-center gap-3 text-left"
    >
      <HiChevronUp size={18} className="shrink-0 text-[#a8a8a8]" />
      <span className="truncate text-sm text-[#a8a8a8]">
        From entire frame to a single component
      </span>
    </button>

    <div className="mt-[100px] flex items-center gap-2">
      <HiChevronUp size={18} className="shrink-0 text-[#e6e6e6]" />
      <h3 className="font-primary-bold text-xl text-[#e6e6e6]">
        Add New Design
      </h3>
    </div>

    <div className="mt-8">
      <FieldLabel htmlFor="test-card-personal-access-token">
        Personal Access Token
      </FieldLabel>
      <input
        id="test-card-personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mt-2 ${inputClassName}`}
      />
    </div>

    <div className="mt-6">
      <FieldLabel htmlFor="test-card-design-url">Design URL</FieldLabel>
      <input
        id="test-card-design-url"
        type="url"
        placeholder="https://www.figma.com/file/"
        className={`mt-2 ${inputClassName}`}
      />
    </div>

    <div className="mt-8 flex items-center gap-9 pl-12">
      {["Awesome", "Prepare"].map((label) => (
        // nearest token for the button fill: --Orange800
        <button
          key={label}
          type="button"
          className="flex h-[62px] w-[170px] items-center justify-center rounded-md bg-[#a04a1f] text-[#d0d0d0]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-14 font-primary-bold text-xl text-[#e6e6e6]">
      Recent Breakdowns
    </h3>
  </div>
);
