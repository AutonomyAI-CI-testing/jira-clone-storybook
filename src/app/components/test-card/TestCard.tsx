import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import cx from "classix";
import { Button } from "@app/components/button";

const FIELDS = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-full max-w-[508px] flex-col bg-elevation-surface px-6 py-8 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <FiSettings aria-hidden className="text-icon" size={24} />
    </div>

    <Row className="mt-4">
      <span className="font-primary text-sm text-font-subtle">
        From entire frame to a singl...
      </span>
    </Row>

    <Row className="mt-24" iconSize={22}>
      <h2 className="font-primary-black text-xl">Add New Design</h2>
    </Row>

    <div className="mt-8 flex flex-col gap-6">
      {FIELDS.map((field) => (
        <Field key={field.id} {...field} />
      ))}
    </div>

    <div className="mt-10 flex gap-4">
      <Button color="danger" className="flex-1 rounded-md py-3">
        Awesome
      </Button>
      <Button color="danger" className="flex-1 rounded-md py-3">
        Prepare
      </Button>
    </div>

    <h3 className="mt-20 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);

const Row = ({
  children,
  className = "",
  iconSize = 18,
}: RowProps): JSX.Element => (
  <div className={cx("flex items-center gap-2", className)}>
    <FiChevronUp aria-hidden className="text-font" size={iconSize} />
    {children}
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <label htmlFor={id} className="flex items-center gap-2 font-primary text-sm">
      {label}
      <FiInfo aria-hidden className="text-icon" size={16} />
    </label>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-border-bold bg-background-input p-3 text-center font-primary-light text-sm text-font-subtlest placeholder:text-font-subtlest"
    />
  </div>
);

interface RowProps {
  children: React.ReactNode;
  className?: string;
  iconSize?: number;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
