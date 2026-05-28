import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  // Focus state is true on initial render — the component autofocuses on mount
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    // Limit character count but allow newlines — they don't count toward the limit
    // This enables multi-line titles while enforcing a character budget
    const charCountWithoutNewlines = newTitle.replace(/\n/g, "").length;
    if (charCountWithoutNewlines > maxLength) return;

    setTitle(newTitle);
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
        // Character counter displays only while focused to reduce visual clutter
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
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
