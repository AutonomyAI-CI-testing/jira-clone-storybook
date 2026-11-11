import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldInputClass =
  "w-full rounded-sm border border-[#8a8a8a] bg-[#2a2a2a] px-4 py-3 font-primary text-base text-[#d4d4d4] placeholder:text-[#8a8a8a] focus:outline-none";

const actionButtonClass =
  "flex-1 rounded-md bg-[#9c3a1c] px-6 py-3 font-primary text-base text-[#a8a8a8] hover:bg-[#8a3318]";

const SectionRow = ({
  label,
  tone = "heading",
}: {
  label: string;
  tone?: "heading" | "muted";
}) => {
  const muted = tone === "muted";

  return (
    <div className="flex items-center gap-2">
      <FiChevronUp
        aria-hidden
        className={cx("h-5 w-5", muted ? "text-[#8a8a8a]" : "text-white")}
      />
      <span
        className={cx(
          muted
            ? "font-primary text-base text-[#8a8a8a]"
            : "font-primary-black text-xl text-white"
        )}
      >
        {label}
      </span>
    </div>
  );
};

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-base text-[#d4d4d4]">{label}</span>
      <FiInfo aria-hidden className="h-5 w-5 text-[#d4d4d4]" />
    </div>
    <input type="text" placeholder={placeholder} className={fieldInputClass} />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button type="button" className={actionButtonClass}>
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 bg-[#1c1c1c] px-5 py-6 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl text-white">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#d4d4d4] hover:text-white"
      >
        <FiSettings aria-hidden className="h-6 w-6" />
      </button>
    </div>

    <SectionRow label="From entire frame to a singl..." tone="muted" />

    <SectionRow label="Add New Design" />

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="flex gap-4">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h3 className="font-primary-black text-xl text-white">Recent Breakdowns</h3>
  </div>
);
