
import { RiSettings3Line, RiArrowUpSLine, RiInformationLine } from "react-icons/ri";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Shared input field component for the TestCard.
 * Encapsulates the label, info icon, and styled input.
 */
const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div className="mb-4 last:mb-6">
    <div className="flex items-center space-x-2 mb-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <RiInformationLine className="w-4 h-4" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#b5451b]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-6 w-[400px] text-white rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <RiSettings3Line className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity" />
      </div>

      {/* Subtitle - Displayed with a specific amber color for branding */}
      <div className="flex items-center space-x-2 mb-6">
        <RiArrowUpSLine className="w-5 h-5" />
        <p className="text-[#c97d4e]">From entire frame to a singl...</p>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center space-x-2 mb-4">
        <RiArrowUpSLine className="w-5 h-5" />
        <h3 className="font-bold text-base">Add New Design</h3>
      </div>

      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Primary Actions */}
      <div className="flex space-x-4 mb-6">
        <button className="flex-1 py-2 bg-[#b5451b] hover:bg-[#a03d18] transition-colors text-white rounded-lg font-semibold">
          Awesome
        </button>
        <button className="flex-1 py-2 bg-[#b5451b] hover:bg-[#a03d18] transition-colors text-white rounded-lg font-semibold">
          Prepare
        </button>
      </div>

      {/* History section footer */}
      <div>
        <h3 className="font-bold text-base">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
