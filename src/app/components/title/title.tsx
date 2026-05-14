import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

// Shared styling constants
const ERROR_MESSAGE_CLASSES = "ml-3 font-primary-light text-sm text-font-danger";
const CHAR_COUNTER_CLASSES = "absolute right-0 top-full font-primary-light text-sm";
const ERROR_OUTLINE_CLASSES = "focus-visible:outline-border-danger outline outline-2 outline-border-danger";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

/**
 * Validates if a text field should show an error.
 * Returns true when error message is provided AND the field is empty or contains only whitespace.
 */
const shouldShowError = (text: string, errorMessage?: string): boolean => {
  if (!errorMessage) return false;
  return text.length === 0 || textAreOnlySpaces(text);
};

/**
 * Title component with editable title and subtitle fields.
 * Displays character count on focus and validates against max length.
 */
export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Add a subtitle (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const requireError = shouldShowError(title, error);
  const requireSubtitleError = shouldShowError(subtitle, subtitleError);

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

  const updateTitle = (newTitle: string) => {
    // Prevent exceeding max length
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Prevent exceeding max length
    if (newSubtitle.length > subtitleMaxLength) return;

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
            requireError && ERROR_OUTLINE_CLASSES
          )}
          autofocus
        />
        {requireError && (
          <span className={ERROR_MESSAGE_CLASSES}>
            {error}
          </span>
        )}
        {isFocus && (
          <span
            className={cx(
              CHAR_COUNTER_CLASSES,
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
          onFocus={onSubtitleFocus}
          onBlur={onSubtitleBlur}
          textareaClassName={cx(
            "font-primary text-base",
            requireSubtitleError && ERROR_OUTLINE_CLASSES
          )}
        />
        {requireSubtitleError && (
          <span className={ERROR_MESSAGE_CLASSES}>
            {subtitleError}
          </span>
        )}
        {isSubtitleFocus && (
          <span
            className={cx(
              CHAR_COUNTER_CLASSES,
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
