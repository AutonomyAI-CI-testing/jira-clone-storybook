import cx from "classix";
import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const Field = ({
  label,
  placeholder,
  inputClassName,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[#a4a4a3]">{label}</span>
      <MdInfoOutline size={15} className="shrink-0 text-[#a4a4a3]" />
    </div>
    <div
      className={cx(
        "mt-3 flex h-9 items-center bg-[#272822] px-3",
        inputClassName
      )}
    >
      <span className="min-w-0 truncate font-primary-bold text-2xs text-[#737470]">
        {placeholder}
      </span>
    </div>
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <div className="flex h-9 flex-1 items-center justify-center rounded bg-[#843a17]">
    <span className="font-primary-bold text-2xs text-[#8c8078]">{label}</span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black px-5 py-5 font-primary">
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </span>
      <MdSettings size={16} className="shrink-0 text-[#8b9291]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <MdKeyboardArrowUp size={10} className="shrink-0 text-[#8b9291]" />
      <span className="min-w-0 truncate font-primary-bold text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <MdKeyboardArrowUp size={12} className="shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
      inputClassName="border border-[#a5adad]"
    />
    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputClassName="border-2 border-[#929291]"
    />

    <div className="mt-6 flex gap-4">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <span className="mt-12 block font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
  className?: string;
}
