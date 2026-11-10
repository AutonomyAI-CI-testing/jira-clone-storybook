import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel design.
 *
 * Smoke test component: takes no props, holds no state and wires no behaviour.
 * Colours are literal values from the design rather than theme roles, because the
 * design's palette (near-black surface, rust action) has no counterpart in the
 * app's token set.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-10 pt-10 pb-14 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[26px] leading-none">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden className="h-6 w-6 shrink-0 text-[#a1a1aa]" />
    </div>

    <div className="mt-9 flex items-center gap-3">
      <FiChevronUp aria-hidden className="h-5 w-5 shrink-0 text-[#a1a1aa]" />
      <span className="min-w-0 truncate text-[19px] text-[#a1a1aa]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[160px]" aria-hidden />

    <div className="flex items-center gap-3">
      <FiChevronUp aria-hidden className="h-6 w-6 shrink-0" />
      <h2 className="font-primary-bold text-[26px] leading-none">
        Add New Design
      </h2>
    </div>

    <div className="mt-14 space-y-7">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex gap-10">
      <button
        type="button"
        className="h-[68px] w-[170px] rounded-md bg-[#a13d16] text-[21px] text-[#a1a1aa]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[68px] w-[170px] rounded-md bg-[#a13d16] text-[21px] text-[#a1a1aa]"
      >
        Prepare
      </button>
    </div>

    <div className="h-[120px]" aria-hidden />

    <h2 className="font-primary-bold text-[26px] leading-none">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="block">
    <span className="flex items-center gap-3">
      <span className="text-[19px] text-[#a1a1aa]">{label}</span>
      <FiInfo aria-hidden className="h-[22px] w-[22px] shrink-0 text-[#a1a1aa]" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[70px] w-full rounded-md border border-[color:#52525b] bg-transparent px-5 text-[19px] text-[#d4d4d4] placeholder:text-[#71717a]"
    />
  </label>
);
