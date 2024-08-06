"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { FormError } from "./authForm-prompts";
import { FormSuccess } from "./authForm-prompts";
import {  Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from "../ui/form"; 

import { Input } from "../ui/input"; 
import { Button } from "../ui/button";
import { useTransition,useState } from "react";
import { Register } from "@/actions/register";


export const RegisterFields = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver:zodResolver(RegisterSchema),
        defaultValues: {
            email:"",
            password:""
        
        }
    })

    const onSubmit = (values : z.infer<typeof RegisterSchema>)=>{
        console.log(values)
        startTransition(()=>{
            Register(values).then((res)=>{
                setSuccess(res.success)
                setError(res.error)
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
                     <FormField
                        control={form.control}
                        name="name"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl><Input {...field} placeholder="Enter your name" type="text"/></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Button type="submit" className="flex items-center justify-center w-full">Register</Button>
            </form>
        </Form>
    </>
}