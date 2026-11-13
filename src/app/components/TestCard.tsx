import cx from "classix";
import {
  HiOutlineChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

const FIELD_CLASSES =
  "mt-2 h-[56px] w-full rounded-md border border-border-bold bg-background-input px-3 text-base text-font placeholder:text-font-subtlest";

const BUTTON_CLASSES =
  "h-[50px] flex-1 rounded-md border-none bg-background-danger text-base text-font-danger";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Smoke-test component: self-contained, takes no props and holds no state.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="text-xl font-primary-bold">UI magician Agent</span>
      <HiOutlineCog6Tooth size={24} className="shrink-0" aria-hidden="true" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-base text-font-subtlest">
      <HiOutlineChevronUp size={20} className="shrink-0" aria-hidden="true" />
      <span className="min-w-0 truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <HiOutlineChevronUp size={24} className="shrink-0" aria-hidden="true" />
      <span className="text-xl font-primary-bold">Add New Design</span>
    </div>

    <FieldLabel htmlFor="testcard-access-token" className="mt-10">
      Personal Access Token
    </FieldLabel>
    <input
      id="testcard-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className={FIELD_CLASSES}
    />

    <FieldLabel htmlFor="testcard-design-url" className="mt-8">
      Design URL
    </FieldLabel>
    <input
      id="testcard-design-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className={FIELD_CLASSES}
    />

    <div className="mt-10 flex gap-4">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <p className="mt-16 text-xl font-primary-bold">Recent Breakdowns</p>
  </div>
);

const FieldLabel = ({
  htmlFor,
  className,
  children,
}: FieldLabelProps): JSX.Element => (
  <div className={cx("flex items-center gap-3", className)}>
    <label htmlFor={htmlFor} className="text-base text-font-subtle">
      {children}
    </label>
    <HiOutlineInformationCircle
      size={20}
      className="shrink-0 text-font-subtle"
      aria-hidden="true"
    />
  </div>
);

interface FieldLabelProps {
  htmlFor: string;
  className?: string;
  children: string;
}
