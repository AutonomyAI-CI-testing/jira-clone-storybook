import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

// The rust action fill has no semantic role in the design system, so it is
// written as the raw palette step through an arbitrary value.
const ACTION_BUTTON_CLASSES =
  "rounded-lg bg-[var(--Orange800)] px-10 py-4 font-primary-bold text-white hover:bg-[var(--Orange900)]";

const FIELD_INPUT_CLASSES =
  "h-16 w-full rounded border border-border-bold bg-elevation-surface-raised px-5 text-lg font-primary-bold text-font-subtle placeholder:text-font-subtlest";

const SECTION_HEADING_CLASSES = "flex items-center gap-2";

function SectionHeading({ children }: { children: string }) {
  return (
    <div className={SECTION_HEADING_CLASSES}>
      <IoChevronUp className="h-5 w-5 shrink-0" />
      <h2 className="font-primary-black text-2xl">{children}</h2>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-lg font-primary-light">{label}</span>
        <IoInformationCircleOutline className="h-5 w-5 shrink-0 text-font-subtle" />
      </div>
      <input
        aria-label={label}
        placeholder={placeholder}
        className={FIELD_INPUT_CLASSES}
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="dark flex w-[508px] flex-col gap-6 bg-elevation-surface p-7 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <IoSettingsOutline className="h-6 w-6 shrink-0 text-font-subtle" />
      </div>

      <div className="flex items-center gap-2 text-font-subtle">
        <IoChevronUp className="h-5 w-5 shrink-0" />
        <span className="truncate text-lg font-primary-light">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <SectionHeading>Add New Design</SectionHeading>
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
        <div className="mt-2 flex gap-4">
          {["Awesome", "Prepare"].map((label) => (
            <button key={label} type="button" className={ACTION_BUTTON_CLASSES}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <SectionHeading>Recent Breakdowns</SectionHeading>
      </div>
    </div>
  );
}
