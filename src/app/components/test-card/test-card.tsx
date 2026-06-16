import { type JSX, type ReactNode } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * A self-contained card UI replicating the "UI magician Agent" Figma design panel.
 * Used as a smoke test for verifying styling and design system fidelity.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 rounded-lg text-white font-sans w-[350px]">
      {/* Header: Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold">UI magician Agent</span>
        <IoSettingsOutline className="text-zinc-400 text-xl" />
      </div>

      {/* Status/Context row: Amber text with chevron */}
      <div className="flex items-center text-amber-600 text-sm mb-6">
        <FiChevronUp className="mr-1" /> From entire frame to a singl...
      </div>

      {/* Main Form Section */}
      <div className="mb-6">
        <SectionHeader title="Add New Design" icon={<FiChevronUp className="mr-2" />} />

        <div className="space-y-4">
          <LabeledInput
            id="pat-input"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />

          <LabeledInput
            id="design-url-input"
            label="Design URL"
            placeholder="https://www.figma.com/file:/"
          />

          <div className="flex space-x-4 pt-2">
            <ActionButton label="Awesome" />
            <ActionButton label="Prepare" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <SectionHeader title="Recent Breakdowns" />
      </div>
    </div>
  );
};

/* --- Internal Helper Components --- */

const SectionHeader = ({ title, icon }: { title: string; icon?: ReactNode }) => (
  <h2 className="text-white text-base font-bold mb-4 flex items-center">
    {icon}
    {title}
  </h2>
);

const LabeledInput = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-white mb-2 flex items-center">
      {label} <AiOutlineInfoCircle className="ml-1 text-zinc-400" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-[#1e1e1e] border border-zinc-600 text-white placeholder-zinc-500 outline-none focus:border-amber-600 transition-colors"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button className="flex-1 py-2 rounded-lg bg-[#b05a2a] hover:bg-[#c66a35] text-white font-medium transition-colors">
    {label}
  </button>
);
