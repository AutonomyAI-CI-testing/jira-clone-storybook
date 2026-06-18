import React, { FC } from 'react';

/**
 * TestCard component for managing and adding new designs.
 * Displays a form for PAT and Design URL, and lists recent breakdowns.
 */
export const TestCard: FC = () => (
  <div id="testElem" className="bg-[#2a2a2a] text-white p-6 w-72 h-auto rounded-lg flex flex-col gap-4 shadow-xl">
    <CardHeader />
    <SubTitle />

    {/* Vertical spacer to match the design spacing before the design section */}
    <div className="h-4" aria-hidden="true" />

    <SectionHeading title="Add New Design" />

    {/* Form section for design configuration */}
    <div className="flex flex-col gap-4">
      <InputField
        id="pat-input"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <InputField
        id="design-url-input"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <ActionButtons />

    <div className="pt-2">
      <h2 className="font-bold text-lg">Recent Breakdowns</h2>
    </div>
  </div>
);

/**
 * Header section with title and settings icon
 */
const CardHeader: FC = () => (
  <div className="flex justify-between items-center">
    <h1 className="font-bold text-lg">UI magician Agent</h1>
    <button aria-label="Settings" className="text-xl hover:opacity-80 transition-opacity">
      ⚙
    </button>
  </div>
);

/**
 * Subtitle indicating current status or context
 */
const SubTitle: FC = () => (
  <div className="flex items-center gap-2">
    <span className="text-sm" aria-hidden="true">▲</span>
    <span className="text-[#c97c3a] text-sm truncate" title="From entire frame to a single element">
      From entire frame to a singl...
    </span>
  </div>
);

/**
 * Generic section heading with icon
 */
const SectionHeading: FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-2">
    <span className="text-sm" aria-hidden="true">▲</span>
    <h2 className="font-bold text-lg">{title}</h2>
  </div>
);

/**
 * Reusable input field with label and info icon
 */
interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputField: FC<InputFieldProps> = ({ id, label, placeholder }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm">{label}</label>
      <button aria-label={`Information about ${label}`} className="text-xs hover:opacity-80">
        ℹ
      </button>
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="bg-[#1e1e1e] border border-[#444] text-[#b0b0b0] rounded p-2 text-sm placeholder:text-[#666] outline-none focus:border-[#c1622a] transition-colors"
    />
  </div>
);

/**
 * Row of primary actions
 */
const ActionButtons: FC = () => (
  <div className="flex gap-3 justify-between">
    <button className="flex-1 bg-[#c1622a] hover:bg-[#a8521f] text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm">
      Awesome
    </button>
    <button className="flex-1 bg-[#c1622a] hover:bg-[#a8521f] text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm">
      Prepare
    </button>
  </div>
);
