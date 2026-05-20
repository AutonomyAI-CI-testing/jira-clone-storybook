import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Title component with dual text inputs for primary and secondary titles.
 * Each input supports validation, character limits, and error states independently.
 */
export const Title = ({
  initTitle = "",
  initTitle2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLength2 = DEFAULT_MAX_LENGTH,
  error,
  error2,
  placeholder = "Write the title",
  placeholder2 = "Write the second title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  // First field autofocuses, so start with focus state true for first field
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  // Helper to create handlers for a specific field
  const createFieldHandlers = (
    value: string,
    setValue: (value: string) => void,
    setFocus: (focus: boolean) => void,
    maxLength: number
  ) => ({
    onFocus: () => {
      if (!readOnly) setFocus(true);
    },
    onBlur: () => {
      setFocus(false);
    },
    updateValue: (newValue: string) => {
      // Prevent exceeding max length
      if (newValue.length > maxLength) return;
      setValue(newValue);
    },
  });

  const field1 = createFieldHandlers(title, setTitle, setIsFocus, maxLength);
  const field2 = createFieldHandlers(
    title2,
    setTitle2,
    setIsFocus2,
    maxLength2
  );

  // Check if value is empty or only spaces when error is provided
  const hasRequireError = (value: string, error?: string): boolean =>
    !!error && (value.length === 0 || textAreOnlySpaces(value));

  const requireError = hasRequireError(title, error);
  const requireError2 = hasRequireError(title2, error2);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength2;

  return (
    <div className="space-y-4">
      <TitleField
        name="title"
        value={title}
        setValue={field1.updateValue}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={field1.onFocus}
        onBlur={field1.onBlur}
        error={error}
        requireError={requireError}
        isFocus={isFocus}
        isMaxLength={isMaxLength}
        maxLength={maxLength}
        autofocus
      />
      <TitleField
        name="title2"
        value={title2}
        setValue={field2.updateValue}
        placeholder={placeholder2}
        readOnly={readOnly}
        onFocus={field2.onFocus}
        onBlur={field2.onBlur}
        error={error2}
        requireError={requireError2}
        isFocus={isFocus2}
        isMaxLength={isMaxLength2}
        maxLength={maxLength2}
      />
    </div>
  );
};

/**
 * Internal component for a single title input field with validation and character count.
 */
interface TitleFieldProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  error?: string;
  requireError: boolean;
  isFocus: boolean;
  isMaxLength: boolean;
  maxLength: number;
  autofocus?: boolean;
}

const TitleField = ({
  name,
  value,
  setValue,
  placeholder,
  readOnly,
  onFocus,
  onBlur,
  error,
  requireError,
  isFocus,
  isMaxLength,
  maxLength,
  autofocus,
}: TitleFieldProps): JSX.Element => (
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
    {isFocus && (
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
