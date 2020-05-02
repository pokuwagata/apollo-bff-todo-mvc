/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: task
// ====================================================

export interface task {
  __typename: "Task";
  id: string;
  name: string;
  status: TaskStatus;
  order: number;
}
