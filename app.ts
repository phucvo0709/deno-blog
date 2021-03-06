import app from "./api/server.ts";
import { config } from "./deps.ts";

import home from "./routes/home.ts";
import blogs from "./routes/blogs.ts";
import auth from "./routes/auth.ts";

const env = config();

const host = env["HOST"] || "http://127.0.0.1";
const port = parseInt(env["PORT"]);

app.use(home.routes())
  .use(blogs.routes())
  .use(auth.routes());

console.log(`app running -> ${host}:${port}`);
await app.listen({ port });
