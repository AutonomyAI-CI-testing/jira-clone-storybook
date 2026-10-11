/**
 * Smoke-test component reproducing the attached Figma frame
 * ("Test Page - Simple (FOR TESTING)").
 *
 * Static markup only: no props, no state, no event handlers.
 *
 * The frame's style guide and exported icons were not available, so the
 * colours and sizes below are approximations read off the image rather than
 * design tokens. They are written as arbitrary Tailwind values on purpose:
 * this repo's `tailwind.config.js` replaces the whole `theme.colors` map with
 * semantic `var(--color-*)` tokens (which resolve to the light theme) and
 * replaces `theme.fontFamily`, so palette and `font-sans` utilities such as
 * `bg-zinc-900` do not exist here.
 */

const ACTION_BUTTON_CLASS =
  "flex-1 cursor-pointer rounded-lg bg-[#a04a24] px-6 py-4 font-primary-bold text-[#f2f2f2]";

interface IconProps {
  size: number;
  children: React.ReactNode;
}

const Icon = ({ size, children }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    {children}
  </svg>
);

const ChevronUpIcon = () => (
  <Icon size={20}>
    <path d="m6 15 6-6 6 6" />
  </Icon>
);

const GearIcon = () => (
  <Icon size={24}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const InfoIcon = () => (
  <Icon size={16}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </Icon>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2 text-[#c7c7c7]">
      <label htmlFor={id}>{label}</label>
      <InfoIcon />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full rounded-md border border-[#6f6f6f] bg-[#2b2b2b] px-3 py-3 text-[#9a9a9a] placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-screen w-full bg-[#141414] font-primary text-[#e8e8e8]"
  >
    <div className="mx-auto flex w-full max-w-[420px] flex-col gap-6 px-4 py-6">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer text-[#cfcfcf]"
        >
          <GearIcon />
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm text-[#8f8f8f]">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="flex items-center gap-2 font-primary-bold text-xl">
        <ChevronUpIcon />
        <h2>Add New Design</h2>
      </div>

      <div className="flex flex-col gap-4">
        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="flex gap-4">
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-4 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  </div>
);
