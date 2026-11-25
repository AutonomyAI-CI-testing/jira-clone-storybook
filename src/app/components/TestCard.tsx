import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const fieldClassName =
  "mt-4 w-full rounded border-2 border-[#8a8a8a] bg-[#141414] px-8 py-5 text-base text-[#e8e8e8] outline-none [font-family:ui-monospace,monospace] placeholder:text-[#6e6e6e]";

const buttonClassName =
  "cursor-pointer rounded-md bg-[#9c3d1a] px-8 py-3 text-base text-[#c9b7ad]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#0d0d0d] px-10 py-8 font-primary text-[#f0f0f0]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center rounded-full p-1 text-[#f0f0f0]"
      >
        <IoSettingsOutline size={24} aria-hidden="true" />
      </button>
    </header>

    <div className="mt-5 flex items-center gap-2">
      <FiChevronUp size={20} className="shrink-0" aria-hidden="true" />
      <p className="truncate font-primary-bold">
        From entire frame to a single component
      </p>
    </div>

    <section className="mt-14">
      <h2 className="flex items-center gap-2 font-primary-black text-2xl">
        <FiChevronUp size={24} className="shrink-0" aria-hidden="true" />
        Add New Design
      </h2>

      <div className="mt-8">
        <Field
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <Field
          id="test-card-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary-bold text-lg">
        {label}
      </label>
      <FiInfo
        role="img"
        aria-label={`${label} help`}
        size={22}
        className="shrink-0"
      />
    </div>
    <input id={id} readOnly placeholder={placeholder} className={fieldClassName} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
