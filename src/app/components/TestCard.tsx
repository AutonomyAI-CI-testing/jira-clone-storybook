/**
 * TestCard — the "UI magician Agent" panel from the attached Figma frame.
 *
 * Smoke test: the layout is built from the design's own numbers (frame 254x508,
 * 20px inset, values taken from the frame's extracted style guide) but the
 * palette and typeface are approximations — the design's colours are outside
 * this repo's theme, and adding them as tokens would mean editing app.css and
 * tailwind.config.js. Self-contained on purpose: no props, no state, no data.
 */

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]";

const FIELD_CLASS =
  "h-[36px] w-full bg-[#272822] pl-[19px] font-primary-bold text-[11.5px] leading-[14px] text-[#b5b5b5]";

const ChevronUp = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoCircle = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.9v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

const Gear = ({ className }: { className?: string }): JSX.Element => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-primary-bold"
  >
    <div className="flex items-start justify-between text-[#b5b5b5]">
      <p className="text-[13.5px] leading-[16px]">UI magician Agent</p>
      <Gear className="mt-px h-[16px] w-[14px]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUp className="h-[5px] w-[8px] shrink-0" />
      <span className="min-w-0 truncate text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px]">
      <div className="flex items-end gap-[5px] text-[#b2b2b1]">
        <ChevronUp className="h-[8px] w-[12px] shrink-0" />
        <h2 className="text-[13.5px] leading-[16px]">Add New Design</h2>
      </div>

      <div className="mt-[26px]">
        <div className="flex items-center justify-between">
          <label htmlFor="testElem-token" className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoCircle className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          id="testElem-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${FIELD_CLASS} mt-[13px] border border-[#a5adad] placeholder:text-[#737470]`}
        />
      </div>

      <div className="mt-[9px]">
        <div className="flex items-center gap-[18px]">
          <label
            htmlFor="testElem-design-url"
            className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoCircle className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
        </div>
        <input
          id="testElem-design-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={`${FIELD_CLASS} mt-[12px] h-[37px] border-2 border-[#929291] text-[10.5px] leading-[13px] placeholder:text-[#71726e]`}
        />
      </div>

      <div className="ml-[24px] mt-[22px] flex gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16px] text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
