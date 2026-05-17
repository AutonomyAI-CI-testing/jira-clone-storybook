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
  placeholder2 = "Write the second title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const totalLength = title.length + title2.length;
  const isMaxLength = totalLength >= maxLength;
  // Show error only when both title fields are empty or contain only spaces
  const requireError =
    error &&
    (title.length === 0 || textAreOnlySpaces(title)) &&
    (title2.length === 0 || textAreOnlySpaces(title2));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  // Enforce maxLength constraint across both title fields combined
  const updateTitle = (newTitle: string) => {
    if (newTitle.length + title2.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateTitle2 = (newTitle2: string) => {
    if (title.length + newTitle2.length > maxLength) return;

    setTitle2(newTitle2);
  };

  const textareaClassName = cx(
    "font-primary-black text-2xl",
    requireError &&
      "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
  );

  return (
    <div className="relative">
      <TextareaAutosize
        name="title"
        value={title}
        setValue={updateTitle}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={textareaClassName}
        autofocus
      />
      <TextareaAutosize
        name="title2"
        value={title2}
        setValue={updateTitle2}
        placeholder={placeholder2}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={textareaClassName}
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
          {totalLength} / {maxLength}
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
