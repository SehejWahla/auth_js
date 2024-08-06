import * as z from "zod";

export const LoginSchema = z.object({
    email : z.string().email({
        message : "Email is required"
    }),
    password : z.string()
})

export const RegisterSchema = z.object({
    email : z.string().email({
        message : "Email is required"
    }),
    password : z.string().min(3),
    name : z.string().min(1, {
        message : "Enter atleast 1 Character"
    })
})