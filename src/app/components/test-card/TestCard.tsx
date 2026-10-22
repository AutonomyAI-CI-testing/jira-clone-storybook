import { RiArrowUpSLine, RiInformationLine, RiSettings3Line } from "react-icons/ri";

/**
 * Static reproduction of a Figma frame ("UI magician Agent").
 *
 * Self-contained on purpose: no props, no state, no handlers. The frame's two
 * off-palette hues (near-black panel, rust buttons) have no semantic token in
 * the theme, so they are written as literal values scoped to this component.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-[#1c1c1c] p-10 font-primary text-[#d0d0d0]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-2xl text-[#e3e3e3]">UI magician Agent</h2>
      <RiSettings3Line size={26} className="text-[#d0d0d0]" aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <RiArrowUpSLine size={20} className="shrink-0 text-[#d0d0d0]" aria-hidden />
      <span className="font-primary-light text-lg">From entire frame to a singl…</span>
    </div>

    <section className="mt-40">
      <h3 className="flex items-center gap-3 font-primary-bold text-2xl text-[#d5d5d5]">
        <RiArrowUpSLine size={24} className="shrink-0" aria-hidden />
        Add New Design
      </h3>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label
            htmlFor="personal-access-token"
            className="font-primary-bold text-lg text-[#cfcfcf]"
          >
            Personal Access Token
          </label>
          <RiInformationLine size={22} className="shrink-0" aria-hidden />
        </div>
        <input
          id="personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded border border-[#7d7d7d] bg-[#2b2b2b] px-8 py-3 font-primary-light text-lg text-[#d0d0d0] placeholder:text-[#6e6e6e] focus:outline-none"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="design-url" className="font-primary-bold text-lg text-[#cfcfcf]">
            Design URL
          </label>
          <RiInformationLine size={22} className="shrink-0" aria-hidden />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-2 w-full rounded border border-[#7d7d7d] bg-[#2b2b2b] px-8 py-3 font-primary-light text-lg text-[#d0d0d0] placeholder:text-[#6e6e6e] focus:outline-none"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="rounded-md bg-[#a83e14] px-8 py-3 font-primary-bold text-lg text-[#d8d8d8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#a83e14] px-8 py-3 font-primary-bold text-lg text-[#d8d8d8]"
        >
          Prepare
        </button>
      </div>
    </section>

    <h3 className="mt-16 font-primary-bold text-2xl text-[#d5d5d5]">Recent Breakdowns</h3>
  </div>
);
