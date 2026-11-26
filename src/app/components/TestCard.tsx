import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const TOKEN_FIELD_ID = "testElem-personal-access-token";
const URL_FIELD_ID = "testElem-design-url";

const INPUT_CLASS =
  "mt-3 w-full rounded-md border border-border-bold bg-background-input px-4 py-5 text-base text-font outline-none placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASS =
  "rounded bg-[#b45309] px-10 py-5 font-primary text-lg text-[#f5f5f5] hover:bg-[#92400e]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface-overlay px-10 py-12 font-primary text-font"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
        <FaCog
          size={24}
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-icon-subtle"
        />
      </div>

      <div className="mt-4 flex items-center gap-3 text-font-subtle">
        <FaChevronUp size={16} aria-hidden="true" className="shrink-0" />
        <span className="truncate text-base">From entire frame to a singl...</span>
      </div>

      <div className="mt-24">
        <div className="flex items-center gap-3">
          <FaChevronUp size={16} aria-hidden="true" className="shrink-0" />
          <h3 className="font-primary-black text-xl">Add New Design</h3>
        </div>

        <div className="mt-6">
          <FieldLabel htmlFor={TOKEN_FIELD_ID} label="Personal Access Token" />
          <input
            id={TOKEN_FIELD_ID}
            name="personal-access-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className={INPUT_CLASS}
          />
        </div>

        <div className="mt-5">
          <FieldLabel htmlFor={URL_FIELD_ID} label="Design URL" />
          <input
            id={URL_FIELD_ID}
            name="design-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className={INPUT_CLASS}
          />
        </div>

        <div className="mt-12 flex justify-center gap-9">
          <button type="button" className={ACTION_BUTTON_CLASS}>
            Awesome
          </button>
          <button type="button" className={ACTION_BUTTON_CLASS}>
            Prepare
          </button>
        </div>
      </div>

      <h3 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const FieldLabel = ({ htmlFor, label }: FieldLabelProps): JSX.Element => (
  <label
    htmlFor={htmlFor}
    className="flex items-center gap-3 text-base text-font-subtle"
  >
    {label}
    <FaInfoCircle size={16} aria-hidden="true" className="shrink-0" />
  </label>
);

interface FieldLabelProps {
  htmlFor: string;
  label: string;
}
