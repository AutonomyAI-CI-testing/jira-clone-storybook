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
  // First field starts focused to allow immediate editing
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  // Error validation only applies to the first title field
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const createFocusHandler = (setFocus: (value: boolean) => void) => () => {
    if (!readOnly) setFocus(true);
  };

  const createBlurHandler = (setFocus: (value: boolean) => void) => () => {
    setFocus(false);
  };

  // Prevent exceeding max length
  const createUpdateHandler = (setValue: (value: string) => void) => (
    newValue: string
  ) => {
    if (newValue.length > maxLength) return;
    setValue(newValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <TitleField
        name="title"
        value={title}
        setValue={createUpdateHandler(setTitle)}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={createFocusHandler(setIsFocus)}
        onBlur={createBlurHandler(setIsFocus)}
        isFocused={isFocus}
        isMaxLength={isMaxLength}
        maxLength={maxLength}
        error={requireError ? error : undefined}
        autofocus
      />
      <TitleField
        name="title2"
        value={title2}
        setValue={createUpdateHandler(setTitle2)}
        placeholder={placeholder2}
        readOnly={readOnly}
        onFocus={createFocusHandler(setIsFocus2)}
        onBlur={createBlurHandler(setIsFocus2)}
        isFocused={isFocus2}
        isMaxLength={isMaxLength2}
        maxLength={maxLength}
      />
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
  isMaxLength: boolean;
  maxLength: number;
  error?: string;
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
  isFocused,
  isMaxLength,
  maxLength,
  error,
  autofocus,
}: TitleFieldProps) => {
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
          error &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
        autofocus={autofocus}
      />
      {error && (
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

interface TitleProps {
  initTitle?: string;
  initTitle2?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  placeholder2?: string;
}
