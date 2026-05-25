import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initSubTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subTitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subTitle, setSubTitle] = useState<string>(initSubTitle);
  // Start with focus=true so character counter is visible on mount
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Show error only if text is empty or whitespace-only (not just if max length reached)
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const isMaxLength = title.length >= maxLength;

  // Don't show counter if read-only to avoid visual feedback for non-editable state
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  // Prevent updates that exceed max length
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Prevent updates that exceed max length
  const updateSubTitle = (newSubTitle: string) => {
    if (newSubTitle.length > maxLength) return;
    setSubTitle(newSubTitle);
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
        {/* Character counter shown only while focused to reduce visual clutter */}
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
      <TextareaAutosize
        name="subtitle"
        value={subTitle}
        setValue={updateSubTitle}
        placeholder={subTitlePlaceholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName="font-primary-light text-base"
      />
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSubTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  subTitlePlaceholder?: string;
}
