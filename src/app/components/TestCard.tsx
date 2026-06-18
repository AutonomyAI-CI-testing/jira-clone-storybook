
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';

const COLORS = {
  background: '#2a2a2a',
  inputBackground: '#3a3a3a',
  borderColor: '#555',
  primaryButton: '#a0522d',
  accent: '#c4783a', // Muted orange used for the collapsed subtitle
  divider: '#374151', // gray-700
};

/**
 * TestCard component specifically designed to mirror the "UI magician Agent" Figma panel.
 * This is a standalone component used for design verification and does not accept props
 * as per the product requirements.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white p-4 rounded-lg w-[280px]">
      <Header />
      <CollapsedSubitle />
      
      <div className="mt-4 border-b border-gray-700" /> {/* Section Divider */}

      <SectionHeader title="Add New Design" />
      
      <div className="mt-4 flex flex-col gap-4">
        <FormField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        <FormField label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      <div className="flex gap-3 mt-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <Footer />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center">
    <h2 className="font-semibold text-lg text-white">UI magician Agent</h2>
    <AiOutlineSetting className="text-gray-400 text-xl" />
  </div>
);

const CollapsedSubitle = () => (
  <div className="flex items-center gap-2 mt-2">
    <BiChevronUp className="text-[#c4783a]" />
    <span className="text-[#c4783a] text-sm truncate">
      From entire frame to a singl...
    </span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 mt-4 font-semibold text-lg text-white">
    <BiChevronUp />
    <span>{title}</span>
  </div>
);

const FormField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <div className="flex items-center gap-1 text-sm text-gray-300 mb-1">
      <span>{label}</span>
      <AiOutlineInfoCircle />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="bg-[#3a3a3a] border border-[#555] text-gray-300 rounded px-3 py-2 w-full text-sm placeholder:text-gray-500"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button className="bg-[#a0522d] text-white rounded-xl px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
    {label}
  </button>
);

const Footer = () => (
  <div className="mt-6">
    <h3 className="font-semibold text-xl text-white">Recent Breakdowns</h3>
  </div>
);
