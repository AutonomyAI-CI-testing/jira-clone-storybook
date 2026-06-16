import React from "react";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

/**
 * TestCard is a static smoke-test component that replicates a UI panel from Figma.
 * It uses Tailwind arbitrary values to match specific brand colors.
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] rounded-xl p-5 w-full max-w-xs mx-auto text-white"
    >
      <Header />
      <CollapsibleRow />

      {/* Vertical spacing before the main form section */}
      <div className="mt-6" />

      <SectionHeader title="Add New Design" />

      <div className="mt-4 flex flex-col gap-4">
        <InputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <ActionButtons />
      <RecentBreakdowns />
    </div>
  );
};

const Header: React.FC = () => (
  <div className="flex justify-between items-center">
    <h1 className="font-bold text-lg">UI magician Agent</h1>
    <AiOutlineSetting className="text-xl" />
  </div>
);

const CollapsibleRow: React.FC = () => (
  <div className="flex items-center gap-2 mt-2">
    <HiChevronUp className="text-[#c97a4a] text-lg" />
    <p className="text-[#c97a4a] text-sm">From entire frame to a singl...</p>
  </div>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-2">
    <HiChevronUp className="text-lg" />
    <h2 className="font-bold text-lg">{title}</h2>
  </div>
);

const InputField: React.FC<{ label: string; placeholder: string }> = ({
  label,
  placeholder,
}) => (
  <div>
    <div className="flex items-center text-sm mb-1">
      {label}
      <AiOutlineInfoCircle className="ml-1 text-base" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="bg-[#2a2a2a] border border-[#3a3a3a] rounded text-gray-400 placeholder-gray-500 w-full p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#c97a4a]"
      readOnly
    />
  </div>
);

const ActionButtons: React.FC = () => (
  <div className="flex gap-3 mt-4 justify-center">
    <button className="bg-[#b85c2a] rounded-lg px-5 py-2 font-semibold hover:opacity-90 transition-opacity">
      Awesome
    </button>
    <button className="bg-[#b85c2a] rounded-lg px-5 py-2 font-semibold hover:opacity-90 transition-opacity">
      Prepare
    </button>
  </div>
);

const RecentBreakdowns: React.FC = () => (
  <div className="mt-8">
    <h2 className="font-bold text-lg">Recent Breakdowns</h2>
  </div>
);

export default TestCard;
