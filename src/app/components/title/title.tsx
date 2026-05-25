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
  maxLengthSubtitle,
  error,
  placeholder = "Write the title",
  placeholderSubtitle,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Only apply max length styles to subtitle if maxLengthSubtitle is defined
  const isMaxLengthSubtitle =
    maxLengthSubtitle && subtitle.length >= maxLengthSubtitle;
  // Show error only when title is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    // Prevent updates beyond max length to maintain character limit
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Prevent updates beyond subtitle max length if specified
    if (maxLengthSubtitle && newSubtitle.length > maxLengthSubtitle) return;
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
      {/* Subtitle field is only rendered if maxLengthSubtitle is defined */}
      {maxLengthSubtitle && (
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={placeholderSubtitle}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-light text-base",
            isMaxLengthSubtitle &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
      )}
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {/* Character counter only shows on focus */}
      {isFocus && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {title.length} / {maxLength}
          {/* Include subtitle count if maxLengthSubtitle is defined */}
          {maxLengthSubtitle && ` | ${subtitle.length} / ${maxLengthSubtitle}`}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  /** Initial title text content */
  initTitle?: string;
  /** Initial subtitle text content - only shown if maxLengthSubtitle is defined */
  initSubtitle?: string;
  /** Prevents editing when true */
  readOnly?: boolean;
  /** Maximum characters allowed for title (default: 80) */
  maxLength?: number;
  /** Maximum characters allowed for subtitle - if undefined, subtitle is hidden */
  maxLengthSubtitle?: number;
  /** Error message to show when title is empty or only whitespace */
  error?: string;
  /** Placeholder text for title input */
  placeholder?: string;
  /** Placeholder text for subtitle input */
  placeholderSubtitle?: string;
}
