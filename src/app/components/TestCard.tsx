import {
  IoSettingsOutline,
  IoChevronUpOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

/**
 * Smoke-test component built from a Figma frame.
 *
 * Deliberately self-contained: no props, no state, no data. The frame's dark
 * surface and rust accents have no counterpart in the semantic token layer, and
 * the brief allows only this one new file, so the colours are Tailwind
 * arbitrary values read off the frame rather than design tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1a1a1a] px-10 py-8 font-primary text-[#cfcfcf]"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-2xl text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="shrink-0 text-[#d4d4d4]"
        >
          <IoSettingsOutline className="h-7 w-7" />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3 text-xl text-[#a3a3a3]">
        <IoChevronUpOutline className="h-5 w-5 shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <section className="mt-24">
        <h2 className="flex items-center gap-3 font-primary-bold text-2xl text-[#e6e6e6]">
          <IoChevronUpOutline className="h-5 w-5 shrink-0" />
          Add New Design
        </h2>

        <div className="mt-10">
          <label
            htmlFor="test-card-personal-access-token"
            className="flex items-center gap-3 text-xl text-[#cfcfcf]"
          >
            Personal Access Token
            <IoInformationCircleOutline className="h-5 w-5 shrink-0" />
          </label>
          <input
            id="test-card-personal-access-token"
            name="personal-access-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
            className="mt-4 w-full rounded border-2 border-[#8a8a8a] bg-[#232323] px-4 py-5 text-xl text-[#e6e6e6] placeholder:text-[#8f8f8f]"
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="test-card-design-url"
            className="flex items-center gap-3 text-xl text-[#cfcfcf]"
          >
            Design URL
            <IoInformationCircleOutline className="h-5 w-5 shrink-0" />
          </label>
          <input
            id="test-card-design-url"
            name="design-url"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="mt-4 w-full rounded border-2 border-[#8a8a8a] bg-[#232323] px-4 py-5 text-xl text-[#e6e6e6] placeholder:text-[#8f8f8f]"
          />
        </div>

        <div className="mt-12 flex gap-8 pl-12">
          <button
            type="button"
            className="rounded bg-[#a33b14] px-10 py-4 font-primary-bold text-xl text-[#c9c0bb]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded bg-[#a33b14] px-10 py-4 font-primary-bold text-xl text-[#c9c0bb]"
          >
            Prepare
          </button>
        </div>
      </section>

      <h2 className="mt-24 font-primary-bold text-2xl text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
