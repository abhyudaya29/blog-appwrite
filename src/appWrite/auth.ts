import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    private client: Client;
    private account: Account;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }: { email: string, password: string, name: string }): Promise<unknown> {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email,password});
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
    async login ({email,password}:{email:string,password:string}):Promise<unknown>{
        // eslint-disable-next-line no-useless-catch
        try{
           return  await this.account.createEmailSession(email, password);

        }catch(error){
            throw error
        }
    }
    async getCurrentUser(){
        // eslint-disable-next-line no-useless-catch
        try{
            return await this.account.get();

        }catch(error){
            throw error;
        }
        return null;
    }
    async logout(){
        // eslint-disable-next-line no-useless-catch
        try{
            await this.account.deleteSessions()

            
        }catch(error){
            throw error
        }
    }
}

export default AuthService;
