import envs from "./envs";

const all = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 7575,
  seedDB: false,
};

const env =
  (process.env.NODE_ENV as "development" | "test" | "stagging") ||
  "development";

export default { ...all, ...(envs[env] || {}) };
