import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const inputClass =
  "mt-6 h-16 w-full rounded border-none bg-background-input px-4 font-primary text-base text-font outline outline-1 outline-border-bold placeholder:font-primary-light placeholder:text-font-subtlest";

const buttonClass =
  "h-14 w-[168px] rounded-md border-none bg-[#8b3d13] font-primary text-lg text-[#cfa38c]";

const FormField = ({ id, label, placeholder }: FormFieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-base text-font">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={20} />
    </div>
    <input id={id} readOnly placeholder={placeholder} className={inputClass} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface px-10 pb-40 pt-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <FiSettings aria-hidden="true" size={28} />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" size={20} />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <h3 className="mt-36 flex items-center gap-3 font-primary-bold text-xl">
      <FiChevronUp aria-hidden="true" size={24} />
      Add New Design
    </h3>

    <div className="mt-14 flex flex-col gap-6">
      <FormField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:"
      />
    </div>

    <div className="mt-14 flex justify-end gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={buttonClass}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
