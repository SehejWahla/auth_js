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

            </Card>
    )
}

export default AuthForm;