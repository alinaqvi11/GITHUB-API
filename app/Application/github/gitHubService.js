const {statusCode,respMessage} = require ("../utils/httpStatus");
const httpResponse = require ("../utils/httpResponse");
require("dotenv").config();
const gitEntity = require("../../domain/entities/gitEntity");
const gitRepository = require("../../infrastructure/repositories/gitHubRepository")

class GitHubService {
  async * getGitHubCommit(perpage,page){
    try{
         const commits = await gitRepository.getGitData(perpage,page)
        yield commits.data;
    
  } catch (e) {
    console.log({error : e.message})
   }
  }
 getDataWithGenerator = async (perpage,page) => {
   try{
      for await (const value of this.getGitHubCommit(perpage,page)) {     
      const commit = value.map( item => {
        const message =  item.commit.message.slice(0,41);
        const gitObj = {
          name : item.commit.author.name,
          email : item.commit.author.email,
          date : item.commit.author.date,
          message : message,
          url : item.url,
        }
        return gitEntity.createFromObject(gitObj)
      })        
      // console.log(commitData)
        return httpResponse.create(statusCode.Ok,commit);         
        }      
    }catch(e){
    return httpResponse.create(statusCode.SERVER_ERROR, e);
   } 
   };
}


module.exports = new GitHubService();