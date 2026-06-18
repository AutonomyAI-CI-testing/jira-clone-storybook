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
  // Extracts and names the error condition for clarity.
  // Validation error is shown if the field is empty/spaces while an error message prop is provided.
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  
  const onBlur = () => {
    setIsFocus(false);
  };

  /**
   * Updates the title state while enforcing maximum length constraints.
   */
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div
      id="testElem"
      className={cx(
        "relative", // Ensure character counter/error messages are positioned correctly relative to container
        disabled && "opacity-50 cursor-not-allowed pointer-events-none"
      )}
    >
      {loading ? (
        <div className="animate-pulse bg-background-brand-subtlest rounded h-9 w-full" />
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
      {subtitle && (
        <p className="mt-1 text-sm text-font-subtlest font-primary-light">{subtitle}</p>
      )}
      {!loading && (
        <>
          {requireError && (
            <span className="ml-3 font-primary-light text-sm text-font-danger">
              {error}
            </span>
          )}
          {isFocus && (
            <span
              className={cx(
                "absolute right-0 top-full font-primary-light text-sm",
                isMaxLength ? "text-font-danger" : "text-font-subtlest"
              )}
            >
              {title.length} / {maxLength}
            </span>
          )}
        </>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  subtitle?: string;
  loading?: boolean;
  disabled?: boolean;
}
