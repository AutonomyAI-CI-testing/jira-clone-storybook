/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel from the
 * supplied Figma frame (254 x 508).
 *
 * This is a standalone smoke-test surface, not part of the app's themed UI: the panel is
 * a fixed dark artifact with no role in this app's theme set, so it carries the design's
 * own colours as Tailwind arbitrary values rather than semantic tokens. It takes no props
 * and holds no state.
 */
import cx from "classix";

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1.5 6.5L6 2L10.5 6.5" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.5v4" strokeLinecap="round" />
    <circle cx="8" cy="4.6" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ id, label, placeholder, variant }: FieldProps): JSX.Element => (
  <>
    <label
      htmlFor={id}
      className="flex items-center gap-2 font-primary-bold text-xs leading-4 text-[#a4a4a3]"
    >
      {label}
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        "h-9 w-full bg-[#272822] px-2 font-primary-bold text-[#737470] outline-none placeholder:text-[#737470]",
        variant === "token"
          ? "border border-[#a5adad] text-xs"
          : "border-2 border-[#929291] text-2xs"
      )}
    />
  </>
);

const ActionButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-xs leading-4 text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-16 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-sm leading-4 text-[#b5b5b5]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[#a5adad]"
      >
        <GearIcon />
      </button>
    </div>

    <button
      type="button"
      className="mt-4 flex w-full items-center gap-2 text-left"
    >
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="min-w-0 truncate font-primary-bold text-xs leading-4 text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </button>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-sm leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex flex-col gap-3">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        variant="token"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        variant="url"
      />
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-12 font-primary-bold text-sm leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  variant: "token" | "url";
}
