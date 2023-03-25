import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FoldBtn, PlusBtn } from "../navBar";
import MediumCategory from "./mCate";
import {cls} from "../../../libs/utils"
import { useForm } from "react-hook-form";
import axios from "axios";

export default function LargeCategory({lCateName, lCateId, lCateIsFold}){
    const router = useRouter()
    const {register , handleSubmit,reset} = useForm();
    const [mCates, setMCates] = useState([])
    const [lCateFold, setLCateFold] = useState(lCateIsFold)
    const [mCateFold, setMCateFold] = useState()
    const [clicked, setClicked] = useState(false)
    const onClickLcate = ()=> {
        router.push(`/notes/${lCateName}`)
    }
    const onClickPlus = () => {
        setClicked(prev=>!prev)
        if(clicked){
            document.getElementsByClassName("z-10").focus()
        }

        
    }
    const onValid = (data) => {
        console.log(data)
        setClicked(false)
        axios.post(`http://${process.env.NEXT_PUBLIC_API_URL}/medium-cates/${lCateId}`,
        {
            mediumCateName: data.mName
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))
        reset();
    }
    const onClickFoldBtn = () => {
        setLCateFold(prev=>!prev)
        console.log(lCateId)
    }
    useEffect(()=>{
        axios.get(`http://${process.env.NEXT_PUBLIC_API_URL}/medium-cates/${lCateId}`)
        .then(response=>{
            console.log("mcates",response)
            setMCates(response.data.mediumCates)

            const length = Number(response.data.mediumCates.length)
            const falseList = Array(length).fill(false);
            setMCateFold(falseList)

        })
        .catch(error=>console.log(error))
    },[clicked])
    return(
    <div>
        <div className="bg-itemBg p-2 pl-2 w-64 flex justify-between group hover:cursor-pointer font-semibold text-textPoint">
            <div onClick={onClickPlus}>
                <PlusBtn>+</PlusBtn>
            </div>
            <div className="flex-1 "onClick={onClickLcate} >
                 
                <span>{lCateName}</span>
            </div>
            <div onClick={onClickFoldBtn} className="flex items-center">
                <FoldBtn>{lCateFold ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>

                }</FoldBtn>
            </div>
        </div>
        <div>
            {lCateFold ? mCates.map((medium,i)=>  <div key = {i}>
                <MediumCategory mCateName = {medium.name} mCateId = {medium.id} lCateName={lCateName} mCateIsFold = {mCateFold[i]}/>
            </div>
           ) : null}
            {clicked ? 
                <form onSubmit={handleSubmit(onValid)} className="ml-5">
                    <input {...register("mName")} placeholder="입력해주세요" className="z-10 outline-none"/> 
                </form>: null}    
        </div>        
    </div>
    
    )
}