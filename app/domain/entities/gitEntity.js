class GitEntity {
    constructor(name,email,date,message,url){
        this.name = name;
        this.email = email;
        this.date = date;
        this.message = message;
        this.url = url;
    };
    createFromObject(obj){
    const commit = new GitEntity(
      obj.name,
      obj.email,
      obj.date,
      obj.message,
      obj.url
    )
        return commit;
    }
}
module.exports = new GitEntity();