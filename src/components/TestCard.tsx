import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard component replicates a "UI magician Agent" panel.
 * Built with dark-themed neutral tones and orange accents.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-4 bg-zinc-900 text-white rounded-lg shadow-lg max-w-sm mx-auto"
    >
      <Header />
      <Subtitle />
      <NewDesignSection />
      <RecentsSection />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-bold">UI magician Agent</h1>
    <IoSettingsOutline className="text-zinc-400 text-2xl" />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center text-orange-600 text-sm mb-6">
    <HiChevronUp className="text-lg mr-1" />
    <span>From entire frame to a singl...</span>
  </div>
);

const NewDesignSection = () => (
  <div className="mb-6">
    <div className="flex items-center text-white text-lg font-bold mb-3">
      <HiChevronUp className="text-xl mr-1" />
      <span>Add New Design</span>
    </div>

    <InputGroup
      id="personalAccessToken"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <InputGroup
      id="designUrl"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="flex justify-between space-x-4 mb-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>
  </div>
);

const RecentsSection = () => (
  <div>
    <h2 className="text-lg font-bold">Recent Breakdowns</h2>
  </div>
);

const InputGroup = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <>
    <label
      htmlFor={id}
      className="block text-zinc-100 text-sm font-medium mb-1 flex items-center"
    >
      {label}
      <AiOutlineInfoCircle className="text-zinc-400 ml-1" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 mb-4 bg-zinc-800 border border-zinc-600 rounded-md text-zinc-400 text-sm"
    />
  </>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-sm">
    {children}
  </button>
);
