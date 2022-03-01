import axios from "axios";
import Pagination from "../../Application/Utils/Pagination";
import GithubCommitsInterface from "../../Domain/entities/github/IGithubRepository";
import  {config}  from "../Config/index";
import PaginatedCollection from "../../Application/Utils/PaginationCollection";
import GithubEntity from "../../Domain/entities/github/GithubEntity";
import PaginationInfo from "../../Application/Utils/PaginationInfo";

class GithubRepository implements GithubCommitsInterface{
  async getGithubCommits (pagination:Pagination): Promise<PaginationInfo>{
    let url = `${config.url}?per_page=${pagination.perpage}&page=${pagination.currentpage}`;
      const commits = await axios.get(url);
      const commitData = commits.data;
      const commit = commitData.map((item: any) => {
        return GithubEntity.createFromObject(item);
      });
      const paginatedCollection = new PaginatedCollection<GithubEntity>(pagination,commit.length,commit);
      return paginatedCollection.getPaginatedData();
  };
}

export default new GithubRepository();
