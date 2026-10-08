export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full max-w-[508px] bg-[#1c1c1c] px-8 py-8 font-sans text-[#e6e6e6]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed source row */}
      <div className="mt-7 flex items-center gap-3">
        <CaretIcon className="h-5 w-5 shrink-0 text-[#cfcfcf]" />
        <span className="truncate text-base text-[#cfcfcf]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <h2 className="mt-28 flex items-center gap-3 text-2xl font-semibold text-[#e6e6e6]">
        <CaretIcon className="h-5 w-5 shrink-0" />
        Add New Design
      </h2>

      <div className="mt-10">
        <FieldLabel label="Personal Access Token" />
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 h-14 w-full rounded-sm border border-[#4a4a4a] bg-[#2a2a2a] px-4 text-base text-[#e6e6e6] placeholder:text-[#9a9a9a]"
        />
      </div>

      <div className="mt-6">
        <FieldLabel label="Design URL" />
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 h-14 w-full rounded-sm border border-[#4a4a4a] bg-[#2a2a2a] px-4 text-base text-[#e6e6e6] placeholder:text-[#9a9a9a]"
        />
      </div>

      {/* Actions */}
      <div className="mt-10 flex items-center gap-5">
        <button
          type="button"
          className="rounded-md bg-[#a4441f] px-9 py-4 text-lg font-semibold text-[#e8d8d0]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#a4441f] px-9 py-4 text-lg font-semibold text-[#e8d8d0]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-24 text-2xl font-semibold text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const FieldLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-base text-[#d0d0d0]">{label}</span>
    <InfoIcon />
  </div>
);

const CaretIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-5 w-5 text-[#d0d0d0]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 11v5.5" />
    <circle cx="12" cy="8" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-7 w-7 text-[#cfcfcf]"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
