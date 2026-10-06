/**
 * TestCard — a one-off smoke-test panel reproduced from a Figma frame.
 *
 * Deliberately does NOT use this repo's semantic design tokens
 * (`bg-elevation-surface`, `text-font`, `border-input`, …): it is a standalone
 * dark panel matching the reference frame, and approximate colour/spacing
 * values were explicitly authorised for this smoke test. Do not copy this
 * pattern into product UI.
 */
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTION_BUTTON_CLASS =
  "h-[72px] w-[170px] rounded-[8px] bg-[#9c4118] text-lg text-[#d0d0d0]";

export const TestCard = () => (
  <div
    id="testElem"
    className="font-primary w-[508px] bg-[#1a1a1a] p-10 text-[#c8c8c8]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="text-2xl">UI magician Agent</h1>
      <FiSettings size={24} className="text-[#d6d6d6]" aria-hidden />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-8 flex items-center gap-3 text-lg text-[#9a9a9a]">
      <FiChevronUp size={20} aria-hidden />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-16 flex items-center gap-3">
      <FiChevronUp size={22} aria-hidden />
      <h2 className="text-xl">Add New Design</h2>
    </div>

    {FIELDS.map((field) => (
      <div key={field.label} className="mt-8">
        <div className="mb-3 flex items-center gap-2 text-base text-[#a8a8a8]">
          <span>{field.label}</span>
          <FiInfo size={18} aria-hidden />
        </div>
        <input
          type="text"
          aria-label={field.label}
          placeholder={field.placeholder}
          className="h-[60px] w-full rounded-[6px] border border-[#8c8c8c] bg-[#1f1f1f] px-4 text-base text-[#c8c8c8] placeholder:text-[#8c8c8c]"
        />
      </div>
    ))}

    {/* Actions */}
    <div className="mt-10 flex justify-center gap-8">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-16 text-xl text-[#9a9a9a]">Recent Breakdowns</h2>
  </div>
);
