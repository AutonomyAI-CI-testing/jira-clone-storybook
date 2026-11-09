import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";

interface FieldProps {
  label: string;
  value: string;
}

const Field = ({ label, value }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-lg text-[var(--DarkNeutral1000)]">
        {label}
      </span>
      <IoInformationCircleOutline
        size={26}
        aria-hidden="true"
        className="text-[var(--DarkNeutral800)]"
      />
    </div>
    <div className="mt-6 flex h-[64px] items-center rounded-md border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-5">
      <span className="font-primary text-lg text-[var(--DarkNeutral700)]">
        {value}
      </span>
    </div>
  </div>
);

interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[70px] w-[171px] rounded-md bg-[var(--Orange800)] font-primary text-xl text-[var(--DarkNeutral700)]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[var(--DarkNeutral1000)]"
      >
        <IoSettingsOutline size={30} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-4">
      <MdKeyboardArrowUp
        size={28}
        aria-hidden="true"
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <span className="font-primary-light text-lg text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[150px]" />

    <div className="flex items-center gap-4">
      <MdKeyboardArrowUp
        size={28}
        aria-hidden="true"
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <h2 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-16 space-y-9">
      <Field label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" value="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex gap-9 pl-12">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-[72px] font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
