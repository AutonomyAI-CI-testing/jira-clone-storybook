function ChevronUp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
      <path
        d="M1 6.5 6 1.5l5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Gear({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 10.1a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M12.9 8c0-.35-.05-.7-.13-1.03l1.16-.9-.8-1.6-1.39.5a4.5 4.5 0 0 0-1.78-1.03L9.6 2.5H8.2l-.25 1.44a4.5 4.5 0 0 0-1.78 1.03l-1.39-.5-.8 1.6 1.16.9a4.6 4.6 0 0 0 0 2.06l-1.16.9.8 1.6 1.39-.5a4.5 4.5 0 0 0 1.78 1.03l.25 1.44h1.4l.25-1.44a4.5 4.5 0 0 0 1.78-1.03l1.39.5.8-1.6-1.16-.9c.08-.33.13-.68.13-1.03Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoCircle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 7.4v3.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5" r="0.85" fill="currentColor" />
    </svg>
  );
}

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pt-5 pb-14 font-primary text-[11.5px] text-[#a4a4a3]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <Gear className="h-4 w-3.5 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
      <span className="text-[#8b9291]">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[11px]">
      <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2">
      <span>Personal Access Token</span>
      <InfoCircle className="h-[15px] w-[15px]" />
    </div>

    <input
      type="text"
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[18px] font-primary text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2">
      <span>Design URL</span>
      <InfoCircle className="h-[15px] w-[15px]" />
    </div>

    <input
      type="text"
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[18px] font-primary text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex items-center gap-4 pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <p className="mt-[47px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
