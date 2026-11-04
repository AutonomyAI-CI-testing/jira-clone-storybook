import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test component: a one-off reproduction of the supplied Figma frame
 * ("UI magician Agent"). Self-contained, takes no props, wired to nothing.
 *
 * The frame's charcoal/brown palette has no role in this repo's semantic token
 * set, so the colours below are Tailwind arbitrary values. Layout, spacing,
 * radius and typography classes are ordinary Tailwind.
 */

const FIELD_CLASS =
  "mt-4 h-[68px] w-full rounded-md border border-[#8a8a8a] bg-transparent px-5 text-[16px] text-[#8c8c8c] placeholder:text-[#8c8c8c]";

const ACTION_CLASS =
  "h-[72px] w-[170px] cursor-pointer rounded-md border-none bg-[#9c4a26] font-primary-bold text-[20px] text-[#b3b3b3]";

const ACTION_LABELS = ["Awesome", "Prepare"];

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center justify-between">
      <label
        htmlFor={id}
        className="font-primary-bold text-[16px] text-[#d9d9d9]"
      >
        {label}
      </label>
      <HiOutlineInformationCircle
        size={20}
        className="text-[#d9d9d9]"
        aria-hidden="true"
      />
    </div>
    <input id={id} className={FIELD_CLASS} placeholder={placeholder} readOnly />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#191919] px-10 py-10 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[20px] text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <HiOutlineCog size={22} className="text-[#e6e6e6]" aria-hidden="true" />
    </div>

    <div className="mt-7 flex items-center gap-2">
      <HiChevronUp
        size={20}
        className="shrink-0 text-[#e6e6e6]"
        aria-hidden="true"
      />
      <span className="min-w-0 flex-1 truncate text-[16px] text-[#d9d9d9]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-2">
      <HiChevronUp
        size={26}
        className="shrink-0 text-[#f0f0f0]"
        aria-hidden="true"
      />
      <h2 className="font-primary-black text-[26px] text-[#f0f0f0]">
        Add New Design
      </h2>
    </div>

    <div className="mt-10">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-5">
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex gap-9">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={ACTION_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[100px] font-primary-bold text-[20px] text-[#e6e6e6]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
