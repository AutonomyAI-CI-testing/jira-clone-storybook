import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASS_NAME =
  "h-[56px] w-full rounded-md border border-[#a8a8a8] bg-[#242424] px-4 font-primary-light text-base text-[#e6e6e6] placeholder:text-[#6b6b6b]";

const BUTTON_CLASS_NAME =
  "h-[56px] flex-1 rounded-md bg-[#a5471e] font-primary-light text-base text-[#c9c9c9] transition-colors duration-150 hover:bg-[#8f3d19] active:bg-[#7d3515]";

const TestCardField = ({
  label,
  placeholder,
}: TestCardFieldProps): JSX.Element => (
  <label className="block">
    <span className="mb-5 flex items-center gap-2 font-primary-light text-base text-[#d0d0d0]">
      {label}
      <FiInfo aria-hidden size={18} />
    </span>
    <input className={FIELD_CLASS_NAME} placeholder={placeholder} readOnly />
  </label>
);

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[508px] bg-[#1c1c1c] px-10 pb-16 pt-12">
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-[#e6e6e6]">
        UI magician Agent
      </h2>
      <FiSettings aria-hidden size={22} className="text-[#c9c9c9]" />
    </div>

    <div className="mt-8 flex items-center gap-2 text-[#9a9a9a]">
      <FiChevronUp aria-hidden size={20} />
      <span className="min-w-0 truncate font-primary-light text-base">
        From entire frame to a single component breakdown
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2 text-[#e0e0e0]">
      <FiChevronUp aria-hidden size={22} />
      <span className="font-primary-bold text-lg">Add New Design</span>
    </div>

    <div className="mt-10 space-y-8">
      <TestCardField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <TestCardField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-8">
      <button type="button" className={BUTTON_CLASS_NAME}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS_NAME}>
        Prepare
      </button>
    </div>

    <h3 className="mt-28 font-primary-bold text-lg text-[#c9c9c9]">
      Recent Breakdowns
    </h3>
  </div>
);
