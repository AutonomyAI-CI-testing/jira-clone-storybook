import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Enforces a maximum character limit on input text.
 * Returns early if the new text exceeds the limit, preventing the update.
 */
const enforceMaxLength = (
  newText: string,
  maxLength: number,
  onUpdate: (text: string) => void
): void => {
  if (newText.length > maxLength) return;
  onUpdate(newText);
};

export const Title = ({
  initTitle = "",
  initTitle2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  placeholder2 = "Write the second line",
}: TitleProps): JSX.Element => {
  // State management
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  // Validation flags
  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  // Show error only if an error message is provided AND the primary title is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Focus/blur handlers control visibility of the character count indicator
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onFocus2 = () => {
    if (!readOnly) setIsFocus2(true);
  };
  const onBlur = () => setIsFocus(false);
  const onBlur2 = () => setIsFocus2(false);

  const updateTitle = (newTitle: string) => {
    enforceMaxLength(newTitle, maxLength, setTitle);
  };

  const updateTitle2 = (newTitle: string) => {
    enforceMaxLength(newTitle, maxLength, setTitle2);
  };

  return (
    <div className="space-y-2">
      {/* Primary title field with error display and character counter */}
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
            // Apply red outline when error is present
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {/* Error message shown when primary field is empty/whitespace and error is provided */}
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {/* Character counter shown on focus, changes color when at limit */}
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
      {/* Secondary title field with character counter */}
      <div className="relative">
        <TextareaAutosize
          name="title2"
          value={title2}
          setValue={updateTitle2}
          placeholder={placeholder2}
          readOnly={readOnly}
          onFocus={onFocus2}
          onBlur={onBlur2}
          textareaClassName="font-primary-black text-2xl"
          autofocus={false}
        />
        {/* Character counter shown on focus, changes color when at limit */}
        {isFocus2 && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLength2 ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title2.length} / {maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

/**
 * Props for the Title component.
 *
 * Manages two textarea fields for a primary title and secondary line of text.
 * Enforces character limits on both fields and displays validation errors on the primary field.
 * Character counters are shown on focus and change color when the limit is approached.
 */
interface TitleProps {
  /** Initial value for the primary title field */
  initTitle?: string;
  /** Initial value for the secondary title field */
  initTitle2?: string;
  /** If true, both fields are non-editable */
  readOnly?: boolean;
  /** Maximum number of characters allowed in both fields (default: 80) */
  maxLength?: number;
  /** Error message to display below the primary field */
  error?: string;
  /** Placeholder text for the primary title field */
  placeholder?: string;
  /** Placeholder text for the secondary title field */
  placeholder2?: string;
}
