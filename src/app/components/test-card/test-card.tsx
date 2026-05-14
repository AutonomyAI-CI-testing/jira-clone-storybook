import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import type { ReactNode } from "react";

/**
 * Renders a label with an associated info icon
 * Used consistently across form fields to provide contextual help
 */
const FormLabel = ({
  htmlFor,
  color,
  children,
}: {
  htmlFor: string;
  color: string;
  children: ReactNode;
}) => (
  <div className="mb-2 flex items-center gap-2">
    <label
      htmlFor={htmlFor}
      className="text-[14px] font-semibold leading-[17px]"
      style={{ color }}
    >
      {children}
    </label>
    <AiOutlineInfoCircle size={20} color={color} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 rounded bg-[#1a1a17] p-8 font-[Inter,sans-serif]">
      {/* Header Row */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="text-[20px] font-semibold leading-[24px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </h1>
        <IoSettingsOutline size={24} color="#b5b5b5" />
      </div>

      {/* Subtitle Row */}
      <div className="mb-40 flex items-center gap-2">
        <FiChevronUp size={16} color="#8b9291" />
        <span
          className="text-[13px] font-semibold leading-[16px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp size={18} color="#b2b2b1" />
        <h2
          className="text-[18px] font-semibold leading-[22px]"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input Group */}
      <div className="mb-8">
        <FormLabel htmlFor="token" color="#a4a4a3">
          Personal Access Token
        </FormLabel>
        <input
          id="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-6 text-[14px] font-semibold leading-[17px] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL Input Group */}
      <div className="mb-8">
        <FormLabel htmlFor="url" color="#a3a3a2">
          Design URL
        </FormLabel>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-6 text-[13px] font-semibold leading-[16px] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      {/* Button Row */}
      <div className="mb-32 flex gap-4">
        <button
          className="flex-1 rounded bg-[#843a17] px-4 py-5 text-[14px] font-semibold leading-[17px]"
          style={{ color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded bg-[#843a17] px-4 py-5 text-[14px] font-semibold leading-[17px]"
          style={{ color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3
        className="text-[18px] font-semibold leading-[22px]"
        style={{ color: "#b0b0b0" }}
      >
        Recent Breakdowns
      </h3>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[12px]">© AutonomyAI</p>
      </div>
    </div>
  );
};
