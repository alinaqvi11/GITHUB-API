import githubService from "../../App/Infrastructure/Services/GithubService";
import httpResponse from "../../App/Application/Utils/HttpResponse";
class GithubController {
  static getGithubCommits = async (req: any, res: any) => {
    const commits = await githubService.getGithubCommits(req.query);
    httpResponse.convertToExpress(res, commits);
  };
}

export default GithubController;
