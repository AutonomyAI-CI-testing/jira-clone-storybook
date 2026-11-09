import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdKeyboardArrowUp, MdOutlineSettings } from "react-icons/md";

/**
 * Smoke test: a static reproduction of a Figma panel, built as a single
 * self-contained component. It takes no props and is not wired into the app.
 */
export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-6 rounded-md bg-[var(--DarkNeutral0)] p-10 font-primary"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
          UI magician Agent
        </h2>
        <MdOutlineSettings
          aria-hidden="true"
          className="mt-1 shrink-0 text-[color:var(--DarkNeutral900)]"
          size={22}
        />
      </div>

      <div className="flex items-center gap-2">
        <MdKeyboardArrowUp
          aria-hidden="true"
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
          size={20}
        />
        <span className="truncate text-sm text-[color:var(--DarkNeutral800)]">
          From entire frame to a singl...
        </span>
      </div>

      <div aria-hidden="true" className="h-20" />

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <MdKeyboardArrowUp
            aria-hidden="true"
            className="shrink-0 text-[color:var(--DarkNeutral1100)]"
            size={24}
          />
          <h2 className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
            Add New Design
          </h2>
        </div>

        <Field label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxxxxx" />
        <Field label="Design URL" value="https://www.figma.com/file/" />
      </div>

      <div className="flex justify-end gap-9">
        <button
          type="button"
          className="h-[52px] w-[168px] cursor-pointer rounded-md bg-[var(--Orange800)] text-base text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[52px] w-[170px] cursor-pointer rounded-md bg-[var(--Orange800)] text-base text-white"
        >
          Prepare
        </button>
      </div>

      <h2 className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

function Field({ label, value }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-2 text-sm text-[color:var(--DarkNeutral900)]">
        {label}
        <HiOutlineInformationCircle
          aria-hidden="true"
          className="shrink-0"
          size={18}
        />
      </span>
      <input
        readOnly
        value={value}
        className="h-12 rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-3 text-sm text-[color:var(--DarkNeutral900)] outline-none"
      />
    </label>
  );
}

interface FieldProps {
  label: string;
  value: string;
}
