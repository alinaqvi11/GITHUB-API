import dotenv from 'dotenv';
dotenv.config();

export const config = {
    url : process.env.GITHUB_REPOS_URL,
    port : process.env.PORT
}