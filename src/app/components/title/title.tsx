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
  subtitlePlaceholder = "Add a subtitle (optional)",
  showSubtitle = true,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Title starts focused to guide user input, subtitle does not
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Validation: check if field is empty or contains only whitespace
  const isFieldEmpty = (value: string): boolean => {
    return value.length === 0 || textAreOnlySpaces(value);
  };

  const requireError = error && isFieldEmpty(title);
  const requireSubtitleError = subtitleError && isFieldEmpty(subtitle);

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

  // Prevent updates that would exceed max length
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  // Render error message if validation fails
  const renderErrorMessage = (errorText: string | undefined) => {
    if (!errorText) return null;
    return (
      <span className="ml-3 font-primary-light text-sm text-font-danger">
        {errorText}
      </span>
    );
  };

  // Render character counter when field is focused
  const renderCharacterCount = (
    currentLength: number,
    max: number,
    isFocused: boolean
  ) => {
    if (!isFocused) return null;
    const isAtMax = currentLength >= max;
    return (
      <span
        className={cx(
          "absolute right-0 top-full font-primary-light text-sm",
          isAtMax ? "text-font-danger" : "text-font-subtlest"
        )}
      >
        {currentLength} / {max}
      </span>
    );
  };

  // Determine error styling for textarea outline
  const getErrorOutlineClass = (hasError: boolean) => {
    return hasError
      ? "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
      : "";
  };

  return (
    <div className="flex flex-col gap-3">
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
            getErrorOutlineClass(!!requireError)
          )}
          autofocus
        />
        {renderErrorMessage(requireError ? error : undefined)}
        {renderCharacterCount(title.length, maxLength, isFocus)}
      </div>
      {showSubtitle && (
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
              "font-primary text-lg",
              getErrorOutlineClass(!!requireSubtitleError)
            )}
          />
          {renderErrorMessage(requireSubtitleError ? subtitleError : undefined)}
          {renderCharacterCount(
            subtitle.length,
            subtitleMaxLength,
            isSubtitleFocus
          )}
        </div>
      )}
    </div>
  );
};

interface TitleProps {
  /** Initial title text */
  initTitle?: string;
  /** Initial subtitle text */
  initSubtitle?: string;
  /** Disable editing */
  readOnly?: boolean;
  /** Maximum character count for title */
  maxLength?: number;
  /** Maximum character count for subtitle */
  subtitleMaxLength?: number;
  /** Error message to display when title validation fails */
  error?: string;
  /** Error message to display when subtitle validation fails */
  subtitleError?: string;
  /** Placeholder text for title input */
  placeholder?: string;
  /** Placeholder text for subtitle input */
  subtitlePlaceholder?: string;
  /** Whether to show the subtitle field */
  showSubtitle?: boolean;
}
