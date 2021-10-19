import App from "./app";

import TodoController from "./api/v1/todos/todo.controller";

const app = new App([new TodoController()]);

app.listen();
