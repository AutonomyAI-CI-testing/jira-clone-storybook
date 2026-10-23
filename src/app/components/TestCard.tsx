import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const INPUT_CLASSNAME =
  "w-full rounded-md border border-[#8c8c8c] bg-transparent p-3 text-base text-[#9a9a9a] placeholder:text-[#9a9a9a]";
const BUTTON_CLASSNAME =
  "flex-1 rounded-md bg-[#a8491c] py-3 text-base text-[#b3a49a]";

/**
 * Static recreation of the "UI magician Agent" design frame: a dark panel with
 * a header, two collapsible rows, two labelled fields and a pair of buttons.
 * Self-contained and inert — no props, no state, no behaviour.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-6 bg-[#1b1b1b] p-8 font-primary text-[#d6d6d6]"
    >
      <header className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <HiOutlineCog aria-hidden="true" size={26} />
      </header>

      <div className="flex min-w-0 items-center gap-3 text-base text-[#c4c4c4]">
        <HiChevronUp aria-hidden="true" size={20} className="shrink-0" />
        <span className="max-w-[360px] truncate">
          From entire frame to a single design
        </span>
      </div>

      <h2 className="mt-10 flex items-center gap-3 font-primary-bold text-xl">
        <HiChevronUp aria-hidden="true" size={22} />
        Add New Design
      </h2>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="test-card-personal-access-token"
          className="flex items-center gap-3 text-base"
        >
          Personal Access Token
          <HiOutlineInformationCircle
            aria-hidden="true"
            size={18}
            className="text-[#8c8c8c]"
          />
        </label>
        <input
          id="test-card-personal-access-token"
          readOnly
          value="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={INPUT_CLASSNAME}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="test-card-design-url"
          className="flex items-center gap-3 text-base"
        >
          Design URL
          <HiOutlineInformationCircle
            aria-hidden="true"
            size={18}
            className="text-[#8c8c8c]"
          />
        </label>
        <input
          id="test-card-design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={INPUT_CLASSNAME}
        />
      </div>

      <div className="flex gap-4">
        <button type="button" className={BUTTON_CLASSNAME}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSNAME}>
          Prepare
        </button>
      </div>

      <h2 className="mt-6 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
