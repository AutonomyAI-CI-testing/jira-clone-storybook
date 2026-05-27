import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Add a subtitle",
  variant = "default",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Track focus to show/hide character counter and other focus-dependent UI
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Show error state only if error message exists AND title is empty or whitespace-only
  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Apply variant-specific styles: outline with border/background, ghost with reduced color, or default
  const getTitleClassName = (): string => {
    const baseClasses = "font-primary-black text-2xl";
    switch (variant) {
      case "outline":
        return cx(
          baseClasses,
          "border-2 border-border-brand rounded-md px-3 py-2",
          "bg-background-subtlest"
        );
      case "ghost":
        return cx(baseClasses, "text-font-subtle", "bg-transparent");
      default:
        return baseClasses;
    }
  };

  // Apply variant-specific styles to subtitle: muted colors for outline/ghost variants
  const getSubtitleClassName = (): string => {
    const baseClasses = "font-primary-light text-lg";
    switch (variant) {
      case "outline":
        return cx(baseClasses, "text-font-subtle");
      case "ghost":
        return cx(baseClasses, "text-font-subtlest");
      default:
        return baseClasses;
    }
  };

  // Only update focus state if component is not in read-only mode
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  // Reset focus state to hide character counter and other focus-dependent UI
  const onBlur = () => setIsFocus(false);

  // Update title only if within max length to prevent accidental overflow
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Update subtitle only if within max length
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
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
            getTitleClassName(),
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
      <TextareaAutosize
        name="subtitle"
        value={subtitle}
        setValue={updateSubtitle}
        placeholder={subtitlePlaceholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={getSubtitleClassName()}
      />
    </div>
  );
};

interface TitleProps {
  /** Initial title text */
  initTitle?: string;
  /** Initial subtitle text */
  initSubtitle?: string;
  /** Disable editing when true */
  readOnly?: boolean;
  /** Maximum characters allowed for title (default: 80) */
  maxLength?: number;
  /** Maximum characters allowed for subtitle (default: 120) */
  subtitleMaxLength?: number;
  /** Error message to display when title is invalid */
  error?: string;
  /** Placeholder text for title input */
  placeholder?: string;
  /** Placeholder text for subtitle input */
  subtitlePlaceholder?: string;
  /** Visual style variant: default (plain), outline (bordered), or ghost (muted) */
  variant?: "default" | "outline" | "ghost";
}
