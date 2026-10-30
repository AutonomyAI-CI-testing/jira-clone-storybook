import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_INPUT_CLASS =
  "mt-5 h-[56px] w-full border border-[#8f8f8f] bg-[#2b2b2b] px-4 text-base text-[#8a8a8a] placeholder:text-[#8a8a8a]";

const BUTTON_CLASS =
  "h-[52px] w-[136px] rounded bg-[#a94a2a] font-primary text-base text-[#cfcfcf]";

const HEADING_CLASS = "font-primary-bold text-xl text-[#cccccc]";

const CHEVRON_CLASS = "shrink-0 text-[#cccccc]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className: string;
}

const Field = ({
  id,
  label,
  placeholder,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base text-[#a3a3a3]">
        {label}
      </label>
      <FiInfo size={18} aria-hidden="true" className="shrink-0 text-[#cccccc]" />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={FIELD_INPUT_CLASS}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[420px] bg-[#1c1c1c] px-8 py-7 font-primary text-[#cccccc]"
  >
    <div className="flex items-center justify-between">
      <h1 className={HEADING_CLASS}>UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="text-[#cccccc]">
        <FiSettings size={22} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <FiChevronUp size={20} aria-hidden="true" className={CHEVRON_CLASS} />
      <span className="truncate text-base text-[#a3a3a3]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-24" aria-hidden="true" />

    <div className="flex items-center gap-2">
      <FiChevronUp size={20} aria-hidden="true" className={CHEVRON_CLASS} />
      <h2 className={HEADING_CLASS}>Add New Design</h2>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-10"
    />

    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-6"
    />

    <div className="mt-8 flex gap-8">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-12 ${HEADING_CLASS}`}>Recent Breakdowns</h2>
  </div>
);
