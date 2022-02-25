import Pagination from "../../../Application/Utils/Pagination";

interface githubInterface {
    getGitHubData(perpage:any,page:any) :  Promise<any>;
}

export default githubInterface;