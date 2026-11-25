import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained on purpose: no props, no state, nothing interactive —
 * it exists to be rendered once and looked at.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-elevation-surface px-5 pt-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-4">
        UI magician Agent
      </h1>
      <HiOutlineCog
        aria-hidden="true"
        size={16}
        className="shrink-0 text-font-subtle"
      />
    </div>

    <div className="mt-[14px] flex items-center gap-2">
      <HiOutlineChevronUp
        aria-hidden="true"
        size={10}
        className="shrink-0 text-font-subtle"
      />
      <p className="truncate text-[11.5px] leading-[14px] text-font-subtlest">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[74px] flex items-center gap-2">
      <HiOutlineChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-font-subtle"
      />
      <h2 className="font-primary-bold text-[13.5px] leading-4 text-font-subtle">
        Add New Design
      </h2>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-font-subtle">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-font-subtle"
      />
    </div>

    <div className="mt-3 flex h-9 w-[211px] items-center rounded border border-border-bold bg-background-input px-3">
      <span className="truncate text-[11.5px] leading-[14px] text-font-subtlest">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-3 flex items-center gap-2">
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-font-subtle">
        Design URL
      </span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-font-subtle"
      />
    </div>

    <div className="mt-3 flex h-[37px] w-[211px] items-center rounded border-2 border-border-bold bg-background-input px-3">
      <span className="truncate text-[10.5px] leading-[13px] text-font-subtlest">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <span className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]">
        Awesome
      </span>
      <span className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]">
        Prepare
      </span>
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] leading-4 text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);
