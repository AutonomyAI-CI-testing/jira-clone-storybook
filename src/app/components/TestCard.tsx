
/**
 * Icons used in the TestCard component.
 * Extracted for readability.
 */
const Icons = {
  Settings: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-settings"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.22a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.44a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.22a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1 1.74v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.22a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.44a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.22a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.74V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  ChevronUp: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-up"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  ),
  Info: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-info"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
};

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[254px] bg-[#282424] p-4 flex flex-col gap-3 text-[#d4d4d4]">
        {/* Header row */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#b5b5b5]">UI magician Agent</h2>
          <Icons.Settings />
        </div>

        {/* Chevron row - Descriptive text for the current selection */}
        <div className="flex items-center gap-2 text-[#8b9291]">
          <Icons.ChevronUp />
          <span className="text-sm">From entire frame to a singl...</span>
        </div>

        {/* Spacer to match Figma design layout */}
        <div className="h-4"></div>

        {/* Add New Design section heading */}
        <div className="flex items-center gap-2 text-[#c4c4c4] font-semibold">
          <Icons.ChevronUp />
          <h3 className="text-sm">Add New Design</h3>
        </div>

        {/* Personal Access Token block */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-[#a4a4a3]">
            <label htmlFor="p-access-token" className="text-xs">
              Personal Access Token
            </label>
            <Icons.Info />
          </div>
          <input
            id="p-access-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#1e1e1e] border border-[#3a3a3a] rounded-md px-2 py-1 text-sm outline-none focus:border-[#4a4a4a]"
          />
        </div>

        {/* Design URL block */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-[#a4a4a3]">
            <label htmlFor="design-url" className="text-xs">
              Design URL
            </label>
            <Icons.Info />
          </div>
          <input
            id="design-url"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#1e1e1e] border border-[#3a3a3a] rounded-md px-2 py-1 text-sm outline-none focus:border-[#4a4a4a]"
          />
        </div>

        {/* Action buttons matching Figma copper/brown theme */}
        <div className="flex gap-2 mt-2">
          <button className="flex-1 bg-[#8B5C3E] text-[#d4b8a8] rounded-xl py-2 text-sm font-medium hover:brightness-110 transition-all">
            Awesome
          </button>
          <button className="flex-1 bg-[#8B5C3E] text-[#d4b8a8] rounded-xl py-2 text-sm font-medium hover:brightness-110 transition-all">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns heading */}
        <h3 className="mt-4 text-[#c4c4c4] font-semibold text-sm">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

