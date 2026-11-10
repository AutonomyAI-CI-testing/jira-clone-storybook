import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel.
 *
 * Smoke test only: self-contained, takes no props, holds no state and is not
 * wired into the app. Colours are literal values read from the source design
 * rather than theme tokens, so the panel keeps its own look under every theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1c1a19] font-primary text-[#d4d4d4]"
  >
    {/* Header */}
    <div className="flex items-center justify-between px-10 pt-10">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog aria-hidden="true" className="h-7 w-7 text-[#cbc7c3]" />
    </div>

    {/* Collapsed row */}
    <div className="mt-7 flex items-center gap-2 px-10">
      <HiChevronUp
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#b8b4b0]"
      />
      <span className="max-w-[330px] truncate text-lg text-[#b8b4b0]">
        From entire frame to a single component with every layer
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-24 px-10">
      <div className="flex items-center gap-2">
        <HiChevronUp aria-hidden="true" className="h-6 w-6 shrink-0" />
        <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
      </div>

      <div className="mt-9">
        <div className="flex items-center gap-2">
          <label htmlFor="testElem-token" className="text-[17px]">
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            aria-hidden="true"
            className="h-5 w-5"
          />
        </div>
        <input
          id="testElem-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-4 h-16 w-full rounded-sm border border-[#6b6b6b] bg-[#242120] px-10 text-[17px] text-[#d4d4d4] placeholder:text-[#7a7570]"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label htmlFor="testElem-url" className="text-[17px]">
            Design URL
          </label>
          <HiOutlineInformationCircle
            aria-hidden="true"
            className="h-5 w-5"
          />
        </div>
        <input
          id="testElem-url"
          placeholder="https://www.figma.com/file/"
          className="mt-4 h-16 w-full rounded-sm border border-[#6b6b6b] bg-[#242120] px-10 text-[17px] text-[#d4d4d4] placeholder:text-[#7a7570]"
        />
      </div>

      <div className="mt-10 flex items-center gap-8 pl-12">
        <button
          type="button"
          className="h-14 rounded-md bg-[#a03c14] px-12 text-[17px] text-[#d4d4d4]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-14 rounded-md bg-[#a03c14] px-12 text-[17px] text-[#d4d4d4]"
        >
          Prepare
        </button>
      </div>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-20 px-10 pb-10">
      <h2 className="font-primary-bold text-[22px]">Recent Breakdowns</h2>
    </div>
  </div>
);
