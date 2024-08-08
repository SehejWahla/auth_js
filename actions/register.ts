"use server";

import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import * as z from "zod";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values)
    if (!validateFields.success) return { error: "Register Failed" }
    const { email, password, name } = validateFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await db.user.findUnique({
        where:{
            email
        }
    })

    if(existingUser) return {error : "Email already in use"}

    await db.user.create({
        data:{
            name,
            email,
            password : hashedPassword 
        }
    })

    //TODO : Send Verification Token Email

    return { success: "Register Success" }
}