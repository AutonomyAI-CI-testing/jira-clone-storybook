import type { ReactNode } from "react";
import cx from "classix";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  topClassName?: string;
}

const Field = ({
  id,
  label,
  placeholder,
  topClassName = "mt-8",
}: FieldProps) => (
  <>
    <div className={cx("flex items-center gap-3", topClassName)}>
      <label
        htmlFor={id}
        className="font-primary-light text-base text-font-subtle"
      >
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={20}
        className="text-font-subtle"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-7 h-[62px] w-full border border-border-bold bg-transparent px-5 font-primary-light text-base text-font placeholder:text-font-subtlest"
    />
  </>
);

const CardButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[74px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-font hover:bg-[var(--Orange900)]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 pb-16 pt-12 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <MdSettings aria-hidden="true" size={28} className="text-font-subtle" />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <HiChevronUp aria-hidden="true" size={20} className="text-font-subtle" />
      <span className="min-w-0 truncate font-primary-light text-base text-font-subtle">
        From entire frame to a single element
      </span>
    </div>

    <div className="mt-[180px] flex items-center gap-3">
      <HiChevronUp aria-hidden="true" size={22} />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      topClassName="mt-14"
    />
    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-14 flex gap-7">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-[90px] font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
