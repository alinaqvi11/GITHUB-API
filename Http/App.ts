import express from "express";
const app = express();
import routes from "./Routes/GithubRoutes";
app.use("/api", routes);

export default app;
