import { Database } from "../../../infrastructure/database";
import { Status } from "../../../enums/status.enum";

export namespace TodoService {
  export const getAll = () => Database.getAll();

  export const create = (body: { title: string }) =>
    Database.create({ title: body.title, status: Status.pending });

  export const completeTodo = (id: string) =>
    Database.findOneAndUpdate(id, { status: Status.done });
}
