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
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Track focus state to conditionally show character counters — they only appear when editing
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const subtitleIsMaxLength = subtitle.length >= subtitleMaxLength;
  // Show error only if an error message is provided AND the field is empty or contains only spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const subtitleRequireError =
    subtitleError &&
    (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  const onFocus = () => {
    // Only allow focus state change if not in read-only mode
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  // Enforce max length by rejecting any input that exceeds the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;

    setSubtitle(newSubtitle);
  };

  return (
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
      <TextareaAutosize
        name="subtitle"
        value={subtitle}
        setValue={updateSubtitle}
        placeholder={subtitlePlaceholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-light text-lg mt-2",
          subtitleRequireError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
      />
      {subtitleRequireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {subtitleError}
        </span>
      )}
      {/* Show subtitle counter only when focused AND has content (title counter shows when focused regardless) */}
      {isFocus && subtitle.length > 0 && (
        <span
          className={cx(
            "absolute right-0 font-primary-light text-sm",
            subtitleIsMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
          style={{
            marginTop: "2.5rem",
          }}
        >
          {subtitle.length} / {subtitleMaxLength}
        </span>
      )}
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
