import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Internal component for rendering a single title field with validation and character count.
 * Extracted to avoid duplication between the two title fields.
 */
const TitleField = ({
  name,
  value,
  setValue,
  placeholder,
  readOnly,
  onFocus,
  onBlur,
  isFocused,
  maxLength,
  error,
  autofocus = false,
}: TitleFieldProps): JSX.Element => {
  const isMaxLength = value.length >= maxLength;
  // Show error when error prop is provided and the field is empty or contains only spaces
  const requireError = error && (value.length === 0 || textAreOnlySpaces(value));

  return (
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
          requireError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
        autofocus={autofocus}
      />
      {requireError && (
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
  setValue: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  maxLength: number;
  error?: string;
  autofocus?: boolean;
}

export const Title = ({
  initTitle = "",
  initTitle2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLength2 = DEFAULT_MAX_LENGTH,
  error,
  error2,
  placeholder = "Write the title",
  placeholder2 = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  // First field autofocuses, so it starts focused
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  // Helper to create focus handlers that respect readOnly state
  const createFocusHandler = (setFocus: (focused: boolean) => void) => ({
    onFocus: () => {
      if (!readOnly) setFocus(true);
    },
    onBlur: () => {
      if (!readOnly) setFocus(false);
    },
  });

  const focusHandlers = createFocusHandler(setIsFocus);
  const focusHandlers2 = createFocusHandler(setIsFocus2);

  // Helper to create value update handlers that enforce maxLength
  const createUpdateHandler = (
    setValue: (value: string) => void,
    max: number
  ) => (newValue: string) => {
    if (newValue.length > max) return;
    setValue(newValue);
  };

  const updateTitle = createUpdateHandler(setTitle, maxLength);
  const updateTitle2 = createUpdateHandler(setTitle2, maxLength2);

  return (
    <div className="flex flex-col gap-2">
      <TitleField
        name="title"
        value={title}
        setValue={updateTitle}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={focusHandlers.onFocus}
        onBlur={focusHandlers.onBlur}
        isFocused={isFocus}
        maxLength={maxLength}
        error={error}
        autofocus
      />
      <TitleField
        name="title2"
        value={title2}
        setValue={updateTitle2}
        placeholder={placeholder2}
        readOnly={readOnly}
        onFocus={focusHandlers2.onFocus}
        onBlur={focusHandlers2.onBlur}
        isFocused={isFocus2}
        maxLength={maxLength2}
        error={error2}
      />
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initTitle2?: string;
  readOnly?: boolean;
  maxLength?: number;
  maxLength2?: number;
  error?: string;
  error2?: string;
  placeholder?: string;
  placeholder2?: string;
}
