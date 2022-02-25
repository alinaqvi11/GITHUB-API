import express from "express";
const router = express.Router();
import githubController from "../Controllers/GithubController"
router.get("/commit", githubController.getGitHubData);

export default router;
