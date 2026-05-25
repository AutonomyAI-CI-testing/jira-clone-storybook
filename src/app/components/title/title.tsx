import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Character counter display that appears when field is focused.
 * Text color changes to danger red when max length is reached.
 */
const CharacterCounter = ({
  current,
  max,
  isVisible,
}: {
  current: number;
  max: number;
  isVisible: boolean;
}): JSX.Element | null => {
  if (!isVisible) return null;

  const isMaxLength = current >= max;

  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isMaxLength ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {current} / {max}
    </span>
  );
};

export const Title = ({
  initTitle = "",
  initTitle2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLength2 = DEFAULT_MAX_LENGTH,
  error,
  error2,
  placeholder = "Write the title",
  placeholder2 = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireError2 =
    error2 && (title2.length === 0 || textAreOnlySpaces(title2));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateTitle2 = (newTitle2: string) => {
    if (newTitle2.length > maxLength2) return;

    setTitle2(newTitle2);
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
        <CharacterCounter
          current={title.length}
          max={maxLength}
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
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            requireError2 &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireError2 && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error2}
          </span>
        )}
        <CharacterCounter
          current={title2.length}
          max={maxLength2}
          isVisible={isFocus}
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
  maxLength2?: number;
  error?: string;
  error2?: string;
  placeholder?: string;
  placeholder2?: string;
}
