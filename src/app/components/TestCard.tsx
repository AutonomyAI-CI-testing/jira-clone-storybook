
/**
 * TestCard - A smoke test component that replicates the UI magician Agent design.
 * Designed to verify the rendering pipeline with a complex, static card layout.
 */
export function TestCard() {
  return (
    <div id="testElem" className="mx-auto max-w-md rounded-lg bg-[#2a2a2a] p-6 text-white shadow-lg">
      <Header />
      <CollapsedChevronRow />
      <AddNewDesignHeader />
      
      {/* Form Fields Section */}
      <div className="space-y-4 mb-6">
        <FormField
          id="token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/..."
        />
      </div>

      <ActionButtons />
      <RecentBreakdownsHeader />
    </div>
  );
}

// --- Sub-components (extracted for readability) ---

function Header() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-bold">UI magician Agent</h2>
      <button aria-label="Settings" className="text-white hover:opacity-80 transition-opacity">
        <GearIcon />
      </button>
    </div>
  );
}

function CollapsedChevronRow() {
  return (
    <div className="mb-6 flex items-center text-[#c8794a]">
      <ChevronUpIcon className="mr-2 h-4 w-4" />
      <span>From entire frame to a singl...</span>
    </div>
  );
}

function AddNewDesignHeader() {
  return (
    <div className="mb-6 flex items-center">
      <ChevronUpIcon className="mr-2 h-4 w-4 text-white" />
      <h3 className="text-lg font-bold">Add New Design</h3>
    </div>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

function FormField({ id, label, placeholder }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
        {label}
        <InfoIcon className="ml-1 inline-block h-4 w-4 text-gray-400" />
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#444] bg-[#1e1e1e] p-2 text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="mb-8 flex space-x-4">
      <button className="flex-1 rounded-lg bg-[#b5541e] p-2 font-semibold text-white hover:brightness-110 transition-all">
        Awesome
      </button>
      <button className="flex-1 rounded-lg bg-[#b5541e] p-2 font-semibold text-white hover:brightness-110 transition-all">
        Prepare
      </button>
    </div>
  );
}

function RecentBreakdownsHeader() {
  return (
    <div>
      <h3 className="text-lg font-bold">Recent Breakdowns</h3>
    </div>
  );
}

// --- SVG Icons (extracted to keep JSX clean) ---

function GearIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

