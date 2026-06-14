import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitle,
  loading,
  disabled,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Show error if explicitly passed and the current title content is invalid (empty/just spaces)
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly && !disabled) {
      setIsFocus(true);
    }
  };

  /**
   * Title character count is only visible during focus to avoid visual clutter
   * when the user is not actively editing.
   */
  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div id="testElem" className={cx(disabled && "opacity-50 cursor-not-allowed")}>
    {loading ? (
      <div
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        aria-hidden="true"
        className="animate-pulse"
      >
        {/* Skeleton for the main title field */}
        <div
          className="rounded-md bg-background-neutral border border-border"
          style={{ height: "40px", width: "100%" }}
        />
        {/* Skeleton for the subtitle text */}
        <div
          className="rounded-md bg-background-neutral border border-border"
          style={{ height: "16px", width: "50%" }}
        />
      </div>
    ) : (
      <>
        <div className="relative">
          <TextareaAutosize
            name="title"
            value={title}
            setValue={updateTitle}
            placeholder={placeholder}
            readOnly={readOnly || disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            textareaClassName={cx(
              "font-primary-black text-2xl",
              disabled && "pointer-events-none opacity-50 grayscale",
              requireError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
            autofocus
          />
          {requireError && (
            <span className="ml-3 font-primary-light text-sm text-font-danger">
              {error}
            </span>
          )}
          {/* Character counter shown bottom-right when focused */}
          {isFocus && !disabled && !readOnly && (
            <span
              className={cx(
                "absolute right-0 top-full font-primary-light text-sm",
                isMaxLength ? "text-font-danger" : "text-font-subtlest"
              )}
            >
              {title.length} / {maxLength}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="mt-1 text-sm text-font-subtlest font-primary-light">{subtitle}</p>
        )}
      </>
    )}
  </div>
  );
};

interface TitleProps {
  subtitle?: string;
  initTitle?: string;
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
