import { useCallback, useEffect, useRef, useState } from "react";
import { useFetcher, useNavigate, useRevalidator } from "react-router";
import { AiOutlinePlus } from "react-icons/ai";
import cx from "classix";
import { toast } from "react-toastify";
import { Category } from "@domain/category/category";
import { IssueId } from "@domain/issue/issue";
import { Button } from "@app/components/button/button";
import { Kbd } from "@app/components/kbd-placeholder/kbd-placeholder";
import { useUserStore } from "@app/store/user.store";
import { useSortBy } from "@app/hooks/useSortBy";
import { QuickCreateActionData } from "@app/routes/__main/projects.$projectId/board";
import { categoryChipClass } from "../category-chip";
import { Spinner } from "../issue-panel/spinner";

/**
 * The board's floating create button. It stays reachable wherever the board is
 * scrolled to, and it creates the issue straight into the column you pick —
 * without opening the issue panel.
 */
export const QuickCreate = ({ categories }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [title, setTitle] = useState<string>("");
  const [createdIssueId, setCreatedIssueId] = useState<IssueId>();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fetcher = useFetcher<QuickCreateActionData>();
  const { revalidate } = useRevalidator();
  const navigate = useNavigate();
  const { user } = useUserStore();
  const sortBy = useSortBy();

  const isSubmitting = fetcher.state !== "idle";
  const error = fetcher.data?.errors?.name;

  // Clear the form once the issue exists. Adjusting state during render, the
  // pattern this repo uses instead of calling setState inside an effect.
  if (fetcher.data?.id && fetcher.data.id !== createdIssueId) {
    setCreatedIssueId(fetcher.data.id);
    setTitle("");
    setSelectedCategory(undefined);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!createdIssueId) return;

    toast.success("Issue created successfully");
    revalidate();
  }, [createdIssueId, revalidate]);

  const close = useCallback((): void => {
    setIsOpen(false);
    setSelectedCategory(undefined);
    setTitle("");
  }, []);

  const toggle = (): void => {
    if (isOpen) {
      close();
      return;
    }

    setIsOpen(true);
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  const onPointerDown = useCallback(
    (e: MouseEvent): void => {
      const container = containerRef.current;

      if (container && !container.contains(e.target as Node)) {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onPointerDown);
    };
  }, [isOpen, onKeyDown, onPointerDown]);

  useEffect(() => {
    if (selectedCategory) {
      inputRef.current?.focus();
    }
  }, [selectedCategory]);

  const backToCategories = (): void => {
    setSelectedCategory(undefined);
    setTitle("");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!selectedCategory) return;

    fetcher.submit(
      {
        _action: "createIssue",
        title,
        categoryId: selectedCategory.id,
        reporterId: user.id,
      },
      {
        method: "post",
      }
    );
  };

  const openFullForm = (): void => {
    close();
    navigate(sortBy ? `issue/new?sortBy=${sortBy}` : "issue/new");
  };

  return (
    <div
      ref={containerRef}
      className="absolute bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      {isOpen &&
        (selectedCategory ? (
          <form
            onSubmit={handleSubmit}
            className="w-[240px] rounded-md border border-border bg-elevation-surface-overlay p-2 shadow-md"
          >
            <div className="flex items-center justify-between gap-2 px-1 pb-2">
              <span className="font-primary-light text-2xs uppercase text-font-subtlest">
                New issue
              </span>
              <span
                className={cx(
                  "flex w-fit items-center rounded px-1 py-0.5 text-2xs uppercase",
                  categoryChipClass(selectedCategory.type)
                )}
              >
                {selectedCategory.name}
              </span>
            </div>
            <input
              ref={inputRef}
              value={title}
              onChange={handleTitleChange}
              placeholder="What needs doing?"
              aria-label="Issue title"
              className={cx(
                "w-full rounded-md border-none bg-background-input p-2 text-sm text-font",
                "outline-2 outline-border-brand focus-visible:bg-background-input-pressed",
                "placeholder:text-font-subtlest"
              )}
            />
            {error && (
              <p className="mt-1 font-primary-light text-sm text-font-danger">
                {error}
              </p>
            )}
            <div className="mt-2 flex items-center gap-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    Creating
                    <Spinner />
                  </>
                ) : (
                  "Create"
                )}
              </Button>
              <Button
                type="button"
                color="neutral"
                variant="text"
                onClick={backToCategories}
              >
                Back
              </Button>
            </div>
          </form>
        ) : (
          <div className="w-[240px] rounded-md border border-border bg-elevation-surface-overlay p-1 shadow-md">
            <p className="px-2 pb-1 pt-2 font-primary-light text-2xs uppercase text-font-subtlest">
              Create issue in
            </p>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="flex w-full cursor-pointer items-center rounded px-2 py-1.5 text-left hover:bg-background-neutral"
              >
                <span
                  className={cx(
                    "flex w-fit items-center rounded px-1 py-0.5 text-2xs uppercase",
                    categoryChipClass(category.type)
                  )}
                >
                  {category.name}
                </span>
              </button>
            ))}
            <div className="my-1 h-px bg-border" />
            <button
              type="button"
              onClick={openFullForm}
              className="flex w-full cursor-pointer items-center justify-between gap-2 rounded px-2 py-1.5 text-left text-sm text-font-subtle hover:bg-background-neutral"
            >
              Open the full form
              <span className="flex gap-1">
                <Kbd>Shift</Kbd>
                <Kbd>N</Kbd>
              </span>
            </button>
          </div>
        ))}
      <button
        type="button"
        aria-label="Create issue"
        aria-expanded={isOpen}
        onClick={toggle}
        className={cx(
          "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-overlay",
          "bg-background-brand-bold text-font-inverse",
          "hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        )}
      >
        <AiOutlinePlus size={24} />
      </button>
    </div>
  );
};

interface Props {
  categories: Category[];
}
