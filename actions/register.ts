"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";



export const Register = async (values: z.infer<typeof RegisterSchema>)=>{
    const validateFields = RegisterSchema.safeParse(values)
    if(!validateFields) return {error : "Register Failed"}
    return {success : "Register Success"}
}