import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * The frame's action-button accent. No semantic token carries this hue (the
 * nearest, `warning`, means something else), so it stays a literal on purpose.
 */
const ACCENT_BUTTON =
  "flex h-14 w-[170px] items-center justify-center rounded bg-[#b4451a] font-primary-bold text-lg text-white outline outline-2 outline-transparent transition-colors hover:bg-[#9c3c16]";

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-2">
      <span className="font-primary text-sm text-font-subtle">{label}</span>
      <FaInfoCircle aria-hidden className="shrink-0 text-font" size={18} />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-14 w-full rounded bg-background-input px-4 font-primary text-base text-font outline outline-2 outline-border-bold placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface px-10 pb-8 pt-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FaCog aria-hidden className="shrink-0 text-font" size={22} />
    </div>

    <div className="mt-5 flex items-center gap-3">
      <FaChevronUp aria-hidden className="shrink-0 text-font-subtle" size={14} />
      <span className="truncate font-primary-light text-base text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FaChevronUp aria-hidden className="shrink-0 text-font" size={18} />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-11 flex gap-8">
      <button type="button" className={ACCENT_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACCENT_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
