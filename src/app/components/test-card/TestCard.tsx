import cx from "classix";
import { HiChevronUp, HiOutlineCog } from "react-icons/hi";

const FIELD_CLASS =
  "w-full rounded-[2px] border border-[#8a8a8a] bg-[#2b2b2b] px-3 py-4 font-primary-light text-[19px] text-[#c9c9c9] outline-none placeholder:text-[#6f6f6f]";

const BUTTON_CLASS =
  "rounded-lg bg-[#8f3d16] py-4 font-primary-light text-[20px] text-[#c9c9c9]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 py-10 font-primary-light text-[#a3a3a3]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[28px] leading-none text-[#d9d9d9]">
        UI magician Agent
      </h1>
      <HiOutlineCog
        role="img"
        aria-label="Settings"
        className="h-7 w-7 text-[#d9d9d9]"
      />
    </div>

    <div className="mt-7 flex items-center gap-3">
      <HiChevronUp
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#d9d9d9]"
      />
      <span className="truncate text-[20px] text-[#a3a3a3]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <HiChevronUp
        aria-hidden="true"
        className="h-6 w-6 shrink-0 text-[#d9d9d9]"
      />
      <h2 className="font-primary-bold text-[26px] leading-none text-[#d9d9d9]">
        Add New Design
      </h2>
    </div>

    <div className="mt-12 flex items-center gap-4">
      <label htmlFor="testElem-token" className="text-[19px] text-[#c9c9c9]">
        Personal Access Token
      </label>
      <InfoMark label="About the personal access token" />
    </div>
    <input
      id="testElem-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={cx("mt-4", FIELD_CLASS)}
    />

    <div className="mt-6 flex items-center gap-4">
      <label htmlFor="testElem-url" className="text-[19px] text-[#c9c9c9]">
        Design URL
      </label>
      <InfoMark label="About the design URL" />
    </div>
    <input
      id="testElem-url"
      readOnly
      placeholder="https://www.figma.com/file:"
      className={cx("mt-4", FIELD_CLASS)}
    />

    <div className="mt-12 flex gap-9 pl-11">
      <button type="button" className={cx("w-[170px]", BUTTON_CLASS)}>
        Awesome
      </button>
      <button type="button" className={cx("w-[166px]", BUTTON_CLASS)}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[100px] font-primary-bold text-[24px] leading-none text-[#9a9a9a]">
      Recent Breakdowns
    </h2>
  </div>
);

const InfoMark = ({ label }: InfoMarkProps): JSX.Element => (
  <span
    role="img"
    aria-label={label}
    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c9c9c9] text-[13px] leading-none text-[#c9c9c9]"
  >
    i
  </span>
);

interface InfoMarkProps {
  label: string;
}
