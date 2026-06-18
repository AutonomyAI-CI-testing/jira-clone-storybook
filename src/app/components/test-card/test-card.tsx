
import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { HiInformationCircle, HiChevronUp } from 'react-icons/hi';

/**
 * TestCard component displays a design import panel.
 * 
 * Note: Colors and spacing use hardcoded arbitrary values to match the specific 
 * design requirements of the UI magician Agent prototype.
 */
export const TestCard = (): JSX.Element => {
  const inputClassName = "w-full p-2 rounded-md bg-[#282e33] border border-[#454f59] text-[#c7d1db] placeholder-[#596773] focus:outline-none focus:border-blue-500";
  const labelWrapperClassName = "flex items-center text-[#9fadbc] text-sm mb-2";
  const buttonClassName = "flex-1 bg-[#974f0c] text-white rounded-lg px-5 py-3 font-semibold hover:bg-[#b65c02]";

  return (
    <div id="testElem" className="bg-[#1d2125] p-5 max-w-sm rounded-lg shadow-lg">
      {/* Header section with title and settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#c7d1db] text-xl font-bold">UI magician Agent</h2>
        <AiOutlineSetting className="text-[#c7d1db] text-xl cursor-pointer" />
      </div>

      {/* Breadcrumb or subtitle indicating current context */}
      <div className="flex items-center text-[#596773] italic mb-6">
        <HiChevronUp className="text-lg mr-2" />
        <p className="truncate">From entire frame to a singl...</p>
      </div>

      <div className="h-[1px] bg-[#2b2b2b] my-6" aria-hidden="true" />

      {/* Form section: Add New Design */}
      <div className="flex items-center text-[#c7d1db] font-bold mb-4">
        <HiChevronUp className="text-lg mr-2" />
        <h3>Add New Design</h3>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className={labelWrapperClassName}>
          <label htmlFor="pat-token">Personal Access Token</label>
          <HiInformationCircle className="ml-1 text-xs" title="Provide your Figma PAT" />
        </div>
        <input
          id="pat-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className={labelWrapperClassName}>
          <label htmlFor="design-url">Design URL</label>
          <HiInformationCircle className="ml-1 text-xs" title="Link to the Figma design" />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={inputClassName}
        />
      </div>

      {/* Action buttons */}
      <div className="flex justify-between space-x-4 mb-6">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      {/* Listing recently processed items */}
      <div>
        <h3 className="text-[#c7d1db] font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

