import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_INPUT_CLASS =
  "mt-2 w-full rounded-md border border-[#8a8a8a] bg-[#2b2b2b] px-4 py-3 font-primary-light text-sm text-[#e6e6e6] placeholder:text-[#8a8a8a]";

const ACTION_BUTTON_CLASS =
  "rounded-md bg-[#8f3f14] px-8 py-3 font-primary-bold text-base text-[#e8a878]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] p-10 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-2xl">UI magician Agent</span>
      <FiSettings aria-hidden="true" className="h-5 w-5 shrink-0" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#b0b0b0]">
      <FiChevronUp aria-hidden="true" className="h-4 w-4 shrink-0" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8">
      <Field
        id="testElem-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex gap-4">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-base">
        {label}
      </label>
      <FiInfo aria-hidden="true" className="h-4 w-4 shrink-0" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={FIELD_INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
