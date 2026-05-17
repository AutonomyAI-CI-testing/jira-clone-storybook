import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Font sizes used throughout the card to maintain visual hierarchy
const FONT_SIZES = {
  title: "13.5px",
  label: "14px",
  description: "11.5px",
  smallInput: "10.5px",
  button: "11.5px",
  footer: "12px",
} as const;

// Icon sizes for consistent spacing
const ICON_SIZES = {
  settings: 16,
  chevron: 14,
  info: 12,
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex min-h-[508px] w-64 flex-col gap-5 rounded-lg bg-[#1C1D17] p-5 font-['Inter']">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-[#B5B5B5]" style={{ fontSize: FONT_SIZES.title }}>
          UI magician Agent
        </h2>
        <FiSettings className="text-[#B5B5B5]" size={ICON_SIZES.settings} />
      </div>

      {/* Description Row */}
      <div className="flex items-start gap-2">
        {/* Chevron icon aligned with first line of text */}
        <FiChevronUp className="mt-0.5 shrink-0 text-[#8B9291]" size={ICON_SIZES.chevron} />
        <p
          className="font-semibold leading-tight text-[#8B9291]"
          style={{ fontSize: FONT_SIZES.description }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mt-2 flex items-center gap-2">
        <FiChevronUp className="shrink-0 text-[#B0B0B0]" size={ICON_SIZES.chevron} />
        <h3 className="font-semibold text-[#B0B0B0]" style={{ fontSize: FONT_SIZES.title }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <label
            className="font-semibold text-[#A3A3A2]"
            style={{ fontSize: FONT_SIZES.label }}
            htmlFor="personal-access-token"
          >
            Personal Access Token
          </label>
          <FiInfo className="text-[#A3A3A2]" size={ICON_SIZES.info} />
        </div>
        <input
          id="personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="rounded border border-[#A5ADAD] bg-[#272822] px-3 py-5 font-semibold text-[#737470] placeholder:text-[#737470]"
          style={{ fontSize: FONT_SIZES.smallInput }}
        />
      </div>

      {/* Design URL Field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <label
            className="font-semibold text-[#A4A4A3]"
            style={{ fontSize: FONT_SIZES.label }}
            htmlFor="design-url"
          >
            Design URL
          </label>
          <FiInfo className="text-[#A4A4A3]" size={ICON_SIZES.info} />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-5 font-semibold text-[#71726E] placeholder:text-[#71726E]"
          style={{ fontSize: FONT_SIZES.description }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-2 flex gap-2">
        <button
          className="rounded bg-[#843A17] px-4 py-5 font-semibold text-[#8C8078]"
          style={{ fontSize: FONT_SIZES.button, borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="rounded bg-[#843A17] px-4 py-5 font-semibold text-[#8C8078]"
          style={{ fontSize: FONT_SIZES.button, borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="font-semibold text-[#B2B2B1]" style={{ fontSize: FONT_SIZES.title }}>
        Recent Breakdowns
      </h3>

      {/* Footer Section */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[#B5B5B5]" style={{ fontSize: FONT_SIZES.footer }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
