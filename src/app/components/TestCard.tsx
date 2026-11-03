import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * TestCard — a smoke-test render of the attached Figma frame (the "UI magician
 * Agent" panel). Self-contained: no props, no state, no data.
 *
 * The frame is a standalone dark surface. Its near-black panel and rust buttons
 * have no role in this repo's semantic token set, so those colours are written
 * as arbitrary values read off the design rather than as tokens. The repo
 * replaces `theme.colors` wholesale, so stock Tailwind palette classes
 * (`bg-gray-800`, `text-slate-400`) would compile to nothing here.
 */

const HEADING_CLASS = "font-primary-bold text-xl";
const LABEL_CLASS = "font-primary-bold text-[15px] text-[#c8c8c8]";
const INPUT_CLASS =
  "mt-3 h-[52px] w-full rounded-md border border-[#8f8f8f] bg-[#232323] px-4 font-primary text-base text-[#e6e6e6] placeholder:text-[#8f8f8f]";
const BUTTON_CLASS =
  "h-[64px] w-[170px] rounded-lg bg-[#8b3d1f] font-primary text-lg text-[#d8d0cb]";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
};

function Field({ id, label, placeholder }: FieldProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className={LABEL_CLASS}>
          {label}
        </label>
        <HiOutlineInformationCircle
          size={18}
          aria-hidden="true"
          className="text-[#c8c8c8]"
        />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={INPUT_CLASS}
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div id="testElem" className="w-[508px] bg-[#171717] px-10 py-7">
      <div className="flex items-center justify-between">
        <h2 className={`${HEADING_CLASS} text-[#d4d4d4]`}>UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-6 w-6 items-center justify-center text-[#d4d4d4]"
        >
          <HiOutlineCog size={24} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-3 text-[#c4c4c4]">
        <HiChevronUp size={20} aria-hidden="true" />
        <span className="font-primary text-lg">From entire frame to a singl...</span>
      </div>

      <div className="mt-[150px] flex items-center gap-3">
        <HiChevronUp size={24} aria-hidden="true" className="text-[#e0e0e0]" />
        <h3 className={`${HEADING_CLASS} text-[#e0e0e0]`}>Add New Design</h3>
      </div>

      <div className="mt-14 space-y-6">
        <Field
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-12 flex gap-9">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h3 className={`mt-24 ${HEADING_CLASS} text-[#d4d4d4]`}>
        Recent Breakdowns
      </h3>
    </div>
  );
}

export default TestCard;
