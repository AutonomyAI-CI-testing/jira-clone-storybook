import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Static rendering of the "UI magician Agent" Figma panel.
 *
 * Self-contained smoke test: no props, no state, no app imports. Colours are
 * written as Tailwind arbitrary values because `tailwind.config.js` replaces
 * `theme.colors`, and the panel's dark ground and rust accent have no semantic
 * token in this repo.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#111111] px-10 py-10 text-[#d9d9d9]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[22px] leading-tight text-[#d9d9d9]">
        UI magician Agent
      </h2>
      <IoSettingsOutline
        aria-hidden
        size={26}
        className="mt-1 shrink-0 text-[#c9c9c9]"
      />
    </div>

    <div className="mt-9 flex items-center gap-2">
      <HiChevronUp aria-hidden size={20} className="shrink-0 text-[#c9c9c9]" />
      <span className="truncate font-primary-light text-[17px] text-[#9e9e9e]">
        From entire frame to a single component
      </span>
    </div>

    <div className="h-[150px]" />

    <div className="flex items-center gap-2">
      <HiChevronUp aria-hidden size={24} className="shrink-0 text-[#c9c9c9]" />
      <h3 className="font-primary-bold text-[20px] text-[#d9d9d9]">
        Add New Design
      </h3>
    </div>

    <div className="mt-10 flex flex-col gap-6">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex justify-center gap-9">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-bold text-[20px] text-[#d9d9d9]">
      Recent Breakdowns
    </h3>
  </div>
);

const ACTION_BUTTON =
  "h-[64px] w-[168px] rounded-lg bg-[#a8400f] font-primary text-[17px] text-[#9e9e9e]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="mb-3 flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-[17px] text-[#cfcfcf]">
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        size={20}
        className="shrink-0 text-[#cfcfcf]"
      />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="h-[64px] w-full rounded border-2 border-[#8a8a8a] bg-[#1b1b1b] px-6 font-primary-light text-[17px] text-[#d9d9d9] placeholder:text-[#8a8a8a] focus:outline-none"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
