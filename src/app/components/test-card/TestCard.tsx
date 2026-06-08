import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Color palette for the dark-themed design card
const Colors = {
  DARK_BG: "#272822",
  HEADER_TEXT: "#b5b5b5",
  SUBTITLE_TEXT: "#8b9291",
  SECTION_TEXT: "#b2b2b1",
  LABEL_TEXT: "#a4a4a3",
  INPUT_TEXT: "#737470",
  TOKEN_BORDER: "#929291",
  URL_BORDER: "#a5adad",
  BUTTON_BG: "#843a17",
  BUTTON_TEXT: "#8c8078",
  FOOTER_TEXT: "#b0b0b0",
};

const FontSizes = {
  HEADER: "13.5px",
  LABEL: "11.5px",
  SECTION: "13.5px",
  FOOTER: "13.5px",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[506px] bg-[#272822] p-5 font-['Inter']"
    >
      {/* Header row with title and settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`text-[${Colors.HEADER_TEXT}] text-[${FontSizes.HEADER}] font-semibold`}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline className={`text-[${Colors.HEADER_TEXT}] text-xl`} />
      </div>

      {/* Subtitle row with expandable indicator */}
      <div className="mb-10 flex items-center gap-1">
        <HiChevronUp className={`text-[${Colors.SUBTITLE_TEXT}] text-base`} />
        <span
          className={`text-[${Colors.SUBTITLE_TEXT}] text-[${FontSizes.LABEL}] font-semibold`}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-5 flex items-center gap-2">
        <HiChevronUp className={`text-[${Colors.SECTION_TEXT}] text-base`} />
        <span
          className={`text-[${Colors.SECTION_TEXT}] text-[${FontSizes.SECTION}] font-semibold`}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="mb-2 flex items-center gap-2">
          <span
            className={`text-[${Colors.LABEL_TEXT}] text-[${FontSizes.LABEL}] font-semibold`}
          >
            Personal Access Token
          </span>
          <HiInformationCircle
            className={`text-[${Colors.LABEL_TEXT}] text-base`}
          />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`w-full bg-[${Colors.DARK_BG}] border-2 border-[${Colors.TOKEN_BORDER}] rounded px-3 py-2 text-[${FontSizes.LABEL}] font-semibold text-[${Colors.INPUT_TEXT}] placeholder:text-[${Colors.INPUT_TEXT}] outline-none`}
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span
            className={`text-[${Colors.LABEL_TEXT}] text-[${FontSizes.LABEL}] font-semibold`}
          >
            Design URL
          </span>
          <HiInformationCircle
            className={`text-[${Colors.LABEL_TEXT}] text-base`}
          />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full bg-[${Colors.DARK_BG}] border border-[${Colors.URL_BORDER}] rounded px-3 py-2 text-[${FontSizes.LABEL}] font-semibold text-[${Colors.INPUT_TEXT}] placeholder:text-[${Colors.INPUT_TEXT}] outline-none`}
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex justify-center gap-4">
        <button
          className={`bg-[${Colors.BUTTON_BG}] text-[${Colors.BUTTON_TEXT}] text-[${FontSizes.LABEL}] flex-1 rounded-lg px-10 py-3 font-semibold`}
        >
          Awesome
        </button>
        <button
          className={`bg-[${Colors.BUTTON_BG}] text-[${Colors.BUTTON_TEXT}] text-[${FontSizes.LABEL}] flex-1 rounded-lg px-10 py-3 font-semibold`}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section footer */}
      <div className="mt-2">
        <span
          className={`text-[${Colors.FOOTER_TEXT}] text-[${FontSizes.FOOTER}] font-semibold`}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
