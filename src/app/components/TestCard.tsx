/**
 * TestCard — a static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained by design: no props, no state, no interactivity. Nothing in
 * the app routes to it; it exists to exercise the frame-to-component path.
 *
 * Colours come from the palette declared in `src/app/styles/app.css` rather
 * than literal hex values, so the card keeps rendering its own dark surface
 * regardless of which app theme is active.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <circle cx="7" cy="8" r="4.2" />
      <circle cx="7" cy="8" r="1.5" />
      <path d="M11.2 8H13.2M9.97 10.97L11.38 12.38M7 12.2V14.2M4.03 10.97L2.62 12.38M2.8 8H0.8M4.03 5.03L2.62 3.62M7 3.8V1.8M9.97 5.03L11.38 3.62" />
    </g>
  </svg>
);

const ChevronUpIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 7v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.85" fill="currentColor" />
  </svg>
);

const inputClassName =
  "mt-2.5 w-full bg-[var(--DarkNeutral200)] px-[19px] text-[var(--Neutral400)] outline-none placeholder:text-[var(--Neutral600)]";

const buttonClassName =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[var(--Neutral600)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral-100)] px-5 py-5 font-primary text-[13.5px] leading-4 text-[var(--Neutral400)]"
  >
    <div className="flex items-start justify-between gap-2">
      <span className="font-primary-bold">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <ChevronUpIcon width={8} height={5} />
      <span className="truncate text-[11.5px] text-[var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-[5px]">
      <ChevronUpIcon width={12} height={8} />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <span className="text-[11.5px]">Personal Access Token</span>
      <InfoIcon />
    </div>

    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={`${inputClassName} h-9 border border-[var(--DarkNeutral800)] text-[11.5px]`}
    />

    <div className="mt-2.5 flex items-center gap-3">
      <span className="text-[11.5px]">Design URL</span>
      <InfoIcon />
    </div>

    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={`${inputClassName} h-[37px] border-2 border-[var(--DarkNeutral700)] text-[10.5px]`}
    />

    <div className="mt-6 flex items-center gap-4 pl-6">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <p className="mt-[46px]">Recent Breakdowns</p>
  </div>
);

export default TestCard;
