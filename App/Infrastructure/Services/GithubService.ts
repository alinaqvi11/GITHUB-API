import { statusCode, respMessage } from "../../Application/Utils/HttpStatus";
import httpResponse from "../../Application/Utils/HttpResponse";
import githubEntity from "../../Domain/entities/github/GithubEntity";
import githubRepository from "../../Infrastructure/Repositories/GithubRepository";
import Pagination from "../../Application/Utils/Pagination";
import logger from "../Logger/logger";
class GithubService {
  async *fetchCommits(pagination:Pagination) {
    try {
      const commits: any = await githubRepository.getGithubCommits(pagination);
      yield commits;
    } catch (err:any) {
      logger.error({message : err.message});
    }
  }
  getGithubCommits = async (query:any) => {
    try {
      const {perpage,page} = query;
      const pagination = new Pagination(perpage,page)
      for await (const value of this.fetchCommits(pagination)) {
        return httpResponse.create(statusCode.Ok, value);
      }
    } catch (err) {
      return httpResponse.create(statusCode.SERVER_ERROR, err);
    }
  };
}

export default new GithubService();
