import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";
import { Button } from "@app/components/button/button";

const fieldClass =
  "mt-2 h-9 w-full rounded border border-border-bold bg-background-input px-3 text-2xs text-font placeholder:text-font-subtlest";
const actionButtonClass = "h-9 w-[85px] font-primary-bold text-2xs";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-elevation-surface-overlay p-5 text-font shadow-md"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xs font-primary-bold">UI magician Agent</h3>
        <MdOutlineSettings
          size={16}
          className="shrink-0 text-font-subtle"
          aria-hidden
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-font-subtle">
        <MdKeyboardArrowUp size={12} className="shrink-0" aria-hidden />
        <span className="truncate text-2xs font-primary-light">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[72px] flex items-center gap-2 text-font-subtle">
        <MdKeyboardArrowUp size={14} className="shrink-0" aria-hidden />
        <h3 className="text-xs font-primary-bold">Add New Design</h3>
      </div>

      <div className="mt-7">
        <FieldLabel label="Personal Access Token" />
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={fieldClass}
        />
      </div>

      <div className="mt-3">
        <FieldLabel label="Design URL" />
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className={fieldClass}
        />
      </div>

      <div className="mt-6 flex gap-3">
        <Button color="danger" className={actionButtonClass}>
          Awesome
        </Button>
        <Button color="danger" className={actionButtonClass}>
          Prepare
        </Button>
      </div>

      <h3 className="mt-12 text-xs font-primary-bold text-font-subtle">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const FieldLabel = ({ label }: FieldLabelProps): JSX.Element => (
  <div className="flex items-center gap-2 text-font-subtle">
    <span className="text-2xs font-primary-light">{label}</span>
    <MdOutlineInfo size={15} className="shrink-0" aria-hidden />
  </div>
);

interface FieldLabelProps {
  label: string;
}
