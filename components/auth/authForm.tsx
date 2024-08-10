"use client";

import 
{   Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, 
} from "../ui/card";

import { LoginFields } from "./LoginFields";
import { RegisterFields } from "./RegisterFields";
import Link from 'next/link'

interface AuthFormProps {
    isLoginForm? : boolean | undefined
}


const AuthForm = ({ isLoginForm} : AuthFormProps)=>{
    return (
    
            <Card className=" ">
                <CardHeader className="text-green-300 items-center text-6xl  font-bold ">Auth-Kit</CardHeader>
                <CardContent>
                    {isLoginForm && <LoginFields/>}
                    {!isLoginForm && <RegisterFields/>}
                </CardContent>
                <CardContent>
                    {isLoginForm && 
                        <div className="flex justify-center"><Link href="/auth/register">Dont have an account? Register</Link></div>
                    }
                    {!isLoginForm && 
                        <div className="flex justify-center"><Link href="/auth/login">Already have an account? Login</Link></div>
                    }
                </CardContent>

            </Card>
    )
}

export default AuthForm;