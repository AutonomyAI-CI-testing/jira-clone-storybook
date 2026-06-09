import React from "react";

/**
 * TestCard component
 * Renders a specialized UI for managing Figma designs within the Magician Agent context.
 * Uses inline styles and fixed colors to preserve the specific dark theme design required by the user.
 */

const IconSettings: React.FC<{ size?: number; opacity?: number }> = ({ size = 24, opacity = 0.7 }) => (
  <svg style={{ width: size, height: size, opacity }} fill="none" viewBox="0 0 24 24" stroke="white">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const IconChevronUp: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg style={{ width: size, height: size }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const IconInfo: React.FC<{ size?: number; opacity?: number }> = ({ size = 16, opacity = 0.8 }) => (
  <svg style={{ width: size, height: size, opacity }} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

interface InputFieldProps {
  label: string;
  value: string;
  monospace?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, monospace }) => (
  <div>
    <div className="label">
      {label}
      <IconInfo />
    </div>
    <div className="input-box" style={monospace ? { fontFamily: 'monospace' } : {}}>
      {value}
    </div>
  </div>
);

const TestCard: React.FC = () => {
  return (
    <>
      {/* 
          Using a <style> tag here to maintain the exact visual appearance of the 
          AI-generated design while keeping the main JSX cleaner and easier to read.
      */}
      <style>{`
        #testElem {
          background-color: #1a1b15 !important;
          color: #8b9291 !important;
          font-family: sans-serif;
          width: 300px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        #testElem h2, #testElem h3 {
          color: white !important;
          margin: 0;
          opacity: 0.9;
        }
        .row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header {
          justify-content: space-between;
        }
        .input-box {
          border: 1px solid #444;
          padding: 10px;
          border-radius: 2px;
          font-size: 15px;
          margin-top: 8px;
        }
        .btn-row {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }
        .btn {
          flex: 1;
          background-color: #8c3d1e;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 2px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .btn:hover {
          opacity: 0.9;
        }
        .label {
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>

      <div id="testElem">
        {/* Header Section */}
        <div className="row header">
          <h2>UI magician Agent</h2>
          <IconSettings />
        </div>

        {/* Collapsed Summary Row */}
        <div className="row">
          <IconChevronUp />
          <span style={{ fontSize: 15, fontWeight: 500 }}>From entire frame to a singl...</span>
        </div>

        {/* Add New Design Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="row">
            <IconChevronUp />
            <h3>Add New Design</h3>
          </div>

          <InputField label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxxxxxx" monospace />
          <InputField label="Design URL" value="https://www.figma.com/file/" />
        </div>

        {/* Action Buttons Row */}
        <div className="btn-row">
          <button className="btn">Awesome</button>
          <button className="btn">Prepare</button>
        </div>

        {/* Footer Section - Recent Breakdowns */}
        <div style={{ paddingTop: 32 }}>
          <h3>Recent Breakdowns</h3>
        </div>
      </div>
    </>
  );
};

export default TestCard;
