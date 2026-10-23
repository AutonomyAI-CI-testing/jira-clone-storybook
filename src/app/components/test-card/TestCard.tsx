import cx from "classix";
import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const PANEL = "bg-[#1c1c1c] text-[#e6e6e6]";
const HEADING = "font-primary-bold text-[#e6e6e6]";
const ACCENT_BUTTON =
  "rounded-lg bg-[#a13c14] px-6 py-3 font-primary-bold text-[#e6e6e6] hover:bg-[#8c3410]";

/**
 * Static card built from a Figma reference. It takes no props and holds no
 * state — it exists to be rendered, not to be wired into the app.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className={cx(PANEL, "w-[360px] px-6 py-7 font-primary")}>
    <div className="flex items-center justify-between">
      <h1 className={cx(HEADING, "text-xl")}>UI magician Agent</h1>
      <HiOutlineCog className="h-6 w-6" aria-hidden="true" />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <HiOutlineChevronUp className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="truncate font-primary-light text-sm text-[#a0a0a0]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <HiOutlineChevronUp className="h-5 w-5 shrink-0" aria-hidden="true" />
      <h2 className={cx(HEADING, "text-lg")}>Add New Design</h2>
    </div>

    <TestCardField
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-6"
    />
    <TestCardField
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-5"
    />

    <div className="mt-8 flex gap-4">
      <button type="button" className={ACCENT_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACCENT_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className={cx(HEADING, "mt-20 text-lg")}>Recent Breakdowns</h2>
  </div>
);

const TestCardField = ({
  id,
  label,
  placeholder,
  className,
}: TestCardFieldProps): JSX.Element => (
  <div className={cx("flex flex-col gap-3", className)}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-sm">
        {label}
      </label>
      <HiOutlineInformationCircle
        className="h-4 w-4 text-[#a0a0a0]"
        aria-hidden="true"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#6b6b6b] bg-[#242424] px-3 py-3 font-primary text-sm text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface TestCardFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
