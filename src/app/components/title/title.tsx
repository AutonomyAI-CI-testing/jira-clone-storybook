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
  // Only show error if explicitly provided and the title is empty or just spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  // Character count is only visible when the field is focused and not in a loading/disabled state
  // This provides feedback during active editing while keeping the UI clean otherwise
  const showCharacterCount = isFocus && !loading && !disabled;

  return (
    <div
      id="testElem"
      className={cx(
        disabled && "opacity-50 cursor-not-allowed pointer-events-none"
      )}
    >
      <div className="relative">
        {loading ? (
          <div className="animate-pulse">
            <div
              className="w-full rounded-md"
              style={{ height: "40px", backgroundColor: "#f7f8f9" }}
            />
          </div>
        ) : (
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
        )}
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {showCharacterCount && (
          <div className="flex justify-end">
            <span
              className={cx(
                "font-primary-light text-sm",
                isMaxLength ? "text-font-danger" : "text-font-subtlest"
              )}
            >
              {title.length} / {maxLength}
            </span>
          </div>
        )}
      </div>
      {subtitle && (
        <p className="ml-3 mt-1 font-primary-light text-sm text-font-subtlest">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface TitleProps {
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  loading?: boolean;
  disabled?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
