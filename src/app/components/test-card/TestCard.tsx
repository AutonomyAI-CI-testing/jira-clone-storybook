import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * The design's two action buttons are a rust/brown that no semantic token in
 * tailwind.config.js covers, so these two values are read off the design.
 * Everything else on the card resolves through the repo's semantic tokens.
 */
const ACTION_BUTTON_CLASS = "bg-[#9a4a1e] text-[#cbb7a8] hover:bg-[#8a3f17]";

const FIELD_CLASS =
  "h-12 rounded bg-background-input px-3 text-font outline outline-2 outline-border-bold placeholder:text-font-subtlest";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col gap-4 rounded bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FaCog aria-hidden className="shrink-0 text-icon" size={22} />
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <FaChevronUp aria-hidden className="shrink-0" size={18} />
      <span className="truncate text-base">From entire frame to a singl…</span>
    </div>

    <div className="mt-8 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FaChevronUp aria-hidden className="shrink-0" size={20} />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-4 flex gap-8">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className={`h-[62px] w-[170px] rounded font-primary text-lg ${ACTION_BUTTON_CLASS}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>

    <h2 className="mt-12 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2 text-base">
      {label}
      <FaInfoCircle aria-hidden className="shrink-0 text-icon-subtle" size={18} />
    </span>
    <input className={FIELD_CLASS} placeholder={placeholder} type="text" />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
