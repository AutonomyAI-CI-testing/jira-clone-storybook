import { useState, useCallback } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

interface TitleProps {
  /** Optional subtitle displayed below the title */
  subtitle?: string;
  /** Initial value for the title field */
  initTitle?: string;
  /** If true, the field is not editable but looks normal */
  readOnly?: boolean;
  /** If true, the field is not editable and appears dimmed */
  disabled?: boolean;
  /** If true, shows a skeleton loading state */
  loading?: boolean;
  /** Maximum character length for the title */
  maxLength?: number;
  /** Error message to display when validation fails */
  error?: string;
  /** Placeholder text when title is empty */
  placeholder?: string;
}

/**
 * A highly customizable title input component with support for:
 * - Automatic vertical resizing
 * - Loading (skeleton) states
 * - Character counting and max length enforcement
 * - Validation error states
 * - Subtitles
 */
export const Title = ({
  subtitle,
  initTitle = "",
  readOnly,
  disabled = false,
  loading = false,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const isMaxLengthReached = title.length >= maxLength;
  const shouldShowError =
    !!error && (title.length === 0 || textAreOnlySpaces(title));

  const handleFocus = useCallback(() => {
    if (!readOnly && !disabled && !loading) {
      setIsFocus(true);
    }
  }, [readOnly, disabled, loading]);

  const handleBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  const updateTitle = useCallback(
    (newTitle: string) => {
      if (newTitle.length <= maxLength) {
        setTitle(newTitle);
      }
    },
    [maxLength]
  );

  if (loading) {
    return (
      <div id="testElem">
        <div className="animate-pulse">
          <div className="h-10 w-3/4 rounded-md bg-background-neutral" />
          {subtitle && (
            <div className="mt-2 h-4 w-1/2 rounded bg-background-neutral" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div id="testElem">
      <div
        className={cx(
          "relative",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <TextareaAutosize
          name="title"
          value={title}
          setValue={disabled || readOnly ? () => {} : updateTitle}
          placeholder={placeholder}
          readOnly={readOnly || disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            disabled && "pointer-events-none select-none",
            shouldShowError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {shouldShowError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocus && !disabled && !readOnly && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthReached ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
      {subtitle && (
        <p
          className={cx(
            "mt-1 font-primary-light text-sm text-font-subtle",
            disabled && "opacity-50"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
