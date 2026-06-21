
/**
 * TestCard component that replicates the "UI magician Agent" Figma plugin UI.
 * This is used as a smoke test for the preview system.
 */
export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-4 text-white font-sans">
      <Header />
      <SubHeader />
      <div className="h-4" /> {/* Spacer */}
      <AddNewDesignSection />
      <div className="space-y-4 mb-6">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>
      <ActionButtons />
      <RecentBreakdowns />
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="font-bold text-lg">UI magician Agent</h1>
      <GearIcon />
    </div>
  );
}

function SubHeader() {
  return (
    <div className="flex items-center text-sm mb-4 text-[#8a8a8a]">
      <ChevronUpIcon className="w-4 h-4 mr-1" />
      <span>From entire frame to a singl...</span>
    </div>
  );
}

function AddNewDesignSection() {
  return (
    <div className="flex items-center text-sm font-bold mb-4">
      <ChevronUpIcon className="w-4 h-4 mr-1" />
      <span>Add New Design</span>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
}

function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 flex items-center">
        {label}
        <InfoIcon className="ml-1" />
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 rounded-md bg-[#333333] border border-[#555555] focus:outline-none focus:border-blue-500 text-sm"
      />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex justify-between space-x-4 mb-6">
      <button className="flex-1 py-2 px-4 rounded-lg bg-[#b5451b] hover:bg-[#a03d18] transition-colors text-white font-semibold text-sm">
        Awesome
      </button>
      <button className="flex-1 py-2 px-4 rounded-lg bg-[#b5451b] hover:bg-[#a03d18] transition-colors text-white font-semibold text-sm">
        Prepare
      </button>
    </div>
  );
}

function RecentBreakdowns() {
  return (
    <div>
      <h2 className="font-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
}

/* Icons */

function GearIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.28a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.56a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.28a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1-1.73v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.28a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.56a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0-.73-2.73l-.78-1.28a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.73V2a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
