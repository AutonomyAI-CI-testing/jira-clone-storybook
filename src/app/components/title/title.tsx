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
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write a subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Show error only if error prop is provided AND title is empty or whitespace only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  // Display character count in warning color when at max length
  const isMaxLength = title.length >= maxLength;

  // Show character counter and subtitle only when focused (unless readOnly)
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  // Prevent title from exceeding maxLength
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
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
      <TextareaAutosize
        name="subtitle"
        value={subtitle}
        setValue={updateSubtitle}
        placeholder={subtitlePlaceholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName="font-primary-light text-base"
      />
    </div>
  );
};

interface TitleProps {
  /** Initial title text */
  initTitle?: string;
  /** Initial subtitle text */
  initSubtitle?: string;
  /** If true, disables editing and hides character counter */
  readOnly?: boolean;
  /** Maximum allowed characters for title (default: 80) */
  maxLength?: number;
  /** Error message to show when title is empty/whitespace (shows error outline if present) */
  error?: string;
  /** Placeholder text for title input */
  placeholder?: string;
  /** Placeholder text for subtitle input */
  subtitlePlaceholder?: string;
}
