import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ProfileBar = dynamic(import("@/components/profileBar"))

export default function AboutMe(){
    const [userImg, setUserImg] = useState();
    const [byYearSCates, setByYearSCates] = useState([])
    
    useEffect(()=> {
        axios({
            method:"get",
            url:`${process.env.NEXT_PUBLIC_API_URL}/users/me`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        }).then(res=>{
            setUserImg(res.data.user.profileImgUrl)
        })
        .catch(err=>console.log(err))
    },[])
    
    useEffect(()=> {
        axios({
            method:"get",
            url:`${process.env.NEXT_PUBLIC_API_URL}/small-cates/by-year`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        }).then(res=>{
            if(res.data.smallCates.length !== 0 ){
                console.log(res.data.smallCates)
                setByYearSCates(res.data.smallCates);
            }
        })
        .catch(err=>console.log(err))
    },[])

    return(<div>
        <ProfileBar>
            <div>
                <div className="absolute left-72 top-10">
                    <img src={`/profileImgs/${userImg}.png`}className="rounded-full w-32 border-2"/>
                </div>        
            </div>
            <div className="w-3/4 ">
                {/* <div className="flex justify-end">
                    <span className="p-2 py-1 bg-bgPoint rounded-xl flex items-center">Memo
                            <span className="p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-2 h-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </span>
                </div> */}
                <div className="bg-white shadow-xl text-gray-500 px-5 grid gap-10 py-2">
                    {Object.keys(byYearSCates).map((year,i) => 
                    <div key = {i}>
                             <span className="text-lg font-extrabold ">YEAR {year}</span>
                             <div className="grid ml-5">
                                {byYearSCates[year].map((scate,i)=><span key = {i}>{scate.name}</span>)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </ProfileBar>
        
    </div>)
}