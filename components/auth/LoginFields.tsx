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

export const LoginFields = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues: {
            email:"",
            password:""
        
        }
    })

    const onSubmit = (values : z.infer<typeof LoginSchema>)=>{
        console.log(values)
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
                <Button type="submit" className="flex items-center justify-center w-full">Login</Button>
            </form>
        </Form>
    </>
}