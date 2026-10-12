import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const inputClass =
  "mt-2 w-full rounded-sm border border-[#6b6b6b] bg-[#2b2b2b] px-3 py-2 font-primary text-sm text-[#e6e6e6] placeholder:text-[#8a8a8a]";

const buttonClass =
  "rounded-sm bg-[#b5451f] px-5 py-2 font-primary-bold text-sm text-[#e6e6e6]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[320px] flex-col rounded-md bg-[#1e1e1e] p-5 text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-lg text-[#f0f0f0]">
        UI magician Agent
      </h2>
      <FiSettings className="text-xl text-[#c9c9c9]" aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#a8a8a8]">
      <FiChevronUp className="shrink-0 text-lg" aria-hidden />
      <span className="truncate font-primary text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-lg text-[#c9c9c9]" aria-hidden />
        <h3 className="font-primary-bold text-base text-[#f0f0f0]">
          Add New Design
        </h3>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="font-primary text-sm text-[#c9c9c9]"
          >
            Personal Access Token
          </label>
          <FiInfo className="text-base text-[#c9c9c9]" aria-hidden />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-url"
            className="font-primary text-sm text-[#c9c9c9]"
          >
            Design URL
          </label>
          <FiInfo className="text-base text-[#c9c9c9]" aria-hidden />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>

      <div className="mt-6 flex gap-3">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="mt-12 font-primary-bold text-base text-[#f0f0f0]">
      Recent Breakdowns
    </h3>
  </div>
);
