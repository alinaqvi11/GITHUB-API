import Pagination from "../../../Application/Utils/Pagination";

interface GithubInterface {
    getGithubCommits(pagination:Pagination) :  Promise<any>;
}

export default GithubInterface;