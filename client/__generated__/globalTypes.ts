/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum TaskStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

export interface AddTaskInput {
  clientMutationId: string;
  text: string;
}

export interface UpdateTaskInput {
  clientMutationId: string;
  task: Task;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
