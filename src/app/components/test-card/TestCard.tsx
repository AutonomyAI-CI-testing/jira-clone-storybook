/**
 * TestCard — a static, self-contained recreation of the attached Figma frame
 * ("UI magician Agent"). Smoke test only: no props, no state, no behaviour.
 *
 * Colours are Tailwind arbitrary values carrying the frame's palette, because
 * `tailwind.config.js` replaces `theme.colors` wholesale with the semantic
 * token scales, so the built-in palette is not generated at all.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#141210] p-10 font-primary text-[#c9c6c4]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#e0dddb]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <CollapsibleRow
        className="mt-8"
        labelClassName="text-base"
        label="From enti re frame to a singl…"
      />

      <CollapsibleRow
        className="mt-32"
        labelClassName="text-lg"
        label="Add New Design"
      />

      <div className="mt-20">
        <Field
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <Field label="Design URL" value="https://www.figma.com/file/" />
      </div>

      <div className="mt-10 flex gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h2 className="mt-24 font-primary-bold text-xl text-[#e0dddb]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const CollapsibleRow = ({
  className,
  label,
  labelClassName,
}: CollapsibleRowProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <ChevronUpIcon />
    <span className={`truncate ${labelClassName}`}>{label}</span>
  </div>
);

const Field = ({ label, value }: FieldProps) => (
  <>
    <div className="flex items-center gap-2">
      <span className="text-base">{label}</span>
      <InfoIcon />
    </div>
    <div className="mt-3 flex h-16 items-center rounded-md border border-[#3a3735] bg-[#1f1c1b] px-4">
      <span className="truncate text-base text-[#8b8785]">{value}</span>
    </div>
  </>
);

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    type="button"
    className="h-16 flex-1 rounded-lg bg-[#8a3a1a] font-primary text-base text-[#d9d6d4]"
  >
    {label}
  </button>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 shrink-0 text-[#c9c6c4]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0 text-[#c9c6c4]"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0 text-[#c9c6c4]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 20 20"
  >
    <circle cx="10" cy="10" r="8.25" strokeWidth={1.5} />
    <path d="M10 9.25v5" strokeLinecap="round" strokeWidth={1.5} />
    <circle cx="10" cy="6.1" fill="currentColor" r="1" />
  </svg>
);

interface CollapsibleRowProps {
  className: string;
  label: string;
  labelClassName: string;
}

interface FieldProps {
  label: string;
  value: string;
}

interface ActionButtonProps {
  label: string;
}
