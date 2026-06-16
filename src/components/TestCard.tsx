import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

/**
 * A UI component representing an agent configuration card.
 * Used for managing design integrations like Figma.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white p-5 rounded-xl max-w-sm w-full font-sans">
      <Header title="UI magician Agent" />

      <Subheader
        icon={<FiChevronUp />}
        text="From entire frame to a singl..."
      />

      <SectionHeader title="Add New Design" icon={<FiChevronUp className="text-white" />} />

      <div className="mt-4 space-y-3">
        <InputField
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="flex gap-3 mt-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h2 className="font-semibold text-base mt-8">Recent Breakdowns</h2>
    </div>
  );
};

const Header = ({ title }: { title: string }) => (
  <div className="flex justify-between items-center">
    <h1 className="text-lg font-bold">{title}</h1>
    <AiOutlineSetting className="text-xl cursor-not-allowed" />
  </div>
);

const Subheader = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-1 mt-2 text-sm text-[#c47d4a]">
    {icon}
    <span>{text}</span>
  </div>
);

const SectionHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-2 mt-6">
    {icon}
    <h2 className="font-semibold text-base">{title}</h2>
  </div>
);

const InputField = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div>
    <label htmlFor={id} className="flex items-center gap-1 text-sm font-medium text-white mb-1">
      {label}
      <AiOutlineInfoCircle className="text-xs text-gray-400" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md bg-[#2e2e2e] border border-[#4a4a4a] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#b85c2a] transition-colors"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button className="flex-1 rounded-lg bg-[#b85c2a] hover:bg-[#a34d21] active:bg-[#8f421c] py-3 text-sm font-semibold text-white transition-colors">
    {label}
  </button>
);
