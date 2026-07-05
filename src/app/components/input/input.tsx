import { forwardRef, useState } from "react";
import cx from "classix";
import { Icons } from "@app/components/icons";

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
            className={cx(
              "w-full rounded px-4 py-3",
              "bg-slate-800 text-font",
              "border border-slate-700",
              "transition-all duration-200",
              "placeholder:text-font-subtlest",
              "focus-visible:outline-none focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/50",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-500 focus-visible:ring-red-500/50",
              showRevealToggle && isPassword && "pr-12",
              className
            )}
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
                <Icons.EyeOff size={20} />
              ) : (
                <Icons.Eye size={20} />
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
