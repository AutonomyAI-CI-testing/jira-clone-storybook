import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const inputClassName =
  "mt-4 w-full rounded border border-[#6b6b6b] bg-[#1c1c1c] px-4 py-3 text-[18px] placeholder:text-[#8f8f8f]";

const buttonClassName =
  "rounded-md bg-[#a8441c] px-8 py-3 font-primary-bold text-[18px] text-[#f0f0f0]";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#111111] p-6 font-primary text-[#d7d7d7]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[26px] leading-8">
          UI magician Agent
        </h1>
        <IoSettingsOutline aria-hidden className="text-[28px]" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <IoChevronUp aria-hidden className="shrink-0 text-[20px]" />
        <span className="truncate text-[18px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <IoChevronUp aria-hidden className="shrink-0 text-[24px]" />
        <h2 className="font-primary-bold text-[26px] leading-8">
          Add New Design
        </h2>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-token" className="text-[18px]">
            Personal Access Token
          </label>
          <IoInformationCircleOutline aria-hidden className="text-[20px]" />
        </div>
        <input
          id="test-card-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-url" className="text-[18px]">
            Design URL
          </label>
          <IoInformationCircleOutline aria-hidden className="text-[20px]" />
        </div>
        <input
          id="test-card-url"
          placeholder="https://www.figma.com/file/"
          className={inputClassName}
        />
      </div>

      <div className="mt-10 flex gap-6">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-[26px] leading-8">
        Recent Breakdowns
      </h2>
    </div>
  );
}
