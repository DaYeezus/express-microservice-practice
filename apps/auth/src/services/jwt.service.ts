import {decode,sign} from "jsonwebtoken"
export async function generateToken(id:string){
    try {
        return sign({id} , "secretKey" , {
            expiresIn:'30d'
        })
    }catch (err:any){
        console.log(err)
        throw new Error(err)
    }
}

export async function decodeToken(token:string){
    try {
        return decode(token)
    }catch (err:any){
        console.log(err)
        throw new Error(err)
    }
}