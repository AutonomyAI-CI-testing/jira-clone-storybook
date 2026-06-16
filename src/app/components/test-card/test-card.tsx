
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

/**
 * UI Magician Agent Smoke Test Component.
 * 
 * This component is a self-contained presentational card representing a 
 * "UI magician Agent" form panel. It serves as a visual smoke test for 
 * Tailwind styling, icon rendering, and project scaffold.
 * 
 * UI values (backgrounds, colors, spacing) are hardcoded to match the design reference.
 */
export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="bg-[#1e1e1e] p-5 max-w-xs text-white rounded-lg shadow-xl">
      <Header />

      <CollapsedStatus />

      <SectionHeader title="Add New Design" />

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

      <ActionButtons />

      <h3 className="text-lg font-semibold mt-6">Recent Breakdowns</h3>
    </div>
  );
}

/**
 * Header section with title and settings icon.
 */
function Header() {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">UI magician Agent</h2>
      <AiOutlineSetting className="text-white text-2xl cursor-pointer" />
    </div>
  );
}

/**
 * Muted status row showing truncated information.
 */
function CollapsedStatus() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <BiChevronUp className="text-orange-700" />
      <span className="text-orange-700 text-sm">From entire frame to a singl...</span>
    </div>
  );
}

/**
 * Shared section header with caret icon.
 */
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mt-4 mb-4">
      <BiChevronUp className="text-white" />
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

/**
 * Reusable input field with label and info icon.
 */
function InputField({ 
  id, 
  label, 
  placeholder, 
  containerClassName = "mb-4" 
}: { 
  id: string; 
  label: string; 
  placeholder: string; 
  containerClassName?: string;
}) {
  return (
    <div className={containerClassName}>
      <div className="flex items-center gap-1 mb-2">
        <label htmlFor={id} className="text-sm cursor-pointer">{label}</label>
        <AiOutlineInfoCircle className="text-gray-400" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full bg-zinc-800 border border-zinc-600 text-gray-400 rounded px-3 py-2 outline-none focus:border-zinc-500 transition-colors"
      />
    </div>
  );
}

/**
 * Primary action buttons row.
 */
function ActionButtons() {
  const buttonStyles = "bg-amber-800 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors";
  
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      <button className={buttonStyles}>
        Awesome
      </button>
      <button className={buttonStyles}>
        Prepare
      </button>
    </div>
  );
}
