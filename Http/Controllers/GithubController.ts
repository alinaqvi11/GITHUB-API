import githubService from "../../App/Infrastructure/Services/GithubService";
import httpResponse from "../../App/Application/Utils/HttpResponse";
class GithubController {
  static getGitHubData = async (req: any, res: any) => {
    const commits = await githubService.getDataWithGenerator(req.query);
    httpResponse.convertToExpress(res, commits);
  };
}

export default GithubController;