import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Title component with optional subtitle field.
 * Supports character count limiting and displays counts only when focused.
 * Error message is shown only when title is empty/whitespace and error prop is provided.
 */

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
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [focusedField, setFocusedField] = useState<"title" | "subtitle" | null>(
    "title"
  );

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= maxLength;
  // Show error only if an error message is provided AND the title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Track which field is focused to conditionally display character counts
  const onFocus = (field: "title" | "subtitle") => () => {
    if (!readOnly) {
      setIsFocus(true);
      setFocusedField(field);
    }
  };
  const onBlur = () => setIsFocus(false);

  // Enforce max length by preventing updates that exceed the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  // Enforce max length by preventing updates that exceed the limit
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLength) return;

    setSubtitle(newSubtitle);
  };

  // Render title and subtitle fields stacked vertically with character counts shown only when focused
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={onFocus("title")}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {/* Display error message only for title field when validation fails */}
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {/* Show character count only when title field is focused, highlighted in red when at max length */}
        {isFocus && focusedField === "title" && (
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
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onFocus("subtitle")}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-light text-base",
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {/* Show character count only when subtitle field is focused, highlighted in red when at max length */}
        {isFocus && focusedField === "subtitle" && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isSubtitleMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {subtitle.length} / {maxLength}
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
  maxLength?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
