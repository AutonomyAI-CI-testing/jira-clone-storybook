import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard is a static visual representation of a "UI magician Agent" plugin panel.
 * It serves as a visual test component for the Storybook infrastructure.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="bg-[#1e1e1e] rounded-lg p-5 w-[320px] select-none text-white">

        <Header />

        <CollapsibleRow label="From entire frame to a singl..." />

        <div className="mb-4">
          <SectionTitle title="Add New Design" />

          <InputField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />

          <InputField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            containerClassName="mb-4"
          />

          <ActionButtons />
        </div>

        <div className="mt-6">
          <SectionTitle title="Recent Breakdowns" showIcon={false} />
        </div>

      </div>
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <span className="font-bold text-lg">UI magician Agent</span>
    <IoSettingsOutline size={22} className="cursor-pointer hover:opacity-80 transition-opacity" />
  </div>
);

const CollapsibleRow = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 mb-6 cursor-pointer group">
    <HiChevronUp className="text-gray-400 group-hover:text-white transition-colors" />
    <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{label}</span>
  </div>
);

const SectionTitle = ({ title, showIcon = true }: { title: string; showIcon?: boolean }) => (
  <div className="flex items-center gap-2 mb-3 cursor-pointer group">
    {showIcon && <HiChevronUp className="group-hover:translate-y-[-1px] transition-transform" />}
    <span className="font-bold text-base">{title}</span>
  </div>
);

const InputField = ({
  label,
  placeholder,
  containerClassName = "mb-3"
}: {
  label: string;
  placeholder: string;
  containerClassName?: string;
}) => (
  <div className={containerClassName}>
    <label className="text-sm mb-1 flex items-center gap-1">
      {label}
      <AiOutlineInfoCircle className="text-gray-400 cursor-help" size={16} />
    </label>
    <input
      readOnly
      placeholder={placeholder}
      className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-gray-300
                 placeholder:text-gray-500 rounded px-3 py-2 text-sm outline-none
                 focus:border-gray-500 transition-colors cursor-default"
    />
  </div>
);

const ActionButtons = () => {
  // Brand color shared across primary CTAs in this component
  const buttonClassName = `
    flex-1 bg-[#9b4f1f] hover:bg-[#b35f2a]
    text-white font-semibold rounded-lg py-3
    transition-colors active:scale-[0.98]
  `;

  return (
    <div className="flex gap-3">
      <button className={buttonClassName}>Awesome</button>
      <button className={buttonClassName}>Prepare</button>
    </div>
  );
};
