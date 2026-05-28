import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

/**
 * A multi-input title component with optional subtitle.
 * Tracks focus state independently for title and subtitle to display character counters.
 * Validates title against error condition (required + non-empty) when error prop is provided.
 * Supports three visual variants: default, outline, and ghost.
 */
export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initSubtitle = "",
  subtitlePlaceholder = "Write the subtitle",
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  variant = "default",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Only track focus when not read-only to avoid showing UI controls when content is static
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };

  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;

    setSubtitle(newSubtitle);
  };

  return (
    <div className="relative">
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
            getVariantTitleStyles(variant),
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

      <div className="relative mt-3">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onSubtitleFocus}
          onBlur={onSubtitleBlur}
          textareaClassName={cx(
            "font-primary text-lg",
            getVariantSubtitleStyles(variant)
          )}
        />
        {isSubtitleFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isSubtitleMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {subtitle.length} / {subtitleMaxLength}
          </span>
        )}
      </div>
    </div>
  );
};

/**
 * Returns CSS classes for the title textarea based on visual variant.
 * - default: No additional styling
 * - outline: Brand-colored border with rounded corners
 * - ghost: No border, transparent background for minimal appearance
 */
const getVariantTitleStyles = (
  variant: "default" | "outline" | "ghost"
): string => {
  if (variant === "outline") {
    return "border border-2 border-border-brand rounded-md";
  }

  if (variant === "ghost") {
    return "border-none bg-transparent";
  }

  return "";
};

/**
 * Returns CSS classes for the subtitle textarea based on visual variant.
 * Mirrors title variant styling for visual consistency.
 */
const getVariantSubtitleStyles = (
  variant: "default" | "outline" | "ghost"
): string => {
  if (variant === "outline") {
    return "border border-2 border-border-brand rounded-md";
  }

  if (variant === "ghost") {
    return "border-none bg-transparent";
  }

  return "";
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  initSubtitle?: string;
  subtitlePlaceholder?: string;
  subtitleMaxLength?: number;
  variant?: "default" | "outline" | "ghost";
}
