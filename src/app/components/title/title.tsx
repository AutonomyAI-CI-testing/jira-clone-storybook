import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

// Character counter component displayed when textarea is focused
const CharacterCounter = ({
  currentLength,
  maxLength,
  isVisible,
}: {
  currentLength: number;
  maxLength: number;
  isVisible: boolean;
}) => {
  if (!isVisible) return null;

  const isOverLimit = currentLength >= maxLength;

  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isOverLimit ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {currentLength} / {maxLength}
    </span>
  );
};

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

  // Only show error when error prop is provided and title is empty/whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onFocus2 = () => {
    if (!readOnly) setIsFocus2(true);
  };
  const onBlur = () => setIsFocus(false);
  const onBlur2 = () => setIsFocus2(false);

  // Enforce maxLength by preventing updates that exceed the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateTitle2 = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle2(newTitle);
  };

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
        <CharacterCounter
          currentLength={title.length}
          maxLength={maxLength}
          isVisible={isFocus}
        />
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
        <CharacterCounter
          currentLength={title2.length}
          maxLength={maxLength}
          isVisible={isFocus2}
        />
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
