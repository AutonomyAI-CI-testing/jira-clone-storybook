import { HiChevronUp } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi2";
import { TbAtom } from "react-icons/tb";

// Color palette for the dark-themed card design
/**
 * Color palette for the dark-themed card design.
 * Extracted to a single source of truth to maintain visual consistency
 * and simplify future theme adjustments.
 */
const COLORS = {
  header: "#b5b5b5",
  section1: "#8b9291",
  section2: "#b2b2b1",
  label: "#a4a4a3",
  labelDesignUrl: "#a3a3a2",
  border: "#1a1a1a",
  inputBorder: "#929291",
  inputBorderDesignUrl: "#a5adad",
  inputText: "#737470",
  inputTextDesignUrl: "#71726e",
  buttonBg: "#843a17",
  buttonBgHover: "#a64a1f",
  buttonText: "#8c8078",
  recentBreakdowns: "#b0b0b0",
  footerText: "#b5b5b5",
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[460px] bg-black p-0">
      {/* Header with title and icon */}
      <div className="relative flex items-center justify-between px-8 py-8">
        <h1
          className="text-[24px] font-semibold"
          style={{ color: COLORS.header }}
        >
          UI magician Agent
        </h1>
        <TbAtom size={32} style={{ color: COLORS.header }} />
      </div>

      {/* Collapsible section with truncated text */}
      <div
        className="border-t px-8 py-6"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex items-center gap-3">
          <HiChevronUp size={20} style={{ color: COLORS.section1 }} />
          <span
            className="text-[18px] font-semibold"
            style={{ color: COLORS.section1 }}
          >
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Vertical spacer to create visual breathing room */}
      <div className="h-[100px]" />

      {/* Add New Design collapsible section */}
      <div
        className="border-t px-8 py-6"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex items-center gap-3">
          <HiChevronUp size={22} style={{ color: COLORS.section2 }} />
          <span
            className="text-[20px] font-semibold"
            style={{ color: COLORS.section2 }}
          >
            Add New Design
          </span>
        </div>
      </div>

      {/* Personal Access Token input section */}
      <div
        className="border-t px-8 py-6"
        style={{ borderColor: COLORS.border }}
      >
        <div className="mb-3 flex items-center gap-2">
          <label
            className="text-[16px] font-semibold"
            style={{ color: COLORS.label }}
          >
            Personal Access Token
          </label>
          <HiInformationCircle size={20} style={{ color: COLORS.label }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] px-4 py-3 text-[15px] font-semibold outline-none"
          style={{
            border: `1px solid ${COLORS.inputBorder}`,
            color: COLORS.inputText,
          }}
        />
      </div>

      {/* Design URL input section */}
      <div
        className="border-t px-8 py-6"
        style={{ borderColor: COLORS.border }}
      >
        <div className="mb-3 flex items-center gap-2">
          <label
            className="text-[16px] font-semibold"
            style={{ color: COLORS.labelDesignUrl }}
          >
            Design URL
          </label>
          <HiInformationCircle
            size={20}
            style={{ color: COLORS.labelDesignUrl }}
          />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] px-4 py-3 text-[14px] font-semibold outline-none"
          style={{
            border: `1px solid ${COLORS.inputBorderDesignUrl}`,
            color: COLORS.inputTextDesignUrl,
          }}
        />
      </div>

      {/* Action buttons section */}
      <div
        className="border-t px-8 py-6"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex gap-6">
          <button
            className="flex-1 rounded-[4px] px-6 py-3 text-[16px] font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.buttonBgHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.buttonBg)
            }
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-[4px] px-6 py-3 text-[16px] font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.buttonBgHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.buttonBg)
            }
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div
        className="border-t px-8 py-6"
        style={{ borderColor: COLORS.border }}
      >
        <h2
          className="text-[20px] font-semibold"
          style={{ color: COLORS.recentBreakdowns }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div
        className="border-t pt-3 text-center"
        style={{ borderColor: "#999" }}
      >
        <p style={{ color: COLORS.footerText }}>© AutonomyAI</p>
      </div>
    </div>
  );
};
