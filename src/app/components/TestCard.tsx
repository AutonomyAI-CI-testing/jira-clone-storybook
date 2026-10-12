import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[508px] max-w-full flex-col bg-elevation-surface-sunken px-10 pb-24 pt-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[26px] leading-tight">
        UI magician Agent
      </h1>
      <FiSettings size={28} />
    </div>

    <div className="mt-7 flex items-center gap-3">
      <FiChevronUp size={22} className="shrink-0 text-font-subtle" />
      <span className="truncate font-primary-light text-[20px] text-font-subtle">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-28">
      <div className="flex items-center gap-3">
        <FiChevronUp size={26} className="shrink-0" />
        <h2 className="font-primary-bold text-[28px] leading-tight">
          Add New Design
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <label
              htmlFor="test-card-token"
              className="font-primary-bold text-[20px]"
            >
              Personal Access Token
            </label>
            <FiInfo size={22} className="shrink-0" />
          </div>
          <input
            id="test-card-token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className="h-[68px] w-full rounded border border-border-input bg-background-input px-6 font-primary-light text-[20px] placeholder:text-font-subtlest"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <label
              htmlFor="test-card-design-url"
              className="font-primary-bold text-[20px]"
            >
              Design URL
            </label>
            <FiInfo size={22} className="shrink-0" />
          </div>
          <input
            id="test-card-design-url"
            placeholder="https://www.figma.com/file/:"
            className="h-[68px] w-full rounded border border-border-input bg-background-input px-6 font-primary-light text-[20px] placeholder:text-font-subtlest"
          />
        </div>
      </div>

      <div className="mt-10 flex gap-9 pl-12">
        <button
          type="button"
          className="rounded-lg bg-[#9c4a20] px-10 py-5 font-primary-bold text-[20px] text-[#c8a68f]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#9c4a20] px-10 py-5 font-primary-bold text-[20px] text-[#c8a68f]"
        >
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-24 font-primary-bold text-[28px] leading-tight">
      Recent Breakdowns
    </h2>
  </div>
);
