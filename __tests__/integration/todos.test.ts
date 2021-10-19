import request from "supertest";

import { Status } from "../../src/enums/status.enum";

import TodoController from "../../src/api/v1/todos/todo.controller";

import App from "../../src/app";
const app = new App([new TodoController()]);

let TodoId: string;

describe("POST /todos", (): void => {
  it("Should create a new todo and return it", async (): Promise<void> => {
    const res = await request(app.app)
      .post("/api/v1/todos")
      .send({ title: "four" })
      .expect(200);

    TodoId = res.body._id;

    expect(res.body).toHaveProperty("_id");
    expect(res.body).toHaveProperty("title", "four");
    expect(res.body).toHaveProperty("status", Status.pending);
  });

  it("Should return an error", async (): Promise<void> => {
    const res = await request(app.app)
      .post("/api/v1/todos")
      .send({ title: "four", one: "two" })
      .expect(500);

    expect(res.body).toHaveProperty("msg");
    expect(res.body).toHaveProperty("statusCode", 500);
  });
});

describe("GET /todos", (): void => {
  it("Should return a list of todos", async (): Promise<void> => {
    const res = await request(app.app).get("/api/v1/todos").expect(200);
    expect(res.body.length).toEqual(1);
  });
});

describe("PATCH /todos/:id", (): void => {
  it("Should update the status of a todo and return it", async (): Promise<void> => {
    const res = await request(app.app)
      .patch(`/api/v1/todos/${TodoId}/complete`)
      .expect(200);
    expect(res.body).toHaveProperty("_id", TodoId);
    expect(res.body).toHaveProperty("status", Status.done);
  });

  it("Should return 404 if todo does not exist", async (): Promise<void> => {
    const res = await request(app.app)
      .patch(`/api/v1/todos/one/complete`)
      .expect(404);
    expect(res.body).toHaveProperty("statusCode", 404);
  });
});
