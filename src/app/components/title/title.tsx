import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Add description",
}: TitleProps): JSX.Element => {
  // Track the editable text content
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);

  // Track focus state to show/hide character counters
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Derived state for UI styling and validation
  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  // Show error when error message is provided AND title is empty or only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };

  const onSubtitleBlur = () => {
    setIsSubtitleFocus(false);
  };

  // Prevent title from exceeding max length by rejecting updates that would exceed it
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Prevent subtitle from exceeding max length by rejecting updates that would exceed it
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    // Wrapper provides vertical spacing between title and subtitle sections
    <div className="space-y-3">
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
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {/* Error message appears below title when validation fails */}
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {/* Character counter shown only when focused, turns red at max length */}
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
      {/* Subtitle input section */}
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onSubtitleFocus}
          onBlur={onSubtitleBlur}
          textareaClassName={cx("font-primary-light text-sm")}
        />
        {/* Character counter shown only when focused, turns red at max length */}
        {isSubtitleFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isSubtitleMaxLength
                ? "text-font-danger"
                : "text-font-subtlest"
            )}
          >
            {subtitle.length} / {subtitleMaxLength}
          </span>
        )}
      </div>
    </div>
  );
};

// Props interface for the Title component
// Supports two-field form: title (required) and subtitle (optional)
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
