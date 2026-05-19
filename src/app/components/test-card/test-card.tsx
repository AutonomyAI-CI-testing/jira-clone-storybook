// Color constants for the dark theme - using inline styles due to custom values
const COLORS = {
  background: "#2b2b2b",
  primary: "#b5b5b5",
  secondary: "#8b9291",
  tertiary: "#b2b2b1",
  label: "#a4a4a3",
  label2: "#a3a3a2",
  inputBg: "#353530",
  inputText: "#9a9a95",
  inputBorder: "#a5adad",
  inputBorder2: "#929291",
  button: "#843a17",
  buttonText: "#d4b8a8",
  footerText: "#b0b0b0",
} as const;

/**
 * Icon component for the settings gear icon
 */
const SettingsIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
  >
    <path
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.1654 12.5C16.0577 12.7357 16.0244 13.0011 16.0704 13.2579C16.1165 13.5148 16.2394 13.7502 16.4237 13.9333L16.4654 13.975C16.6067 14.1161 16.7187 14.2838 16.7952 14.4684C16.8717 14.6531 16.9111 14.8511 16.9111 15.0511C16.9111 15.2511 16.8717 15.4492 16.7952 15.6338C16.7187 15.8184 16.6067 15.9861 16.4654 16.1272C16.3243 16.2685 16.1566 16.3805 15.972 16.457C15.7873 16.5335 15.5893 16.5729 15.3893 16.5729C15.1893 16.5729 14.9913 16.5335 14.8066 16.457C14.622 16.3805 14.4543 16.2685 14.3132 16.1272L14.2716 16.0855C14.0885 15.9012 13.8531 15.7783 13.5962 15.7323C13.3394 15.6862 13.074 15.7195 12.8382 15.8272C12.6071 15.9301 12.4118 16.1011 12.2782 16.3178C12.1446 16.5346 12.0789 16.7872 12.0899 17.0428V17.2222C12.0899 17.6281 11.929 18.0174 11.6427 18.3037C11.3564 18.59 10.9671 18.7509 10.5612 18.7509C10.1554 18.7509 9.76608 18.59 9.47978 18.3037C9.19348 18.0174 9.03262 17.6281 9.03262 17.2222V17.15C9.01595 16.8851 8.92066 16.6313 8.75823 16.4214C8.5958 16.2115 8.37346 16.0556 8.11987 15.9733C7.88406 15.8656 7.61869 15.8323 7.36183 15.8783C7.10497 15.9244 6.86961 16.0473 6.68651 16.2316L6.64484 16.2733C6.50376 16.4146 6.33605 16.5266 6.15141 16.6031C5.96678 16.6796 5.76878 16.719 5.56876 16.719C5.36874 16.719 5.17073 16.6796 4.9861 16.6031C4.80147 16.5266 4.63376 16.4146 4.49268 16.2733C4.35135 16.1322 4.23938 15.9645 4.16288 15.7799C4.08638 15.5952 4.04698 15.3972 4.04698 15.1972C4.04698 14.9972 4.08638 14.7992 4.16288 14.6145C4.23938 14.4299 4.35135 14.2622 4.49268 14.1211L4.53434 14.0794C4.71866 13.8963 4.84154 13.6609 4.88759 13.4041C4.93364 13.1472 4.90032 12.8819 4.79268 12.6461C4.68987 12.415 4.51884 12.2197 4.30212 12.0861C4.0854 11.9525 3.83274 11.8868 3.57712 11.8978H3.39762C2.99177 11.8978 2.60244 11.7369 2.31614 11.4506C2.02984 11.1643 1.86898 10.775 1.86898 10.3691C1.86898 9.96325 2.02984 9.57392 2.31614 9.28762C2.60244 9.00132 2.99177 8.84046 3.39762 8.84046H3.46984C3.73477 8.82379 3.98856 8.7285 4.19847 8.56607C4.40839 8.40364 4.56428 8.1813 4.64651 7.92771C4.75414 7.6919 4.78746 7.42653 4.74141 7.16967C4.69537 6.91281 4.57248 6.67745 4.38818 6.49435L4.34651 6.45268C4.20518 6.3116 4.09321 6.14389 4.01671 5.95926C3.94021 5.77462 3.90081 5.57662 3.90081 5.3766C3.90081 5.17658 3.94021 4.97857 4.01671 4.79394C4.09321 4.60931 4.20518 4.4416 4.34651 4.30051C4.4876 4.15919 4.6553 4.04722 4.83994 3.97072C5.02457 3.89422 5.22257 3.85481 5.4226 3.85481C5.62262 3.85481 5.82062 3.89422 6.00526 3.97072C6.18989 4.04722 6.3576 4.15919 6.49868 4.30051L6.54034 4.34218C6.72345 4.5265 6.95881 4.64939 7.21567 4.69543C7.47253 4.74148 7.7379 4.70816 7.97371 4.60051H8.0154C8.24653 4.49771 8.44185 4.32668 8.57544 4.10996C8.70903 3.89324 8.77472 3.64058 8.76371 3.38496V3.20546C8.76371 2.79961 8.92457 2.41028 9.21087 2.12398C9.49717 1.83768 9.8865 1.67682 10.2924 1.67682C10.6982 1.67682 11.0875 1.83768 11.3738 2.12398C11.6601 2.41028 11.821 2.79961 11.821 3.20546V3.27768C11.8099 3.5333 11.8756 3.78596 12.0092 4.00268C12.1428 4.2194 12.3381 4.39043 12.5693 4.49323C12.8051 4.60088 13.0705 4.6342 13.3273 4.58815C13.5842 4.54211 13.8195 4.41922 14.0026 4.2349L14.0443 4.19323C14.1854 4.05191 14.3531 3.93993 14.5377 3.86344C14.7224 3.78694 14.9204 3.74753 15.1204 3.74753C15.3204 3.74753 15.5184 3.78694 15.7031 3.86344C15.8877 3.93993 16.0554 4.05191 16.1965 4.19323C16.3378 4.33432 16.4498 4.50202 16.5263 4.68666C16.6028 4.87129 16.6422 5.0693 16.6422 5.26932C16.6422 5.46934 16.6028 5.66734 16.5263 5.85198C16.4498 6.03661 16.3378 6.20432 16.1965 6.3454L16.1548 6.38707C15.9705 6.57017 15.8476 6.80554 15.8016 7.0624C15.7555 7.31926 15.7888 7.58463 15.8965 7.82043V7.86209C15.9993 8.09323 16.1703 8.28854 16.387 8.42213C16.6037 8.55572 16.8564 8.62142 17.112 8.6104H17.2915C17.6973 8.6104 18.0867 8.77126 18.373 9.05756C18.6593 9.34387 18.8201 9.7332 18.8201 10.139C18.8201 10.5449 18.6593 10.9342 18.373 11.2205C18.0867 11.5068 17.6973 11.6677 17.2915 11.6677H17.2193C16.9637 11.6567 16.711 11.7224 16.4943 11.856C16.2776 11.9896 16.1066 12.1849 16.0038 12.4161V12.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Icon component for chevron up indicator
 */
const ChevronUpIcon = ({
  color,
  className = "",
}: {
  color: string;
  className?: string;
}) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color }}
  >
    <path
      d="M10.5 8.75L7 5.25L3.5 8.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Icon component for info circle indicator
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
  >
    <circle
      cx="7"
      cy="7"
      r="5.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7 6.5V10"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="7" cy="4.5" r="0.5" fill="currentColor" />
  </svg>
);

/**
 * FormField component for rendering labeled input fields with optional info icon
 */
const FormField = ({
  label,
  value,
  labelColor,
  borderWidth = 1,
}: {
  label: string;
  value: string;
  labelColor: string;
  borderWidth?: 1 | 2;
}) => (
  <div className="mb-6">
    <div
      className="mb-3 flex items-center gap-1.5 text-xs font-bold"
      style={{ color: labelColor }}
    >
      <span>{label}</span>
      <InfoIcon color={labelColor} />
    </div>
    <div
      className="rounded-sm px-3 py-2.5 text-xs"
      style={{
        borderColor:
          borderWidth === 1 ? COLORS.inputBorder : COLORS.inputBorder2,
        borderWidth: `${borderWidth}px`,
        borderStyle: "solid",
        backgroundColor: COLORS.inputBg,
        color: COLORS.inputText,
      }}
    >
      {value}
    </div>
  </div>
);

/**
 * TestCard component displays a UI magician Agent card with form fields and action buttons.
 * Uses inline styles for custom color values that are not in the Tailwind config.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className="w-80 rounded p-6 font-semibold"
      style={{ backgroundColor: COLORS.background, color: COLORS.primary }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xl">UI magician Agent</span>
        <SettingsIcon color={COLORS.primary} />
      </div>

      {/* Collapsible subtitle section */}
      <div
        className="mb-8 flex items-center gap-2 text-xs"
        style={{ color: COLORS.secondary }}
      >
        <ChevronUpIcon color={COLORS.secondary} className="flex-shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Collapsible Add New Design section */}
      <div
        className="mb-8 flex items-center gap-2 text-sm"
        style={{ color: COLORS.tertiary }}
      >
        <ChevronUpIcon color={COLORS.tertiary} className="flex-shrink-0" />
        <span>Add New Design</span>
      </div>

      {/* Form fields for Personal Access Token and Design URL */}
      <FormField
        label="Personal Access Token"
        value="figd_xxxxxxxxxxxxxxxxxx"
        labelColor={COLORS.label}
        borderWidth={1}
      />

      <FormField
        label="Design URL"
        value="https://www.figma.com/file/:"
        labelColor={COLORS.label2}
        borderWidth={2}
      />

      {/* Action buttons */}
      <div className="mb-16 flex gap-3">
        <div
          className="flex-1 rounded-sm px-6 py-3 text-center text-sm"
          style={{ backgroundColor: COLORS.button, color: COLORS.buttonText }}
        >
          Awesome
        </div>
        <div
          className="flex-1 rounded-sm px-6 py-3 text-center text-sm"
          style={{ backgroundColor: COLORS.button, color: COLORS.buttonText }}
        >
          Prepare
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div className="text-sm" style={{ color: COLORS.footerText }}>
        Recent Breakdowns
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center text-sm">
        © AutonomyAI
      </div>
    </div>
  );
};
