import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Start with focus indicator visible — matches typical form UX where character count shows immediately
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Only show error if error prop provided AND title is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    // Reject instead of truncating — prevents unexpected character loss
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Enforce same max length constraint on subtitle for consistency
    if (newSubtitle.length > maxLength) return;

    setSubtitle(newSubtitle);
  };

  return (
    <div className="relative">
      <div className="space-y-2">
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
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName="font-primary text-lg"
        />
      </div>
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
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
