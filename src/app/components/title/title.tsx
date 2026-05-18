import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Individual title input field with character counter and error display.
 * Extracted to avoid duplication between primary and secondary title inputs.
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
  isMaxLength,
  maxLength,
  requireError = false,
  error,
  autofocus = false,
}: TitleInputProps): JSX.Element => {
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
      {requireError && error && (
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

export const Title = ({
  initTitle = "",
  initTitle2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  placeholder2 = "Write the second title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  // First title starts focused to guide user to primary input
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  // Error applies only to first title field — it's the required field
  const requireError = Boolean(
    error && (title.length === 0 || textAreOnlySpaces(title))
  );

  // Helper to create focus handler that respects read-only state
  const createFocusHandler = (setFocusState: (focus: boolean) => void) => {
    return () => {
      if (!readOnly) setFocusState(true);
    };
  };

  // Helper to create blur handler
  const createBlurHandler = (setFocusState: (focus: boolean) => void) => {
    return () => setFocusState(false);
  };

  // Helper to create title updater that enforces max length
  const createTitleUpdater = (setTitleState: (title: string) => void) => {
    return (newTitle: string) => {
      // Silently reject input beyond max length instead of truncating
      if (newTitle.length > maxLength) return;
      setTitleState(newTitle);
    };
  };

  const onFocus = createFocusHandler(setIsFocus);
  const onFocus2 = createFocusHandler(setIsFocus2);
  const onBlur = createBlurHandler(setIsFocus);
  const onBlur2 = createBlurHandler(setIsFocus2);
  const updateTitle = createTitleUpdater(setTitle);
  const updateTitle2 = createTitleUpdater(setTitle2);

  return (
    <div className="space-y-4">
      <TitleInput
        name="title"
        value={title}
        setValue={updateTitle}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        isFocused={isFocus}
        isMaxLength={isMaxLength}
        maxLength={maxLength}
        requireError={requireError}
        error={error}
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
        isMaxLength={isMaxLength2}
        maxLength={maxLength}
      />
    </div>
  );
};

interface TitleInputProps {
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
  requireError?: boolean;
  error?: string;
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
