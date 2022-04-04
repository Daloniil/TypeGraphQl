import type { NextPage } from "next";
import { useGetTasksQuery } from "../generated";

const Home: NextPage = () => {
  const { data } = useGetTasksQuery();

  return (
    <div>
      {data
        ? data.getTasks.map((task) => <p key={task.id}>{task.title}</p>)
        : ""}
    </div>
  );
};

export default Home;
