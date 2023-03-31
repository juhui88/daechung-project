import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { sequenceState } from "./atom";
import CalendarBar from "./layoutComponents/calendar";
import NavBar from "./layoutComponents/navBar";
import Search from "./layoutComponents/search";

export default function Layout({children}) {
    const [userImg, setUserImg] = useState()

    const [sequence, setSequence] = useRecoilState(sequenceState);
    const onClickSequence = (isWrt) => {
        setSequence(isWrt)
    }
    useEffect(()=> {
        axios({
            method:"get",
            url:`http://${process.env.NEXT_PUBLIC_API_URL}/users/me`,
        }).then(res=>{
            setUserImg(res.data.user.profileImgUrl)
        })
        .catch(err=>console.log(err))
    },[])
    
    return (
    <div className=" w-srceen h-screen flex flex-col">
        <div className="">
            <div className="relative flex  h-24">
                <Link href = {`/home`} className="flex items-end ml-5">
                    <span className=" text-3xl text-gray-700 font-normal">HOME</span>
                </Link>
                <Link href ="/profile"className="absolute right-0 top-5 p-5 flex flex-col-2 space-x-2 items-center h-10">
                    <img src={`/profileImgs/${userImg}.png`} className="items-center w-14 h-14 rounded-full ring-1 ring-itemBg"/>
                    <span className="text-xl" >⌵</span>
                </Link>
            </div>  
            <Search/>
        </div>
        <div className="flex flex-grow relative">
            <div className="">
                <NavBar/> 
            </div>
            
            <div className="flex-1 relative ">
                <div className="absolute right-0 -top-8 flex  items-center font-extrabold text-gray-600 text-sm select-none">
                {sequence === "wrt" ? 
                <span onClick={()=>onClickSequence("mod")}>
                    최근 작성순 ▼
                </span>
                :
                <span onClick={()=>onClickSequence("wrt")}>
                    최근 수정순 ▼
                </span>
                }
                </div>
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