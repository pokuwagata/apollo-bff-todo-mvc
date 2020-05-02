/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Tasks
// ====================================================

export interface Tasks_state_tasks {
  __typename: "Task";
  id: string;
  name: string;
  status: TaskStatus;
  order: number;
}

export interface Tasks_state {
  __typename: "State";
  tasks: Tasks_state_tasks[];
}

export interface Tasks {
  state: Tasks_state;
}
