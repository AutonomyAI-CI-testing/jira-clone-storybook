/**
 * TestCard
 *
 * A self-contained, prop-less card approximating the attached Figma frame — a
 * dark Figma-plugin panel with a title row, a collapsed section, an
 * "Add New Design" block and two actions.
 *
 * Colours are written as arbitrary Tailwind values on purpose: `theme.colors` in
 * `tailwind.config.js` is a full override, so stock palette classes
 * (`bg-neutral-800`, `text-gray-400`) compile to nothing. The frame is a fixed
 * dark surface with no counterpart in this app's blue-on-neutral token set, so it
 * keeps its own literal palette rather than resolving the `--color-*` roles.
 */

const ICON_BASE = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GearIcon = ({ className }: { className?: string }) => (
  <svg {...ICON_BASE} aria-hidden="true" focusable="false" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg {...ICON_BASE} aria-hidden="true" focusable="false" className={className}>
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg {...ICON_BASE} aria-hidden="true" focusable="false" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary-bold text-base text-[#f0f0f0]">
        {label}
      </label>
      <InfoIcon className="h-5 w-5 shrink-0 text-[#d8d8d8]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[#8c8c8c] bg-[#262626] px-4 py-4 font-primary-light text-base text-[#e8e8e8] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-8 py-9 font-primary text-[#b0b0b0]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xl text-[#f0f0f0]">
        UI magician Agent
      </h2>
      <GearIcon className="h-7 w-7 shrink-0 text-[#f0f0f0]" />
    </div>

    <div className="mt-10 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#d8d8d8]" />
      <span className="font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-2.5">
      <ChevronUpIcon className="h-6 w-6 shrink-0 text-[#f0f0f0]" />
      <h3 className="font-primary-bold text-2xl text-[#f0f0f0]">
        Add New Design
      </h3>
    </div>

    <div className="mt-12 space-y-6">
      <Field
        id="test-card-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex justify-center gap-9">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="min-w-[170px] rounded-md bg-[#9a4a22] px-6 py-3 font-primary-bold text-base text-[#d8c3b8]"
        >
          {label}
        </button>
      ))}
    </div>

    <h4 className="mt-24 font-primary-bold text-xl text-[#f0f0f0]">
      Recent Breakdowns
    </h4>
  </div>
);
