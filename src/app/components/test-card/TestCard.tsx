import { AiOutlineInfoCircle, AiOutlineUp } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" Figma
 * panel. It takes no props and holds no state on purpose.
 *
 * The rust fill on the two buttons is the only raw value here — the palette has
 * no token for it, and the panel is a one-off reproduction rather than a
 * design-system surface. Everything else resolves through semantic tokens, so
 * the panel picks up whichever theme it renders in.
 */
const buttonStyle =
  "h-14 flex-1 rounded bg-[#a8491c] text-lg text-[#f2e7e1] hover:bg-[#8f3d16] active:bg-[#7a3413]";

const fieldStyle =
  "h-14 w-full rounded border border-border-bold bg-background-input px-5 text-lg text-font placeholder:text-font-subtlest";

const labelRowStyle = "flex items-center gap-3 text-lg text-font-subtle";

const chevronStyle = "h-5 w-5 shrink-0";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface px-8 pt-10 pb-12 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-icon-subtle"
      >
        <IoSettingsOutline className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <AiOutlineUp className={chevronStyle} />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-[150px] flex items-center gap-3 font-primary-bold text-xl">
      <AiOutlineUp className={chevronStyle} />
      <span>Add New Design</span>
    </div>

    <div className="mt-12 flex flex-col gap-2">
      <div className={labelRowStyle}>
        <span>Personal Access Token</span>
        <AiOutlineInfoCircle className="h-5 w-5 shrink-0" />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        className={fieldStyle}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8 flex flex-col gap-2">
      <div className={labelRowStyle}>
        <span>Design URL</span>
        <AiOutlineInfoCircle className="h-5 w-5 shrink-0" />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        className={fieldStyle}
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-9">
      <button type="button" className={buttonStyle}>
        Awesome
      </button>
      <button type="button" className={buttonStyle}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
