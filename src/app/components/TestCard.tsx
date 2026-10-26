import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_INPUT_CLASS =
  "mt-3 w-full rounded-[2px] border border-[#8a8a8a] bg-[#1c1c1c] px-5 py-5 text-lg text-[#e6e6e6] placeholder:text-[#8a8a8a]";

const BUTTON_CLASS =
  "h-[72px] flex-1 rounded-md bg-[#b04a1e] font-primary text-xl text-[#b9ada7]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label className="text-lg text-[#c9c9c9]" htmlFor={id}>
        {label}
      </label>
      <FiInfo aria-hidden className="text-xl text-[#c9c9c9]" />
    </div>
    <input className={FIELD_INPUT_CLASS} id={id} placeholder={placeholder} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = () => (
  <div
    className="flex w-[508px] flex-col bg-[#111111] px-6 pb-10 pt-7 font-primary-light text-[#c9c9c9]"
    id="testElem"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden className="mt-0.5 text-2xl text-[#c8c8c8]" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-lg text-[#9a9a9a]">
      <FiChevronUp aria-hidden className="shrink-0 text-xl" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="h-[120px]" />

    <h2 className="flex items-center gap-3 font-primary-bold text-2xl text-[#dcdcdc]">
      <FiChevronUp aria-hidden className="shrink-0 text-xl" />
      Add New Design
    </h2>

    <div className="mt-8 flex flex-col gap-8">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-9 flex gap-7">
      {["Awesome", "Prepare"].map((label) => (
        <button className={BUTTON_CLASS} key={label} type="button">
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-2xl text-[#dcdcdc]">
      Recent Breakdowns
    </h2>
  </div>
);
