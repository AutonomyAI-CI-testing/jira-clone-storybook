import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const field =
  "h-[60px] w-full rounded-md border border-[#3a3634] bg-[#2b2724] px-5 font-primary-light text-[15px] text-[#e8e8e8] outline-none placeholder:text-[#8b8b8b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-focused";

const actionButton =
  "h-[70px] flex-1 rounded-md bg-[#8f4426] font-primary text-[19px] text-[#e8e8e8]";

const sectionHeading = "font-primary-bold text-[19px] leading-7 text-[#f2f2f2]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8 flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-light text-[15px] text-[#d0d0d0]"
      >
        {label}
      </label>
      <FaInfoCircle aria-hidden className="shrink-0 text-[#8a8a8a]" size={18} />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={field} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1a1a1a] px-11 py-10 font-primary text-[#e8e8e8]"
  >
    <header className="flex items-start justify-between">
      <h1 className={sectionHeading}>UI magician Agent</h1>
      <FaCog aria-hidden className="mt-0.5 shrink-0 text-[#f2f2f2]" size={26} />
    </header>

    <div className="mt-6 flex items-center gap-3">
      <FaChevronUp aria-hidden className="shrink-0 text-[#d4d4d4]" size={18} />
      <span className="truncate font-primary-light text-[15px] text-[#9e9e9e]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className={`${sectionHeading} mt-20 flex items-center gap-3`}>
      <FaChevronUp aria-hidden className="shrink-0" size={20} />
      Add New Design
    </h2>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-9 flex gap-8">
      <button type="button" className={actionButton}>
        Awesome
      </button>
      <button type="button" className={actionButton}>
        Prepare
      </button>
    </div>

    <h2 className={`${sectionHeading} mt-24`}>Recent Breakdowns</h2>
  </div>
);
