import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Smoke-test reproduction of the attached Figma frame: a dark settings panel
 * for a "UI magician Agent" tool. Self-contained on purpose — no props, no
 * state, no interactivity. Colours, spacing and type are read off the frame by
 * eye and are deliberately approximate.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1e1e1e] px-10 py-9 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <RiSettings3Line size={26} aria-hidden />
    </div>

    <div className="mt-9 flex items-center gap-3 text-lg text-[#9a9a9a]">
      <RiArrowUpSLine size={26} className="shrink-0" aria-hidden />
      <span className="min-w-0 truncate">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <RiArrowUpSLine size={28} className="shrink-0" aria-hidden />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-9">
      <div className="flex items-center gap-3">
        <label htmlFor="personal-access-token" className="text-lg">
          Personal Access Token
        </label>
        <RiInformationLine size={26} aria-hidden />
      </div>
      <input
        id="personal-access-token"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-4 w-full rounded border border-[#8a8a8a] bg-transparent px-4 py-4 text-lg text-[#9a9a9a] outline-none placeholder:text-[#9a9a9a]"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-3">
        <label htmlFor="design-url" className="text-lg">
          Design URL
        </label>
        <RiInformationLine size={26} aria-hidden />
      </div>
      <input
        id="design-url"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-4 w-full rounded border border-[#8a8a8a] bg-transparent px-4 py-4 text-lg text-[#9a9a9a] outline-none placeholder:text-[#9a9a9a]"
      />
    </div>

    <div className="mt-12 flex justify-center gap-9">
      <button
        type="button"
        className="w-[168px] rounded-md bg-[#a34a1e] py-4 text-lg text-[#c9b1a3]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[168px] rounded-md bg-[#a34a1e] py-4 text-lg text-[#c9b1a3]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
