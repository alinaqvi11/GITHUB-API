const axios = require("axios");
require("dotenv").config();
class GitRepository {
  static getGitData = async (perpage, page) => {
    let url = `${process.env.GITHUB_REPOS_URL}?per_page=${perpage}&page=${page}`;
    while (url) {
      const commits = await axios({
        method: "get",
        url,
      });
      return commits;
    }
  };
}

module.exports = GitRepository;
