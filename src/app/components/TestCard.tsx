import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const actionButtonClass =
  "h-[65px] w-[170px] cursor-pointer rounded-md bg-[var(--Orange800)] text-xl text-[color:var(--DarkNeutral900)]";

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="block">
    <span className="flex items-center gap-3 text-base text-[color:var(--DarkNeutral800)]">
      {label}
      <IoInformationCircleOutline
        aria-hidden="true"
        className="size-5 shrink-0"
      />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-6 h-[50px] w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-4 text-base text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral800)]"
    />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 pb-24 pt-10 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl leading-none">
        UI magician Agent
      </h1>
      <IoSettingsOutline aria-hidden="true" className="size-7 shrink-0" />
    </div>

    <div className="mt-10 flex items-center gap-2">
      <IoChevronUpOutline aria-hidden="true" className="size-6 shrink-0" />
      <span className="truncate text-base text-[color:var(--DarkNeutral800)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[150px]">
      <div className="flex items-center gap-2">
        <IoChevronUpOutline aria-hidden="true" className="size-7 shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-[60px] flex flex-col gap-12">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-20 flex justify-center gap-8">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl text-[color:var(--DarkNeutral800)]">
      Recent Breakdowns
    </h2>
  </div>
);
