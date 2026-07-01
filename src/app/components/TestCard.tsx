/**
 * TestCard Component
 *
 * A self-contained smoke test component that visually replicates the "UI magician Agent" panel.
 * Designed to verify code generation accuracy for Figma designs.
 */

// UI Constants to match Figma design
const COLORS = {
  background: "bg-[#2a2a2a]",
  inputBackground: "bg-[#1e1e1e]",
  inputBorder: "border-[#444]",
  buttonPrimary: "bg-[#b5541e]",
  buttonHover: "hover:bg-[#a04a1b]",
  textMutedOrange: "text-[#c8794a]",
};

// --- Sub-components for internal organization ---

function GearIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
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
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ChevronUpIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
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
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
}

function InfoIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
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
}

interface FormFieldProps {
  label: string;
  placeholder: string;
}

function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <div className="mb-4 last:mb-6">
      <label className="mb-2 block flex items-center text-sm font-bold text-white">
        {label}
        <InfoIcon className="ml-2 h-4 w-4" />
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`shadow appearance-none border ${COLORS.inputBorder} w-full rounded px-3 py-2 ${COLORS.inputBackground} focus:shadow-outline leading-tight text-white focus:outline-none`}
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className={`min-h-screen ${COLORS.background} mx-auto max-w-lg p-8 text-white`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mb-6 flex items-center">
        <ChevronUpIcon className="mr-2 h-4 w-4 text-white" />
        <span className={COLORS.textMutedOrange}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="mb-6 flex items-center">
        <ChevronUpIcon className="mr-2 h-4 w-4 text-white" />
        <h2 className="text-md font-bold text-white">Add New Design</h2>
      </div>

      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mb-6 flex justify-between gap-4">
        <button
          className={`${COLORS.buttonPrimary} ${COLORS.buttonHover} focus:shadow-outline flex-1 rounded-lg px-4 py-2 font-bold text-white focus:outline-none`}
        >
          Awesome
        </button>
        <button
          className={`${COLORS.buttonPrimary} ${COLORS.buttonHover} focus:shadow-outline flex-1 rounded-lg px-4 py-2 font-bold text-white focus:outline-none`}
        >
          Prepare
        </button>
      </div>

      <div>
        <h2 className="text-md font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
