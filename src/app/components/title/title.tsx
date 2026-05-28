import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

const DEFAULT_DESCRIPTION_MAX_LENGTH = 120;

export const Title = ({
  initTitle = "",
  initDescription = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  descriptionMaxLength = DEFAULT_DESCRIPTION_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  descriptionPlaceholder = "Write a description",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [description, setDescription] = useState<string>(initDescription);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const descriptionIsMaxLength =
    description.length >= descriptionMaxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  // Reset focus state when user leaves the field
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
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
      </div>
      <div className="relative">
        <TextareaAutosize
          name="description"
          value={description}
          setValue={updateDescription}
          placeholder={descriptionPlaceholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary text-sm",
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {isFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              descriptionIsMaxLength
                ? "text-font-danger"
                : "text-font-subtlest"
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
  initDescription?: string;
  readOnly?: boolean;
  maxLength?: number;
  descriptionMaxLength?: number;
  error?: string;
  placeholder?: string;
  descriptionPlaceholder?: string;
}
