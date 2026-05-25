import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const TEXTAREA_CLASS_NAME = "font-primary-black text-2xl";

export const Title = ({
  initTitle = "",
  initTitleLine2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  placeholderLine2 = "Write the title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [titleLine2, setTitleLine2] = useState<string>(initTitleLine2);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Determine if the title has reached max length for styling the counter
  const isMaxLength = title.length >= maxLength;
  // Only show error if an error message exists and the title is empty or only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  // Hide character counter when focus is lost
  const onBlur = () => setIsFocus(false);

  // Enforce max length by silently rejecting updates that exceed the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  // Apply same max length enforcement to the second title line
  const updateTitleLine2 = (newTitleLine2: string) => {
    if (newTitleLine2.length > maxLength) return;

    setTitleLine2(newTitleLine2);
  };

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
        textareaClassName={cx(
          TEXTAREA_CLASS_NAME,
          requireError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
        autofocus
      />
      <TextareaAutosize
        name="titleLine2"
        value={titleLine2}
        setValue={updateTitleLine2}
        placeholder={placeholderLine2}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          TEXTAREA_CLASS_NAME,
          requireError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
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
          {title.length} / {maxLength}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initTitleLine2?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  placeholderLine2?: string;
}
