
/**
 * TestCard is a smoke test component that visually replicates a Figma design
 * for the "UI magician Agent" panel. It's used to verify the rendering pipeline.
 */

// Hex colors from Figma design
const COLORS = {
  bg: "#2a2a2a",
  accent: "#c1502a",
  muted: "#c07a5a",
  inputBg: "#3a3a3a",
  border: "#888888",
};

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="p-4 rounded-lg shadow-sm w-96"
      style={{ backgroundColor: COLORS.bg }}
    >
      <Header />
      <Subtitle />
      <SectionHeading title="Add New Design" />
      
      <div className="mt-4 space-y-4">
        <InputField
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="flex gap-3 mt-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <div className="mt-6">
        <h2 className="text-white text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">UI magician Agent</h1>
      <GearIcon />
    </div>
  );
}

function Subtitle() {
  return (
    <div className="flex items-center gap-2 mt-4">
      <ChevronUpIcon color={COLORS.muted} />
      <p className="text-sm" style={{ color: COLORS.muted }}>
        From entire frame to a singl...
      </p>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mt-4">
      <ChevronUpIcon color="white" />
      <h2 className="text-white text-lg font-bold">{title}</h2>
    </div>
  );
}

function InputField({ id, label, placeholder }: { id: string, label: string, placeholder: string }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-white text-sm">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full p-2 mt-1 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ backgroundColor: COLORS.inputBg, border: `1px solid ${COLORS.border}` }}
      />
    </div>
  );
}

function ActionButton({ label }: { label: string }) {
  return (
    <button
      className="flex-1 py-2 px-4 rounded-lg text-white font-bold hover:opacity-90 transition-opacity"
      style={{ backgroundColor: COLORS.accent }}
    >
      {label}
    </button>
  );
}

// --- Icons ---

function GearIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.16-1.35-2.13-2.51-2.51a1.5 1.5 0 00-2.13 0c-1.16.38-2.13 1.35-2.51 2.51a1.5 1.5 0 00-.09 1.01h.01c-.02.4.03.81.16 1.2a.75.75 0 00.32.32c.39.13.8.18 1.2.16v.01c.4.02.81-.03 1.2-.16a.75.75 0 00.32-.32c.13-.39.18-.8.16-1.2h.01a1.5 1.5 0 00-.09-1.01zM10 4.5a.5.5 0 00-1 0v.01c-.4.02-.81-.03-1.2-.16a.75.75 0 00-.32.32c-.13.39-.18.8-.16 1.2v.01c-.02.4.03.81.16 1.2a.75.75 0 00.32.32c.39.13.8.18 1.19.16l.01-.01c.4.1.8.16 1.2.16a.75.75 0 00.32-.32c.13-.39.18-.8.16-1.2v-.01c.02-.4-.03-.81-.16-1.2a.75.75 0 00-.32-.32c-.39-.13-.79-.18-1.19-.16zM10 6.5C8.954 6.5 8.125 7.329 8 8.375V11a2.5 2.5 0 005 0V8.375C11.875 7.329 11.046 6.5 10 6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronUpIcon({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill={color === "white" ? "currentColor" : color}
      style={color === "white" ? { color: "white" } : {}}
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  );
}
