import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const BUTTONS = ["Awesome", "Prepare"];

const SectionHeading = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <div className="mt-24 flex items-center gap-2">
    <IoChevronUpOutline className="text-lg" aria-hidden="true" />
    <h3 className="font-primary-bold text-lg text-[color:var(--DarkNeutral1100)]">
      {children}
    </h3>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[var(--DarkNeutral100)] px-10 pb-14 pt-14 font-primary text-[color:var(--DarkNeutral900)]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
          UI magician Agent
        </h2>
        <IoSettingsOutline
          className="text-2xl text-[color:var(--DarkNeutral1000)]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-8 flex items-center gap-2">
        <IoChevronUpOutline className="text-lg" aria-hidden="true" />
        <span className="min-w-0 flex-1 truncate text-base">
          From entire frame to a single component
        </span>
      </div>

      <SectionHeading>Add New Design</SectionHeading>

      <div className="mt-10 space-y-8">
        {FIELDS.map(({ id, label, placeholder }) => (
          <div key={id}>
            <div className="flex items-center gap-3">
              <label
                htmlFor={id}
                className="font-primary-light text-sm text-[color:var(--DarkNeutral1000)]"
              >
                {label}
              </label>
              <IoInformationCircleOutline
                className="text-base text-[color:var(--DarkNeutral1000)]"
                aria-hidden="true"
              />
            </div>
            <input
              id={id}
              readOnly
              placeholder={placeholder}
              className="mt-3 w-full rounded border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-4 py-4 text-sm text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)]"
            />
          </div>
        ))}
      </div>

      <div className="ml-12 mt-12 flex gap-8">
        {BUTTONS.map((label) => (
          <button
            key={label}
            type="button"
            className="flex-1 rounded bg-[var(--Orange800)] px-4 py-4 font-primary-bold text-base text-[color:var(--DarkNeutral1000)]"
          >
            {label}
          </button>
        ))}
      </div>

      <SectionHeading>Recent Breakdowns</SectionHeading>
    </div>
  );
};

export default TestCard;
