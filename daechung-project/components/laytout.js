import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "./atom";
import CalendarBar from "./calendarBar";
import NavBar from "./navBar";
import Search from "./search";

export default function Layout({children}) {
    const [token, setToken] = useRecoilState(tokenState)
    
    return (
    <div className=" w-srceen h-screen flex flex-col">
        <div className="">
            <div className="relative flex  h-24">
                <Link href = {`/home/${token}`} className="flex items-end ml-5">
                    <span className=" text-3xl text-gray-700 font-normal">HOME</span>
                </Link>
                <Link href ="/profile"className="absolute right-0 p-5 flex flex-col-2 space-x-2 items-center h-10">
                    <div className="items-center w-6 h-6 rounded-full ring-1 ring-black"/>
                    <span className="text-xl" >⌵</span>
                </Link>
            </div>  
            <Search/>  
        </div>
        <div className="flex flex-grow">
            <div className="">
                <NavBar/> 
            </div>
            
            <div className="flex-1">
                {children}    
            </div>
            <div className="hidden lg:block">
                <CalendarBar />
            </div>
        </div>
        <style jsx global>{`
            .wrap {
                grid-template-columns: 16rem auto 16rem;
                grid-template-rows: 165px auto
            }
        `}</style>
    </div>
        
    )
}