import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * A static mock-up of the "UI magician Agent" Figma frame.
 *
 * It takes no props and holds no state — it exists to render the frame as a
 * component. The root pins the dark theme because the frame is a fixed dark
 * surface that must look the same under every theme the app offers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark h-[508px] w-[254px] bg-elevation-surface px-5 py-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-4 text-font">
        UI magician Agent
      </span>
      <FaCog aria-hidden size={16} className="text-font" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp aria-hidden size={10} className="text-font-subtle" />
      <span className="truncate text-[11.5px] leading-4 text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <FaChevronUp aria-hidden size={12} className="text-font-subtle" />
      <span className="font-primary-bold text-[13.5px] leading-4 text-font">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <span className="text-[11.5px] leading-4 text-font-subtle">
        Personal Access Token
      </span>
      <FaInfoCircle aria-hidden size={15} className="text-font-subtle" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-2 h-9 w-full rounded-none border border-border-bold bg-background-input px-4 text-[11.5px] leading-4 text-font placeholder:text-font-subtlest"
    />

    <div className="mt-3 flex items-center gap-2">
      <span className="text-[11.5px] leading-4 text-font-subtle">
        Design URL
      </span>
      <FaInfoCircle aria-hidden size={15} className="text-font-subtle" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-2 h-9 w-full rounded-none border-2 border-border-bold bg-background-input px-4 text-[10.5px] leading-4 text-font placeholder:text-font-subtlest"
    />

    <div className="mt-5 flex justify-center gap-3">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-4 text-font"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-4 text-font"
      >
        Prepare
      </button>
    </div>

    <div className="mt-12">
      <span className="font-primary-bold text-[13.5px] leading-4 text-font">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
