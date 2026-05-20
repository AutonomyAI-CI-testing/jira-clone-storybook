import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const Spinner = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="mr-2 inline-block h-5 w-5 animate-spin fill-icon"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentBaseColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  disabled,
  loading,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Character limit reached indicators for styling
  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  
  // Show error only when title is empty or contains only spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    // Prevent focus state when component is in read-only, disabled, or loading state
    if (!readOnly && !disabled && !loading) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    // Prevent exceeding max length
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Prevent exceeding subtitle max length
    if (newSubtitle.length > subtitleMaxLength) return;

    setSubtitle(newSubtitle);
  };

  const onSubtitleFocus = () => {
    // Prevent focus state when component is in read-only, disabled, or loading state
    if (!readOnly && !disabled && !loading) setIsSubtitleFocus(true);
  };

  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  return (
    <div className={cx("space-y-2", (disabled || loading) && "opacity-60")}>
      {loading && (
        <div className="mb-2 flex items-center">
          <Spinner />
          <span className="font-primary-light text-sm text-font-subtlest">
            Loading...
          </span>
        </div>
      )}
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly || loading}
          disabled={disabled}
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
        {/* Show character counter only when title field is focused */}
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
          placeholder={subtitlePlaceholder}
          readOnly={readOnly || loading}
          disabled={disabled}
          onFocus={onSubtitleFocus}
          onBlur={onSubtitleBlur}
          textareaClassName="font-primary-light text-lg text-font-subtlest"
        />
        {/* Show character counter only when subtitle field is focused */}
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

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  maxLength?: number;
  subtitleMaxLength?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
