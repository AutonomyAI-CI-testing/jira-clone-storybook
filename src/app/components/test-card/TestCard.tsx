import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Self-contained reproduction of the cropped Figma frame: a dark panel with a
 * header, a collapsed summary row, an "Add New Design" form and a trailing
 * section heading. Visual only — no props, no state, no handlers.
 *
 * The frame's warm-black/rust palette has no equivalent in this repo's token
 * set, so those colours are arbitrary values rather than semantic roles.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1917] p-10 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-primary-bold">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-[#d4d4d4] outline-none"
      >
        <FiSettings aria-hidden="true" size={26} />
      </button>
    </div>

    <div className="mt-9 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" className="shrink-0" size={22} />
      <span className="truncate font-primary-light text-base text-[#a3a3a3]">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-40">
      <div className="flex items-center gap-2">
        <FiChevronUp aria-hidden="true" className="shrink-0" size={22} />
        <h2 className="text-xl font-primary-bold">Add New Design</h2>
      </div>

      <div className="mt-14 space-y-8">
        <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-12 flex justify-center gap-9">
        <button
          type="button"
          className="h-[70px] w-[168px] cursor-pointer rounded-lg bg-[#9a3d13] text-lg text-[#e5e5e5] outline-none"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[70px] w-[168px] cursor-pointer rounded-lg bg-[#9a3d13] text-lg text-[#e5e5e5] outline-none"
        >
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-24 text-xl font-primary-bold">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="block">
    <span className="flex items-center gap-2 font-primary-light text-base text-[#a3a3a3]">
      {label}
      <FiInfo aria-hidden="true" className="shrink-0 text-[#d4d4d4]" size={20} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[62px] w-full rounded border border-[#57534e] bg-transparent px-7 font-primary-light text-base text-[#d4d4d4] outline-none placeholder:text-[#78716c]"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
