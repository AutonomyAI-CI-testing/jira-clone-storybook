import { useId } from "react";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const BUTTON_CLASS =
  "h-[64px] w-[170px] rounded-md bg-[#a83c10] font-primary text-base text-[var(--DarkNeutral600)]";

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  const inputId = useId();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label
          htmlFor={inputId}
          className="font-primary text-base text-[var(--DarkNeutral1000)]"
        >
          {label}
        </label>
        <HiOutlineInformationCircle
          aria-hidden
          size={18}
          className="text-[var(--DarkNeutral600)]"
        />
      </div>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className="h-[56px] w-full rounded-md border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-4 font-primary text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>
  );
};

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 py-6"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-2xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Agent settings"
        className="text-[var(--DarkNeutral1000)]"
      >
        <HiOutlineCog aria-hidden size={24} />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-2">
      <HiChevronUp
        aria-hidden
        size={20}
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <span className="truncate font-primary-light text-base text-[var(--DarkNeutral1000)]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp
        aria-hidden
        size={24}
        className="shrink-0 text-[var(--DarkNeutral1100)]"
      />
      <h2 className="font-primary-black text-xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-8 flex gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-black text-xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
