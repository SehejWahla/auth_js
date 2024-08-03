interface AuthProps{
    children : React.ReactNode
}

const AuthLayout = ({children} : AuthProps)=>{
    return <div className="h-full flex flex-col items-center justify-center bg-black">
        <div className="w-full  sm:w-2/3 lg:w-3/5">{children}</div>
    </div>
}

export default AuthLayout