import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * A static rendering of the "UI magician Agent" Figma panel.
 *
 * Deliberately prop-free and self-contained: this is a smoke test of the
 * design-to-component path, not a production surface.
 *
 * The colours are the raw values from the design's style guide. This panel's
 * palette (near-black chrome, rust buttons) has no counterpart in the repo's
 * semantic token set, and the design is the spec here.
 */

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-1.5">
      <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
        {label}
      </span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        className="shrink-0 text-[15px] text-[#a4a4a3]"
      />
    </div>
    <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-2.5">
      <span className="truncate text-[11.5px] leading-[14px] text-[#737470]">
        {placeholder}
      </span>
    </div>
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
  >
    {children}
  </button>
);

const FIELDS: FieldProps[] = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/:" },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#0d0d0d] px-5 pt-5 pb-14 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog
        aria-hidden="true"
        className="shrink-0 text-[16px] text-[#b5b5b5]"
      />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[10px] text-[#8b9291]"
      />
      <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[14px] text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 space-y-3">
      {FIELDS.map((field) => (
        <Field key={field.label} {...field} />
      ))}
    </div>

    <div className="mt-5 flex gap-[17px]">
      {ACTIONS.map((action) => (
        <ActionButton key={action}>{action}</ActionButton>
      ))}
    </div>

    <h3 className="mt-12 text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
