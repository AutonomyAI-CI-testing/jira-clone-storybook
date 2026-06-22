import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

const skeletonStyle = {
  borderRadius: "4px",
  background: "#c1c7d0",
  animation: "title-skeleton-pulse 1.5s ease-in-out infinite",
} as const;

export const Title = ({
  loading,
  disabled,
  initTitle = "",
  subtitle,
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isReadonly = readOnly || disabled;

  // Loading state with skeleton pulse animation
  if (loading) {
    return (
      <div id="testElem" style={{ padding: "8px 12px" }}>
        <style>{`
          @keyframes title-skeleton-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
        <div style={{ height: "2rem", width: "75%", marginBottom: "8px", ...skeletonStyle }} />
        <div style={{ height: "1rem", width: "50%", ...skeletonStyle }} />
      </div>
    );
  }

  const isMaxLengthReached = title.length >= maxLength;
  const hasError = error && (title.length === 0 || textAreOnlySpaces(title));

  const handleFocus = () => {
    if (!isReadonly) setIsFocused(true);
  };
  const handleBlur = () => setIsFocused(false);

  const handleTitleChange = (newTitle: string) => {
    // Prevent updates if readonly or exceeding hard limit
    if (isReadonly || newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  return (
    <div id="testElem" className={cx(disabled && "opacity-50 cursor-not-allowed")}>
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={handleTitleChange}
          placeholder={placeholder}
          readOnly={isReadonly}
          onFocus={handleFocus}
          onBlur={handleBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            hasError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {hasError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
      </div>
      <div className="mt-1 flex items-start justify-between px-3">
        {subtitle && (
          <p className="font-primary-light text-sm text-font-subtlest">
            {subtitle}
          </p>
        )}
        {/* Character counter only shown when focused to reduce visual noise */}
        {isFocused && !disabled && (
          <span
            className={cx(
              "shrink-0 font-primary-light text-sm",
              isMaxLengthReached ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  subtitle?: string;
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
