import cx from "classix";

/**
 * TestCard — a static, self-contained render of the "UI magician Agent" Figma frame.
 *
 * Smoke test only. Every colour, type size and offset below is a literal taken from the
 * Figma style guide, not a design-system token: this repo's token set has no dark surface,
 * no `#843a17`, and no neutral ramp that reaches `#b5b5b5`. They are Tailwind arbitrary
 * values on purpose, and must NOT be read as a pattern for product UI — a product
 * component names a semantic role (`bg-elevation-surface`, `text-font-subtle`).
 *
 * The component takes no props and is not routed anywhere.
 */

const GEAR_TEETH = [0, 45, 90, 135, 180, 225, 270, 315];

const GLYPH_CLASS = "shrink-0 text-[#c9c9c9]";

const FIELD_BASE_CLASS = "w-full bg-[#272822] font-semibold";

const LABEL_CLASS = "text-[11.5px] leading-[13.92px] font-semibold";

const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]";

const SettingsGear = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className={GLYPH_CLASS}
  >
    <g fill="currentColor">
      {GEAR_TEETH.map((angle) => (
        <rect
          key={angle}
          x="5.8"
          y="0.6"
          width="2.4"
          height="2.8"
          rx="0.5"
          transform={`rotate(${angle} 7 8)`}
        />
      ))}
      <path
        d="M7 3.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 2.5a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const ChevronUp = ({ width, height, strokeWidth }: ChevronUpProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className={GLYPH_CLASS}
  >
    <path
      d={`M${strokeWidth} ${height - strokeWidth} ${width / 2} ${strokeWidth} ${
        width - strokeWidth
      } ${height - strokeWidth}`}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoCircle = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className={GLYPH_CLASS}
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <path d="M7.5 6.9v3.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.8" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <SettingsGear />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUp width={8} height={5} strokeWidth={1.2} />
      <p className={cx(LABEL_CLASS, "truncate text-[#8b9291]")}>
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUp width={12} height={8} strokeWidth={1.8} />
      <h3 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <label className="mt-[28px] flex items-center gap-5" htmlFor="test-card-token">
      <span className={cx(LABEL_CLASS, "text-[#a4a4a3]")}>Personal Access Token</span>
      <InfoCircle />
    </label>
    <input
      id="test-card-token"
      className={cx(
        FIELD_BASE_CLASS,
        "mt-[11px] h-[36px] border border-[#a5adad] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      )}
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <label className="mt-[11px] flex items-center gap-5" htmlFor="test-card-url">
      <span className={cx(LABEL_CLASS, "text-[#a3a3a2]")}>Design URL</span>
      <InfoCircle />
    </label>
    <input
      id="test-card-url"
      className={cx(
        FIELD_BASE_CLASS,
        "mt-[9px] h-[37px] border-2 border-[#929291] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      )}
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-[46px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

interface ChevronUpProps {
  width: number;
  height: number;
  strokeWidth: number;
}
