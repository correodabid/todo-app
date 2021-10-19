import { Controller } from "../../../interfaces";
import config from "../../../config/environment";
import { Router, Request, Response } from "express";
import {
  handleError,
  respondWithResult,
  handleEntityNotFound,
} from "../../../handlers";

import { TodoService } from "./todo.service";
import { TodoSchema } from "./todo.schema";

class TodoController implements Controller {
  public path = `${config.globalURI}/v1/todos`;
  public router = Router();

  constructor() {
    this.initializeRouters();
  }

  private initializeRouters() {
    this.router.get(this.path, this.getAllTodos);
    this.router.patch(`${this.path}/:id/complete`, this.completeTodo);
    this.router.post(this.path, this.createTodo);
  }

  private getAllTodos = (req: Request, res: Response) => {
    try {
      const result = TodoService.getAll();
      return respondWithResult(req, res)(result);
    } catch (error) {
      return handleError(req, res)(error);
    }
  };

  private createTodo = (req: Request, res: Response) => {
    try {
      const isValid = TodoSchema.validate(req.body);
      if (isValid.error) throw new Error(JSON.stringify(isValid.error));
      const result = TodoService.create(isValid.value);
      return respondWithResult(req, res)(result);
    } catch (error) {
      return handleError(req, res)(error);
    }
  };

  private completeTodo = (req: Request, res: Response) => {
    try {
      const result = TodoService.completeTodo(req.params.id);
      if (!result) return handleEntityNotFound(req, res)("Todo not found");
      return respondWithResult(req, res)(result);
    } catch (error) {
      return handleError(req, res)(error);
    }
  };
}

export default TodoController;
