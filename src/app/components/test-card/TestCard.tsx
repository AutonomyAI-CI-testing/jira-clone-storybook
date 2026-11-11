/**
 * Smoke-test card reproducing the "UI magician Agent" panel from the Figma frame.
 *
 * Self-contained and prop-less: the panel is static markup and nothing here is wired
 * up. Colours are written as Tailwind arbitrary values rather than repo semantic
 * tokens, because this repo's Tailwind theme replaces `colors` outright and the
 * reference panel has no equivalent in the token set.
 */
export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-[#1e1e1e] p-10 font-primary text-base text-[#e8e8e8]"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer text-[#c0c0c0]"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate text-[#9a9a9a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-32 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <ChevronUpIcon />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="flex gap-8">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
}

const buttonClass =
  "flex-1 cursor-pointer rounded-lg bg-[#a03e1c] px-8 py-4 text-[#cfcabc]";

interface FieldProps {
  label: string;
  placeholder: string;
}

function Field({ label, placeholder }: FieldProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-sm text-[#b8b8b8]">{label}</span>
        <InfoIcon />
      </div>
      <input
        readOnly
        aria-label={label}
        placeholder={placeholder}
        className="w-full border border-[#6b6b6b] bg-[#242424] px-4 py-4 text-[#e8e8e8] outline-none placeholder:text-[#6e6e6e]"
      />
    </div>
  );
}

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function GearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      strokeWidth="2"
      className="shrink-0"
      {...iconProps}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      strokeWidth="2.5"
      className="shrink-0 text-[#c0c0c0]"
      {...iconProps}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      strokeWidth="1.5"
      className="shrink-0 text-[#c0c0c0]"
      {...iconProps}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
