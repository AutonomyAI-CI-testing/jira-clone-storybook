import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Helper component for a single title input field with character counter and error state.
 * Extracted to reduce duplication between the two input fields.
 */
const TitleField = ({
  name,
  value,
  onValueChange,
  placeholder,
  readOnly,
  onFocus,
  onBlur,
  isFocused,
  error,
  maxLength,
}: TitleFieldProps) => {
  const isMaxLength = value.length >= maxLength;
  const hasError = error && (value.length === 0 || textAreOnlySpaces(value));

  return (
    <div className="relative">
      <TextareaAutosize
        name={name}
        value={value}
        setValue={onValueChange}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-black text-2xl",
          hasError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
        autofocus={name === "title"}
      />
      {hasError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {isFocused && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {value.length} / {maxLength}
        </span>
      )}
    </div>
  );
};

interface TitleFieldProps {
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  error?: string;
  maxLength: number;
}

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  secondLineMaxLength = DEFAULT_MAX_LENGTH,
  error,
  secondLineError,
  placeholder = "Write the title",
  secondLinePlaceholder = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  // Handler to update title with max length validation
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Handler to update second line with max length validation
  const updateSecondLine = (newSecondLine: string) => {
    if (newSecondLine.length > secondLineMaxLength) return;
    setSecondLine(newSecondLine);
  };

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };

  const onSecondLineBlur = () => {
    setIsSecondLineFocus(false);
  };

  return (
    <div className="space-y-3">
      <TitleField
        name="title"
        value={title}
        onValueChange={updateTitle}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        isFocused={isFocus}
        error={error}
        maxLength={maxLength}
      />
      <TitleField
        name="secondLine"
        value={secondLine}
        onValueChange={updateSecondLine}
        placeholder={secondLinePlaceholder}
        readOnly={readOnly}
        onFocus={onSecondLineFocus}
        onBlur={onSecondLineBlur}
        isFocused={isSecondLineFocus}
        error={secondLineError}
        maxLength={secondLineMaxLength}
      />
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  readOnly?: boolean;
  maxLength?: number;
  secondLineMaxLength?: number;
  error?: string;
  secondLineError?: string;
  placeholder?: string;
  secondLinePlaceholder?: string;
}
