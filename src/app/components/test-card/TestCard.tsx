import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import cx from "classix";

import { Button } from "@app/components/button";

const ACTION_BUTTON_CLASSNAME =
  "h-[37px] w-[85px] !bg-[#843a17] px-0 font-primary-bold text-2xs !text-[#8c8078] hover:!bg-[#843a17] active:!bg-[#843a17]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-sm text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="shrink-0 text-[#b5b5b5]" aria-hidden />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp size={12} className="shrink-0 text-[#8b9291]" aria-hidden />
      <span className="min-w-0 truncate font-primary-bold text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <FiChevronUp size={16} className="shrink-0 text-[#b2b2b1]" aria-hidden />
      <span className="font-primary-bold text-sm text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <FieldLabel className="mt-7" tone="text-[#a4a4a3]">
      Personal Access Token
    </FieldLabel>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 font-primary-bold text-2xs text-[#737470] placeholder:text-[#737470] focus:outline-none"
    />

    <FieldLabel className="mt-3" tone="text-[#a3a3a2]">
      Design URL
    </FieldLabel>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 font-primary-bold text-2xs text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
    />

    <div className="mt-6 flex items-center justify-end gap-4">
      <Button className={ACTION_BUTTON_CLASSNAME}>Awesome</Button>
      <Button className={ACTION_BUTTON_CLASSNAME}>Prepare</Button>
    </div>

    <h2 className="mt-[46px] font-primary-bold text-sm text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const FieldLabel = ({
  className,
  tone,
  children,
}: FieldLabelProps): JSX.Element => (
  <div className={cx("flex items-center gap-3", className)}>
    <span className={cx("font-primary-bold text-2xs", tone)}>{children}</span>
    <FiInfo size={15} className={cx("shrink-0", tone)} aria-hidden />
  </div>
);

interface FieldLabelProps {
  className?: string;
  tone: string;
  children: React.ReactNode;
}
