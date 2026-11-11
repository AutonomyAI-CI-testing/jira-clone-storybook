/**
 * TestCard — a self-contained card reproducing the "UI magician Agent" panel
 * from the attached Figma frame. It takes no props and holds no state.
 *
 * The palette is written as arbitrary Tailwind values on purpose: this repo's
 * tailwind.config.js replaces `theme.colors` / `theme.fontFamily` outright, so
 * stock classes such as `bg-gray-900` or `font-sans` compile to nothing.
 */

const PANEL_ACTIONS = ["Awesome", "Prepare"] as const;

const ICON_STROKE = "#c9c9c9";

const FIELD_INPUT_CLASS =
  "mt-4 h-16 w-full rounded border border-[#5c5c5a] bg-[#262625] px-4 text-[16px] text-[#d9d9d9] outline-none placeholder:text-[#9a9a9a]";

function GearIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ICON_STROKE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ICON_STROKE}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

function Field({ id, label, placeholder }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-[17px] text-[#c9c9c9]"
      >
        {label}
        <InfoIcon />
      </label>
      <input id={id} placeholder={placeholder} className={FIELD_INPUT_CLASS} />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1a1a1a] px-10 pt-10 pb-14 font-primary text-[#d9d9d9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[22px] text-[#d9d9d9]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex cursor-pointer items-center justify-center rounded p-1"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate text-[17px] text-[#9a9a9a]">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-16">
        <h2 className="flex items-center gap-3 font-primary-bold text-[20px] text-[#d9d9d9]">
          <ChevronUpIcon />
          Add New Design
        </h2>

        <div className="mt-8">
          <Field
            id="testElem-access-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mt-6">
          <Field
            id="testElem-design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-8 flex gap-8 pl-12">
          {PANEL_ACTIONS.map((action) => (
            <button
              key={action}
              type="button"
              className="h-16 w-[170px] cursor-pointer rounded-lg bg-[#a03d1b] text-[20px] text-[#b8a49b]"
            >
              {action}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-primary-bold text-[22px] text-[#d9d9d9]">
          Recent Breakdowns
        </h2>
      </section>
    </div>
  );
}
