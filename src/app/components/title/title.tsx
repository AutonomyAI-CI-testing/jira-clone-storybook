import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

// Default maximum character length for both title and subtitle fields
const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxSubtitleLength = DEFAULT_MAX_LENGTH,
  error,
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Check if fields have reached maximum length to display warning indicator
  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= maxSubtitleLength;

  // Only show error if validation error is present and field is empty or contains only spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  // Show character counter and error messages only when field is focused
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  // Enforce max length by silently rejecting input that exceeds the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  // Same max length enforcement for subtitle
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxSubtitleLength) return;

    setSubtitle(newSubtitle);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
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
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary text-sm",
            requireSubtitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireSubtitleError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {subtitleError}
          </span>
        )}
        {isFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isSubtitleMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {subtitle.length} / {maxSubtitleLength}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  /** Initial value for the title field */
  initTitle?: string;
  /** Initial value for the subtitle field */
  initSubtitle?: string;
  /** When true, fields cannot be edited */
  readOnly?: boolean;
  /** Maximum character length for the title field (default: 80) */
  maxLength?: number;
  /** Maximum character length for the subtitle field (default: 80) */
  maxSubtitleLength?: number;
  /** Error message to display for title validation */
  error?: string;
  /** Error message to display for subtitle validation */
  subtitleError?: string;
  /** Placeholder text for the title field */
  placeholder?: string;
  /** Placeholder text for the subtitle field */
  subtitlePlaceholder?: string;
}
