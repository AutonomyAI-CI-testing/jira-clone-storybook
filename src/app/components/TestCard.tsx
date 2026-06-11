import React from 'react';
import { AiOutlineSetting, AiOutlineUp, AiOutlineInfoCircle } from 'react-icons/ai';

// Design constants based on Figma reference
const COLORS = {
  cardBg: '#2a2a2a',
  inputBg: '#333333',
  inputBorder: '#555555',
  buttonBg: '#b5541a', // Orange-brown brand color
  textPrimary: '#ffffff',
  textSecondary: '#f4f4f4',
  textMuted: '#c17a4a', // Muted orange/tan for subtitles
  placeholder: '#aaaaaa',
};

/**
 * TestCard component
 * A self-contained design panel replicating the "UI magician Agent" UI.
 * Used as a standalone reference component matching specific Figma requirements.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      style={{ backgroundColor: COLORS.cardBg, color: COLORS.textSecondary }} 
      className="p-6 w-[400px] mx-auto font-sans flex flex-col gap-6 rounded-sm shadow-xl"
    >
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center">
        <h1 style={{ color: COLORS.textPrimary, fontSize: '22px', fontWeight: 700 }}>UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="hover:opacity-80 transition-opacity">
          <AiOutlineSetting style={{ color: COLORS.textPrimary, fontSize: '24px' }} />
        </button>
      </div>

      {/* Breadcrumb/Subtitle Row */}
      <div className="flex items-center gap-4">
        <AiOutlineUp style={{ color: COLORS.textPrimary, fontSize: '14px' }} />
        <p style={{ color: COLORS.textMuted, fontSize: '15px' }}>From entire frame to a singl...</p>
      </div>

      <div className="flex flex-col gap-10 mt-6">
        {/* Section: Add New Design */}
        <div className="flex items-center gap-4">
          <AiOutlineUp style={{ color: COLORS.textPrimary, fontSize: '20px' }} />
          <h2 style={{ color: COLORS.textPrimary, fontSize: '20px', fontWeight: 700 }}>Add New Design</h2>
        </div>

        {/* Form Field: Personal Access Token */}
        <FormField 
          id="personalAccessToken" 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxx" 
        />

        {/* Form Field: Design URL */}
        <FormField 
          id="designUrl" 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />

        {/* Action Buttons */}
        <div className="flex gap-4 justify-between">
          <PrimaryButton>Awesome</PrimaryButton>
          <PrimaryButton>Prepare</PrimaryButton>
        </div>
      </div>

      {/* Footer Section: Recent Activity */}
      <div className="mt-12">
        <h3 style={{ color: COLORS.textPrimary, fontSize: '20px', fontWeight: 700 }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};

/**
 * Shared Form Field component to ensure consistent styling for inputs
 */
const FormField = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-4">
      <label htmlFor={id} style={{ color: COLORS.textPrimary, fontSize: '15px' }}>{label}</label>
      <AiOutlineInfoCircle style={{ color: COLORS.textPrimary, fontSize: '18px' }} />
    </div>
    <input
      type="text"
      id={id}
      style={{ 
        backgroundColor: COLORS.inputBg, 
        border: `1px solid ${COLORS.inputBorder}`, 
        color: COLORS.placeholder, 
        padding: '10px 12px', 
        width: '100%', 
        outline: 'none', 
        fontSize: '14px' 
      }}
      placeholder={placeholder}
    />
  </div>
);

/**
 * Shared Button component for the primary actions
 */
const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <button 
    type="button"
    style={{ 
      backgroundColor: COLORS.buttonBg, 
      color: COLORS.textPrimary, 
      fontWeight: 600, 
      padding: '12px 32px', 
      borderRadius: '8px', 
      border: 'none', 
      fontSize: '16px', 
      flex: 1, 
      cursor: 'pointer' 
    }}
    className="hover:brightness-110 active:scale-95 transition-all"
  >
    {children}
  </button>
);
