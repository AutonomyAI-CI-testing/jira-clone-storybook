
// UI magician Agent color palette
const COLORS = {
  header: '#b5b5b5',
  subtitle: '#8b9291',
  sectionHeader: '#b2b2b1',
  label: '#a4a4a3',
  urlLabel: '#a3a3a2',
  inputBg: '#272822',
  inputBorder: '#a5adad',
  urlBorder: '#929291',
  placeholder: '#737470',
  urlPlaceholder: '#71726e',
  buttonBg: '#843a17',
  buttonText: '#8c8078',
  recentBreakdowns: '#b0b0b0',
} as const;

const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.header} strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33c-.28.1-.58.18-.9.21c-.01 0-.02.01-.02.02c-.38.16-.7.42-1.01.62c-.01.01-.02.02-.02.02c-.22.14-.4.29-.6.42c-.08.05-.16.1-.23.14l-2.02 1.15c-.5.28-1.12.28-1.62 0l-2.02-1.15c-.07-.04-.15-.09-.23-.14c-.2-.13-.38-.28-.6-.42c-.01-.01-.02-.02-.02-.02c-.31-.2-.63-.46-1.01-.62c-.01 0-.02-.01-.02-.02c-.32-.03-.62-.11-.9-.21a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82c-.1-.28-.18-.58-.21-.9c0-.01-.01-.02-.02-.02c-.16-.38-.42-.7-.62-1.01c-.01-.01-.02-.02-.02-.02c-.14-.22-.29-.4-.42-.6-.05-.08-.1-.16-.14-.23l-1.15-2.02c-.28-.5-.28-1.12 0-1.62l1.15-2.02c.04-.07.09-.15.14-.23c.13-.2.28-.38.42-.6.01-.01.02-.02.02-.02c.2-.31.46-.63.62-1.01c0-.01.01-.02.02-.02c.03-.32.11-.62.21-.9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82-.33c.28-.1.58-.18.9-.21c.01 0 .02-.01.02-.02c.38-.16.7-.42 1.01-.62c.01-.01.02-.02.02-.02c.22-.14.4-.29.6-.42.08-.05.16-.1.23-.14l2.02-1.15c.5-.28 1.12-.28 1.62 0l2.02 1.15c.07.04.15.09.23.14c.2.13.38.28.6.42c.01.01.02.02.02.02c.31.2.63.46 1.01.62c.01 0 .02.01.02.02c.32.03.62.11.9.21a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82c.1.28.18.58.21.9c0 .01.01.02.02.02c.16.38.42.7.62 1.01c.01.01.02.02.02.02c.14.22.29.4.42.6c.05.08.1.16.14.23l1.15 2.02c.28.5.28 1.12 0 1.62l-1.15 2.02c-.04.07-.09.15-.14.23c-.13.2-.28.38-.42.6c-.01.01-.02.02-.02.02c-.2.31-.46.63-.62 1.01c0 .01-.01.02-.02.02c-.32.03-.62.11-.9.21Z" />
  </svg>
);

const ChevronUpIcon = ({ width = 8, height = 5 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="1 5 5 1 9 5" />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  const inputBaseClasses = "w-full bg-[#272822] font-semibold px-3 py-2 outline-none mt-1";
  const buttonClasses = "bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-8 py-2";
  return (
    <div id="testElem" className="bg-[#2a2a2a] w-[254px] min-h-[508px] p-4 font-['Inter'] flex flex-col gap-4">
      {/* Section 1: Header row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</span>
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33c-.28.1-.58.18-.9.21c-.01 0-.02.01-.02.02c-.38.16-.7.42-1.01.62c-.01.01-.02.02-.02.02c-.22.14-.4.29-.6.42c-.08.05-.16.1-.23.14l-2.02 1.15c-.5.28-1.12.28-1.62 0l-2.02-1.15c-.07-.04-.15-.09-.23-.14c-.2-.13-.38-.28-.6-.42c-.01-.01-.02-.02-.02-.02c-.31-.2-.63-.46-1.01-.62c-.01 0-.02-.01-.02-.02c-.32-.03-.62-.11-.9-.21a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82c-.1-.28-.18-.58-.21-.9c0-.01-.01-.02-.02-.02c-.16-.38-.42-.7-.62-1.01c-.01-.01-.02-.02-.02-.02c-.14-.22-.29-.4-.42-.6c-.05-.08-.1-.16-.14-.23l-1.15-2.02c-.28-.5-.28-1.12 0-1.62l1.15-2.02c.04-.07.09-.15.14-.23c.13-.2.28-.38.42-.6c.01-.01.02-.02.02-.02c.2-.31.46-.63.62-1.01c0-.01.01-.02.02-.02c.03-.32.11-.62.21-.9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82-.33c.28-.1.58-.18.9-.21c.01 0 .02-.01.02-.02c.38-.16.7-.42 1.01-.62c.01-.01.02-.02.02-.02c.22-.14.4-.29.6-.42c.08-.05.16-.1.23-.14l2.02-1.15c.5-.28 1.12-.28 1.62 0l2.02 1.15c.07.04.15.09.23.14c.2.13.38.28.6.42c.01.01.02.02.02.02c.31.2.63.46 1.01.62c.01 0 .02.01.02.02c.32.03.62.11.9.21a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82c.1.28.18.58.21.9c0 .01.01.02.02.02c.16.38.42.7.62 1.01c.01.01.02.02.02.02c.14.22.29.4.42.6c.05.08.1.16.14.23l1.15 2.02c.28.5.28 1.12 0 1.62l-1.15 2.02c-.04.07-.09.15-.14.23c-.13.2-.28.38-.42.6c-.01.01-.02.02-.02.02c-.2.31-.46.63-.62 1.01c0 .01-.01.02-.02.02c-.32.03-.62.11-.9.21Z" />
        </svg>
      </div>

      {/* Section 2: Subtitle row with chevron */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Section 3: Add New Design */}
      <div className="flex items-center gap-2 mt-6">
        <ChevronUpIcon width={12} height={8} />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</span>
      </div>

      {/* Section 4: Personal Access Token label + input */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold">Personal Access Token</span>
          <InfoIcon color={COLORS.label} />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${inputBaseClasses} border border-[#a5adad] text-[#737470] text-[11.5px]`}
        />
      </div>

      {/* Section 5: Design URL label + input */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold">Design URL</span>
          <InfoIcon color={COLORS.urlLabel} />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={`${inputBaseClasses} border-2 border-[#929291] text-[#71726e] text-[10.5px]`}
        />
      </div>

      {/* Section 6: Awesome + Prepare buttons */}
      <div className="flex gap-4 justify-center mt-6">
        <button type="button" className={buttonClasses}>
          Awesome
        </button>
        <button type="button" className={buttonClasses}>
          Prepare
        </button>
      </div>

      {/* Section 7: Recent Breakdowns heading */}
      <div className="mt-6">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
