import express from "express";
const router = express.Router();
import githubController from "../Controllers/GithubController"
router.get("/commit", githubController.getGithubCommits);

export default router;
