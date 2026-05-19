// Reusable info icon component to avoid duplication
const InfoIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#a4a4a3]"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7.5 11V7M7.5 4.5h.01"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// Reusable chevron icon for expandable sections
const ChevronIcon = ({
  size,
  color,
}: {
  size: "small" | "large";
  color: string;
}) => {
  const dimensions =
    size === "small"
      ? { width: 14, height: 9, viewBox: "0 0 8 5" }
      : { width: 20, height: 13, viewBox: "0 0 12 8" };
  const path =
    size === "small" ? "M4 0L7.464 4.5H.536L4 0z" : "M6 0L11.196 7.5H.804L6 0z";

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={dimensions.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={color}
    >
      <path d={path} fill="currentColor" />
    </svg>
  );
};

// Reusable form field with label and info icon
const FormField = ({
  label,
  placeholder,
  borderStyle,
}: {
  label: string;
  placeholder: string;
  borderStyle: string;
}) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label className="font-primary-bold text-base leading-[19.36px] text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`h-[60px] w-[400px] bg-[#272822] px-5 font-primary-bold text-base leading-[19.36px] text-font placeholder:text-[#737470] focus:outline-none ${borderStyle}`}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[480px] bg-[#1a1a17] p-10 text-font">
      {/* Header Section */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl leading-[29px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        {/* Settings Gear Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5]"
        >
          <path
            d="M13 8c0-.367-.067-.734-.2-1.1l1.133-.8a.267.267 0 00.067-.333l-1.333-2.334a.267.267 0 00-.334-.133l-1.333.534a4.667 4.667 0 00-1.9-.8l-.267-1.434A.267.267 0 008.6 1.333H5.933a.267.267 0 00-.266.267l-.267 1.434a4.667 4.667 0 00-1.9.8l-1.333-.534a.267.267 0 00-.334.134L.5 5.767a.267.267 0 00.067.333l1.133.8a4.667 4.667 0 000 2.2l-1.133.8a.267.267 0 00-.067.333l1.333 2.334a.267.267 0 00.334.133l1.333-.534a4.667 4.667 0 001.9.8l.267 1.434a.267.267 0 00.266.267H8.6a.267.267 0 00.266-.267l.267-1.434a4.667 4.667 0 001.9-.8l1.333.534a.267.267 0 00.334-.134l1.333-2.334a.267.267 0 00-.067-.333l-1.133-.8c.133-.366.2-.733.2-1.1zm-5.733 2.667a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Subtitle with Chevron - Collapsed state indicator */}
      <div className="mb-[120px] flex items-center gap-3">
        <ChevronIcon size="small" color="text-[#8b9291]" />
        <p className="font-primary-bold text-base leading-[19.36px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-10">
        <div className="mb-10 flex items-center gap-3">
          <ChevronIcon size="large" color="text-[#b2b2b1]" />
          <h3 className="font-primary-bold text-2xl leading-[29px] text-[#b2b2b1]">
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Field - Single border for subtle emphasis */}
        <div className="mb-5">
          <FormField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            borderStyle="border border-[#a5adad]"
          />
        </div>

        {/* Design URL Field - Double border for visual emphasis */}
        <div className="mb-10">
          <FormField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            borderStyle="border-2 border-[#929291]"
          />
        </div>

        {/* Action Buttons - Both styled identically to maintain visual consistency */}
        <div className="flex gap-4">
          <button className="h-[60px] w-[160px] rounded bg-[#843a17] font-primary-bold text-base leading-[19.36px] text-[#8c8078]">
            Awesome
          </button>
          <button className="h-[60px] w-[160px] rounded bg-[#843a17] font-primary-bold text-base leading-[19.36px] text-[#8c8078]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="font-primary-bold text-xl leading-[24.2px] text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="font-primary text-base leading-[19.36px] text-font">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
