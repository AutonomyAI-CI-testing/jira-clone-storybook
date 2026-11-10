import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

// Approximate values read off the Figma frame: the panel's palette is not part of this
// repo's token set, so the colours are written as arbitrary utilities on purpose.
const INPUT_CLASS =
  "h-16 w-full rounded border border-[#4a4540] bg-transparent px-4 font-primary text-base text-[#d6d3d1] placeholder:text-[#78716c] focus:outline-none";

const BUTTON_CLASS =
  "min-w-[170px] rounded-md bg-[#a13d16] px-6 py-5 font-primary text-base text-[#d6d3d1]";

const field = (label: string, placeholder: string) => (
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-2">
      <span className="font-primary text-base text-[#c7c3c0]">{label}</span>
      <LuInfo aria-hidden size={20} className="text-[#a8a29e]" />
    </div>
    <input type="text" placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#191919] px-10 py-11 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <LuSettings aria-hidden size={26} className="mt-1" />
    </div>

    <div className="mt-9 flex items-center gap-3 text-[#a8a29e]">
      <LuChevronUp aria-hidden size={22} />
      <span className="font-primary text-base">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-40">
      <div className="flex items-center gap-3 pl-5">
        <LuChevronUp aria-hidden size={24} />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <div className="mt-16 flex flex-col gap-7">
        {field("Personal Access Token", "figd_xxxxxxxxxxxxxxxxxxxx")}
        {field("Design URL", "https://www.figma.com/file/")}
      </div>

      <div className="mt-12 flex gap-9 pl-12">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>
    </section>

    <h3 className="mt-28 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
