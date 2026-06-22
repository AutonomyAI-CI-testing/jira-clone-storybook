import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const COLORS = {
  bg: "#2a2a2a",
  inputBg: "#1e1e1e",
  border: "#444",
  fontPrimary: "#b5b5b5",
  fontSecondary: "#8b9291",
  fontTertiary: "#b2b2b1",
  fontLabel: "#a4a4a3",
  placeholder: "#737470",
  accent: "#b85c38",
  accentHover: "#a0522d",
  buttonText: "#c8b8a8",
};

export const TestCard = (): JSX.Element => {
  const renderField = (id: string, label: string, placeholder: string) => (
    <div className="mb-3">
      <div className="flex items-center gap-1 mb-1">
        <label htmlFor={id} className="text-sm text-[color:var(--color-font-label)]">
          {label}
        </label>
        <AiOutlineInfoCircle className="text-sm text-[color:var(--color-font-label)]" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full p-2 rounded bg-[color:var(--color-input-bg)] border border-[color:var(--color-border)] text-[color:var(--color-font-primary)] placeholder:text-[color:var(--color-placeholder)] focus:outline-none focus:border-[color:var(--color-accent-hover)]"
        style={{
          "--color-input-bg": COLORS.inputBg,
          "--color-border": COLORS.border,
          "--color-font-primary": COLORS.fontPrimary,
          "--color-placeholder": COLORS.placeholder,
          "--color-accent-hover": COLORS.accentHover,
        } as React.CSSProperties & Record<string, string>}
      />
    </div>
  );

  const ActionButton = ({ children }: { children: React.ReactNode }) => (
    <button
      className="flex-1 bg-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-hover)] text-[color:var(--color-button-text)] font-semibold text-sm px-6 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-hover)] focus:ring-opacity-50 transition-colors"
      style={{
        "--color-accent": COLORS.accent,
        "--color-accent-hover": COLORS.accentHover,
        "--color-button-text": COLORS.buttonText,
      } as React.CSSProperties & Record<string, string>}
    >
      {children}
    </button>
  );

  return (
    <div
      id="testElem"
      className="w-[254px] p-4 rounded-lg font-sans text-white bg-[color:var(--color-bg)]"
      style={{ "--color-bg": COLORS.bg, "--color-font-label": COLORS.fontLabel } as React.CSSProperties & Record<string, string>}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-2">
        <h2
          className="text-lg font-semibold text-[color:var(--color-font-primary)]"
          style={{ "--color-font-primary": COLORS.fontPrimary } as React.CSSProperties & Record<string, string>}
        >
          UI magician Agent
        </h2>
        <IoSettingsOutline
          className="text-xl text-[color:var(--color-font-primary)]"
          style={{ "--color-font-primary": COLORS.fontPrimary } as React.CSSProperties & Record<string, string>}
        />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp
          className="text-lg text-[color:var(--color-font-secondary)]"
          style={{ "--color-font-secondary": COLORS.fontSecondary } as React.CSSProperties & Record<string, string>}
        />
        <span
          className="text-sm text-[color:var(--color-font-secondary)]"
          style={{ "--color-font-secondary": COLORS.fontSecondary } as React.CSSProperties & Record<string, string>}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mt-4 mb-3">
        <FiChevronUp
          className="text-lg text-[color:var(--color-font-tertiary)]"
          style={{ "--color-font-tertiary": COLORS.fontTertiary } as React.CSSProperties & Record<string, string>}
        />
        <h3
          className="text-base font-semibold text-[color:var(--color-font-tertiary)]"
          style={{ "--color-font-tertiary": COLORS.fontTertiary } as React.CSSProperties & Record<string, string>}
        >
          Add New Design
        </h3>
      </div>

      {/* Input Fields */}
      {renderField("accessToken", "Personal Access Token", "figd_xxxxxxxxxxxxxxxxxx")}
      <div className="mb-2" /> {/* Spacer between fields */}
      {renderField("designUrl", "Design URL", "https://www.figma.com/file/:")}

      {/* Buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns Section */}
      <h3
        className="mt-6 text-base font-semibold text-[color:var(--color-font-breakdowns)]"
        style={{ "--color-font-breakdowns": "#b0b0b0" } as React.CSSProperties & Record<string, string>}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};
