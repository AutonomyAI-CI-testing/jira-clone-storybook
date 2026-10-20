/**
 * Smoke-test component: a self-contained reproduction of the "UI magician Agent"
 * panel from the referenced Figma frame. It takes no props and renders static
 * markup only — nothing here is wired into the app.
 *
 * The frame's palette (near-black panel, rust buttons) has no equivalent in the
 * repo's semantic token set, so this file paints itself with literal values.
 */

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.6,
} as const;

const GearIcon = (): JSX.Element => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" {...iconProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.08a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    {...iconProps}
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    {...iconProps}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
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
}): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base text-[#b8b8b8]">
        {label}
      </label>
      <InfoIcon className="h-5 w-5 text-[#b8b8b8]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="h-[76px] w-full rounded border border-[#5a5a5a] bg-transparent px-4 text-base text-[#c7c7c7] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const PanelButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[68px] w-[170px] rounded-[10px] bg-[#8b3d1b] font-primary-bold text-base text-[#b3a49a]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 py-9 font-primary text-white"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <button type="button" aria-label="Open settings" className="text-[#a8a8a8]">
        <GearIcon />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <ChevronUpIcon className="h-4 w-4 shrink-0 text-[#d0d0d0]" />
      <p className="truncate text-lg text-[#d0d0d0]">
        From entire frame to a single component
      </p>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-white" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-9 flex flex-col gap-5">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-14 flex gap-9 pl-12">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
