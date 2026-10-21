const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const SettingsIcon = ({ className }: IconProps) => (
  <svg {...ICON_PROPS} className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg {...ICON_PROPS} className={className}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg {...ICON_PROPS} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className?: string;
}

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#0f0f0f] px-6 pb-14 pt-8 font-primary text-[#f5f5f5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <SettingsIcon className="h-6 w-6 text-[#e5e5e5]" />
      </div>

      <div className="mt-7 flex items-center gap-3 text-[#a3a3a3]">
        <ChevronUpIcon className="h-4 w-4" />
        <span className="text-base">From entire frame to a singl…</span>
      </div>

      <div className="mt-28">
        <div className="flex items-center gap-3">
          <ChevronUpIcon className="h-5 w-5" />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <label className="flex flex-col gap-3">
            <span className="flex items-center gap-6">
              <span className="font-primary-bold text-[15px]">Personal Access Token</span>
              <InfoIcon className="h-5 w-5 text-[#c4c4c4]" />
            </span>
            <input
              readOnly
              placeholder="figd_xxxxxxxxxxxxxxxxxxx"
              className="w-full rounded-[2px] border border-[#6b6b6b] bg-[#1a1a1a] px-4 py-4 text-[15px] text-[#f5f5f5] placeholder:text-[#8a8a8a]"
            />
          </label>

          <label className="flex flex-col gap-3">
            <span className="flex items-center gap-6">
              <span className="font-primary-bold text-[15px]">Design URL</span>
              <InfoIcon className="h-5 w-5 text-[#c4c4c4]" />
            </span>
            <input
              readOnly
              placeholder="https://www.figma.com/file/"
              className="w-full rounded-[2px] border border-[#6b6b6b] bg-[#1a1a1a] px-4 py-4 text-[15px] text-[#f5f5f5] placeholder:text-[#8a8a8a]"
            />
          </label>
        </div>

        <div className="mt-12 flex gap-7">
          <button
            type="button"
            className="flex w-[168px] items-center justify-center rounded bg-[#a34719] px-8 py-5 font-primary-bold text-[17px] text-[#f7dccd] hover:bg-[#8f3d16]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex w-[168px] items-center justify-center rounded bg-[#a34719] px-8 py-5 font-primary-bold text-[17px] text-[#f7dccd] hover:bg-[#8f3d16]"
          >
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
