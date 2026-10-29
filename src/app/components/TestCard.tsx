import cx from "classix";

/**
 * TestCard — a self-contained card recreated from a Figma smoke-test frame.
 *
 * It deliberately takes no props and holds no state: it exists to prove the
 * build-and-preview path end to end, not to model real behaviour.
 */

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    className={cx("shrink-0", className)}
    fill="none"
    height="16"
    viewBox="0 0 14 16"
    width="14"
  >
    <circle cx="7" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.2" />
    <circle
      cx="7"
      cy="8"
      r="5.4"
      stroke="currentColor"
      strokeDasharray="1.7 1.7"
      strokeLinecap="round"
      strokeWidth="1.4"
    />
  </svg>
);

const ChevronUpIcon = ({
  className,
  height,
  width,
}: IconProps & { height: number; width: number }) => (
  <svg
    aria-hidden="true"
    className={cx("shrink-0", className)}
    fill="none"
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    width={width}
  >
    <path
      d={`M1.2 ${height - 1.2} ${width / 2} 1.2 ${width - 1.2} ${height - 1.2}`}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    className={cx("shrink-0", className)}
    fill="none"
    height="15"
    viewBox="0 0 15 15"
    width="15"
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 7.2v3.4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.1"
    />
    <circle cx="7.5" cy="4.6" r="0.75" fill="currentColor" />
  </svg>
);

// The design's field fills, borders and type are its own palette; this card is a
// standalone artifact, so its values do not map onto the app's semantic tokens.
const TOKEN_FIELD_CLASSES =
  "mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 font-primary text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]";

const URL_FIELD_CLASSES =
  "mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 font-primary text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]";

export const TestCard = () => (
  <div
    className="w-[254px] bg-[#1a1a1a] p-5 pb-16 font-primary text-[#b5b5b5]"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-4">
        UI magician Agent
      </h2>
      <GearIcon className="text-[#b5b5b5]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon className="text-[#8b9291]" height={5} width={8} />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <ChevronUpIcon className="text-[#b2b2b1]" height={8} width={12} />
      <h3 className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <div className="mt-7 flex items-center gap-5">
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <input
      aria-label="Personal Access Token"
      className={TOKEN_FIELD_CLASSES}
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      type="text"
    />

    <div className="mt-3 flex items-center gap-5">
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon className="text-[#a3a3a2]" />
    </div>
    <input
      aria-label="Design URL"
      className={URL_FIELD_CLASSES}
      placeholder="https://www.figma.com/file/:"
      type="text"
    />

    <div className="mt-6 flex gap-4">
      <button
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        type="button"
      >
        Awesome
      </button>
      <button
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        type="button"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
