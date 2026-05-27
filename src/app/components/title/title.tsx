import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  disabled,
  loading,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSubtitle = DEFAULT_MAX_LENGTH,
  error,
  errorSubtitle,
  placeholder = "Write the title",
  placeholderSubtitle = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Show character count at max length in danger color
  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSubtitle = subtitle.length >= maxLengthSubtitle;
  // Only show error state if error message is provided and input is empty or whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireErrorSubtitle =
    errorSubtitle && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  // Only show character count and focus indicators when the component is interactive
  const onFocus = () => {
    if (!readOnly && !disabled && !loading) setIsFocus(true);
  };
  // Hide focus indicators when the input loses focus
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLengthSubtitle) return;

    setSubtitle(newSubtitle);
  };

  if (loading) {
    return (
      <div>
        <div className="relative mb-4">
          <div className="flex h-10 w-full items-center rounded-md bg-background-input animate-pulse">
            <div className="h-6 w-3/4 rounded bg-background-neutral-hovered" />
          </div>
        </div>
        <div className="relative">
          <div className="flex h-8 w-full items-center rounded-md bg-background-input animate-pulse">
            <div className="h-5 w-full rounded bg-background-neutral-hovered" />
          </div>
        </div>
      </div>
    );
  }

  // Combine disabled and readOnly states for consistent UI treatment
  const isDisabledOrReadOnly = disabled || readOnly;

  return (
    <div>
      <div className="relative mb-4">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={isDisabledOrReadOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            disabled && "opacity-60 cursor-not-allowed",
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
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={placeholderSubtitle}
          readOnly={isDisabledOrReadOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary text-base",
            disabled && "opacity-60 cursor-not-allowed",
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
          >
            {subtitle.length} / {maxLengthSubtitle}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  maxLength?: number;
  maxLengthSubtitle?: number;
  error?: string;
  errorSubtitle?: string;
  placeholder?: string;
  placeholderSubtitle?: string;
}
