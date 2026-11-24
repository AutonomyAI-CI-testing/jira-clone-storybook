import cx from "classix";
import { FaChevronUp, FaCircleInfo, FaGear } from "react-icons/fa6";

/**
 * Static, prop-less reproduction of the "UI magician Agent" panel from the
 * reference Figma frame. It exists to prove a Figma frame can be turned into
 * a rendering component, so it holds no state and wires up no behaviour.
 *
 * The frame's palette (charcoal panel, #272822 fields, #843a17 buttons) has
 * no equivalent in this app's semantic tokens, so it stays local to this
 * component instead of being forced into the theme contract.
 */
const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-[#8c8078]";

const FieldLabel = ({
  htmlFor,
  className,
  children,
}: FieldLabelProps): JSX.Element => (
  <div className={cx("flex items-center gap-4", className)}>
    <label htmlFor={htmlFor} className="text-2xs text-[#a4a4a3]">
      {children}
    </label>
    <FaCircleInfo size={15} className="shrink-0 text-[#a4a4a3]" />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1a1a1a] px-5 py-5 font-primary text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center text-[#b5b5b5]"
      >
        <FaGear size={15} />
      </button>
    </div>

    {/* Collapsed frame summary */}
    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp size={8} className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[75px] flex items-center gap-2">
      <FaChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <FieldLabel htmlFor="testElem-token" className="mt-7">
      Personal Access Token
    </FieldLabel>
    <input
      id="testElem-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-2xs text-[#b5b5b5] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <FieldLabel htmlFor="testElem-url" className="mt-[11px]">
      Design URL
    </FieldLabel>
    <input
      id="testElem-url"
      type="url"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-2xs text-[#b5b5b5] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[47px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldLabelProps {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}
