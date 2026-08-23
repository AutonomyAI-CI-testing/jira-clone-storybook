export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] overflow-auto"
      style={{ backgroundColor: "#2d2d2a", fontFamily: "Inter, sans-serif" }}
    >
      {/* Thin top stripe */}
      <div className="h-[9px] w-full" style={{ backgroundColor: "#1a1a18" }} />

      {/* Section 1 – Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-1">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon – Image_2.svg */}
        <img
          src="/figma-assets/testcard/Image_2.svg"
          alt="settings"
          width={14}
          height={16}
          style={{ display: "inline-block" }}
        />
      </div>

      {/* Section 2 – Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        {/* Small chevron-up – Image.svg */}
        <img
          src="/figma-assets/testcard/Image.svg"
          alt="chevron"
          width={8}
          height={5}
          style={{ display: "inline-block" }}
        />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 3 – Add New Design heading */}
      <div className="flex items-center gap-2 px-5 mt-2 mb-4">
        {/* Chevron-down – Image_4.svg */}
        <img
          src="/figma-assets/testcard/Image_4.svg"
          alt="chevron"
          width={12}
          height={8}
          style={{ display: "inline-block" }}
        />
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </span>
      </div>

      {/* Section 4 – Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a4a4a3" }}
          >
            Personal Access Token
          </span>
          {/* Info icon – Image_5.svg */}
          <img
            src="/figma-assets/testcard/Image_5.svg"
            alt="info"
            width={15}
            height={15}
            style={{ display: "inline-block" }}
          />
        </div>
        <div
          className="w-full px-3 flex items-center"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "36px",
          }}
        >
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#737470" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Section 5 – Design URL */}
      <div className="px-5 mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[11.5px] font-semibold leading-[13.92px]"
            style={{ color: "#a3a3a2" }}
          >
            Design URL
          </span>
          {/* Info icon – Image_3.svg */}
          <img
            src="/figma-assets/testcard/Image_3.svg"
            alt="info"
            width={15}
            height={15}
            style={{ display: "inline-block" }}
          />
        </div>
        <div
          className="w-full px-3 flex items-center"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
          }}
        >
          <span
            className="text-[10.5px] font-semibold leading-[12.71px]"
            style={{ color: "#71726e" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Section 6 – Buttons */}
      <div className="flex gap-3 px-5 mb-8">
        <button
          className="flex-1 flex items-center justify-center text-[11.5px] font-semibold leading-[13.92px]"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            height: "37px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 flex items-center justify-center text-[11.5px] font-semibold leading-[13.92px]"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            height: "37px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Section 7 – Recent Breakdowns */}
      <div className="px-5">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
