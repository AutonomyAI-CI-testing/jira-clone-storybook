import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const SECTION_TITLE_CLASS = "font-primary text-[28px] leading-9 text-[#e6e6e6]";

const ACTION_BUTTON_CLASS =
  "h-[62px] w-[170px] rounded-lg bg-[#a04a1e] text-[24px] leading-8 text-[#f2b28c]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="block">
    <span className="flex items-center gap-3">
      <span className="text-[22px] leading-7 text-[#c9c9c9]">{label}</span>
      <FiInfo aria-hidden className="h-7 w-7 shrink-0 text-[#c9c9c9]" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-7 h-[60px] w-full rounded border border-[#8a8a8a] bg-[#202020] px-9 text-[22px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-[#1a1a1a] px-10 pt-10 pb-24 font-primary-light text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary text-[28px] leading-9">UI magician Agent</h2>
      <FiSettings aria-hidden className="h-[30px] w-[30px] text-[#d0d0d0]" />
    </div>

    <div className="mt-6 flex items-center gap-4">
      <FiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
      <p className="truncate text-[20px] leading-7 text-[#8a8a8a]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp aria-hidden className="h-7 w-7 shrink-0" />
      <h3 className={SECTION_TITLE_CLASS}>Add New Design</h3>
    </div>

    <div className="mt-14 space-y-5">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-16 flex justify-center gap-9">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className={`mt-[72px] ${SECTION_TITLE_CLASS}`}>Recent Breakdowns</h3>
  </div>
);
