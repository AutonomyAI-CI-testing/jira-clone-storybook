import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

/**
 * Character count indicator shown when input is focused.
 * Displays current and max character count, with red text when at or over the limit.
 */
function CharacterCount({
  current,
  max,
  isVisible,
}: {
  current: number;
  max: number;
  isVisible: boolean;
}): JSX.Element | null {
  if (!isVisible) return null;
  const isAtLimit = current >= max;
  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtLimit ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {current} / {max}
    </span>
  );
}

/**
 * Error message displayed below the input field when validation fails.
 * Only shown when the field value is empty or contains only whitespace.
 */
function ErrorMessage({
  message,
  isVisible,
}: {
  message?: string;
  isVisible: boolean;
}): JSX.Element | null {
  if (!isVisible || !message) return null;
  return (
    <span className="ml-3 font-primary-light text-sm text-font-danger">
      {message}
    </span>
  );
}

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
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Show error only if error message is defined and field is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  // Set focus state when input receives focus (unless in read-only mode)
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  // Clear focus state when input loses focus to hide character count
  const onBlur = () => setIsFocus(false);

  // Update title, preventing input if it would exceed max length
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Update subtitle, preventing input if it would exceed max length
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div className="space-y-4">
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
        <ErrorMessage message={error} isVisible={requireError} />
        <CharacterCount current={title.length} max={maxLength} isVisible={isFocus} />
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
            "font-primary-light text-sm",
            requireSubtitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        <ErrorMessage message={subtitleError} isVisible={requireSubtitleError} />
        <CharacterCount current={subtitle.length} max={subtitleMaxLength} isVisible={isFocus} />
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
