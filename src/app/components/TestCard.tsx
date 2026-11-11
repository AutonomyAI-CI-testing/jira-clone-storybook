import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const actionButtonClass =
  "h-[72px] w-[170px] rounded-md bg-[#8f3a1b] font-primary text-base text-[#9b9b9b]";

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <label className="flex flex-col gap-5">
    <span className="flex items-center gap-3">
      <span className="font-primary text-base text-[#c8c8c8]">{label}</span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={20}
        className="shrink-0 text-[#9a9a9a]"
      />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-[72px] w-full border border-[#8a8a8a] bg-[#2b2b2b] px-5 font-primary text-base text-[#c8c8c8] placeholder:text-[#7a7a7a]"
    />
  </label>
);

export const TestCard = () => (
  <div id="testElem" className="w-[508px] bg-[#1c1c1c] px-9 py-8">
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-lg text-[#d5d5d5]">
        UI magician Agent
      </h2>
      <HiOutlineCog
        aria-hidden="true"
        size={26}
        className="shrink-0 text-[#c8c8c8]"
      />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <HiOutlineChevronUp
        aria-hidden="true"
        size={18}
        className="shrink-0 text-[#8a8a8a]"
      />
      <span className="truncate font-primary-light text-base text-[#8a8a8a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <HiOutlineChevronUp
        aria-hidden="true"
        size={22}
        className="shrink-0 text-[#d5d5d5]"
      />
      <h3 className="font-primary-bold text-lg text-[#d5d5d5]">
        Add New Design
      </h3>
    </div>

    <div className="mt-10">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-10">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-14 flex justify-center gap-9">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-bold text-lg text-[#d5d5d5]">
      Recent Breakdowns
    </h3>
  </div>
);

export default TestCard;
