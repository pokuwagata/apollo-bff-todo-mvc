/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateTaskInput, TaskStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateTask
// ====================================================

export interface UpdateTask_updateTask_task {
  __typename: "Task";
  id: string;
  name: string;
  status: TaskStatus;
  order: number;
}

export interface UpdateTask_updateTask {
  __typename: "UpdateTaskPayload";
  clientMutationId: string | null;
  task: UpdateTask_updateTask_task;
}

export interface UpdateTask {
  updateTask: UpdateTask_updateTask | null;
}

export interface UpdateTaskVariables {
  input: UpdateTaskInput;
}
