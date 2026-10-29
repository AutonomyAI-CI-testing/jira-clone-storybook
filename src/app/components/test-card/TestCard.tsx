import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "../button";

const fieldClassName =
  "mt-2 h-9 w-full rounded-md border border-border-bold bg-background-input px-3 text-2xs text-font placeholder:text-font-subtlest";

const actionClassName = "h-[37px] w-[85px] p-0 font-primary-bold text-2xs";

const FieldLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2">
    <span className="font-primary-bold text-2xs text-font-subtle">
      {children}
    </span>
    <FiInfo aria-hidden="true" className="text-icon-subtle" size={15} />
  </div>
);

/**
 * Static reproduction of the "UI magician Agent" panel from the reference
 * Figma frame. Self-contained: no props, no state, nothing wired up.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-elevation-surface-sunken px-5 pt-5 pb-16 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <FiSettings aria-hidden="true" className="text-icon-subtle" size={16} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" className="text-icon-subtle" size={12} />
      <span className="text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <FiChevronUp aria-hidden="true" className="text-icon-subtle" size={12} />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <div className="mt-7">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        className={fieldClassName}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        type="text"
      />
    </div>

    <div className="mt-3">
      <FieldLabel>Design URL</FieldLabel>
      <input
        className={fieldClassName}
        placeholder="https://www.figma.com/file/:"
        type="text"
      />
    </div>

    <div className="mt-5 ml-6 flex gap-4">
      <Button className={actionClassName} color="warning">
        Awesome
      </Button>
      <Button className={actionClassName} color="warning">
        Prepare
      </Button>
    </div>

    <div className="mt-12 font-primary-bold text-xs">Recent Breakdowns</div>
  </div>
);
