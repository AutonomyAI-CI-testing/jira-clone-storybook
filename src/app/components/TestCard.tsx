import { useState } from "react";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const actionButtonClass =
  "h-[70px] w-[170px] rounded-md bg-[var(--Orange800)] font-primary-light text-base text-[var(--DarkNeutral900)]";

export const TestCard = () => {
  const [accessToken, setAccessToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] p-10 text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="cursor-pointer text-[var(--DarkNeutral700)]"
        >
          <HiOutlineCog size={24} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <HiChevronUp
          size={20}
          aria-hidden
          className="shrink-0 text-[var(--DarkNeutral700)]"
        />
        <span className="max-w-[300px] truncate font-primary-light text-base text-[var(--DarkNeutral700)]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <HiChevronUp
          size={22}
          aria-hidden
          className="shrink-0 text-[var(--DarkNeutral700)]"
        />
        <h3 className="font-primary-black text-xl">Add New Design</h3>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        <Field
          id="test-card-access-token"
          label="Personal Access Token"
          hint="What is a Personal Access Token?"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          value={accessToken}
          onChange={setAccessToken}
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          hint="What is a Design URL?"
          placeholder="https://www.figma.com/file/"
          value={designUrl}
          onChange={setDesignUrl}
        />
      </div>

      <div className="mt-10 ml-12 flex gap-9">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ id, label, hint, placeholder, value, onChange }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-light text-base text-[var(--DarkNeutral700)]"
      >
        {label}
      </label>
      <button
        type="button"
        aria-label={hint}
        className="cursor-pointer text-[var(--DarkNeutral700)]"
      >
        <HiOutlineInformationCircle size={18} />
      </button>
    </div>
    <input
      id={id}
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="mt-4 h-[66px] w-full rounded-md border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-4 font-primary-light text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  hint: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}
