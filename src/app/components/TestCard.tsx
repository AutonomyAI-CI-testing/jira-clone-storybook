/**
 * Smoke-test card reproducing the "UI magician Agent" panel from the attached
 * Figma frame. Self-contained: no props, no state, no data. The two fields and
 * the two buttons are display-only.
 *
 * Colours come from the repo's semantic tokens, so the card follows the active
 * theme; it reads closest to the design in the dark theme. The design's own
 * values (panel #000000, fields #272822, buttons #843a17) have no role in this
 * token set and are deliberately not hardcoded here.
 */

const IconGear = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 15.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm9.06-2.66c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.3 7.3 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.03-1.58Z" />
  </svg>
);

const IconChevronUp = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    width="10"
    height="7"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconInfo = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7.2" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M8 7.2v4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.7" r="0.9" fill="currentColor" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-2xs text-font-subtle">
        {label}
      </label>
      <IconInfo className="shrink-0 text-font-subtle" />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-2.5 w-full bg-background-input px-[19px] py-2.5 text-2xs text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-elevation-surface px-5 pb-[62px] pt-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-font">
        UI magician Agent
      </span>
      <IconGear className="text-font-subtle" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IconChevronUp className="shrink-0 text-font-subtle" />
      <span className="truncate text-2xs text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <IconChevronUp className="shrink-0 text-font" />
      <span className="font-primary-bold text-xs text-font">Add New Design</span>
    </div>

    <Field
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      className="mt-7"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-3"
    />

    <div className="mt-[22px] flex gap-4 pl-6">
      <button
        type="button"
        className="w-[85px] rounded bg-background-warning-bold py-2.5 text-2xs text-font-inverse"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[85px] rounded bg-background-warning-bold py-2.5 text-2xs text-font-inverse"
      >
        Prepare
      </button>
    </div>

    <span className="mt-12 font-primary-bold text-xs text-font">
      Recent Breakdowns
    </span>
  </div>
);
