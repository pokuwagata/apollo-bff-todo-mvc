import React from "react";
import gql from 'graphql-tag';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { AddTask, AddTaskVariables } from "./__generated__/AddTask";
import { TaskStatus } from "../../__generated__/globalTypes";
import { Tasks } from "./__generated__/Tasks";

export const taskFragment = gql`
  fragment task on Task {
    id
    name
    status
    order
  }
`;

const GET_TASKS = gql`
  query Tasks {
    state @client {
      tasks {
        ...task
      }
    }
  }
  ${taskFragment}
`;

const ADD_TASK = gql`
  mutation AddTask($input: AddTaskInput!) {
    addTask(input: $input) @client {
      clientMutationId
      task {
        ...task
      }
    }
  }
  ${taskFragment}
`;

export const Main: React.FC = () => {
  const [text, setText] = React.useState("");
  const { loading, error, data } = useQuery<Tasks>(GET_TASKS);
  const [addTask, { error: mutationError }] = useMutation<
    AddTask,
    AddTaskVariables
  >(ADD_TASK);

  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <div>
      <h1>todos</h1>
      {mutationError && <p>`Error! ${mutationError.message}`</p>}
      <input
        type="text"
        style={{ width: "300px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask({
              variables: {
                input: {
                  clientMutationId: "tmp",
                  text: text
                },
              },
            });
            setText('');
          }
        }}
      ></input>
      <ul>
        {data?.state.tasks.map((task) => {
          return (
            <li key={task.id}>
              <div style={{ display: "flex", width: "30%" }}>
                {/* <div>
                  <input type="checkbox" id="1"></input>
                  <label htmlFor="1">{task.name}</label>
                </div> */}
                <div style={{ marginLeft: "auto" }}>
                  <button>☓</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
