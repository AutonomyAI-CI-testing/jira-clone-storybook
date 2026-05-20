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
  // First field starts focused for immediate user input
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  // Only show error when first title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Focus handlers prevent focus state changes in read-only mode
  const createFocusHandler = (setFocusState: (value: boolean) => void) => {
    return () => {
      if (!readOnly) setFocusState(true);
    };
  };

  const createBlurHandler = (setFocusState: (value: boolean) => void) => {
    return () => setFocusState(false);
  };

  // Enforce character limit by rejecting updates that exceed maxLength
  const createUpdateHandler = (setTitleState: (value: string) => void) => {
    return (newTitle: string) => {
      if (newTitle.length > maxLength) return;
      setTitleState(newTitle);
    };
  };

  const onFocus = createFocusHandler(setIsFocus);
  const onFocus2 = createFocusHandler(setIsFocus2);
  const onBlur = createBlurHandler(setIsFocus);
  const onBlur2 = createBlurHandler(setIsFocus2);
  const updateTitle = createUpdateHandler(setTitle);
  const updateTitle2 = createUpdateHandler(setTitle2);

  // Render character counter with length validation styling
  const renderCharacterCounter = (
    length: number,
    isMax: boolean,
    isFocused: boolean
  ) => {
    if (!isFocused) return null;

    return (
      <span
        className={cx(
          "absolute right-0 top-full z-10 font-primary-light text-sm",
          isMax ? "text-font-danger" : "text-font-subtlest"
        )}
      >
        {length} / {maxLength}
      </span>
    );
  };

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
        {renderCharacterCounter(title.length, isMaxLength, isFocus)}
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
        {renderCharacterCounter(title2.length, isMaxLength2, isFocus2)}
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
