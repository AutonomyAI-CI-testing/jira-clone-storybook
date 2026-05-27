/**
 * Icon components used in TestCard
 *
 * Extracted into a separate file for better organization and reusability.
 * Each icon is a simple SVG wrapper component with semantic styling.
 */

// Note: JSX elements in exported functions require proper type definition
export const SettingsIcon = (): JSX.Element | React.ReactElement => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-icon"
  >
    <circle cx="8" cy="8" r="2" fill="currentColor" />
    <path
      d="M8 1v2M8 13v2M1 8h2m11 0h2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3.22 3.22l1.41 1.41M11.37 11.37l1.41 1.41M12.78 3.22l-1.41 1.41M4.63 11.37l-1.41 1.41"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ChevronLeftIcon = (): JSX.Element | React.ReactElement => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 text-font-subtle"
  >
    <path
      d="M8 2L4 6l4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InfoIcon = (): JSX.Element | React.ReactElement => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-font-subtle"
  >
    <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1" />
    <text x="7" y="10" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="600">
      i
    </text>
  </svg>
);
