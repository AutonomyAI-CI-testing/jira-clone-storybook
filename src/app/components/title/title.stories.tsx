import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initTitle: {
      defaultValue: "Title",
      control: {
        type: "text",
      },
    },
    readOnly: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    maxLength: {
      defaultValue: 80,
      control: {
        type: "number",
      },
    },
    error: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
    subtitle: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "",
    placeholder: "Write the title",
  },
};

export const Filled: Story = {
  args: {
    initTitle: "Design System Documentation",
    placeholder: "Write the title",
  },
};

export const EditableInput: Story = {
  args: {
    initTitle: "Click to edit this title",
    readOnly: false,
    placeholder: "Enter title here",
  },
};

export const ReadOnlyMode: Story = {
  args: {
    initTitle: "Read only title",
    readOnly: true,
  },
};

export const ErrorStateEmpty: Story = {
  args: {
    initTitle: "",
    placeholder: "Write the title",
    error: "Title is required",
  },
};

export const ErrorStateBlank: Story = {
  args: {
    initTitle: "     ",
    placeholder: "Write the title",
    error: "Title cannot be only spaces",
  },
};

export const CharacterLimitWarning: Story = {
  args: {
    initTitle:
      "This is a very long title that is approaching the character limi",
    maxLength: 80,
    placeholder: "Write the title",
  },
};

export const CharacterLimitExceeded: Story = {
  args: {
    initTitle:
      "The maximum character limit has been set to just 30 characters in this.",
    maxLength: 30,
    placeholder: "Write the title",
  },
};

export const ShortMaxLength: Story = {
  args: {
    initTitle: "",
    placeholder: "Max 10 chars",
    maxLength: 10,
  },
};

export const WithShortSubtitle: Story = {
  args: {
    initTitle: "Design System Documentation",
    placeholder: "Write the title",
    subtitle: "A brief description",
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Design System Documentation",
    placeholder: "Write the title",
    subtitle:
      "This is a longer subtitle that provides more context about the title above and what it represents",
  },
};

export const ShowcaseSubtitles: Story = {
  render: () => (
    <div className="max-w-2xl space-y-12 p-8">
      <div>
        <h3 className="text-gray-500 mb-4 text-sm font-semibold">Default</h3>
        <Title initTitle="" placeholder="Write the title" />
      </div>
      <div>
        <h3 className="text-gray-500 mb-4 text-sm font-semibold">Filled</h3>
        <Title
          initTitle="Design System Documentation"
          placeholder="Write the title"
        />
      </div>
      <div>
        <h3 className="text-gray-500 mb-4 text-sm font-semibold">
          With Short Subtitle
        </h3>
        <Title
          initTitle="Design System Documentation"
          placeholder="Write the title"
          subtitle="A brief description"
        />
      </div>
      <div>
        <h3 className="text-gray-500 mb-4 text-sm font-semibold">
          With Long Subtitle
        </h3>
        <Title
          initTitle="Design System Documentation"
          placeholder="Write the title"
          subtitle="This is a longer subtitle that provides more context about the title above and what it represents"
        />
      </div>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="rounded-md border border-border-input p-4">
      <Title
        initTitle="Project Roadmap Q4"
        placeholder="Write the title"
        subtitle="Strategic planning document"
      />
    </div>
  ),
};

export const Ghost: Story = {
  render: () => (
    <div className="rounded-lg bg-elevation-surface-sunken p-6">
      <Title initTitle="" placeholder="Write the title" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="max-w-4xl space-y-12 p-8">
      <div>
        <h2 className="mb-6 text-2xl font-semibold">Title Component Variants</h2>
      </div>
      
      <div>
        <h3 className="mb-3 text-lg font-semibold text-gray-600">Outline</h3>
        <p className="mb-4 text-sm text-gray-500">Title inside a bordered container with subtitle</p>
        <div className="rounded-md border border-border-input p-4">
          <Title
            initTitle="Project Roadmap Q4"
            placeholder="Write the title"
            subtitle="Strategic planning document"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-gray-600">Ghost</h3>
        <p className="mb-4 text-sm text-gray-500">Empty title on a sunken/muted background</p>
        <div className="rounded-lg bg-elevation-surface-sunken p-6">
          <Title initTitle="" placeholder="Write the title" />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-gray-600">WithShortSubtitle</h3>
        <p className="mb-4 text-sm text-gray-500">Short subtitle for context</p>
        <div className="rounded-md border border-gray-200 p-4">
          <Title
            initTitle="Design System Documentation"
            placeholder="Write the title"
            subtitle="A brief description"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-gray-600">WithLongSubtitle</h3>
        <p className="mb-4 text-sm text-gray-500">Long subtitle providing more context</p>
        <div className="rounded-md border border-gray-200 p-4">
          <Title
            initTitle="Design System Documentation"
            placeholder="Write the title"
            subtitle="This is a longer subtitle that provides more context about the title above and what it represents"
          />
        </div>
      </div>
    </div>
  ),
};
