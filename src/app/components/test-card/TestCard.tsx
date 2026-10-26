import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_CLASS =
  "w-full rounded border border-[#8b949e] bg-[#22272b] px-6 py-5 font-primary-light text-[16px] text-[#e6edf3] placeholder:text-[#8b949e]";

const BUTTON_CLASS =
  "w-[170px] rounded bg-[#9e3c12] py-2 font-primary text-[16px] text-[#d5d5d5]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1d2125] p-10 font-primary-light text-[#e6edf3]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[22px]">UI magician Agent</span>
      <IoSettingsOutline size={22} aria-hidden="true" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#b6c2cf]">
      <IoChevronUp size={16} aria-hidden="true" />
      <span className="truncate text-[16px]">From entire frame to a singl…</span>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <IoChevronUp size={20} aria-hidden="true" />
      <span className="font-primary-bold text-[20px]">Add New Design</span>
    </div>

    <div className="mt-8 flex items-center gap-2">
      <label htmlFor="testElem-pat" className="font-primary text-[16px]">
        Personal Access Token
      </label>
      <IoInformationCircleOutline size={18} aria-hidden="true" />
    </div>
    <input
      id="testElem-pat"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={`mt-3 ${FIELD_CLASS}`}
    />

    <div className="mt-5 flex items-center gap-2">
      <label htmlFor="testElem-design-url" className="font-primary text-[16px]">
        Design URL
      </label>
      <IoInformationCircleOutline size={18} aria-hidden="true" />
    </div>
    <input
      id="testElem-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={`mt-3 ${FIELD_CLASS}`}
    />

    <div className="mt-8 flex justify-end gap-9">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <span className="mt-24 font-primary-bold text-[20px]">
      Recent Breakdowns
    </span>
  </div>
);
