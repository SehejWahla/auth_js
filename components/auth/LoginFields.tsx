"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import {  Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from "../ui/form"; 

import { Input } from "../ui/input"; 
import { Button } from "../ui/button";
import { Login } from "@/actions/login";
import { useTransition,useState } from "react";
import { FormError, FormSuccess } from "./authForm-prompts";

export const LoginFields = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues: {
            email:"",
            password:""
        
        }
    })

    const onSubmit = (values : z.infer<typeof LoginSchema>)=>{
        console.log(values)
        setSuccess("")
        setError("")
        startTransition(()=>{
            Login(values).then((res)=>{    
                setError(res.error)
                setSuccess(res.success)
            })
        })

    }
    return <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl><Input {...field} placeholder="Enter your Email" type="email"/></FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl><Input {...field} placeholder="********" type="password"/></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Button type="submit" className="flex items-center justify-center w-full">Login</Button>
            </form>
        </Form>
    </>
}