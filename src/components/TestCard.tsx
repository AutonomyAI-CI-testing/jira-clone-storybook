
const ChevronIcon = ({ direction = 'up' }: { direction?: 'up' | 'down' }) => (
  <svg
    className="w-4 h-4"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d={direction === 'up' ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LabeledInput = ({
  label,
  placeholder,
  hasInfo = true,
  borderWidth = 'border',
  borderColor = 'border-[#a5adad]',
  labelColor = 'text-[#a4a4a3]',
  placeholderColor = 'placeholder-[#737470]',
}: {
  label: string;
  placeholder: string;
  hasInfo?: boolean;
  borderWidth?: string;
  borderColor?: string;
  labelColor?: string;
  placeholderColor?: string;
}) => (
  <div className="space-y-2">
    <div className={`flex items-center space-x-2 ${labelColor} text-sm font-semibold`}>
      <span>{label}</span>
      {hasInfo && <InfoIcon />}
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full p-2 rounded bg-[#272822] ${borderWidth} ${borderColor} text-[#b5b5b5] ${placeholderColor} text-sm`}
    />
  </div>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1e1e1a] font-inter text-[#b5b5b5] p-4 flex flex-col space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-base font-semibold">UI magician Agent</h2>
        <svg
          className="w-5 h-5 text-[#b5b5b5]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center space-x-2 text-[#8b9291] text-sm font-semibold">
        <ChevronIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* Add New Design Section */}
      <div className="flex items-center space-x-2 text-[#b2b2b1] text-base font-semibold">
        <ChevronIcon />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Input */}
      <LabeledInput label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />

      {/* Design URL Input */}
      <LabeledInput
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderWidth="border-2"
        borderColor="border-[#929291]"
        labelColor="text-[#a3a3a2]"
        placeholderColor="placeholder-[#71726e]"
      />

      {/* Buttons */}
      <div className="flex space-x-4 pt-2">
        <button className="flex-1 p-2 rounded bg-[#843a17] text-[#8c8078] font-semibold text-sm">
          Awesome
        </button>
        <button className="flex-1 p-2 rounded bg-[#843a17] text-[#8c8078] font-semibold text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <h3 className="text-[#b0b0b0] text-base font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
