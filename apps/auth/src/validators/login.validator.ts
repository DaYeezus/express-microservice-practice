import {z} from "zod";

export const loginValidator = z.object({
    email:z.string({required_error:"Please insert email address",invalid_type_error:"Please insert valid email address"}).email({message:"Please insert valid email address"}),
    password:z.string({required_error:"Please insert password",invalid_type_error:"Please insert valid password"})
        .min(8 , {message:"Password must be 8 character at least"}).
        max(16 , {message:"Password must be 16 character at most"})
        .regex(/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/ , {message:"Invalid password"})
    ,
})