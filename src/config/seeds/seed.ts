import chalk from "chalk";

import { todos } from "./todos";

import { Database } from "../../infrastructure/database";

export default async () => {
  try {
    const SEEDS_DONE = chalk.bgCyan("Seeds done");
    console.time(SEEDS_DONE);

    todos.forEach((todo) => Database.create(todo));

    console.timeEnd(SEEDS_DONE);
    return;
  } catch (error: any) {
    return Promise.reject(error.message);
  }
};
