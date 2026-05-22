import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_MAX_LENGTH_SECONDARY = 80;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSubtitle = DEFAULT_MAX_LENGTH_SECONDARY,
  error,
  errorSubtitle,
  placeholder = "Write the title",
  placeholderSubtitle = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSubtitle = subtitle.length >= maxLengthSubtitle;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireErrorSubtitle =
    errorSubtitle && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLengthSubtitle) return;

    setSubtitle(newSubtitle);
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
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {title.length} / {maxLength}
        </span>
      )}
      <TextareaAutosize
        name="subtitle"
        value={subtitle}
        setValue={updateSubtitle}
        placeholder={placeholderSubtitle}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-light text-sm",
          requireErrorSubtitle &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
      />
      {requireErrorSubtitle && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {errorSubtitle}
        </span>
      )}
      {isFocus && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isMaxLengthSubtitle ? "text-font-danger" : "text-font-subtlest"
          )}
          style={{ top: "100%" }}
        >
          {subtitle.length} / {maxLengthSubtitle}
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
  maxLengthSubtitle?: number;
  error?: string;
  errorSubtitle?: string;
  placeholder?: string;
  placeholderSubtitle?: string;
}
