import { Button } from "@app/components/button/button";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const SECTION_HEADING_CLASS = "font-primary-bold text-xl";
const LABEL_CLASS =
  "flex items-center gap-2 font-primary-light text-sm text-font-subtle";
const INPUT_CLASS =
  "w-full rounded border border-border-bold bg-background-input px-4 py-3 text-sm placeholder:text-font-subtlest";

const FIELDS = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-6 w-6 items-center justify-center rounded-full text-font-subtle hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <FaCog size={18} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <FaChevronUp size={14} className="shrink-0" />
      <span className="max-w-[270px] truncate text-sm">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FaChevronUp size={18} className="shrink-0" />
      <h2 className={SECTION_HEADING_CLASS}>Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      {FIELDS.map(({ id, label, placeholder }) => (
        <div key={id} className="flex flex-col gap-2">
          <label htmlFor={id} className={LABEL_CLASS}>
            {label}
            <FaInfoCircle size={16} aria-hidden="true" />
          </label>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className={INPUT_CLASS}
          />
        </div>
      ))}
    </div>

    <div className="mt-10 flex items-center gap-8">
      <Button size="lg" className="w-[165px] py-4">
        Awesome
      </Button>
      <Button size="lg" className="w-[165px] py-4">
        Prepare
      </Button>
    </div>

    <h2 className={`mt-16 ${SECTION_HEADING_CLASS}`}>Recent Breakdowns</h2>
  </div>
);

export default TestCard;
