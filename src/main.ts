import app from "./app";
import { env } from "./env";

app.listen(env.SERVER_PORT, () => {
  console.log(env.SERVER_PORT, "Server is running");
});
