import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";

const inputClasses =
  "w-full rounded border border-border-bold bg-background-input p-3 font-primary text-base text-font placeholder:text-font-subtlest";

const buttonClasses =
  "flex flex-1 items-center justify-center rounded bg-[#b65c02] px-8 py-3 font-primary text-base text-white transition-colors hover:bg-[#974f0c] active:bg-[#7f4308]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-base">
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        className="shrink-0 text-font-subtle"
        size={18}
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClasses}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col gap-6 bg-elevation-surface px-10 py-10 text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 rounded text-font-subtle transition-colors hover:text-font"
      >
        <MdSettings aria-hidden size={22} />
      </button>
    </div>

    <div className="flex items-center gap-2">
      <RiArrowUpSFill aria-hidden className="shrink-0 text-font-subtle" />
      <span className="truncate font-primary-light text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-16 flex flex-col gap-8">
      <h2 className="flex items-center gap-2 font-primary-bold text-xl">
        <RiArrowUpSFill aria-hidden className="shrink-0" />
        Add New Design
      </h2>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-4 pt-2">
        <button type="button" className={buttonClasses}>
          Awesome
        </button>
        <button type="button" className={buttonClasses}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-12 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
