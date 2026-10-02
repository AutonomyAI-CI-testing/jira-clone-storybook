import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test replica of an external design frame (a dark "UI magician Agent"
 * settings panel). Deliberately self-contained: no props, no state, no app
 * data.
 *
 * The frame is not part of this product's design system, so the colours and
 * spacing below are approximations read off the image and kept as literal
 * values rather than being routed through the app's semantic tokens.
 */

const fields = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] max-w-full bg-[#0d0d0d] px-10 pb-10 pt-14 font-primary-light text-[#b3b3b3]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary text-[26px] leading-tight">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-[#b3b3b3]"
      >
        <HiOutlineCog size={30} />
      </button>
    </div>

    <div className="mt-9 flex items-center gap-3 text-[#8c8c8c]">
      <HiOutlineChevronUp size={26} className="shrink-0" />
      <span className="truncate text-[22px]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-24 flex items-center gap-3 font-primary text-[26px]">
      <HiOutlineChevronUp size={26} className="shrink-0" />
      Add New Design
    </h2>

    <div className="mt-10 space-y-8">
      {fields.map((field) => (
        <div key={field.label}>
          <div className="flex items-center gap-3">
            <span className="font-primary text-base text-[#cfcfcf]">
              {field.label}
            </span>
            <HiOutlineInformationCircle size={22} className="text-[#b3b3b3]" />
          </div>
          <input
            type="text"
            aria-label={field.label}
            placeholder={field.placeholder}
            className="mt-3 h-16 w-full rounded border border-[#4d4d4d] bg-[#1c1c1c] pl-9 font-primary-light text-lg text-[#cfcfcf] placeholder:text-[#6f6f6f]"
          />
        </div>
      ))}
    </div>

    <div className="mt-10 flex gap-9 pl-11">
      <button
        type="button"
        className="h-16 w-[168px] rounded-md bg-[#9c3d17] font-primary text-lg text-[#cfcfcf]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-16 w-[168px] rounded-md bg-[#9c3d17] font-primary text-lg text-[#cfcfcf]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-32 font-primary text-[26px]">Recent Breakdowns</h2>
  </div>
);
