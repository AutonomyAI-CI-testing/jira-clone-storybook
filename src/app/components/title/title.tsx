import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initTitle2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  placeholder2 = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireError2 =
    error && (title2.length === 0 || textAreOnlySpaces(title2));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onFocus2 = () => {
    if (!readOnly) setIsFocus2(true);
  };
  
  // TODO: Implement blur behavior to hide character count when field loses focus
  const onBlur = () => {};
  const onBlur2 = () => {};

  const updateTitle = (newTitle: string) => {
    // Prevent input beyond max length
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateTitle2 = (newTitle2: string) => {
    // Prevent input beyond max length
    if (newTitle2.length > maxLength) return;

    setTitle2(newTitle2);
  };

  return (
    <div className="flex flex-col gap-4">
      <TitleInput
        name="title"
        value={title}
        setValue={updateTitle}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        isFocused={isFocus}
        hasError={!!requireError}
        isMaxLength={isMaxLength}
        error={error}
        maxLength={maxLength}
        autofocus
      />
      <TitleInput
        name="title2"
        value={title2}
        setValue={updateTitle2}
        placeholder={placeholder2}
        readOnly={readOnly}
        onFocus={onFocus2}
        onBlur={onBlur2}
        isFocused={isFocus2}
        hasError={!!requireError2}
        isMaxLength={isMaxLength2}
        error={error}
        maxLength={maxLength}
      />
    </div>
  );
};

/**
 * Individual title input field with character count and error display.
 * Extracted as a component to avoid duplication between primary and secondary title fields.
 */
const TitleInput = ({
  name,
  value,
  setValue,
  placeholder,
  readOnly,
  onFocus,
  onBlur,
  isFocused,
  hasError,
  isMaxLength,
  error,
  maxLength,
  autofocus,
}: TitleInputProps) => (
  <div className="relative">
    <TextareaAutosize
      name={name}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      readOnly={readOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      textareaClassName={cx(
        "font-primary-black text-2xl",
        hasError &&
          "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
      )}
      autofocus={autofocus}
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

interface TitleInputProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  hasError: boolean;
  isMaxLength: boolean;
  error?: string;
  maxLength: number;
  autofocus?: boolean;
}

interface TitleProps {
  initTitle?: string;
  initTitle2?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  placeholder2?: string;
}
