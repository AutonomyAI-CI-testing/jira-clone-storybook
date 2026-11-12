import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a smoke-test reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained and prop-less: it exists to prove that a Figma frame can be
 * turned into a component here and rendered once, not to ship as product UI. Nothing in the
 * app routes to it; Storybook renders it through TestCard.stories.tsx.
 */
const LabelRow = ({ label, className }: LabelRowProps): JSX.Element => (
  <div className={cx("flex items-center gap-2", className)}>
    <span className="text-[11.5px] leading-[13.92px] text-[color:var(--DarkNeutral800)]">
      {label}
    </span>
    <FiInfo size={15} className="shrink-0 text-[color:var(--DarkNeutral800)]" />
  </div>
);

const CardButton = ({ children }: CardButtonProps): JSX.Element => (
  <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[color:var(--Orange800)]">
    <span className="text-[11.5px] leading-[13.92px] text-[color:var(--Neutral600)]">
      {children}
    </span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-primary-bold"
  >
    {/* Title bar */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[color:var(--Neutral400)]" />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp
        size={8}
        className="shrink-0 text-[color:var(--DarkNeutral600)]"
      />
      <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] text-[color:var(--DarkNeutral600)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[75px] flex items-center gap-2">
      <FiChevronUp
        size={12}
        className="shrink-0 text-[color:var(--Neutral400)]"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    {/* Personal access token field */}
    <LabelRow className="mt-[28px]" label="Personal Access Token" />
    <div className="mt-[12px] flex h-[36px] items-center rounded-[4px] border border-[color:var(--DarkNeutral800)] bg-[color:var(--DarkNeutral200)] px-[19px]">
      <span className="text-[11.5px] leading-[13.92px] text-[color:var(--DarkNeutral600)]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL field */}
    <LabelRow className="mt-[11px]" label="Design URL" />
    <div className="mt-[11px] flex h-[37px] items-center rounded-[4px] border-2 border-[color:var(--Neutral500)] bg-[color:var(--DarkNeutral200)] px-[20px]">
      <span className="text-[10.5px] leading-[12.71px] text-[color:var(--DarkNeutral600)]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    {/* Recent */}
    <span className="mt-[47px] text-[13.5px] leading-[16.34px] text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </span>
  </div>
);

interface LabelRowProps {
  label: string;
  className?: string;
}

interface CardButtonProps {
  children: React.ReactNode;
}
