import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  subtitle,
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  loading,
  disabled,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Focus and character count should only be visible when editable
  const onFocus = () => {
    if (!readOnly && !disabled) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div
      id="title-container"
      className={cx(
        disabled && "pointer-events-none cursor-not-allowed opacity-50"
      )}
    >
      {loading ? (
        <div
          className="w-full animate-pulse rounded-md bg-background-neutral"
          style={{ height: "40px" }}
        />
      ) : (
        <div className={cx("relative", subtitle && "pb-5")}>
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
          {/* Character counter - only shown when focused and not disabled */}
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
          {subtitle && !loading && (
            <p className="mt-1 font-primary-light text-sm text-font-subtlest">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

interface TitleProps {
  subtitle?: string;
  loading?: boolean;
  disabled?: boolean;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
