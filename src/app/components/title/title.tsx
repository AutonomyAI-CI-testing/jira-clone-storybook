import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Helper component to display character count indicator
 * Shows count in red when max length is reached, subtle gray otherwise
 */
const CharacterCounter = ({
  currentLength,
  maxLength,
  isMaxLength,
}: {
  currentLength: number;
  maxLength: number;
  isMaxLength: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isMaxLength ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {currentLength} / {maxLength}
  </span>
);

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
  // First field starts focused, second field starts unfocused
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  // Only show error when field is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Factory function to create focus handlers that respect readOnly state
  const createFocusHandler = (setFocusState: (value: boolean) => void) => () => {
    if (!readOnly) setFocusState(true);
  };

  // Factory function to create blur handlers
  const createBlurHandler = (setFocusState: (value: boolean) => void) => () => {
    setFocusState(false);
  };

  // Factory function to create update handlers that enforce max length
  const createUpdateHandler = (setValue: (value: string) => void) => (newValue: string) => {
    if (newValue.length > maxLength) return;
    setValue(newValue);
  };

  const onFocus = createFocusHandler(setIsFocus);
  const onFocus2 = createFocusHandler(setIsFocus2);
  const onBlur = createBlurHandler(setIsFocus);
  const onBlur2 = createBlurHandler(setIsFocus2);
  const updateTitle = createUpdateHandler(setTitle);
  const updateTitle2 = createUpdateHandler(setTitle2);

  return (
    <div className="space-y-4">
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
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocus && (
          <CharacterCounter
            currentLength={title.length}
            maxLength={maxLength}
            isMaxLength={isMaxLength}
          />
        )}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="title2"
          value={title2}
          setValue={updateTitle2}
          placeholder={placeholder2}
          readOnly={readOnly}
          onFocus={onFocus2}
          onBlur={onBlur2}
          textareaClassName="font-primary-black text-2xl"
        />
        {isFocus2 && (
          <CharacterCounter
            currentLength={title2.length}
            maxLength={maxLength}
            isMaxLength={isMaxLength2}
          />
        )}
      </div>
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
