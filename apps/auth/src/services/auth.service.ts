import {createUser, getUserByEmail} from "../database/repositories/user.repository";
import * as crypto from "crypto";
import {decodeToken, generateToken} from "./jwt.service";
export async function register(email:string,username:string,password:string){
    try{
        if(await getUserByEmail(email)){
            throw new Error("Invalid email")
        }
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.createHash('sha256').update(password + salt).digest('hex');
        await createUser(email,username,hash,salt)
    }catch (err:any){
        console.log(err)
        throw new Error(err)
    }
}

export async function login(email:string,password:string){
    try{
        const existUser =  await getUserByEmail(email)
        if(!existUser){
            throw new Error("user not exist")
        }
        const hashedPassword = crypto.pbkdf2Sync(password, existUser.salt, 10000, 512, 'sha512').toString('hex');
        if(hashedPassword !== existUser.password){
            throw new Error("user not exist")
        }
        return generateToken(existUser._id.toString())
    }catch (err:any){
        console.log(err)
        throw new Error(err)
    }
}

export async function authorizeUser(token:string){
    try{
        return  await decodeToken(token)
    }catch (err:any){
        console.log(err)
        throw new Error(err)
    }
}