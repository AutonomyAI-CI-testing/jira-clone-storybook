import { useState, useEffect, useRef, useCallback } from "react";
import { Form, useNavigate, useFetcher, useActionData } from "@remix-run/react";
import * as Dialog from "@app/components/dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { User } from "@domain/user";
import { Project } from "@domain/project";
import { ActionData as ProjectActionData } from "@app/routes/__main/projects/new";
import { useUserStore } from "@app/store/user.store";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";
import { Title } from "@app/components/title";
import { Description } from "@app/components/description";
import { Kbd } from "@app/components/kbd-placeholder";
import { Spinner } from "@app/components/spinner";
import { CreateProjectPanelHeader } from "./create-project-panel-header";

export const CreateProjectPanelView = ({
  project,
  users,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const actionData = useActionData() as ProjectActionData;
  const { user: loggedUser } = useUserStore();

  const postData = useCallback(
    (formTarget: HTMLFormElement) => {
      const formData = new FormData(formTarget);
      formData.set("_action", "upsert");

      fetcher.submit(formData, {
        method: "post",
      });
    },
    [fetcher]
  );

  const handleProgrammaticSubmit = useCallback((): void => {
    if (formRef.current) {
      postData(formRef.current);
    }
  }, [postData]);

  const handleProgrammaticClose = (): void => {
    setIsOpen(false);
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleProgrammaticSubmit();
      }
    },
    [handleProgrammaticSubmit]
  );

  useEffect(() => {
    const isErrors =
      actionData?.errors && Object.keys(actionData?.errors).length > 0;

    if (isErrors) {
      document
        .getElementById("project-panel-overlay")
        ?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [actionData]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => navigate("/projects"), 300);
    }
  }, [isOpen, navigate]);

  return (
    <>
      <Dialog.Root open={true}>
        <Dialog.Portal container={portalContainer}>
          <Dialog.Overlay
            id="project-panel-overlay"
            className={isOpen ? "" : "bg-opacity-0"}
          >
            <Dialog.Content
              onEscapeKeyDown={handleProgrammaticClose}
              onPointerDownOutside={handleProgrammaticClose}
              className={cx(
                "max-w-[600px]",
                !isOpen && "translate-y-[10px] opacity-0"
              )}
            >
              <CreateProjectPanelHeader
                id={project?.id || "Create new project"}
              />
              <Form method="post" ref={formRef}>
                <div className="mb-6">
                  <Dialog.Title className="-ml-3 mb-8 mt-5">
                    <Title
                      initTitle={project?.name || ""}
                      maxLength={30}
                      error={actionData?.errors?.name}
                    />
                  </Dialog.Title>
                  <p className="font-primary-black">Description</p>
                  <div className="-ml-3 mb-5">
                    <Description initDescription={project?.description || ""} />
                  </div>
                  <ul className="space-y-1.5">
                    {users.map((user) => (
                      <li
                        key={user.id}
                        className="-mx-2 rounded-lg px-2 outline outline-2 outline-transparent duration-75 ease-linear hover:bg-background-brand-subtlest hover:outline-border-brand"
                      >
                        <label
                          htmlFor={`checkbox-${user.id}`}
                          className="flex w-full cursor-pointer items-center justify-between gap-4 py-3"
                        >
                          <span className="flex items-center gap-4">
                            <UserAvatar {...user} size={48} />
                            <span>{user.name}</span>
                          </span>
                          <Checkbox.Root
                            id={`checkbox-${user.id}`}
                            className="h-[36px] w-[36px] rounded-md bg-background-input"
                            name="user"
                            value={user.id}
                            defaultChecked={user.id === loggedUser?.id}
                          >
                            <Checkbox.Indicator className="flex h-[36px] w-[36px] rounded-md bg-background-brand-bold duration-150 ease-in flex-center">
                              <BsCheckLg
                                size={16}
                                className="text-font-inverse"
                              />
                            </Checkbox.Indicator>
                          </Checkbox.Root>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 grid grid-cols-3 items-end justify-center">
                  <span className="font-primary-light text-2xs text-font-subtlest text-opacity-80">
                    Press <Kbd>Shift</Kbd> + <Kbd>S</Kbd> to accept
                  </span>
                  <div className="flex justify-center">
                    <Button
                      color="primary"
                      type="submit"
                      name="_action"
                      value="upsert"
                      className="w-fit gap-2 px-8 py-2 font-primary-bold text-lg"
                      disabled={fetcher.state !== "idle"}
                      aria-label="Accept changes"
                    >
                      {fetcher.state !== "idle" ? (
                        <>
                          Submitting
                          <Spinner />
                        </>
                      ) : (
                        "Accept"
                      )}
                    </Button>
                  </div>
                  <span className="justify-self-end font-primary-light text-2xs text-font-subtlest text-opacity-80">
                    Press <Kbd>Esc</Kbd> to close
                  </span>
                </div>
              </Form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
      {/* To avoid hydration issues because a missmatch with the server*/}
      <div
        ref={setPortalContainer}
        className="fixed left-0 top-0 z-50 h-full w-full"
      />
    </>
  );
};

interface Props {
  project?: Project;
  users: User[];
}
