import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

const COLORS = {
  background: '#252525',
  inputBackground: '#1c1c1c',
  inputBorder: '#3a3a3a',
  inputText: '#666',
  amberText: '#b07840',
  buttonBg: '#b05a28',
};

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Reusable input field with label and info icon
 */
const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div className="mb-4">
    <label htmlFor={id} className="flex items-center text-white text-sm mb-2">
      {label}
      <AiOutlineInfoCircle className="ml-2 text-gray-400" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      style={{ backgroundColor: COLORS.inputBackground, borderColor: COLORS.inputBorder, color: COLORS.inputText }}
      className="w-full border rounded p-2"
    />
  </div>
);

export function TestCard() {
  return (
    <div 
      id="testElem" 
      style={{ backgroundColor: COLORS.background }}
      className="p-6 text-white min-h-screen"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <AiOutlineSetting className="text-white text-2xl" />
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center mb-6">
        <FiChevronUp style={{ color: COLORS.amberText }} className="mr-2" />
        <span style={{ color: COLORS.amberText }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8"></div>

      {/* 'Add New Design' section */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <FiChevronUp className="text-white mr-2" />
          <h2 className="text-white font-bold text-lg">Add New Design</h2>
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

        <div className="flex gap-4 mt-2">
          <button 
            style={{ backgroundColor: COLORS.buttonBg }}
            className="flex-1 text-white py-2 rounded-lg font-semibold"
          >
            Awesome
          </button>
          <button 
            style={{ backgroundColor: COLORS.buttonBg }}
            className="flex-1 text-white py-2 rounded-lg font-semibold"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8"></div>

      {/* 'Recent Breakdowns' section */}
      <div>
        <h2 className="text-white font-bold text-lg">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
