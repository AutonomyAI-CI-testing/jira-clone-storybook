/**
 * TestCard — a self-contained recreation of the "UI magician Agent" panel from
 * the attached Figma frame.
 *
 * It is a smoke test for the design-to-component path: it takes no props, holds
 * no state, and deliberately uses the frame's own literal values instead of the
 * app's semantic tokens, so it renders identically whatever theme is active.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#191919] px-5 py-6 font-sans text-[#d4d4d4]"
  >
    <header className="flex items-center justify-between">
      <h2 className="text-[18px] font-bold">UI magician Agent</h2>
      <button type="button" aria-label="Open settings" className="text-[#c9c9c9]">
        <GearIcon size={22} />
      </button>
    </header>

    <div className="mt-6 flex items-center gap-3 text-[15px] text-[#c9c9c9]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <ChevronUpIcon size={20} />
      <h3 className="text-[18px] font-semibold">Add New Design</h3>
    </div>

    <TestCardField
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <TestCardField
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-9 flex gap-7">
      <TestCardAction>Awesome</TestCardAction>
      <TestCardAction>Prepare</TestCardAction>
    </div>

    <h3 className="mt-16 text-[18px] font-semibold">Recent Breakdowns</h3>
  </div>
);

interface TestCardFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const TestCardField = ({ id, label, placeholder }: TestCardFieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[15px] font-semibold">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-[4px] border border-[#3a3a3a] bg-[#1f1f1f] px-3 py-3 text-[15px] text-[#d4d4d4] outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

const TestCardAction = ({ children }: { children: string }) => (
  <button
    type="button"
    className="flex-1 rounded-[8px] bg-[#a1441f] px-6 py-3 text-[16px] font-semibold text-[#d4d4d4]"
  >
    {children}
  </button>
);

interface IconProps {
  size?: number;
}

const ChevronUpIcon = ({ size = 18 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.2V16" />
    <circle cx="12" cy="7.9" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ size = 22 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
