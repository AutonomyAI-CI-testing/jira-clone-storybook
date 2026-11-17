import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASS =
  "mt-3 h-16 w-full rounded border-2 border-[#8f8f8f] bg-[#2b2b2b] px-4 text-[20px] text-[#d0d0d0] placeholder:text-[#8a8a8a]";

const ACTION_BUTTON_CLASS =
  "h-[72px] w-[170px] rounded-md bg-[#9c4318] text-[22px] text-[#d7cec7]";

/**
 * Static reproduction of the "UI magician Agent" frame.
 * Smoke test: self-contained, no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1c1c1c] px-10 pb-24 pt-14 font-primary text-[#d0d0d0]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[28px] leading-none">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden="true" className="text-[26px]" />
    </div>

    <div className="mt-4 flex min-w-0 items-center gap-3 text-[22px] text-[#c8c8c8]">
      <FiChevronUp aria-hidden="true" className="shrink-0 text-[22px]" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-44 flex items-center gap-3 font-primary-bold text-[28px]">
      <FiChevronUp aria-hidden="true" className="shrink-0 text-[24px]" />
      Add New Design
    </h2>

    <Field
      id="figma-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="figma-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-8 flex gap-9 pl-10">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[24px]">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center gap-3 text-[20px] text-[#cfcfcf]">
      <label htmlFor={id}>{label}</label>
      <FiInfo aria-hidden="true" className="text-[20px]" />
    </div>
    <input
      id={id}
      name={id}
      readOnly
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
