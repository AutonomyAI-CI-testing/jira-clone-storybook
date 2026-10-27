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
 * The frame is not part of this product's design system, so the layout and
 * colours below are approximations read off the image and kept as literal
 * values rather than routed through the app's semantic tokens: the card is
 * meant to stay the dark panel the frame shows, whatever theme is active.
 */

const fields = [
  {
    id: "testElem-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
  },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] max-w-full bg-[#111111] px-10 pb-16 pt-9 font-primary-light text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] leading-tight">
        UI magician Agent
      </h1>
      <HiOutlineCog size={30} className="shrink-0" />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[#9a9a9a]">
      <HiOutlineChevronUp size={26} className="shrink-0" />
      <span className="min-w-0 truncate text-[18px]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-32">
      <h2 className="flex items-center gap-3 font-primary-bold text-[22px] text-[#d4d4d4]">
        <HiOutlineChevronUp size={26} className="shrink-0" />
        Add New Design
      </h2>

      <div className="mt-10 space-y-9">
        {fields.map((field) => (
          <div key={field.id}>
            <div className="flex items-center gap-3">
              <label
                htmlFor={field.id}
                className="font-primary text-[18px] text-[#c0c0c0]"
              >
                {field.label}
              </label>
              <HiOutlineInformationCircle size={22} className="shrink-0" />
            </div>
            <input
              id={field.id}
              type="text"
              placeholder={field.placeholder}
              className="mt-4 w-full rounded-[2px] border border-[#4a4a4a] bg-[#1c1c1c] px-5 py-4 text-[18px] text-[#d4d4d4] placeholder:text-[#8a8a8a] focus:border-[#6b6b6b] focus:outline-none"
            />
          </div>
        ))}
      </div>

      <div className="mt-9 flex justify-center gap-6">
        {actions.map((action) => (
          <button
            key={action}
            type="button"
            className="w-[170px] rounded-[8px] bg-[#8f3d17] px-6 py-4 font-primary text-[18px] text-[#cfcfcf]"
          >
            {action}
          </button>
        ))}
      </div>
    </div>

    <h3 className="mt-20 font-primary-bold text-[22px] text-[#d4d4d4]">
      Recent Breakdowns
    </h3>
  </div>
);
