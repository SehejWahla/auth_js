"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { RegisterSchema } from "@/schemas";

export const Login = async (values: z.infer<typeof LoginSchema>)=>{
    const validateFields = LoginSchema.safeParse(values)
    if(!validateFields) {
        console.log('err found')
        return {error : "Login Failed"}
    }
    return {success : "Login Success"}
}

