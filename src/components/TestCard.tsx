import React from 'react';
import { AiOutlineSetting, AiOutlineUp, AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard - A self-contained smoke test component that replicates a Figma design panel.
 * Built for visual verification of the component rendering pipeline.
 * Consistent with the design specifications in the planner document.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="p-5 rounded-xl w-72 font-sans" 
      style={{ backgroundColor: "#2a2a2a" }}
    >
      <Header />
      <Subtitle />
      <SectionHeader title="Add New Design" />
      
      <div className="space-y-4 mb-6">
        <InputField 
          id="pat" 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        <InputField 
          id="designUrl" 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      <ActionButtons />
      <Footer />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-2">
    <span className="font-bold text-lg" style={{ color: "#ffffff" }}>
      UI magician Agent
    </span>
    <AiOutlineSetting style={{ color: "#ffffff" }} size={22} />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center gap-1 mb-6">
    <AiOutlineUp size={12} style={{ color: "#c07040" }} />
    <span className="text-sm" style={{ color: "#c07040" }}>
      From entire frame to a singl...
    </span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <AiOutlineUp size={16} style={{ color: "#ffffff" }} />
    <span className="font-bold text-xl" style={{ color: "#ffffff" }}>
      {title}
    </span>
  </div>
);

const InputField = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div>
    <div className="flex items-center gap-1 mb-1">
      <label htmlFor={id} style={{ color: "#cccccc" }}>{label}</label>
      <AiOutlineInfoCircle size={14} style={{ color: "#cccccc" }} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded px-3 py-2 text-sm border"
      style={{ backgroundColor: "#1e1e1e", color: "#888888", borderColor: "#444444" }}
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex gap-3 mb-6">
    <button
      className="flex-1 py-3 rounded-xl font-semibold text-white"
      style={{ backgroundColor: "#a0522d" }}
    >
      Awesome
    </button>
    <button
      className="flex-1 py-3 rounded-xl font-semibold text-white"
      style={{ backgroundColor: "#a0522d" }}
    >
      Prepare
    </button>
  </div>
);

const Footer = () => (
  <div>
    <span className="font-bold text-lg" style={{ color: "#ffffff" }}>
      Recent Breakdowns
    </span>
  </div>
);

