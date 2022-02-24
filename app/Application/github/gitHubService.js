const { statusCode, respMessage } = require("../utils/httpStatus");
const httpResponse = require("../utils/httpResponse");
require("dotenv").config();
const gitEntity = require("../../domain/entities/gitEntity");
const gitRepository = require("../../infrastructure/repositories/gitHubRepository");

class GitHubService {
  async *getGitHubCommit(perpage, page) {
    try {
      const commits = await gitRepository.getGitData(perpage, page);
      //  console.log(commits.data)
      yield commits.data;
    } catch (err) {
      console.log({ error: err.message });
    }
  }
  getDataWithGenerator = async (perpage, page) => {
    try {
      for await (const value of this.getGitHubCommit(perpage, page)) {
        const commit = value.map((item) => {
          const commitMessage = item.commit.message.split("\n\nPR-URL")[0];
          const gitObj = {
            name: item.commit.author.name,
            email: item.commit.author.email,
            date: item.commit.author.date,
            message: commitMessage,
            url: item.url,
          };
          return gitEntity.createFromObject(gitObj);
        });
        return httpResponse.create(statusCode.Ok, commit);
      }
    } catch (err) {
      return httpResponse.create(statusCode.SERVER_ERROR, err);
    }
  };
}

module.exports = new GitHubService();
