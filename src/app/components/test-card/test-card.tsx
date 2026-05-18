// Icon components extracted for reusability and clarity
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <path
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      stroke="#a4a4a3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.1667 12.5C16.0557 12.7514 16.0228 13.0303 16.0721 13.3005C16.1214 13.5707 16.2506 13.8203 16.4417 14.0167L16.4917 14.0667C16.6415 14.2164 16.7603 14.3945 16.8413 14.5905C16.9224 14.7865 16.9641 14.9965 16.9641 15.2084C16.9641 15.4202 16.9224 15.6302 16.8413 15.8262C16.7603 16.0222 16.6415 16.2003 16.4917 16.35C16.342 16.4998 16.1639 16.6186 15.9679 16.6996C15.7719 16.7807 15.5619 16.8224 15.35 16.8224C15.1382 16.8224 14.9282 16.7807 14.7322 16.6996C14.5362 16.6186 14.3581 16.4998 14.2084 16.35L14.1584 16.3C13.962 16.1089 13.7124 15.9797 13.4422 15.9304C13.172 15.8811 12.8931 15.914 12.6417 16.025C12.3958 16.1308 12.1871 16.3053 12.0409 16.5285C11.8947 16.7517 11.8171 17.014 11.8167 17.2817V17.5C11.8167 17.9421 11.6411 18.3659 11.3285 18.6785C11.0159 18.9911 10.5921 19.1667 10.15 19.1667C9.70795 19.1667 9.28411 18.9911 8.97155 18.6785C8.65899 18.3659 8.48336 17.9421 8.48336 17.5V17.425C8.47727 17.1477 8.39146 16.878 8.2362 16.6475C8.08094 16.4171 7.86246 16.2354 7.60836 16.125C7.35696 16.014 7.07806 15.9811 6.80786 16.0304C6.53766 16.0797 6.28803 16.2089 6.09169 16.4L6.04169 16.45C5.89201 16.5998 5.71391 16.7186 5.51791 16.7996C5.32191 16.8807 5.11189 16.9224 4.90003 16.9224C4.68817 16.9224 4.47815 16.8807 4.28215 16.7996C4.08615 16.7186 3.90805 16.5998 3.75836 16.45C3.60856 16.3003 3.48976 16.1222 3.40871 15.9262C3.32765 15.7302 3.28595 15.5202 3.28595 15.3084C3.28595 15.0965 3.32765 14.8865 3.40871 14.6905C3.48976 14.4945 3.60856 14.3164 3.75836 14.1667L3.80836 14.1167C3.99945 13.9203 4.12863 13.6707 4.17795 13.4005C4.22728 13.1303 4.19434 12.8514 4.08336 12.6C3.97753 12.3541 3.80309 12.1454 3.57988 11.9992C3.35667 11.853 3.09438 11.7754 2.82669 11.775H2.64169C2.19966 11.775 1.77583 11.5994 1.46326 11.2868C1.1507 10.9743 0.975037 10.5504 0.975037 10.1084C0.975037 9.66632 1.1507 9.24249 1.46326 8.92993C1.77583 8.61736 2.19966 8.44173 2.64169 8.44173H2.71669C2.99404 8.43565 3.26369 8.34984 3.49415 8.19458C3.72461 8.03932 3.90629 7.82084 4.01669 7.56673C4.12767 7.31533 4.16061 7.03643 4.11128 6.76623C4.06196 6.49603 3.93278 6.24641 3.74169 6.05006L3.69169 6.00006C3.54189 5.85038 3.42309 5.67228 3.34204 5.47628C3.26098 5.28028 3.21928 5.07026 3.21928 4.8584C3.21928 4.64654 3.26098 4.43652 3.34204 4.24052C3.42309 4.04452 3.54189 3.86641 3.69169 3.71673C3.84137 3.56693 4.01947 3.44813 4.21547 3.36708C4.41147 3.28602 4.6215 3.24432 4.83336 3.24432C5.04522 3.24432 5.25524 3.28602 5.45124 3.36708C5.64724 3.44813 5.82535 3.56693 5.97503 3.71673L6.02503 3.76673C6.22137 3.95782 6.47099 4.087 6.74119 4.13633C7.01139 4.18565 7.29029 4.15271 7.54169 4.04173H7.60003C7.8459 3.9359 8.05461 3.76147 8.20082 3.53826C8.34703 3.31505 8.42461 3.05275 8.42503 2.78506V2.60006C8.42503 2.15803 8.60066 1.73419 8.91322 1.42163C9.22579 1.10907 9.64962 0.933433 10.0917 0.933433C10.5337 0.933433 10.9575 1.10907 11.2701 1.42163C11.5827 1.73419 11.7584 2.15803 11.7584 2.60006V2.67506C11.7588 2.94275 11.8364 3.20505 11.9826 3.42826C12.1288 3.65147 12.3375 3.8259 12.5834 3.93173C12.8348 4.04271 13.1137 4.07565 13.3839 4.02633C13.6541 3.977 13.9037 3.84782 14.1 3.65673L14.15 3.60673C14.2997 3.45693 14.4778 3.33813 14.6738 3.25708C14.8698 3.17602 15.0798 3.13432 15.2917 3.13432C15.5035 3.13432 15.7135 3.17602 15.9095 3.25708C16.1055 3.33813 16.2836 3.45693 16.4334 3.60673C16.5832 3.75641 16.702 3.93452 16.783 4.13052C16.8641 4.32652 16.9058 4.53654 16.9058 4.7484C16.9058 4.96026 16.8641 5.17028 16.783 5.36628C16.702 5.56228 16.5832 5.74038 16.4334 5.89006L16.3834 5.94006C16.1923 6.13641 16.0631 6.38603 16.0138 6.65623C15.9645 6.92643 15.9974 7.20533 16.1084 7.45673V7.51506C16.2142 7.76094 16.3886 7.96964 16.6118 8.11585C16.835 8.26206 17.0973 8.33964 17.365 8.34006H17.55C17.992 8.34006 18.4158 8.5157 18.7284 8.82826C19.041 9.14082 19.2167 9.56466 19.2167 10.0067C19.2167 10.4487 19.041 10.8726 18.7284 11.1851C18.4158 11.4977 17.992 11.6734 17.55 11.6734H17.475C17.2073 11.6738 16.945 11.7514 16.7218 11.8976C16.4986 12.0438 16.3242 12.2525 16.2184 12.4984V12.5Z"
      stroke="#a4a4a3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = ({ stroke }: { stroke: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9 7.5L6 4.5L3 7.5"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-0.5"
    aria-label="Info"
  >
    <circle cx="7" cy="7" r="5.5" stroke="#a4a4a3" strokeWidth="1" />
    <path
      d="M7 4.5V7.5M7 9.5H7.005"
      stroke="#a4a4a3"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

interface FormFieldProps {
  label: string;
  placeholder: string;
  borderStyle: string;
  textStyle: string;
}

// Extracted form field component to reduce duplication
const FormField = ({
  label,
  placeholder,
  borderStyle,
  textStyle,
}: FormFieldProps) => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-1">
      <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <div
      className={`w-[428px] rounded ${borderStyle} bg-[#272822] px-3 py-3.5`}
    >
      <span className={textStyle}>{placeholder}</span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] rounded bg-[#1a1a17] p-5 pb-8 font-['Inter']">
      {/* Header with title and settings */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[24px] font-semibold leading-[29px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle - chevron indicates expandable section */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronIcon stroke="#8b9291" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header for design addition workflow */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronIcon stroke="#b2b2b1" />
        <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Authentication token input */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderStyle="border border-[#a5adad]"
        textStyle="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]"
      />

      {/* Design source URL input - thicker border indicates focused/active field */}
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderStyle="border-2 border-[#929291]"
        textStyle="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]"
      />

      {/* Action buttons for workflow progression */}
      <div className="mb-10 flex gap-5">
        <button className="rounded bg-[#843a17] px-6 py-3.5 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-6 py-3.5 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for historical data */}
      <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="text-[11.5px] text-[#b5b5b5]">© AutonomyAI</span>
      </div>
    </div>
  );
};
