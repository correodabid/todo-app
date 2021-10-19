import { v4 as uuidv4 } from "uuid";

import { Todo } from "../interfaces/todo.interface";

const TODOS: Todo[] = [];

export namespace Database {
  export const getAll = () => TODOS;

  export const create = (body: { title: string; status: string }) => {
    const result = { ...{ _id: uuidv4() }, ...body };
    TODOS.push(result);
    return result;
  };

  export const findOneAndUpdate = (
    _id: string,
    body: { title?: string; status?: string }
  ) => {
    const index = TODOS.findIndex((todo) => todo._id === _id);
    if (index === -1) return false;
    TODOS[index] = { ...TODOS[index], ...body };
    return TODOS[index];
  };
}
