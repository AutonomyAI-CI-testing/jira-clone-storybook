// Static replica of the attached Figma frame, built as a smoke test for the
// design-to-component pipeline. Self-contained by design: no props, no state.
//
// The frame is an unrelated dark tool panel rather than this app's design
// system, so the colours below are literal approximations read off the frame.
// The app's semantic colour tokens are deliberately not used here: they are
// theme-scoped, so this card would change with the active theme instead of
// staying the dark panel the frame shows.

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] max-w-full bg-[#0e0e0e] px-10 pt-12 pb-28 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[28px] leading-none">
        UI magician Agent
      </span>
      <SettingsIcon />
    </div>

    <div className="mt-9 flex items-center gap-3">
      <ChevronUpIcon className="shrink-0 text-[#8f8f8f]" />
      <span className="min-w-0 truncate font-primary-bold text-[20px] text-[#8f8f8f]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[168px] flex items-center gap-3">
      <ChevronUpIcon className="shrink-0 text-[#c9c9c9]" />
      <span className="font-primary-bold text-[26px]">Add New Design</span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <span className="font-primary-bold text-[22px]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-4 h-[72px] w-full rounded-[3px] border border-[#5f5f5f] bg-[#191919] px-5 font-primary-bold text-[22px] text-[#9a9a9a] outline-none placeholder:text-[#9a9a9a]"
    />

    <div className="mt-8 flex items-center gap-3">
      <span className="font-primary-bold text-[22px]">Design URL</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-4 h-[72px] w-full rounded-[3px] border border-[#5f5f5f] bg-[#191919] px-5 font-primary-bold text-[22px] text-[#9a9a9a] outline-none placeholder:text-[#9a9a9a]"
    />

    <div className="mt-12 flex justify-center gap-9">
      <button
        type="button"
        className="h-[70px] w-[166px] rounded-lg bg-[#9d3c14] font-primary-bold text-[22px] text-[#a08e86]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[70px] w-[166px] rounded-lg bg-[#9d3c14] font-primary-bold text-[22px] text-[#a08e86]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[28px] leading-none">
      Recent Breakdowns
    </h2>
  </div>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="30"
    height="30"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
