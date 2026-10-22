import cx from "classix";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame
 * supplied with this task. It is a smoke test: no props, no state, no
 * interaction — the two fields are readOnly and nothing is wired to the app.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="5.4" />
    <circle cx="8" cy="8" r="2.4" />
    <line x1="13.4" y1="8" x2="15.2" y2="8" />
    <line x1="11.82" y1="11.82" x2="13.09" y2="13.09" />
    <line x1="8" y1="13.4" x2="8" y2="15.2" />
    <line x1="4.18" y1="11.82" x2="2.91" y2="13.09" />
    <line x1="2.6" y1="8" x2="0.8" y2="8" />
    <line x1="4.18" y1="4.18" x2="2.91" y2="2.91" />
    <line x1="8" y1="2.6" x2="8" y2="0.8" />
    <line x1="11.82" y1="4.18" x2="13.09" y2="2.91" />
  </svg>
);

const CaretUpIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 8" fill="none" className={className} aria-hidden="true">
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <circle cx="8" cy="8" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <line
      x1="8"
      y1="7.4"
      x2="8"
      y2="11.4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.8" fill="currentColor" />
  </svg>
);

const Field = ({
  label,
  placeholder,
  borderClassName,
}: {
  label: string;
  placeholder: string;
  borderClassName: string;
}) => (
  <div>
    <div className="flex items-center gap-5 text-[var(--DarkNeutral800)]">
      <span className="font-primary-bold text-2xs">{label}</span>
      <InfoIcon className="h-[15px] w-[15px]" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-2.5 h-9 w-full rounded bg-[var(--DarkNeutral250)] px-[19px] font-primary text-2xs text-[var(--DarkNeutral900)] outline-none placeholder:text-[var(--DarkNeutral600)]",
        borderClassName
      )}
    />
  </div>
);

const actionClassName =
  "h-10 w-[87px] cursor-pointer rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--DarkNeutral700)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] px-5 pb-16 pt-5 text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center text-[var(--DarkNeutral900)]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <CaretUpIcon className="h-[5px] w-2" />
      <span className="font-primary text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <CaretUpIcon className="h-2 w-3" />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <div className="mt-7">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        borderClassName="border border-[var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-3">
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        borderClassName="border-2 border-[var(--DarkNeutral700)]"
      />
    </div>

    <div className="ml-[23px] mt-5 flex gap-[15px]">
      <button type="button" className={actionClassName}>
        Awesome
      </button>
      <button type="button" className={actionClassName}>
        Prepare
      </button>
    </div>

    <div className="mt-[46px] font-primary-bold text-xs">Recent Breakdowns</div>
  </div>
);
