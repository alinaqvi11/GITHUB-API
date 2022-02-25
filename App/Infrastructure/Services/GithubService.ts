import { statusCode, respMessage } from "../../Application/Utils/HttpStatus";
import httpResponse from "../../Application/Utils/HttpResponse";
import githubEntity from "../../Domain/entities/github/GithubEntity";
import githubRepository from "../../Infrastructure/Repositories/GithubRepository";
import Pagination from "../../Application/Utils/Pagination";
import logger from "../../../logger";
class GithubService {
  async *fetchCommits(perpage: number, page: number) {
    try {
      // const pagination = new Pagination(perpage,page)
      const commits: any = await githubRepository.getGitHubData(perpage,page);
      yield commits;
    } catch (err:any) {
      logger.error({message : err.message});
    }
  }
  getDataWithGenerator = async (perpage: number, page: number) => {
    try {
      const data: any = this.fetchCommits(perpage, page);
      for await (const value of data) {
        const commit = value.map((item: any) => {
          return githubEntity.createFromObject(item);
        });
        return httpResponse.create(statusCode.Ok, commit);
      }
    } catch (err) {
      return httpResponse.create(statusCode.SERVER_ERROR, err);
    }
  };
}

export default new GithubService();
