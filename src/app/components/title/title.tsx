import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 160;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initSubtitle = "",
  subtitlePlaceholder = "Write a subtitle",
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  subtitleError,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Track focus to show/hide character counters — counters are only visible while actively editing
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Only show error if one is provided AND the field is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  // Only show error if one is provided AND the field is empty or contains only whitespace
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  // Show counters and focus indicator only when editing (not in read-only mode)
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  // Hide counters when focus is lost
  const onBlur = () => {
    setIsFocus(false);
  };

  // Update title only if within max length — truncation is handled at input boundary
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Update subtitle only if within max length — truncation is handled at input boundary
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div>
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
      <div className="relative mt-4">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary text-base",
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
            {subtitle.length} / {subtitleMaxLength}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  initSubtitle?: string;
  subtitlePlaceholder?: string;
  subtitleMaxLength?: number;
  subtitleError?: string;
}
