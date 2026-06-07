import React from 'react';

/**
 * TestCard Component
 * 
 * A self-contained React card component that replicates a "UI magician Agent" panel UI.
 * This is a smoke test to validate Figma design rendering with React + Tailwind.
 */

// Color palette for the dark theme card UI
const COLORS = {
  background: '#1e1b18',
  textPrimary: '#b5b5b5',
  textSecondary: '#8b9291',
  textTertiary: '#b2b2b1',
  labelText: '#a4a4a3',
  inputBackground: '#272822',
  inputBorder: '#929291',
  inputBorderLight: '#a5adad',
  inputText: '#737470',
  inputTextLight: '#71726e',
  buttonBackground: '#843a17',
  buttonText: '#8c8078',
  borderColor: '#3e3e3a',
  sectionText: '#b0b0b0',
};

const BUTTON_STYLE = {
  backgroundColor: COLORS.buttonBackground,
  color: COLORS.buttonText,
};

const TestCard = () => {
  return (
    <div 
      id="testElem" 
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.textPrimary,
      }}
      className="w-[254px] p-4 font-sans rounded-sm shadow-lg flex flex-col gap-4 overflow-hidden"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-bold">UI magician Agent</span>
        <span className="text-[16px] cursor-pointer">⚙️</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-start gap-2" style={{ color: COLORS.textSecondary }}>
        <span className="text-[10px] mt-1">▲</span>
        <span className="text-[12px] leading-tight font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Spacer created by flex gap */}

      <div className="flex items-center gap-2 mt-2" style={{ color: COLORS.textTertiary }}>
        <span className="text-[10px]">▼</span>
        <span className="text-[14px] font-semibold">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <label className="text-[12px] font-semibold" style={{ color: COLORS.labelText }}>Personal Access Token</label>
          <span className="text-[10px] border rounded-full w-3 h-3 flex items-center justify-center italic" style={{ color: COLORS.labelText, borderColor: COLORS.labelText }}>i</span>
        </div>
        <input 
          type="text" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
          style={{
            backgroundColor: COLORS.inputBackground,
            border: `2px solid ${COLORS.inputBorder}`,
            color: COLORS.inputText
          }}
          className="w-full rounded px-2 py-1.5 text-[12px] font-semibold outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <label className="text-[12px] font-semibold" style={{ color: COLORS.labelText }}>Design URL</label>
          <span className="text-[10px] border rounded-full w-3 h-3 flex items-center justify-center italic" style={{ color: COLORS.labelText, borderColor: COLORS.labelText }}>i</span>
        </div>
        <input 
          type="text" 
          placeholder="https://www.figma.com/file/:" 
          style={{
            backgroundColor: COLORS.inputBackground,
            border: `1px solid ${COLORS.inputBorderLight}`,
            color: COLORS.inputTextLight
          }}
          className="w-full rounded px-2 py-1.5 text-[11px] font-semibold outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-2 mt-2">
        <button 
          style={BUTTON_STYLE}
          className="flex-1 py-2.5 rounded text-[12px] font-semibold hover:opacity-90 transition-opacity"
        >
          Awesome
        </button>
        <button 
          style={BUTTON_STYLE}
          className="flex-1 py-2.5 rounded text-[12px] font-semibold hover:opacity-90 transition-opacity"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div 
        className="mt-4 text-[14px] font-semibold border-t pt-4" 
        style={{ color: COLORS.sectionText, borderColor: COLORS.borderColor }}
      >
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
