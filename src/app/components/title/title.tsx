import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

// Character limits for title and subtitle fields
const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

/**
 * Checks if an error should be displayed for a field.
 * Returns true when an error message exists and the field is empty or contains only whitespace.
 */
const shouldShowError = (errorMessage: string | undefined, value: string): boolean => {
  if (!errorMessage) return false;
  return value.length === 0 || textAreOnlySpaces(value);
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write a subtitle (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isTitleFocus, setIsTitleFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const requireTitleError = shouldShowError(error, title);
  const requireSubtitleError = shouldShowError(subtitleError, subtitle);

  // Focus handlers ensure only one field shows its character counter at a time.
  // This creates a cleaner UX by avoiding visual clutter from multiple counters.
  const onTitleFocus = () => {
    if (!readOnly) {
      setIsTitleFocus(true);
      setIsSubtitleFocus(false);
    }
  };

  const onSubtitleFocus = () => {
    if (!readOnly) {
      setIsTitleFocus(false);
      setIsSubtitleFocus(true);
    }
  };

  const onTitleBlur = () => {
    // Blur handler reserved for future validation or cleanup logic
  };

  const onSubtitleBlur = () => {
    // Blur handler reserved for future validation or cleanup logic
  };

  const updateTitle = (newTitle: string) => {
    // Silently prevent input beyond max length instead of truncating
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Silently prevent input beyond max length instead of truncating
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={onTitleFocus}
          onBlur={onTitleBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            requireTitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {requireTitleError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isTitleFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isTitleMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onSubtitleFocus}
          onBlur={onSubtitleBlur}
          textareaClassName={cx(
            "font-primary-regular text-lg text-font-subtle",
            requireSubtitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireSubtitleError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {subtitleError}
          </span>
        )}
        {isSubtitleFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isSubtitleMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {subtitle.length} / {subtitleMaxLength}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  subtitleMaxLength?: number;
  error?: string;
  subtitleError?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
