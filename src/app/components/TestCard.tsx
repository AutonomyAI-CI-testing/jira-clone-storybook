import { AiOutlineUp } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

const actionButton =
  "rounded bg-[var(--Orange800)] px-8 py-2 font-primary-bold text-font hover:bg-[var(--Orange900)]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-2 font-primary-light text-base text-font-subtle">
      {label}
      <IoInformationCircleOutline size={20} aria-hidden />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className="w-full rounded-md border border-border bg-background-input p-3 text-sm text-font placeholder:text-font-subtlest"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col gap-8 rounded-md bg-elevation-surface p-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded-full p-1 text-font-subtle hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <MdOutlineSettings size={24} aria-hidden />
      </button>
    </div>

    <div className="flex items-center gap-2 text-font-subtlest">
      <AiOutlineUp size={20} aria-hidden />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="flex flex-col gap-6">
      <h3 className="flex items-center gap-2 font-primary-black text-xl">
        <AiOutlineUp size={22} aria-hidden />
        Add New Design
      </h3>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-4">
        <button type="button" className={actionButton}>
          Awesome
        </button>
        <button type="button" className={actionButton}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="font-primary-black text-xl text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
