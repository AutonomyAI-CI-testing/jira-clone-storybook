import { forwardRef, useState } from "react";

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      placeholder,
      type = "text",
      disabled = false,
      error = false,
      showRevealToggle = false,
      className,
      ...rest
    },
    forwardedRef
  ) => {
    const [revealed, setRevealed] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && revealed ? "text" : type;

    const baseClasses = "w-full rounded px-4 py-3 bg-slate-800 text-font border border-slate-700 transition-all duration-200 placeholder:text-font-subtlest focus-visible:outline-none focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
    const errorClasses = error ? "border-red-500 focus-visible:ring-red-500/50" : "";
    const paddingClasses = showRevealToggle && isPassword ? "pr-12" : "";
    const inputClassName = `${baseClasses} ${errorClasses} ${paddingClasses} ${className || ""}`;

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-font">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            ref={forwardedRef}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            className={inputClassName}
            {...rest}
          />
          {showRevealToggle && isPassword && (
            <button
              type="button"
              onClick={() => setRevealed(!revealed)}
              className="absolute right-3 flex items-center justify-center text-font-subtle hover:text-font transition-colors"
              aria-label={revealed ? "Hide password" : "Show password"}
            >
              {revealed ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14z" />
                  <path fillRule="evenodd" d="M10 3C6.237 3 3.029 5.158 1.905 8.177.832 10.987.832 13.013 1.905 15.823 3.029 18.842 6.237 21 10 21s6.971-2.158 8.095-5.177C19.168 13.013 19.168 10.987 18.095 8.177 16.971 5.158 13.763 3 10 3zM2.905 9.177C3.929 6.842 6.693 5 10 5s6.071 1.842 7.095 4.177c.708 1.992.708 4.654 0 6.646C16.071 17.158 13.307 19 10 19s-6.071-1.842-7.095-4.177c-.708-1.992-.708-4.654 0-6.646zM10 9a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM11 5.5C7.462 5.5 4.401 7.621 2.938 10.628c1.464 3.007 4.525 5.122 8.062 5.122a8.001 8.001 0 007.071-4.071l-2.828-2.829A6 6 0 0011 5.5zM10 3C6.237 3 3.029 5.158 1.905 8.177.832 10.987.832 13.013 1.905 15.823 3.029 18.842 6.237 21 10 21s6.971-2.158 8.095-5.177C19.168 13.013 19.168 10.987 18.095 8.177 16.971 5.158 13.763 3 10 3zm0 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: boolean;
  showRevealToggle?: boolean;
}
