
/**
 * TestCard component for managing design breakdowns and Figmatic tokens.
 * 
 * DESIGN NOTES:
 * - Uses a custom dark theme palette (bg-[#272822]) to match the magician theme.
 * - Intentional 'Awesome' and 'Prepare' CTA colors (#843a17) provide a distinct, warm accent.
 * - Min-height screen wrapper is used for standalone preview/page layout.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] p-4 min-h-screen font-sans">
      <div className="bg-[#272822] text-white p-6 rounded-lg shadow-lg max-w-md mx-auto border border-gray-800">
        <Header />
        <SummarySection />
        <SectionHeader title="Add New Design" />
        <FormFields />
        <ActionButtons />
        <h3 className="text-[#b0b0b0] text-md font-bold mt-4 border-t border-gray-700 pt-4">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-[#b5b5b5] text-lg font-bold">UI magician Agent</h2>
    <SettingsIcon className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
  </div>
);

const SummarySection = () => (
  <div className="flex items-center mb-6">
    <ChevronDownIcon className="w-4 h-4 text-gray-400 mr-2" />
    <span className="text-[#8b9291] text-sm truncate">
      From entire frame to a singl...
    </span>
  </div>
);

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div className="flex items-center mb-4">
    <ChevronDownIcon className="w-4 h-4 text-gray-400 mr-2" />
    <h3 className="text-[#b2b2b1] text-md font-bold">{title}</h3>
  </div>
);

const FormFields = () => (
  <div className="space-y-4 mb-6">
    <InputField 
      label="Personal Access Token" 
      placeholder="figd_xxxxxxxxxxxxxxxxxx" 
    />
    <InputField 
      label="Design URL" 
      placeholder="https://www.figma.com/file/:" 
    />
  </div>
);

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => (
  <div>
    <label className="flex items-center text-[#a4a4a3] text-sm mb-1">
      {label}
      <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded bg-[#272822] text-white border border-[#a5adad] focus:border-white outline-none text-sm transition-colors"
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex justify-end gap-2 mb-2">
    <button className="px-4 py-2 bg-[#843a17] text-[#dfd0c8] rounded-md text-sm font-medium hover:brightness-110 active:scale-95 transition-all">
      Awesome
    </button>
    <button className="px-4 py-2 bg-[#843a17] text-[#dfd0c8] rounded-md text-sm font-medium hover:brightness-110 active:scale-95 transition-all">
      Prepare
    </button>
  </div>
);

/* Icons */

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

