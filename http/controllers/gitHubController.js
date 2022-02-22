const gitHubService = require('../../app/Application/github/gitHubService');
const  HttpResponse = require ("../../app/application/utils/httpResponse");
class GitHubController {
     static getGitHubData =  async (req,res) => {
        const commits = await gitHubService.getDataWithGenerator(req.query.per_page,req.query.page);
        HttpResponse.convertToExpress(res, commits);
        
    };
    
};


module.exports =  GitHubController;