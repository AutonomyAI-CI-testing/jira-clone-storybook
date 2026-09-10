import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub } from "@app/stories/utils";
import { UserContextProvider } from "@app/store/user.store";
import { ProjectContextProvider } from "@app/ui/main/project";
import { userMock1 } from "@domain/user";
import { projectMock1 } from "@domain/project";
import { todoIssuesMock1, inProgressIssuesMock2 } from "@domain/issue";
import { IssuePanel } from "./issue-panel.view";

const meta: Meta<typeof IssuePanel> = {
  title: "Pages/Project/IssuePanel",
  component: IssuePanel,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) =>
      withRemixStub(
        <UserContextProvider user={userMock1}>
          <ProjectContextProvider project={projectMock1}>
            <Story />
          </ProjectContextProvider>
        </UserContextProvider>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof IssuePanel>;

export const NoComments: Story = {
  args: {
    issue: inProgressIssuesMock2[0],
  },
};

export const WithComments: Story = {
  args: {
    issue: todoIssuesMock1[0],
  },
};
