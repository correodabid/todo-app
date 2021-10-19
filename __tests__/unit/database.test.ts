import { Database } from "../../src/infrastructure/database";

import { Status } from "../../src/enums/status.enum";

let TaskId: string;

describe("Database Tests", () => {
  it("Should return an empty list", () => {
    const result = Database.getAll();
    expect(result.length).toEqual(0);
  });

  it("Should create a todo and return it", () => {
    const result = Database.create({ title: "one", status: Status.pending });
    TaskId = result._id;
    expect(result).toHaveProperty("_id");
    expect(result).toHaveProperty("title", "one");
    expect(result).toHaveProperty("status", Status.pending);
  });

  it("Should update the status of a task and return it", () => {
    const result = Database.findOneAndUpdate(TaskId, { status: "done" });
    expect(result).toHaveProperty("_id", TaskId);
    expect(result).toHaveProperty("status", Status.done);
  });
});
