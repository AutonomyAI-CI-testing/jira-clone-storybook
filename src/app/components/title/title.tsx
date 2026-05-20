import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;
const DEFAULT_DESCRIPTION_MAX_LENGTH = 200;

/**
 * Check if a field should show validation error.
 * Only show error when error message is provided and field is empty or contains only whitespace.
 */
const shouldShowError = (value: string, errorMessage?: string): boolean => {
  if (!errorMessage) return false;
  return value.length === 0 || textAreOnlySpaces(value);
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  initDescription = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  descriptionMaxLength = DEFAULT_DESCRIPTION_MAX_LENGTH,
  error,
  subtitleError,
  descriptionError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
  descriptionPlaceholder = "Write the description",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [description, setDescription] = useState<string>(initDescription);
  const [isTitleFocus, setIsTitleFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);
  const [isDescriptionFocus, setIsDescriptionFocus] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const isDescriptionMaxLength = description.length >= descriptionMaxLength;

  const requireTitleError = shouldShowError(title, error);
  const requireSubtitleError = shouldShowError(subtitle, subtitleError);
  const requireDescriptionError = shouldShowError(
    description,
    descriptionError
  );

  /**
   * Manage exclusive focus state — only one field shows character count at a time.
   * This prevents visual clutter and makes it clear which field is being edited.
   */
  const setFieldFocus = (field: "title" | "subtitle" | "description") => {
    if (readOnly) return;

    setIsTitleFocus(field === "title");
    setIsSubtitleFocus(field === "subtitle");
    setIsDescriptionFocus(field === "description");
  };

  /**
   * Enforce max length by rejecting updates that exceed the limit.
   * This provides hard validation rather than soft warnings.
   */
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  const updateDescription = (newDescription: string) => {
    if (newDescription.length > descriptionMaxLength) return;
    setDescription(newDescription);
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
          onFocus={() => setFieldFocus("title")}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            requireTitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {requireTitleError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isTitleFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isTitleMaxLength ? "text-font-danger" : "text-font-subtlest"
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
          onFocus={() => setFieldFocus("subtitle")}
          textareaClassName={cx(
            "font-primary-regular text-lg text-font-subtle",
            requireSubtitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireSubtitleError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {subtitleError}
          </span>
        )}
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
      <div className="relative">
        <TextareaAutosize
          name="description"
          value={description}
          setValue={updateDescription}
          placeholder={descriptionPlaceholder}
          readOnly={readOnly}
          onFocus={() => setFieldFocus("description")}
          textareaClassName={cx(
            "font-primary-regular text-base text-font-subtler",
            requireDescriptionError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireDescriptionError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {descriptionError}
          </span>
        )}
        {isDescriptionFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isDescriptionMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {description.length} / {descriptionMaxLength}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  initDescription?: string;
  readOnly?: boolean;
  maxLength?: number;
  subtitleMaxLength?: number;
  descriptionMaxLength?: number;
  error?: string;
  subtitleError?: string;
  descriptionError?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
  descriptionPlaceholder?: string;
}
