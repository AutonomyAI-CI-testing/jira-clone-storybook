import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

const headingClassName = "font-primary-black text-xl";

const labelClassName = "flex items-center gap-2 font-primary-light text-sm";

const fieldClassName =
  "mt-4 h-[62px] w-full rounded-[2px] border border-[#6b6b6b] bg-transparent px-4 text-base placeholder:text-[#8c8c8c]";

const buttonClassName =
  "rounded-lg bg-[#a0451f] px-[46px] py-4 text-lg text-[#9a9a9a]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 pt-10 pb-12 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-start justify-between">
        <h2 className={headingClassName}>UI magician Agent</h2>
        <AiOutlineSetting
          aria-hidden
          className="mt-1 text-[#b3b3b3]"
          size={26}
        />
      </div>

      <div className="mt-8 flex items-center gap-2 text-[#8c8c8c]">
        <BiChevronUp aria-hidden size={22} />
        <span className="text-base">From entire frame to a singl...</span>
      </div>

      <div className="mt-32 flex items-center gap-2">
        <BiChevronUp aria-hidden size={22} />
        <h3 className={headingClassName}>Add New Design</h3>
      </div>

      <div className="mt-12 text-[#b3b3b3]">
        <label className={labelClassName} htmlFor="test-card-token">
          Personal Access Token
          <AiOutlineInfoCircle aria-hidden size={18} />
        </label>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={fieldClassName}
        />
      </div>

      <div className="mt-8 text-[#b3b3b3]">
        <label className={labelClassName} htmlFor="test-card-url">
          Design URL
          <AiOutlineInfoCircle aria-hidden size={18} />
        </label>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={fieldClassName}
        />
      </div>

      <div className="mt-14 flex gap-9">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <h3 className={`mt-24 ${headingClassName}`}>Recent Breakdowns</h3>
    </div>
  );
};
