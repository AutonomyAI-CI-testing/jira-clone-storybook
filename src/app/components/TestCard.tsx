import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const FIELD_CLASS =
  "mt-5 h-[72px] w-full border border-[#8b8b8b] bg-[#2a2a2a] px-9 text-[19px] text-[#c4c4c4] placeholder:text-[#8a8a8a]";

const ACTION_CLASS =
  "h-[74px] w-[171px] rounded-[8px] bg-[#9a4a18] text-[22px] text-[#e0e0e0]";

const Field = ({ id, label, placeholder, className }: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-[19px]">
        {label}
      </label>
      <RiInformationLine aria-hidden size={26} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={FIELD_CLASS}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#131313] px-10 py-10 font-primary text-[#c4c4c4]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[24px] text-[#cfcfcf]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-[#cfcfcf]">
        <RiSettings3Line aria-hidden size={30} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#a3a3a3]">
      <RiArrowUpSLine aria-hidden size={22} className="shrink-0" />
      <span className="min-w-0 truncate text-[19px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40" />

    <section>
      <div className="flex items-center gap-3">
        <RiArrowUpSLine aria-hidden size={26} className="shrink-0" />
        <h2 className="font-primary-bold text-[26px] text-[#d5d5d5]">
          Add New Design
        </h2>
      </div>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-14"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-5"
      />

      <div className="mt-14 flex justify-end gap-[34px]">
        <button type="button" className={ACTION_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_CLASS}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-[74px] font-primary-bold text-[26px] text-[#c9c9c9]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
