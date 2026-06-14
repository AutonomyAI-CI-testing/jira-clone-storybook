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
  disabled = false,
  loading = false,
}: TitleProps): JSX.Element => {

  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly && !disabled) setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div
      id="testElem"
      className={cx("w-full", disabled && "opacity-50 pointer-events-none")}
    >
      <div className="relative">
        {loading ? (
          <div
            className="animate-pulse bg-background-neutral-bold rounded-md w-full"
            style={{ height: "40px" }}
          />
        ) : (
          <TextareaAutosize
            name="title"
            value={title}
            setValue={updateTitle}
            placeholder={placeholder}
            readOnly={readOnly || disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            autofocus
            textareaClassName={cx(
              "font-primary-black text-2xl",
              // Show red border if there's an error and the field is empty/whitespace
              requireError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
          />
        )}
        {!loading && requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
      </div>
      {!loading && (
        <div className="mt-1 flex items-start justify-between px-3">
          {subtitle && (
            <p className="mr-4 font-primary-light text-sm text-font-subtle">
              {subtitle}
            </p>
          )}
          {/* Only show character count when focused and not disabled */}
          {!disabled && isFocus && (
            <span
              className={cx(
                "shrink-0 font-primary-light text-sm",
                isMaxLength ? "text-font-danger" : "text-font-subtlest"
              )}
            >
              {title.length} / {maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

interface TitleProps {
  disabled?: boolean;
  loading?: boolean;
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
