import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard is a static smoke test component that visually replicates a Figma design.
 * It's used to verify Tailwind CSS rendering, arbitrary color support, and icon integration.
 * Since it is a static mockup, it uses hardcoded values and lacks functional interactivity.
 */
export const TestCard = (): JSX.Element => {
  // Design constants matching the Figma smoke test requirements
  const COLORS = {
    cardBg: 'bg-[#2a2a2a]',
    inputBg: 'bg-[#3a3a3a]',
    buttonBg: 'bg-[#8B4513]', // Burnt orange for primary actions
    subtext: 'text-[#a0522d]', // Muted orange/brown
  };

  const inputClasses = `${COLORS.inputBg} text-white border border-gray-600 rounded p-2 w-full`;
  const buttonClasses = `${COLORS.buttonBg} text-white rounded-lg px-5 py-2 hover:opacity-90 transition-opacity`;

  return (
    <div id="testElem" className={`${COLORS.cardBg} p-5 w-full max-w-xs rounded shadow-xl`}>
      {/* Header with Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-white">UI magician Agent</span>
        <FiSettings className="text-white cursor-pointer" />
      </div>
      
      {/* Subheading row - reflects the current context/state in the design */}
      <div className={`flex items-center gap-1 mb-6 ${COLORS.subtext}`}>
        <FiChevronUp size={14} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>
      
      {/* Section label - indicates a collapsible design entry section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-white" size={16} />
        <span className="font-bold text-white">Add New Design</span>
      </div>
      
      {/* PAT label + input - placeholder matches Figma PAT format */}
      <div className="mb-3">
        <label className="text-white text-sm mb-1 flex items-center gap-1">
          Personal Access Token <FiInfo className="opacity-70" />
        </label>
        <input 
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
          className={inputClasses} 
        />
      </div>
      
      {/* Design URL label + input */}
      <div className="mb-4">
        <label className="text-white text-sm mb-1 flex items-center gap-1">
          Design URL <FiInfo className="opacity-70" />
        </label>
        <input 
          readOnly
          placeholder="https://www.figma.com/file/:" 
          className={inputClasses} 
        />
      </div>
      
      {/* Primary Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button className={buttonClasses}>Awesome</button>
        <button className={buttonClasses}>Prepare</button>
      </div>
      
      {/* Footer Heading */}
      <h2 className="font-bold text-white text-lg border-t border-white/10 pt-4">
        Recent Breakdowns
      </h2>
    </div>
  );
};
