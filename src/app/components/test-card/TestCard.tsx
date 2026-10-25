import type { ReactNode } from "react";

/**
 * TestCard — smoke-test component.
 *
 * A static, self-contained reproduction of the "UI magician Agent" Figma frame.
 * It takes no props and holds no state: the fields are inert and the buttons are
 * disabled. Colours and type come from the frame itself rather than the app's
 * design tokens, because the frame is not one of the app's themes.
 */

const BODY_TEXT = "text-[11.5px] font-semibold leading-[14px]";
const HEADING_TEXT = "text-[13.5px] font-semibold leading-[16px]";

type GlyphProps = {
  viewBox: string;
  width: number;
  height: number;
  stroke: string;
  children: ReactNode;
};

const Glyph = ({ viewBox, width, height, stroke, children }: GlyphProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    stroke={stroke}
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    {children}
  </svg>
);

const GEAR_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315].map((degrees) => (degrees * Math.PI) / 180);

const SettingsGlyph = ({ stroke }: { stroke: string }) => (
  <Glyph viewBox="0 0 14 16" width={14} height={16} stroke={stroke}>
    <circle cx="7" cy="8" r="3.2" />
    {GEAR_ANGLES.map((angle) => (
      <line
        key={angle}
        x1={7 + Math.cos(angle) * 4.4}
        y1={8 + Math.sin(angle) * 4.4}
        x2={7 + Math.cos(angle) * 6.1}
        y2={8 + Math.sin(angle) * 6.1}
      />
    ))}
  </Glyph>
);

const ChevronGlyph = ({ width, height, stroke }: { width: number; height: number; stroke: string }) => (
  <Glyph viewBox={`0 0 ${width} ${height}`} width={width} height={height} stroke={stroke}>
    <path d={`M1 ${height - 1.4} L${width / 2} 1.4 L${width - 1} ${height - 1.4}`} />
  </Glyph>
);

const InfoGlyph = ({ stroke }: { stroke: string }) => (
  <Glyph viewBox="0 0 15 15" width={15} height={15} stroke={stroke}>
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 7v3.6" />
    <path d="M7.5 4.4v0.1" strokeWidth="2" />
  </Glyph>
);

const FieldLabel = ({ color, children }: { color: string; children: ReactNode }) => (
  <span className={`${BODY_TEXT} ${color}`}>{children}</span>
);

const Field = ({ placeholder, className }: { placeholder: string; className: string }) => (
  <div className={`flex items-center bg-[#272822] pl-[19px] ${BODY_TEXT} ${className}`}>{placeholder}</div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-[#1f1f1f] px-5 pb-[62px] pt-5 font-[Inter,sans-serif]">
    <div className="flex items-start justify-between">
      <span className={`${HEADING_TEXT} text-[#b5b5b5]`}>UI magician Agent</span>
      <SettingsGlyph stroke="#b5b5b5" />
    </div>

    <div className="ml-[3px] mt-[18px] flex items-center gap-[9px]">
      <ChevronGlyph width={8} height={5} stroke="#8b9291" />
      <span className={`${BODY_TEXT} text-[#8b9291]`}>From entire frame to a singl...</span>
    </div>

    <div className="ml-[6px] mt-[77px] flex items-center gap-[5px]">
      <ChevronGlyph width={12} height={8} stroke="#b2b2b1" />
      <span className={`${HEADING_TEXT} text-[#b2b2b1]`}>Add New Design</span>
    </div>

    <div className="mt-[26px] flex items-center justify-between">
      <FieldLabel color="text-[#a4a4a3]">Personal Access Token</FieldLabel>
      <InfoGlyph stroke="#a4a4a3" />
    </div>
    <Field
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[13px] h-[36px] border border-[#a5adad] text-[#737470]"
    />

    <div className="mt-[9px] flex items-center gap-[8px]">
      <FieldLabel color="text-[#a3a3a2]">Design URL</FieldLabel>
      <InfoGlyph stroke="#a3a3a2" />
    </div>
    <Field
      placeholder="https://www.figma.com/file/:"
      className="mt-[12px] h-[37px] border-2 border-[#929291] pl-[20px] text-[#71726e]"
    />

    <div className="ml-[24px] mt-[22px] flex gap-[17px]">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          disabled
          className={`h-[37px] w-[85px] rounded bg-[#843a17] ${BODY_TEXT} text-[#8c8078] disabled:cursor-not-allowed`}
        >
          {label}
        </button>
      ))}
    </div>

    <div className={`mt-[46px] ${HEADING_TEXT} text-[#b0b0b0]`}>Recent Breakdowns</div>
  </div>
);
