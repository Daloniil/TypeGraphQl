import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  GetTasksQuery,
  useCreateTaskMutation,
  useGetTasksQuery,
} from "../generated";

const Home: NextPage = () => {
  const { data } = useGetTasksQuery();
  const [createTask] = useCreateTaskMutation();

  const [tasks, setTasks] = useState({} as GetTasksQuery);

  const addTask = async () => {
    await createTask({
      variables: {
        title: "testUi",
      },
    });
  };

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  return (
    <div>
      {tasks.getTasks
        ? tasks.getTasks.map((task) => <p key={task.id}>{task.title}</p>)
        : ""}
      <button onClick={addTask}></button>
    </div>
  );
};

export default Home;
