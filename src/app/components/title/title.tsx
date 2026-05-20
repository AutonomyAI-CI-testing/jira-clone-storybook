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
  
  // Show error when title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Handler factory to avoid duplication
  const createFocusHandler = (setFocus: (value: boolean) => void) => () => {
    if (!readOnly) setFocus(true);
  };

  const createBlurHandler = (setFocus: (value: boolean) => void) => () => {
    setFocus(false);
  };

  // Character count enforcement — silently reject input over limit
  const createUpdateHandler = (setValue: (value: string) => void) => (newValue: string) => {
    if (newValue.length > maxLength) return;
    setValue(newValue);
  };

  const onFocus = createFocusHandler(setIsFocus);
  const onBlur = createBlurHandler(setIsFocus);
  const onFocus2 = createFocusHandler(setIsFocus2);
  const onBlur2 = createBlurHandler(setIsFocus2);
  const updateTitle = createUpdateHandler(setTitle);
  const updateTitle2 = createUpdateHandler(setTitle2);

  return (
    <div className="space-y-2">
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
          <CharacterCount
            current={title.length}
            max={maxLength}
            isOverLimit={isMaxLength}
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
          <CharacterCount
            current={title2.length}
            max={maxLength}
            isOverLimit={isMaxLength2}
          />
        )}
      </div>
    </div>
  );
};

// Helper component to display character count with danger state
const CharacterCount = ({ current, max, isOverLimit }: { 
  current: number; 
  max: number; 
  isOverLimit: boolean 
}): JSX.Element => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isOverLimit ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

interface TitleProps {
  initTitle?: string;
  initTitle2?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  placeholder2?: string;
}
