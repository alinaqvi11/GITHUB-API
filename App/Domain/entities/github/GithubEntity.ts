class GitHubEntity {
  name: string;
  email: string;
  date: Date;
  message: string;
  url: string;
  constructor(name: string, email: string, date: Date, message: string, url: string) {
    this.name = name;
    this.email = email;
    this.date = date;
    this.message = message;
    this.url = url;
  }
  static  createFromObject(obj: any) {
    return new GitHubEntity(
      obj.commit.author.name,
      obj.commit.author.email,
      obj.commit.author.date,
      obj.commit.message.split("\n\nPR-URL")[0],
      obj.url
    );
    
  }
}
export default GitHubEntity;
