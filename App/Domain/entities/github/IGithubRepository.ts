import Pagination from "../../../Application/Utils/Pagination";

interface githubInterface {
    getGithubData(pagination:Pagination) :  Promise<any>;
}

export default githubInterface;