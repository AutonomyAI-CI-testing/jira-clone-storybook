import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Internal component for rendering a single title field with character count and error display.
 */
const TitleField = ({
  name,
  value,
  placeholder,
  readOnly,
  maxLength,
  error,
  isFocus,
  onFocus,
  onBlur,
  setValue,
  autofocus,
}: TitleFieldProps): JSX.Element => {
  const isMaxLength = value.length >= maxLength;
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
};

interface TitleFieldProps {
  name: string;
  value: string;
  placeholder: string;
  readOnly?: boolean;
  maxLength: number;
  error?: string;
  isFocus: boolean;
  onFocus: () => void;
  onBlur: () => void;
  setValue: (value: string) => void;
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
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(true);

  // Focus handlers that respect readOnly state
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onFocus2 = () => {
    if (!readOnly) setIsFocus2(true);
  };
  const onBlur = () => setIsFocus(false);
  const onBlur2 = () => setIsFocus2(false);

  // Value update handlers with max length enforcement
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateTitle2 = (newTitle2: string) => {
    if (newTitle2.length > maxLength2) return;
    setTitle2(newTitle2);
  };

  return (
    <div className="flex flex-col gap-4">
      <TitleField
        name="title"
        value={title}
        placeholder={placeholder}
        readOnly={readOnly}
        maxLength={maxLength}
        error={error}
        isFocus={isFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        setValue={updateTitle}
        autofocus
      />
      <TitleField
        name="title2"
        value={title2}
        placeholder={placeholder2}
        readOnly={readOnly}
        maxLength={maxLength2}
        error={error2}
        isFocus={isFocus2}
        onFocus={onFocus2}
        onBlur={onBlur2}
        setValue={updateTitle2}
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
