import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

interface TitleProps {
  loading?: boolean;
  disabled?: boolean;
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}

/**
 * A configurable title component with support for:
 * - Real-time character counting and length validation
 * - Inline error states
 * - Loading skeletons
 * - Optional subtitles
 * - Read-only and disabled modes
 */
export const Title = ({
  subtitle,
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  loading,
  disabled,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly && !disabled && !loading) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  // Title character limit is controlled by maxLength prop.
  // We keep the state synchronized with the input and enforce the limit during update.
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  return (
    <div
      id="testElem"
      className={cx(disabled && "opacity-50 cursor-not-allowed")}
    >
      <div className="relative">
        {loading ? (
          <TitleSkeleton />
        ) : (
          <>
            <TextareaAutosize
              name="title"
              value={title}
              setValue={updateTitle}
              placeholder={placeholder}
              readOnly={readOnly || disabled || loading}
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
            {isFocus && !disabled && !loading && (
              <div className="flex justify-end mt-1">
                <span
                  className={cx(
                    "font-primary-light text-sm",
                    isMaxLength ? "text-font-danger" : "text-font-subtlest"
                  )}
                >
                  {title.length} / {maxLength}
                </span>
              </div>
            )}
          </>
        )}
      </div>
    {subtitle && (
      <p className="mt-1 text-sm font-primary-light text-font-subtlest">
        {subtitle}
      </p>
    )}
    </div>
  );
};

/**
 * Skeleton component to show during loading state.
 * Matches the layout of the Title and character counter to prevent layout shift.
 */
const TitleSkeleton = () => (
  <>
    <div
      className="animate-pulse rounded"
      style={{ backgroundColor: "#94a3b8", height: "2.5rem", width: "100%" }}
    />
    <div
      className="animate-pulse rounded"
      style={{
        backgroundColor: "#94a3b8",
        height: "0.75rem",
        width: "4rem",
        marginLeft: "auto",
        marginTop: "0.25rem",
      }}
    />
  </>
);
