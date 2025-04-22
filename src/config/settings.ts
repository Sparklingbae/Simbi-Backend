import dotenv from "dotenv";

dotenv.config();


class Config{
    static PORT: string | undefined = process.env.PORT;
    static DATABASE_URL: string | undefined =  process.env.DATABASE_URL;
    static JWT_SECRET: string | undefined = process.env.JWT_SECRET;
    static JWT_EXPIRATION_HOURS: string | undefined = process.env.JWT_EXPIRATION_HOURS;
    static ALLOWED_ORIGINS: string[] = (process.env.ALLOWED_ORIGINS)?.split(',') || [];
}


export default Config
