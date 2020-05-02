/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: AppState
// ====================================================

export interface AppState_state_tasks {
  __typename: "Task";
  id: string;
  name: string;
  status: TaskStatus;
  order: number;
}

export interface AppState_state {
  __typename: "State";
  tasks: AppState_state_tasks[];
}

export interface AppState {
  state: AppState_state;
}
