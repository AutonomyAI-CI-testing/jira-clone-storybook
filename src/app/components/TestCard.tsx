import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * TestCard
 *
 * Smoke-test component built from the attached "UI magician Agent" Figma frame.
 * Self-contained: it takes no props and holds all of its copy inline. Styling is
 * deliberately approximate — the frame's dark panel, its two fields and its
 * rust-coloured action buttons are matched closely rather than exactly, and the
 * small glyphs are icon-library equivalents rather than the frame's own artwork.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[#191919] px-5 py-5 font-primary">
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[1.2] text-[#d6d6d6]">
        UI magician Agent
      </span>
      <RiSettings3Line
        aria-hidden
        className="h-[22px] w-[22px] text-[#d6d6d6]"
      />
    </div>

    <div className="mt-5 flex items-center gap-2 text-[#8b9291]">
      <RiArrowUpSLine aria-hidden className="h-[18px] w-[18px] shrink-0" />
      <span className="truncate text-[11.5px]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2 text-[#b2b2b1]">
      <RiArrowUpSLine aria-hidden className="h-[18px] w-[18px] shrink-0" />
      <span className="font-primary-bold text-[13.5px]">Add New Design</span>
    </div>

    <div className="mt-6 flex flex-col gap-5">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-6 flex gap-4 pl-6">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#c9c9c9] hover:bg-[#9a4419]"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-14 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div>
    <div className="mb-[6px] flex items-center gap-2">
      <label htmlFor={id} className="text-[11.5px] text-[#a4a4a3]">
        {label}
      </label>
      <RiInformationLine
        aria-hidden
        className="h-[14px] w-[14px] text-[#a4a4a3]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="h-[36px] w-full rounded-[2px] border border-[#6f6f6f] bg-[#272822] px-[10px] text-[11.5px] text-[#d0d0d0] placeholder:text-[#737470]"
    />
  </div>
);

export default TestCard;
