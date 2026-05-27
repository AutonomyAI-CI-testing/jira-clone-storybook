import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Track focus state to show character counters only when the user is actively editing
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Character count warning flags
  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;

  // Show error state only if an error message exists AND the title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    // Only show character counter UI when in edit mode (not in readOnly)
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    // Hide character counter when focus is lost
    setIsFocus(false);
  };

  // Enforce character limit by silently rejecting input that exceeds maxLength
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Enforce subtitle character limit
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div className="space-y-2">
      {/* Title input section */}
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
            // Apply danger styling when error state is active
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {/* Error message shown only when title is empty/whitespace and error prop exists */}
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {/* Character counter shown on focus */}
        {isFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              // Red text when approaching character limit
              isMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
      {/* Subtitle input section */}
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
            "font-primary-light text-base",
            // Apply danger styling when error state is active
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {/* Character counter shown on focus */}
        {isFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              // Red text when approaching character limit
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
  placeholder?: string;
  subtitlePlaceholder?: string;
}
