import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/** Renders a text field with character counter and optional error styling */
const TitleField = ({
  name,
  value,
  placeholder,
  readOnly,
  maxLength,
  showCounter,
  showError,
  errorMessage,
  onFocus,
  onBlur,
  onChange,
  autofocus,
}: TitleFieldProps) => {
  const isMaxLength = value.length >= maxLength;

  return (
    <div className="relative">
      <TextareaAutosize
        name={name}
        value={value}
        setValue={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-black text-2xl",
          showError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
        autofocus={autofocus}
      />
      {showError && errorMessage && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {errorMessage}
        </span>
      )}
      {showCounter && (
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
  placeholder: string;
  readOnly?: boolean;
  maxLength: number;
  showCounter: boolean;
  showError: boolean;
  errorMessage?: string;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: string) => void;
  autofocus?: boolean;
}

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  secondLinePlaceholder = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  // Validate that the title is not empty or only whitespace when error prop is provided
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };
  const onSecondLineBlur = () => setIsSecondLineFocus(false);

  // Enforce maxLength constraint by ignoring updates that exceed it
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    if (newSecondLine.length > maxLength) return;
    setSecondLine(newSecondLine);
  };

  return (
    <div className="space-y-3">
      <TitleField
        name="title"
        value={title}
        placeholder={placeholder}
        readOnly={readOnly}
        maxLength={maxLength}
        showCounter={isFocus}
        showError={!!requireError}
        errorMessage={error}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={updateTitle}
        autofocus
      />
      <TitleField
        name="secondLine"
        value={secondLine}
        placeholder={secondLinePlaceholder}
        readOnly={readOnly}
        maxLength={maxLength}
        showCounter={isSecondLineFocus}
        showError={false}
        onFocus={onSecondLineFocus}
        onBlur={onSecondLineBlur}
        onChange={updateSecondLine}
      />
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  secondLinePlaceholder?: string;
}
