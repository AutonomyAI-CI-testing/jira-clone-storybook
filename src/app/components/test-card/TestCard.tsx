import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const inputClass =
  "mt-3 w-full rounded-sm border border-[#57534e] bg-[#292524] px-4 py-3 placeholder:text-[#78716c] focus-visible:outline-none";

const actionClass = "rounded-md bg-[#a63c14] px-8 py-3 text-[#e8cfc2]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary-bold">
        {label}
      </label>
      <MdInfoOutline className="h-4 w-4" aria-hidden="true" />
    </div>
    <input id={id} readOnly placeholder={placeholder} className={inputClass} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1917] px-6 py-8 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[#e7e5e4]">
        UI magician Agent
      </h1>
      <MdSettings className="h-6 w-6 text-[#e7e5e4]" aria-hidden="true" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#a8a29e]">
      <MdKeyboardArrowUp className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-2">
      <MdKeyboardArrowUp
        className="h-5 w-5 shrink-0 text-[#e7e5e4]"
        aria-hidden="true"
      />
      <h2 className="font-primary-bold text-xl text-[#e7e5e4]">
        Add New Design
      </h2>
    </div>

    <div className="mt-10 space-y-6">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex gap-5">
      <button type="button" className={actionClass}>
        Awesome
      </button>
      <button type="button" className={actionClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl text-[#e7e5e4]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
