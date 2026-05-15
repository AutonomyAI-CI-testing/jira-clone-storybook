import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_MAX_LENGTH_SECONDARY = 150;

// Shared error styling for both text fields
const ERROR_OUTLINE_CLASSES =
  "focus-visible:outline-border-danger outline outline-2 outline-border-danger";

export const Title = ({
  initTitle = "",
  initSecondaryText = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSecondary = DEFAULT_MAX_LENGTH_SECONDARY,
  error,
  errorSecondary,
  placeholder = "Write the title",
  placeholderSecondary = "Write additional text",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondaryText, setSecondaryText] = useState<string>(initSecondaryText);
  // Title starts focused by default for immediate user input
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocusSecondary, setIsFocusSecondary] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSecondary = secondaryText.length >= maxLengthSecondary;

  // Only show error if prop is provided AND field is empty or only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireErrorSecondary =
    errorSecondary &&
    (secondaryText.length === 0 || textAreOnlySpaces(secondaryText));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const onFocusSecondary = () => {
    if (!readOnly) setIsFocusSecondary(true);
  };
  const onBlurSecondary = () => setIsFocusSecondary(false);

  const updateTitle = (newTitle: string) => {
    // Prevent updates that exceed max length
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSecondaryText = (newText: string) => {
    // Prevent updates that exceed max length
    if (newText.length > maxLengthSecondary) return;
    setSecondaryText(newText);
  };

  return (
    <div className="flex flex-col gap-4">
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
          name="secondaryText"
          value={secondaryText}
          setValue={updateSecondaryText}
          placeholder={placeholderSecondary}
          readOnly={readOnly}
          onFocus={onFocusSecondary}
          onBlur={onBlurSecondary}
          textareaClassName={cx(
            "font-primary text-base",
            requireErrorSecondary && ERROR_OUTLINE_CLASSES
          )}
        />
        {requireErrorSecondary && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {errorSecondary}
          </span>
        )}
        {isFocusSecondary && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthSecondary ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {secondaryText.length} / {maxLengthSecondary}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSecondaryText?: string;
  readOnly?: boolean;
  maxLength?: number;
  maxLengthSecondary?: number;
  error?: string;
  errorSecondary?: string;
  placeholder?: string;
  placeholderSecondary?: string;
}
