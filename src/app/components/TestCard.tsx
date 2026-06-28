
/**
 * TestCard component
 * 
 * A self-contained component that replicates a Figma design for the "UI magician Agent".
 * This is used as a smoke test to verify rendering pipeline accuracy.
 */

// Design constants from Figma spec
const COLORS = {
  CARD_BG: '#2a2a2a',
  INPUT_BG: '#111111',
  BORDER: '#3a3a3a',
  PRIMARY_TEXT: '#b5b5b5',
  SECONDARY_TEXT: '#8b9291',
  LABEL_TEXT: '#a4a4a3',
  PLACEHOLDER: '#737470',
  BUTTON_BG: '#7a3a1a',
  BUTTON_TEXT: '#d4b89a',
  HEADING_TEXT: '#b0b0b0',
} as const;

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Shared input field component with label and info icon
 */
const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div className="mb-4 last:mb-6">
    <div className="flex items-center mb-2">
      <label htmlFor={id} className="text-[#a4a4a3] text-xs font-semibold mr-2">
        {label}
      </label>
      <span className="text-[#a4a4a3] text-xs" aria-hidden="true">ⓘ</span>
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 rounded text-xs bg-[#111111] border border-[#3a3a3a] text-[#737470] placeholder-[#737470] outline-none focus:border-[#5a5a5a] transition-colors"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div 
      id="testElem" 
      className="bg-[#2a2a2a] p-6 rounded-lg max-w-sm mx-auto shadow-xl"
      aria-labelledby="card-title"
    >
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <h2 id="card-title" className="text-[#b5b5b5] font-semibold text-sm">
          UI magician Agent
        </h2>
        <span className="text-[#b5b5b5]" aria-hidden="true">⚙️</span>
      </div>

      {/* Frame context row */}
      <div className="flex items-center mb-4">
        <span className="text-[#8b9291] mr-2" aria-hidden="true">∧</span>
        <p className="text-[#8b9291] text-xs">From entire frame to a singl...</p>
      </div>

      <div className="mb-5" aria-hidden="true" /> {/* Spacer */}

      {/* Add New Design Section Header */}
      <div className="flex items-center mb-4">
        <span className="text-[#b2b2b1] mr-2 text-sm" aria-hidden="true">∧</span>
        <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
      </div>

      {/* Form Fields */}
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

      {/* Action Buttons */}
      <div className="flex gap-3 justify-start mt-4">
        <button className="bg-[#7a3a1a] hover:bg-[#8a4a2a] text-[#d4b89a] font-semibold text-sm px-6 py-2 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="bg-[#7a3a1a] hover:bg-[#8a4a2a] text-[#d4b89a] font-semibold text-sm px-6 py-2 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Section Footer */}
      <h3 className="text-[#b0b0b0] font-semibold text-sm mt-6">Recent Breakdowns</h3>
    </div>
  );
};
