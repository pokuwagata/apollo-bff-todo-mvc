import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { task } from "./__generated__/task";
import { TaskStatus } from "../../__generated__/globalTypes";
import { taskFragment } from "./Main";
import { UpdateTask, UpdateTaskVariables } from './__generated__/UpdateTask';

type TaskRowProps = task;

const isChecked = (status: TaskStatus) => {
  return status === TaskStatus.COMPLETED
}

const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) @client {
      clientMutationId
      task {
        ...task
      }
    }
  }
  ${taskFragment} # FIXME: 依存方向
`

export const TaskRow: React.FC<TaskRowProps> = (props) => {
  const [updateTask, error] = useMutation<UpdateTask, UpdateTaskVariables>(UPDATE_TASK)
  return (
    <div>
      <input
        type="checkbox"
        id={props.id}
        checked={isChecked(props.status)}
        onChange={()=>updateTask}
      ></input>
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
};
