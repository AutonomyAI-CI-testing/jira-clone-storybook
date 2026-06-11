import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { RiArrowUpSLine } from 'react-icons/ri';

/**
 * Approximate colors from Figma design.
 * Using hardcoded hex values to match the smoke test requirement for high-fidelity dark UI.
 */
const COLORS = {
  bg: '#1e1e1e',
  text: '#d4c5b0',
  subtle: '#cbbdae',
  border: '#3a3a3a',
  orange: '#b85c38',
  inputBg: 'transparent',
};

/**
 * Reusable Section Heading/Label component for the card.
 */
const Label = ({ htmlFor, children, showInfo }: { htmlFor: string; children: React.ReactNode; showInfo?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
    <label htmlFor={htmlFor} style={{ fontSize: 13, color: COLORS.text }}>
      {children}
    </label>
    {showInfo && <AiOutlineInfoCircle style={{ fontSize: 14, color: COLORS.text }} />}
  </div>
);

/**
 * Reusable Input component for the card.
 */
const Input = ({ id, placeholder }: { id: string; placeholder: string }) => (
  <input
    id={id}
    type="text"
    placeholder={placeholder}
    style={{
      width: '100%',
      padding: '8px 12px',
      backgroundColor: COLORS.inputBg,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 6,
      fontSize: 13,
      color: COLORS.text,
      outline: 'none',
      boxSizing: 'border-box',
    }}
  />
);

/**
 * Reusable Button component for the card action buttons.
 */
const Button = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      flex: 1,
      padding: '10px 0',
      backgroundColor: COLORS.orange,
      color: COLORS.text,
      borderRadius: 8,
      border: 'none',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

/**
 * TestCard: A self-contained smoke test component simulating a "UI magician Agent" UI.
 * Validates visual output pipeline with a complex dark-themed card.
 */
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{
        width: 320,
        padding: 16,
        paddingBottom: 32,
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        borderRadius: 8,
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontFamily: 'CircularStd, sans-serif',
      }}
    >
      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: COLORS.text }}>
          UI magician Agent
        </h2>
        <AiOutlineSetting style={{ fontSize: 22, color: COLORS.text }} />
      </div>

      {/* Collapsible/Meta Row: Current Agent Status/Context */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: COLORS.subtle }}>
        <RiArrowUpSLine style={{ fontSize: 18, transform: 'rotate(180deg)', flexShrink: 0 }} />
        <p style={{ margin: 0, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Primary Section: Configuration */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <RiArrowUpSLine style={{ fontSize: 18, flexShrink: 0 }} />
        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: COLORS.text }}>
          Add New Design
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Personal Access Token Input */}
        <div>
          <Label htmlFor="personalAccessToken" showInfo>
            Personal Access Token
          </Label>
          <Input id="personalAccessToken" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        </div>

        {/* Design URL Input */}
        <div>
          <Label htmlFor="designUrl" showInfo>
            Design URL
          </Label>
          <Input id="designUrl" placeholder="https://www.figma.com/file/:" />
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
        <Button>Awesome</Button>
        <Button>Prepare</Button>
      </div>

      {/* Footer Info */}
      <h3 style={{ margin: '4px 0 0 0', fontSize: 15, fontWeight: 700, color: COLORS.text }}>
        Recent Breakdowns
      </h3>
    </div>
  );
}
