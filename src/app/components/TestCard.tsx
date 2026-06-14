import { HiOutlineCog, HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const TestCard = (): JSX.Element => {
  // Root element with dark background matching the design specs
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white p-4 w-[280px] min-h-screen font-sans">
      <Header />
      <CollapsedRow />
      
      <section>
        <SectionHeader title="Add New Design" />
        <InputField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        <InputField label="Design URL" placeholder="https://www.figma.com/file/:" />
        <ActionButtons />
      </section>

      <div className="font-bold text-base mt-6">
        Recent Breakdowns
      </div>
    </div>
  );
};

/**
 * Header section with title and settings icon
 */
const Header = () => (
  <div className="flex justify-between items-center mb-3">
    <span className="font-bold text-lg">UI magician Agent</span>
    <HiOutlineCog className="text-[#9ca3af] text-xl" />
  </div>
);

/**
 * Informational row showing partial status/path
 */
const CollapsedRow = () => (
  <div className="flex items-center gap-2 text-[#c0784a] text-sm mb-6">
    <HiChevronUp />
    <span>From entire frame to a singl...</span>
  </div>
);

/**
 * Reusable section header with chevron
 */
const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 font-bold text-base mb-4">
    <HiChevronUp />
    <span>{title}</span>
  </div>
);

/**
 * Input field with label and info icon
 */
const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="mb-3">
    <div className="flex items-center gap-1 text-sm mb-1">
      <span>{label}</span>
      <AiOutlineInfoCircle className="text-[#9ca3af]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-[#1e1e1e] border border-[#4b5563] rounded px-3 py-2 text-sm text-[#9ca3af] outline-none"
      readOnly
    />
  </div>
);

/**
 * CTA buttons row
 */
const ActionButtons = () => (
  <div className="flex gap-3 mt-5 mb-8">
    <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-2 rounded-lg transition-colors">
      Awesome
    </button>
    <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-2 rounded-lg transition-colors">
      Prepare
    </button>
  </div>
);
