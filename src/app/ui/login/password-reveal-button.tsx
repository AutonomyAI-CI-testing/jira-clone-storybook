interface PasswordRevealButtonProps {
  showPassword: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export const PasswordRevealButton = ({
  showPassword,
  onToggle,
  disabled = false,
}: PasswordRevealButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? (
        <svg
          className="w-5 h-5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m4.753-4.753L3.596 3.039m10.318 10.318L21 21"
          />
        </svg>
      )}
    </button>
  );
};
