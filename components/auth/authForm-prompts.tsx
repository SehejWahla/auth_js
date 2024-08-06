import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {CheckCircledIcon} from "@radix-ui/react-icons";

interface PromptsProps{
    message? : string;
}

export const FormError = ({message } : PromptsProps) => {
    if(!message) return null;
    return (
        <div className="flex items-center gap-x-2 bg-red-100 text-red-500 justify-center p-1 rounded-md">
            <ExclamationTriangleIcon/>
            {message}
        </div>
    )
    return 
}

export const FormSuccess = ({message } : PromptsProps) => {
    if(!message) return null;
    return (
        <div className="flex items-center gap-x-2 bg-green-100 text-green-500 justify-center p-1 rounded-md">
            <CheckCircledIcon/>
            {message}
        </div>
    )
    return 
}

