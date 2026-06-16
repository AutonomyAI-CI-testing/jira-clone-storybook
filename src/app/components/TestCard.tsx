import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * TestCard is a smoke test component representing the "UI magician Agent" panel.
 * It uses hardcoded dark theme colors and specific branding as defined in the spec.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full rounded-lg bg-[#2a2a2a] p-6 text-white"
    >
      {/* Header Row */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-xl" />
      </div>

      {/* Subtitle Row - muted orange for secondary info */}
      <div className="mb-6 flex items-center text-[#c97c4f]">
        <RiArrowUpSLine className="mr-1 rotate-180 transform text-xl" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section Header */}
      <div className="mb-4 flex items-center font-semibold text-white">
        <RiArrowUpSLine className="mr-1 text-xl" />
        <h3 className="text-md">Add New Design</h3>
      </div>

      {/* Configuration Fields */}
      <div className="space-y-4">
        <InputField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          containerClassName="mb-6"
        />
      </div>

      {/* Action Buttons - specific brownish-orange theme color */}
      <div className="mb-8 mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b55e32] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b55e32] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div>
        <h3 className="text-md font-semibold text-white">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

const InputField = ({
  id,
  label,
  placeholder,
  containerClassName = "",
}: {
  id: string;
  label: string;
  placeholder: string;
  containerClassName?: string;
}) => (
  <div className={containerClassName}>
    <label
      htmlFor={id}
      className="mb-2 flex items-center text-sm font-medium text-gray-300"
    >
      {label}
      <AiOutlineInfoCircle className="ml-2 text-gray-500" title="More information" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full rounded border border-[#555] bg-[#1e1e1e] p-2 text-sm text-gray-200 placeholder-gray-500 focus:border-[#c97c4f] focus:outline-none"
    />
  </div>
);

