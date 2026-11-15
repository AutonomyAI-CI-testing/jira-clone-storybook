import { MdExpandLess, MdInfoOutline, MdSettings } from "react-icons/md";

/**
 * Self-contained panel used as a Figma-to-component smoke test.
 * Takes no props, holds no state, and is wired to nothing.
 * Colours are literals matching the source frame rather than semantic tokens,
 * because the frame's palette has no equivalent in this app's token set.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-[30px] py-[30px] font-primary text-[#e8e8e8]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <MdSettings size={26} className="text-[#c0c0c0]" aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <MdExpandLess size={26} className="text-[#c0c0c0]" aria-hidden />
      <span className="truncate text-xl text-[#b0b0b0]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[120px] flex items-center gap-3">
      <MdExpandLess size={26} className="text-[#c0c0c0]" aria-hidden />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-10 flex gap-8">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[120px] font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <span className="text-xl text-[#c0c0c0]">{label}</span>
      <MdInfoOutline size={26} className="text-[#c0c0c0]" aria-hidden />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-4 h-14 w-full rounded-[2px] border-2 border-[#8a8a8a] bg-[#232323] px-4 text-lg text-[#8a8a8a] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const BUTTON_CLASS =
  "h-[70px] w-[170px] rounded bg-[#a0441a] font-primary text-xl text-[#b8b8b8]";

interface FieldProps {
  label: string;
  placeholder: string;
}
