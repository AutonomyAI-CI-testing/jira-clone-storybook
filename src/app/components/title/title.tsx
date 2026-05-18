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
  // First field starts focused to enable immediate editing
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  // Show error only when first field is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const handleFocus = (setFocused: (value: boolean) => void) => () => {
    if (!readOnly) setFocused(true);
  };

  const handleBlur = (setFocused: (value: boolean) => void) => () => {
    setFocused(false);
  };

  // Prevent input beyond maxLength by rejecting updates that exceed the limit
  const createTitleUpdater = (setter: (value: string) => void) => (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setter(newTitle);
  };

  const updateTitle = createTitleUpdater(setTitle);
  const updateTitle2 = createTitleUpdater(setTitle2);

  // Renders character counter shown below focused input
  const renderCharacterCounter = (currentLength: number, isMax: boolean) => (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isMax ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {currentLength} / {maxLength}
    </span>
  );

  return (
    <div className="relative flex flex-col gap-3">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={handleFocus(setIsFocus)}
          onBlur={handleBlur(setIsFocus)}
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
        {isFocus && renderCharacterCounter(title.length, isMaxLength)}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="title2"
          value={title2}
          setValue={updateTitle2}
          placeholder={placeholder2}
          readOnly={readOnly}
          onFocus={handleFocus(setIsFocus2)}
          onBlur={handleBlur(setIsFocus2)}
          textareaClassName="font-primary-black text-2xl"
        />
        {isFocus2 && renderCharacterCounter(title2.length, isMaxLength2)}
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
