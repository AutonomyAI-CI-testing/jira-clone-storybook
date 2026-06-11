
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiArrowUpSLine } from 'react-icons/ri';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard: A static UI component representing a plugin panel design.
 * Built to match a specific Figma reference for design-system validation.
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-5 w-[254px] font-sans select-none"
    >
      <Header />
      <Subtitle />
      <SectionToggle label="Add New Design" />

      <div className="space-y-4 my-4">
        <InputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderClass="border border-[#a5adad]"
        />
        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderClass="border-2 border-[#929291]"
          textClass="text-[10.5px]"
        />
      </div>

      <ActionButtons />

      <div className="mt-10">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

const Header = () => (
  <div className="flex items-center justify-between mb-2">
    <span className="text-[#b5b5b5] font-semibold text-[13.5px]">
      UI magician Agent
    </span>
    <IoSettingsOutline className="text-[#b5b5b5]" size={16} />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center gap-1 mb-8">
    <RiArrowUpSLine className="text-[#8b9291]" size={14} />
    <span className="text-[#8b9291] text-[11.5px] font-semibold">
      From entire frame to a singl...
    </span>
  </div>
);

const SectionToggle = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2">
    <RiArrowUpSLine className="text-[#b2b2b1]" size={14} />
    <span className="text-[#b2b2b1] text-[13.5px] font-semibold">{label}</span>
  </div>
);

interface InputFieldProps {
  label: string;
  placeholder: string;
  borderClass: string;
  textClass?: string;
}

const InputField = ({
  label,
  placeholder,
  borderClass,
  textClass = 'text-[11.5px]',
}: InputFieldProps) => (
  <div>
    <div className="flex items-center gap-1 mb-1">
      <span className="text-[#a4a4a3] text-[11.5px] font-semibold">{label}</span>
      <AiOutlineInfoCircle className="text-[#a4a4a3]" size={14} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full bg-[#272822] ${borderClass} text-[#737470] placeholder:text-[#737470] ${textClass} font-semibold px-3 py-2 leading-tight focus:outline-none`}
      readOnly // Static component as per requirement
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex gap-3 justify-center mb-10">
    <PrimaryButton>Awesome</PrimaryButton>
    <PrimaryButton>Prepare</PrimaryButton>
  </div>
);

const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-7 py-2 active:opacity-80 transition-opacity">
    {children}
  </button>
);

export default TestCard;

