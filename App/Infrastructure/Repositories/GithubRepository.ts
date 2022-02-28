import axios from "axios";
import Pagination from "../../Application/Utils/Pagination";
import githubInterface from "../../Domain/entities/github/IGithubRepository";
import  {config}  from "../Config/index";
import PaginatedCollection from "../../Application/Utils/PaginationCollection";
import githubEntity from "../../Domain/entities/github/GithubEntity";
import logger from "../Logger/logger";
class GithubRepository implements githubInterface{
  async getGithubData (pagination:Pagination): Promise<any>{
    let url = `${config.url}`;
      const commits = await axios.get(url);
      const commitData = commits.data;
      const commit = commitData.map((item: any) => {
        return githubEntity.createFromObject(item);
      });
      const paginatedCollection = new PaginatedCollection<githubEntity>(pagination,commit.length,commit);
      return paginatedCollection.getPaginatedData();
  };
}

export default new GithubRepository();