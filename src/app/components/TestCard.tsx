/**
 * TestCard — a standalone reproduction of a Figma frame ("UI magician Agent").
 *
 * Deliberately self-contained: no props, no state, no app data, no route. It is a
 * smoke test of the design-to-code path.
 *
 * It also deliberately does NOT use the repo's semantic colour tokens: the design's
 * palette (near-black chrome with an amber accent) has no matching token, and adding
 * one means editing the shared stylesheet and Tailwind config, which this component
 * was asked not to do. The design's own values are therefore written as literals.
 */

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary"
  >
    {/* Title bar */}
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <SettingsGlyph />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <CaretUpGlyph size={8} />
      <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px]">
      <div className="flex items-center gap-[5px]">
        <CaretUpGlyph size={12} />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal access token */}
      <div className="mt-[28px]">
        <div className="flex items-center gap-[7px]">
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoGlyph />
        </div>
        <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px]">
          <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mt-[11px]">
        <div className="flex items-center gap-[7px]">
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoGlyph />
        </div>
        <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-5">
          <span className="min-w-0 truncate font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-[23px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>
    </div>

    {/* Recent breakdowns */}
    <p className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

const CaretUpGlyph = ({ size }: { size: number }): JSX.Element => (
  <svg
    width={size}
    height={(size * 5) / 8}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1.2 6.6L6 1.8L10.8 6.6"
      stroke="#c9c9c9"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoGlyph = (): JSX.Element => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0">
    <circle cx="7.5" cy="7.5" r="6.6" stroke="#a5adad" strokeWidth="1.2" />
    <rect x="6.85" y="6.6" width="1.3" height="4.3" rx="0.65" fill="#c9c9c9" />
    <circle cx="7.5" cy="4.5" r="0.95" fill="#c9c9c9" />
  </svg>
);

const SettingsGlyph = (): JSX.Element => (
  <svg width="14" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
    <circle cx="8" cy="8" r="4.5" stroke="#d0d0d0" strokeWidth="1.3" />
    <circle cx="8" cy="8" r="1.7" stroke="#d0d0d0" strokeWidth="1.3" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={angle}
          x1={8 + 3.6 * Math.cos(rad)}
          y1={8 + 3.6 * Math.sin(rad)}
          x2={8 + 6.6 * Math.cos(rad)}
          y2={8 + 6.6 * Math.sin(rad)}
          stroke="#d0d0d0"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);
