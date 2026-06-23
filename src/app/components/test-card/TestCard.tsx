
import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard component displays a design integration setup interface.
 * Matches design with specific hex colors and sizing for the 'UI magician Agent'.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-4 w-full max-w-sm mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: '#2a2a2a', color: '#ffffff' }}
    >
      <Header />
      <SubHeader />

      {/* Spacer */}
      <div className="h-4" />

      <DesignSection />
      <RecentBreakdowns />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-[13.5px] font-semibold" style={{ color: '#b5b5b5' }}>UI magician Agent</h2>
    <IoSettingsOutline style={{ color: '#b5b5b5', fontSize: '18px' }} />
  </div>
);

const SubHeader = () => (
  <div className="flex items-center gap-1 mb-4">
    <FiChevronUp style={{ color: '#8b9291' }} />
    <p className="text-[11.5px] italic" style={{ color: '#8b9291' }}>From entire frame to a singl...</p>
  </div>
);

const DesignSection = () => (
  <div className="mb-4">
    <div className="flex items-center gap-1 mb-3">
      <FiChevronUp style={{ color: '#b2b2b1' }} />
      <h3 className="text-[13.5px] font-semibold" style={{ color: '#b2b2b1' }}>Add New Design</h3>
    </div>

    <Field
      id="pat"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      borderWidth="1px"
      borderColor="#a5adad"
      textColor="#737470"
    />

    <Field
      id="designUrl"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      borderWidth="2px"
      borderColor="#929291"
      textColor="#71726e"
      className="mb-4"
    />

    <div className="flex gap-2">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderWidth: string;
  borderColor: string;
  textColor: string;
  className?: string;
}

const Field = ({ id, label, placeholder, borderWidth, borderColor, textColor, className = "mb-3" }: FieldProps) => (
  <div className={className}>
    <label htmlFor={id} className="flex items-center gap-1 text-[11.5px] font-semibold mb-1" style={{ color: '#a4a4a3' }}>
      <span>{label}</span>
      <AiOutlineInfoCircle style={{ color: '#a4a4a3' }} />
    </label>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="w-full px-2 py-2 rounded text-[11.5px]"
      style={{
        backgroundColor: '#272822',
        border: `${borderWidth} solid ${borderColor}`,
        color: textColor,
      }}
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    className="flex-1 py-2 px-4 text-[11.5px] font-semibold rounded"
    style={{ backgroundColor: '#843a17', color: '#c8b8b0', borderRadius: '4px' }}
  >
    {label}
  </button>
);

const RecentBreakdowns = () => (
  <h3 className="text-[13.5px] font-semibold mt-4" style={{ color: '#b0b0b0' }}>Recent Breakdowns</h3>
);
