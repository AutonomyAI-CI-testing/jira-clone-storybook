import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const sectionHeadingClass = "font-primary-bold text-[21px] text-[#e8e8e8]";

const cardButtonClass =
  "h-[64px] w-[170px] rounded-[10px] bg-[#a04a22] text-[19px] text-[#c9c4bf]";

const inputClass =
  "mt-4 h-[64px] w-full rounded border border-[#b0b0b0] bg-[#2e2e2e] px-5 text-[18px] text-[#d5d5d5] placeholder:text-[#9a9a9a]";

interface CardFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const CardField = ({ id, label, placeholder }: CardFieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[18px] text-[#d5d5d5]">
        {label}
      </label>
      <FiInfo size={26} className="shrink-0 text-[#d0d0d0]" aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClass}
    />
  </div>
);

/**
 * Smoke-test reproduction of the "UI magician Agent" panel from a Figma frame.
 *
 * Deliberately self-contained: no props, no state, no app wiring. Values are
 * approximated from the frame image, and its dark palette is not part of this
 * app's semantic token set, so literal colours are used on purpose here.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-[42px] py-11 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] text-[#f5f5f5]">
        UI magician Agent
      </h1>
      <FiSettings size={30} className="shrink-0 text-[#e8e8e8]" aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-4">
      <FiChevronUp size={20} className="shrink-0" aria-hidden />
      <span className="text-[17px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-4">
      <FiChevronUp size={24} className="shrink-0 text-[#e8e8e8]" aria-hidden />
      <h2 className={sectionHeadingClass}>Add New Design</h2>
    </div>

    <div className="mt-11 space-y-7">
      <CardField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <CardField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-9 pl-10">
      <button type="button" className={cardButtonClass}>
        Awesome
      </button>
      <button type="button" className={cardButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-16 ${sectionHeadingClass}`}>Recent Breakdowns</h2>
  </div>
);

export default TestCard;
