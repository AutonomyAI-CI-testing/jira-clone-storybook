import { Prisma } from "@prisma/client";

import { UserId } from "@domain/user/user";
import { Project, ProjectSummary, ProjectId } from "@domain/project/project";
import { Category, CategoryType } from "@domain/category/category";
import { Priority } from "@domain/priority/priority";
import { Sort, DEFAULT_SORT } from "@domain/filter/filter";
import { db } from "./db.server";
import { dnull } from "src/utils/dnull";

export const getProject = async (
  projectId: ProjectId,
  options?: GetProjectOptions
): Promise<Project | null> => {
  type PrismaSortType = Prisma.Enumerable<Prisma.IssueOrderByWithRelationInput>;

  const sortByDate: PrismaSortType = {
    createdAt: "desc",
  };
  const sortByPriority: PrismaSortType = {
    priority: {
      order: "desc",
    },
  };
  // SQLite orders NULLs first ascending, so undated issues need `nulls: "last"`
  // to sit at the bottom of a column instead of floating to the top.
  const sortByDueDate: PrismaSortType = {
    dueDate: {
      sort: "asc",
      nulls: "last",
    },
  };

  // Keyed by the closed set of sorts, so a new one without an ordering is a
  // type error rather than a silent fall-through.
  const sortOrders: Record<Sort, PrismaSortType> = {
    date: [sortByDate, sortByPriority],
    priority: [sortByPriority, sortByDate],
    dueDate: [sortByDueDate, sortByDate],
  };

  const orderBy = sortOrders[options?.sortIssuesBy || DEFAULT_SORT];

  const projectDb = await db.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      users: {
        orderBy: {
          name: "asc",
        },
      },
      categories: {
        include: {
          issues: {
            select: {
              id: true,
              name: true,
              priority: true,
              dueDate: true,
              createdAt: true,
              reporter: true,
              asignee: true,
            },
            orderBy: orderBy,
          },
        },
      },
    },
  });

  if (!projectDb) {
    return null;
  }

  const project: Project = {
    id: projectDb.id,
    users: projectDb.users.map(dnull),
    name: projectDb.name,
    description: projectDb.description || "",
    image: projectDb.image,
    categories: projectDb.categories.map((category) => ({
      id: category.id,
      name: category.name,
      type: category.type as CategoryType,
      order: category.order,
      issues: category.issues.map((issue) => ({
        id: issue.id,
        name: issue.name,
        priority: issue.priority as Priority,
        dueDate: issue.dueDate ? issue.dueDate.getTime() : undefined,
        reporter: dnull(issue.reporter),
        asignee: dnull(issue.asignee),
        comments: [],
        createdAt: issue.createdAt.getDate(),
        updatedAt: issue.createdAt.getDate(),
      })),
    })),
    createdAt: projectDb.createdAt.getDate(),
    updatedAt: projectDb.updatedAt.getDate(),
  };

  return project;
};

interface GetProjectOptions {
  sortIssuesBy: Sort;
}

export const getProjectSummary = async (projectId: ProjectId): Promise<ProjectSummary | null> => {
  const projectSummaryDb = await db.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      createdAt: true,
    },
  });

  if (!projectSummaryDb) {
    return null;
  }

  const projectSummary: ProjectSummary = {
    id: projectSummaryDb.id,
    name: projectSummaryDb.name,
    description: projectSummaryDb.description || "",
    image: projectSummaryDb.image,
    createdAt: projectSummaryDb.createdAt.getDate(),
  };

  return projectSummary;
};

export const getProjectsSummary = async (userId: UserId): Promise<ProjectSummary[]> => {
  const projectsSummaryDb = await db.project.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const projectsSummary: ProjectSummary[] = projectsSummaryDb.map((projectSummaryDb) => ({
    id: projectSummaryDb.id,
    name: projectSummaryDb.name,
    image: projectSummaryDb.image,
    description: projectSummaryDb.description || "",
    createdAt: projectSummaryDb.createdAt.getDate(),
  }));

  return projectsSummary;
};

type CreateProjectInput = {
  name: string;
  description: string;
  image: string;
  userIds: UserId[];
  categories: Omit<Category, "id">[];
};
export const createProject = async (project: CreateProjectInput): Promise<void> => {
  await db.project.create({
    data: {
      name: project.name,
      description: project.description,
      image: project.image,
      categories: {
        create: project.categories.map((category) => ({
          name: category.name,
          type: category.type,
          order: category.order,
        })),
      },
      users: {
        connect: project.userIds.map((userId) => ({ id: userId })),
      },
    },
    include: {
      categories: true,
      users: true,
    },
  });
};

export const deleteProject = async (projectId: ProjectId): Promise<void> => {
  await db.project.delete({
    where: {
      id: projectId,
    },
  });
};
