import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

/** Character counter displayed when a field is focused */
const CharacterCounter = ({
  current,
  max,
}: {
  current: number;
  max: number;
}) => {
  const isAtMax = current >= max;
  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtMax ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {current} / {max}
    </span>
  );
};

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_MAX_LENGTH_LINE2 = 80;

export const Title = ({
  initTitle = "",
  initLine2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthLine2 = DEFAULT_MAX_LENGTH_LINE2,
  error,
  placeholder = "Write the title",
  placeholderLine2 = "Additional line (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [line2, setLine2] = useState<string>(initLine2);
  // Title field starts focused to show character counter immediately
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isLine2Focus, setIsLine2Focus] = useState<boolean>(false);

  // Show error only when explicitly provided AND title is empty or only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onLine2Focus = () => {
    if (!readOnly) setIsLine2Focus(true);
  };

  const onBlur = () => setIsFocus(false);

  const onLine2Blur = () => setIsLine2Focus(false);

  // Prevent input beyond max length rather than truncating after — preserves user's cursor position
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateLine2 = (newLine2: string) => {
    if (newLine2.length > maxLengthLine2) return;
    setLine2(newLine2);
  };

  return (
    <div className="flex flex-col gap-2">
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
        {isFocus && <CharacterCounter current={title.length} max={maxLength} />}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="line2"
          value={line2}
          setValue={updateLine2}
          placeholder={placeholderLine2}
          readOnly={readOnly}
          onFocus={onLine2Focus}
          onBlur={onLine2Blur}
          textareaClassName="font-primary text-lg text-font-subtle"
        />
        {isLine2Focus && (
          <CharacterCounter current={line2.length} max={maxLengthLine2} />
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initLine2?: string;
  readOnly?: boolean;
  maxLength?: number;
  maxLengthLine2?: number;
  error?: string;
  placeholder?: string;
  placeholderLine2?: string;
}
