import { RxChevronUp, RxGear, RxInfoCircled } from "react-icons/rx";

const FIELD_INPUT_CLASS =
  "mt-3 h-16 w-full rounded border border-[#7a736c] bg-[#2a2622] px-4 text-[15px] text-[#d6d3d1] placeholder:text-[#8a837c]";

const BUTTON_CLASS =
  "h-14 flex-1 rounded-md bg-[#a13d16] font-primary-bold text-[#d0a48c]";

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="flex flex-col">
    <span className="flex items-center gap-3 font-primary-bold text-[15px]">
      {label}
      <RxInfoCircled aria-hidden="true" size={18} className="shrink-0" />
    </span>
    <input type="text" placeholder={placeholder} className={FIELD_INPUT_CLASS} />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

/**
 * Standalone reproduction of the "UI magician Agent" panel from the Figma
 * frame. Smoke test only: self-contained, takes no props and is rendered from
 * no route.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1917] px-10 pt-10 pb-24 font-primary text-[#d6d3d1]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <RxGear aria-hidden="true" size={22} className="mt-1 shrink-0" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#8a837c]">
      <RxChevronUp aria-hidden="true" size={18} className="shrink-0" />
      <span className="min-w-0 truncate text-sm">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-32">
      <div className="flex items-center gap-2">
        <RxChevronUp aria-hidden="true" size={22} className="shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-12 flex flex-col gap-10">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-10 flex gap-8">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

export default TestCard;
