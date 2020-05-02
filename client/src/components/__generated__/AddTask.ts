/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddTaskInput, TaskStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddTask
// ====================================================

export interface AddTask_addTask {
  __typename: "AddTaskPayload";
  clientMutationId: string | null;
}

export interface AddTask {
  addTask: AddTask_addTask | null;
}

export interface AddTaskVariables {
  input: AddTaskInput;
}
