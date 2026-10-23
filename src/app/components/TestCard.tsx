import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const PANEL_CLASSES =
  "w-[508px] bg-[#1a1a1a] px-10 py-8 font-primary text-[#f0f0f0]";
const HEADING_CLASSES = "font-primary-black text-lg text-[#f0f0f0]";
const MUTED_TEXT_CLASSES = "text-[#a8a8a8]";
const INPUT_CLASSES =
  "w-full rounded border border-[#5c5c5c] bg-[#2c2c2c] px-4 py-3.5 font-primary-light text-sm text-[#f0f0f0] placeholder:text-[#a8a8a8]";
const ACTION_CLASSES =
  "w-[168px] rounded-md bg-[#a84a21] px-6 py-3.5 font-primary text-sm text-[#c8beb8]";

const TestCardField = ({ label, placeholder }: TestCardFieldProps) => (
  <div>
    <div className="mb-4 flex items-center gap-2">
      <span className="font-primary text-sm text-[#f0f0f0]">{label}</span>
      <IoInformationCircleOutline
        role="img"
        aria-label={`More information about ${label}`}
        className={cx("h-5 w-5", MUTED_TEXT_CLASSES)}
      />
    </div>
    <input type="text" className={INPUT_CLASSES} placeholder={placeholder} />
  </div>
);

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = () => (
  <div id="testElem" className={PANEL_CLASSES}>
    <div className="flex items-center justify-between">
      <h1 className={HEADING_CLASSES}>UI magician Agent</h1>
      <IoSettingsOutline
        role="img"
        aria-label="Settings"
        className="h-6 w-6 shrink-0"
      />
    </div>

    <div className={cx("mt-6 flex items-center gap-2", MUTED_TEXT_CLASSES)}>
      <IoChevronUp className="h-4 w-4 shrink-0" />
      <span className="max-w-[280px] truncate font-primary-light text-sm">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <IoChevronUp className="h-5 w-5 shrink-0" />
      <h2 className={HEADING_CLASSES}>Add New Design</h2>
    </div>

    <div className="mt-16">
      <TestCardField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <TestCardField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex justify-end gap-6">
      <button type="button" className={ACTION_CLASSES}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className={cx("mt-24", HEADING_CLASSES)}>Recent Breakdowns</h2>
  </div>
);
