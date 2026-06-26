
export const TestCard = () => {
  // Design tokens from Figma spec:
  // Background: #1c1c1c (dark grey/black)
  // Header: #b5b5b5 (text), 13.5px
  // Subtitle/Muted: #8b9291 (text), 11.5px
  // Buttons: #b45309 (orange-700), text white

  return (
    <div
      id="testElem"
      className="max-w-[260px] bg-[#1c1c1c] p-5 font-sans"
    >
      {/* Header Row: Agent name and configuration access */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle Row: Context/status with collapse toggle */}
      <div className="mt-2 flex items-center gap-1">
        <ChevronUpIcon color="#8b9291" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-8" />

      {/* Inputs Section: Configuration for new designs */}
      <div className="mb-3 flex items-center gap-2">
        <ChevronUpIcon color="#b2b2b1" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon color="#a4a4a3" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#3a3a3a] bg-transparent px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none transition-colors focus:border-[#b45309]"
        />
      </div>

      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon color="#a3a3a2" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#3a3a3a] bg-transparent px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none transition-colors focus:border-[#b45309]"
        />
      </div>

      {/* Action Row: Primary operations */}
      <div className="mt-5 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b45309] px-5 py-2 text-[11.5px] font-semibold text-white transition-opacity hover:opacity-90 active:scale-95">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b45309] px-5 py-2 text-[11.5px] font-semibold text-white transition-opacity hover:opacity-90 active:scale-95">
          Prepare
        </button>
      </div>

      {/* Footer Section: List of recent activity */}
      <span className="mt-8 block text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

// --- Helper Components: Extracted icons for clarity and reuse ---

const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-[#b5b5b5]"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M11.49 3.17c-.38-.152-.777-.286-1.189-.378L9.906 1C9.695.597 9.176.502 8.789.756L8.29 1.056c-.389.244-.5.626-.145 1.054l.794 1.251c-.697.165-1.378.423-2.028.77l-.924-1.299c-.394-.553-1.042-.716-1.603-.32-.239.162-.361.425-.361.7C4.125 5.25 4.5 5 4.5 5.5s-.875 0 0 .5H2.396l-.99.5c-.534.256-.708.8-.403 1.268l.22.365c.304.5.39.878.273 1.282l-.46.85c-.328.604-.124 1.295.454 1.636l.504.28c.174.098.349.199.525.303l.365.205c.421.238.653.693.593 1.156l-.16.892c-.08.45.195.8-.43.8-.574 0-.96.38-.962.434h-.001c-.13.56.24 1.12.83 1.242.06.012.385.05.772.073l.635.032c.504.025.961.405 1.096 1.071l.088.435c.196.945-.476 1.83-1.464 2.015L.756 16.71c-.55.105-.98-.363-.98-1-.005-.333.15-.658.42-.876l.79-.65c.34-.28.42-.51.42-.816V7.086c0-.528.256-.99.691-1.3l.53-.38c.55-.395.78-.71.72-1.066l-.16-.92c-.08-.45.195-.8-.43-.8-.574 0-.96.38-.962.434V2.222c0-.56-.47-.94-.96-.94-.533 0-.97.29-.97.643 0 .393.284.664.67.664H4.375l.98-.5c.534-.256.708-.8.403-1.268l-.22-.365c-.304-.5-.39-.878-.273-1.282l.46-.85c.328-.604.124-1.295-.454-1.636l-.504-.28c-.174-.098-.349-.199-.525-.303L2.345 3.32C1.924 3.082 1.692 2.627 1.752 2.164l.16-.892c.08-.45-.195-.8.43-.8.574 0 .96-.38.962-.434L2.736.216C2.92.05 3.18-.002 3.447.001l.635.032c.504.025.961.405 1.096 1.071l.088.435zM9.5 7.5a2 2 0 100 4 2 2 0 000-4z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke={color}
    className="h-3 w-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    className="h-3 w-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l-.75 1.5m.75-1.5h3m-3 0l-.75-1.5m1.5 3l-.75 1.5m.75-1.5h3m-3 0l-.75 1.5M9 7.5H4.519a1.125 1.125 0 00-1.092 1.241L4.434 19.5a1.125 1.125 0 001.092 1.25h13.117a1.125 1.125 0 001.092-1.241l1.007-10.759a1.125 1.125 0 00-1.092-1.241H15M9 7.5V4.509a1.125 1.125 0 011.092-1.24l.727-.161A1.125 1.125 0 0112 3.75h0a1.125 1.125 0 011.092 1.24l.727.161a1.125 1.125 0 011.092 1.24V7.5M9 7.5h6"
    />
  </svg>
);
