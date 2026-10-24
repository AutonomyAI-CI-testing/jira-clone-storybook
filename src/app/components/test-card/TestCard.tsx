import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-11 py-6 font-primary text-[#ededed]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <HiCog aria-hidden="true" size={26} className="text-[#c9c9c9]" />
    </div>

    <div className="mt-6 flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={18}
        className="shrink-0 text-[#c4c4c4]"
      />
      <span className="truncate text-base text-[#c4c4c4]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40">
      <div className="flex items-center gap-2">
        <HiChevronUp aria-hidden="true" size={22} className="text-[#ededed]" />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-10 space-y-4">
        <Field
          id="test-card-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-10 flex gap-8">
        <button type="button" className={PANEL_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={PANEL_BUTTON_CLASS}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base text-[#d6d6d6]">
        {label}
      </label>
      <HiInformationCircle
        aria-hidden="true"
        size={18}
        className="text-[#c4c4c4]"
      />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="w-full rounded border border-[#9a9a9a] bg-[#2e2e2e] px-4 py-4 font-primary-light text-base text-[#ededed] outline-none placeholder:text-[#8e8e8e]"
    />
  </div>
);

const PANEL_BUTTON_CLASS =
  "min-w-[170px] rounded-md bg-[#9c4a28] px-6 py-4 text-lg text-[#ede7e3]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
