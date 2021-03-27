import express from "express";
import swagger from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerSettings from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve, swagger.setup(swaggerSettings));

app.use("/users", usersRoutes);

export { app };
