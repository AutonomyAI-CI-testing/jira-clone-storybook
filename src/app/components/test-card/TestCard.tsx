import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Smoke test only: self-contained, no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-full max-w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-xl">UI magician Agent</h1>
        <IoSettingsOutline aria-hidden className="text-2xl text-font-subtle" />
      </div>

      <div className="mt-5 flex items-center gap-2 text-font-subtle">
        <MdKeyboardArrowUp aria-hidden className="shrink-0 text-xl" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <h2 className="mt-24 flex items-center gap-2 font-primary-black text-xl">
        <MdKeyboardArrowUp aria-hidden className="shrink-0 text-xl" />
        Add New Design
      </h2>

      <div className="mt-7 flex flex-col gap-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="mt-2 flex items-center gap-9">
          <button
            type="button"
            className="flex-1 rounded bg-[var(--Orange800)] px-7 py-4 font-primary-bold text-lg text-white"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[var(--Orange800)] px-7 py-4 font-primary-bold text-lg text-white"
          >
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-20 font-primary-black text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <span className="text-base text-font-subtle">{label}</span>
      <IoInformationCircleOutline
        aria-hidden
        className="text-base text-font-subtle"
      />
    </div>
    <input
      placeholder={placeholder}
      className="w-full rounded border border-border-bold bg-background-input px-4 py-4 text-base placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
