import axios from "axios";
import Pagination from "../../Application/Utils/Pagination";
import gitHubInterface from "../../Domain/entities/github/IGithubRepository";
import  {config}  from "../Config/index";

class GithubRepository implements gitHubInterface{
  async getGitHubData (perpage:any,page:any): Promise<any>{
    let url = `${config.url}?per_page=${perpage}&page=${page}`;
    while (url) {
      const commits = await axios({
        method: "get",
        url,
      });
      // console.log(commits)
      return commits.data;
    }
  };
}

export default new GithubRepository();
