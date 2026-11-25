/**
 * TestCard — a static reproduction of the "UI magician Agent" Figma frame
 * ("Test Page - Simple", node 2:2).
 *
 * Smoke test only: no props, no state, no data, and nothing routes to it. The
 * frame is an off-system design (dark panel, rust accent), so its colours are
 * written as literal values instead of the app's semantic theme tokens, which
 * would resolve differently per theme. The gear, chevron and info glyphs are
 * drawn approximations — the frame's exported icons are bitmap images.
 */

const PANEL_CLASS =
  "w-[254px] bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary text-[13.5px] text-[#b5b5b5]";
const LABEL_CLASS =
  "flex items-center gap-2 font-primary-bold text-[11.5px] text-[#a4a4a3]";
const INPUT_CLASS =
  "mt-2 w-full bg-[#272822] px-3 font-primary-bold text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]";

const ACTION_LABELS = ["Awesome", "Prepare"];
const GEAR_TEETH_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="16"
    aria-hidden="true"
    focusable="false"
    className="shrink-0 text-[#b5b5b5]"
  >
    <circle cx="8" cy="8" r="4.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="8" cy="8" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    {GEAR_TEETH_ANGLES.map((angle) => (
      <line
        key={angle}
        x1="8"
        y1="1"
        x2="8"
        y2="2.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform={`rotate(${angle} 8 8)`}
      />
    ))}
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 12 8" aria-hidden="true" focusable="false" className={`shrink-0 ${className}`}>
    <path
      d="M1 6.5 6 1.5l5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 15 15"
    width="15"
    height="15"
    aria-hidden="true"
    focusable="false"
    className="shrink-0 text-[#a4a4a3]"
  >
    <circle cx="7.5" cy="7.5" r="6.75" fill="none" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="7.5" cy="4.3" r="0.95" fill="currentColor" />
    <rect x="6.7" y="6.4" width="1.6" height="5" rx="0.8" fill="currentColor" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
}

const Field = ({ id, label, placeholder, inputClassName }: FieldProps): JSX.Element => (
  <div>
    <label htmlFor={id} className={LABEL_CLASS}>
      {label}
      <InfoIcon />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`${INPUT_CLASS} ${inputClassName}`}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL_CLASS}>
    <div className="flex items-center justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[11.5px] text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-2" />
      <span className="min-w-0 truncate font-primary-bold">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-[62px] flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3" />
      <span className="font-primary-bold text-[#b2b2b1]">Add New Design</span>
    </h2>

    <div className="mt-7 space-y-3">
      <Field
        id="testcard-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        inputClassName="h-9 border border-[#a5adad]"
      />
      <Field
        id="testcard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        inputClassName="h-[37px] border-2 border-[#929291]"
      />
    </div>

    <div className="mt-5 flex gap-[17px]">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-11 font-primary-bold text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
