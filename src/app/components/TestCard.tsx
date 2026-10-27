import type { CSSProperties } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * The frame is a fixed dark panel with a rust-orange accent. The app's semantic
 * colour tokens swap with the active theme, so they cannot hold a panel that has
 * to stay dark, and the token set has no orange. This palette is therefore the
 * single source of colour for this self-contained component; it is applied as
 * custom properties on the root and consumed through Tailwind classes.
 */
const palette = {
  surface: "#1a1a1a",
  field: "#242424",
  fieldBorder: "#8a8a8a",
  text: "#e6e6e6",
  muted: "#a8a8a8",
  placeholder: "#8a8a8a",
  accent: "#8f3f16",
  accentText: "#c8c8c8",
};

const themeVars = {
  "--tc-surface": palette.surface,
  "--tc-field": palette.field,
  "--tc-field-border": palette.fieldBorder,
  "--tc-text": palette.text,
  "--tc-muted": palette.muted,
  "--tc-placeholder": palette.placeholder,
  "--tc-accent": palette.accent,
  "--tc-accent-text": palette.accentText,
} as CSSProperties;

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    style={themeVars}
    className="w-[508px] bg-[color:var(--tc-surface)] px-[30px] pb-[48px] pt-[36px] font-primary text-[color:var(--tc-text)]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-[23px] leading-none">
        UI magician Agent
      </h1>
      <FiSettings
        aria-hidden="true"
        className="h-[26px] w-[26px] shrink-0 text-[color:var(--tc-text)]"
      />
    </div>

    <div className="mt-[28px] flex items-center gap-[14px]">
      <FiChevronUp
        aria-hidden="true"
        className="h-[20px] w-[20px] shrink-0 text-[color:var(--tc-muted)]"
      />
      <span className="text-[20px] leading-none text-[color:var(--tc-muted)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[100px] flex items-center gap-[12px]">
      <FiChevronUp
        aria-hidden="true"
        className="h-[24px] w-[24px] shrink-0 text-[color:var(--tc-text)]"
      />
      <h2 className="font-primary-bold text-[24px] leading-none">
        Add New Design
      </h2>
    </div>

    <div className="mt-[86px] space-y-[46px]">
      <PanelField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
      />
      <PanelField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-[30px] flex gap-[34px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-[92px] font-primary-bold text-[22px] leading-none">
      Recent Breakdowns
    </h2>
  </div>
);

const PanelField = ({ label, placeholder }: PanelFieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-[16px]">
      <span className="text-[20px] leading-none">{label}</span>
      <FiInfo
        aria-hidden="true"
        className="h-[22px] w-[22px] shrink-0 text-[color:var(--tc-text)]"
      />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-[12px] h-[70px] w-full rounded-none border-2 border-[color:var(--tc-field-border)] bg-[color:var(--tc-field)] px-[26px] text-[20px] text-[color:var(--tc-text)] placeholder:text-[color:var(--tc-placeholder)]"
    />
  </div>
);

const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[65px] w-[171px] rounded-[6px] bg-[color:var(--tc-accent)] text-[20px] text-[color:var(--tc-accent-text)]"
  >
    {children}
  </button>
);

interface PanelFieldProps {
  label: string;
  placeholder: string;
}

interface PanelButtonProps {
  children: string;
}
