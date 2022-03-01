import Pagination from "../../../Application/Utils/Pagination";
import PaginationInfo from "../../../Application/Utils/PaginationInfo";

interface GithubCommitsInterface {
     getGithubCommits(pagination: Pagination) : Promise<PaginationInfo>
}
export default GithubCommitsInterface;