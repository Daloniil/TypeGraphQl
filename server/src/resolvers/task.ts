import { Task } from "./../entity/Task";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class TaskResolver {
  @Query(() => [Task])
  getTasks(): Promise<Task[]> {
    return Task.find({});
  }

  @Query(() => String)
  hello(): string {
    return "Hello";
  }

  @Query(() => Task, { nullable: true })
  getTask(@Arg("id", () => Int) id: number): Promise<Task | null> {
    return Task.findOne({ where: { id } });
  }

  @Mutation(() => Boolean)
  deleteTask(@Arg("id", () => Int) id: number): boolean {
    try {
      Task.delete({ id });
      return true;
    } catch {
      return false;
    }
  }

  @Mutation(() => Task)
  createTask(@Arg("title", () => String) title: string): Promise<Task> {
    return Task.create({ title, isComplete: false }).save();
  }

  @Mutation(() => String, { nullable: true })
  async updateTask(
    @Arg("id", () => Int) id: number,
    @Arg("title", () => String) title: string
  ): Promise<string | null> {
    const task = await Task.findOne({ where: { id } });

    if (!task) {
      return null;
    }

    try {
      Task.update({ id }, { title });
      return title;
    } catch {
      return null;
    }
  }
}
