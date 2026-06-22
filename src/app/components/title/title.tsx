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
  // If we have an error and the title is empty or only spaces, we show the error message.
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  /**
   * Resets focus state when leaving the input.
   * This handles the display of the character counter.
   */
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div
      className={cx(disabled && "opacity-50 cursor-not-allowed pointer-events-none")}
    >
      <div className="relative">
        {loading ? (
          <div className="animate-pulse rounded-md bg-background-neutral w-full" style={{ height: "46px" }} />
        ) : (
          <TextareaAutosize
            name="title"
            value={title}
            setValue={updateTitle}
            placeholder={placeholder}
            readOnly={disabled || readOnly}
            onFocus={onFocus}
            onBlur={onBlur}
            textareaClassName={cx(
              "font-primary-black text-2xl",
              requireError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
            autofocus
          />
        )}
        {requireError && !loading && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
      </div>
    <div className="flex justify-between items-start mt-1">
      {!loading && subtitle ? (
        <p className="ml-3 font-primary-light text-sm text-font-subtlest break-words flex-1 pr-12">
          {subtitle}
        </p>
      ) : loading ? (
        <div className="animate-pulse rounded bg-background-neutral" style={{ height: "12px", width: "48px" }} />
      ) : (
        <div className="flex-1" />
      )}
      {isFocus && !disabled && !loading && (
        <span
          className={cx(
            "font-primary-light text-sm whitespace-nowrap",
            isMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {title.length} / {maxLength}
        </span>
      )}
    </div>
    </div>
  );
};

interface TitleProps {
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  loading?: boolean;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
}
