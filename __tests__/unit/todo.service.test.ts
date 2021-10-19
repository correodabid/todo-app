import { TodoService } from "../../src/api/v1/todos/todo.service";
import { Status } from "../../src/enums/status.enum";

let TodoId: string;

describe("Todo service Tests", () => {
  it("Should return an empty list of services", () => {
    const result = TodoService.getAll();
    expect(result.length).toEqual(0);
  });

  it("Should create a new todo and return it", () => {
    const result = TodoService.create({ title: "one" });
    TodoId = result._id;
    expect(result).toHaveProperty("_id");
    expect(result).toHaveProperty("title", "one");
    expect(result).toHaveProperty("status", Status.pending);
  });

  it("Should marked a todo as done and return it", () => {
    const result = TodoService.completeTodo(TodoId);
    expect(result).toHaveProperty("_id");
    expect(result).toHaveProperty("title", "one");
    expect(result).toHaveProperty("status", Status.done);
  });
});
