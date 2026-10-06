import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] max-w-full flex-col bg-elevation-surface-sunken p-7 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <HiOutlineCog aria-hidden className="h-6 w-6 text-font-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-sm text-font-subtle">
      <HiChevronUp aria-hidden className="h-4 w-4 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <HiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <label className="flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm text-font-subtle">
          Personal Access Token
          <HiOutlineInformationCircle aria-hidden className="h-4 w-4" />
        </span>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-border-bold bg-background-input px-3 py-3 text-sm text-font placeholder:text-font-subtlest"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm text-font-subtle">
          Design URL
          <HiOutlineInformationCircle aria-hidden className="h-4 w-4" />
        </span>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded border border-border-bold bg-background-input px-3 py-3 text-sm text-font placeholder:text-font-subtlest"
        />
      </label>

      <div className="mt-3 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#A63D12] py-3 font-primary-bold text-[#DD8A5C]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#A63D12] py-3 font-primary-bold text-[#DD8A5C]"
        >
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

export default TestCard;
