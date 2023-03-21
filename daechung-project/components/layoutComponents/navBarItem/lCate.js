import { useRouter } from "next/router";
import { useState } from "react";
import { FoldBtn, PlusBtn } from "../navBar";
import MediumCategory from "./mCate";
import {cls} from "../../../libs/utils"
import { useForm } from "react-hook-form";
import axios from "axios";

export default function LargeCategory({lCateName, mCates, lCateId}){
    const router = useRouter()
    const {register , handleSubmit} = useForm();
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
        })
    }
    return(
    <div>
        
        <div className="bg-itemBg p-2 pl-2 w-64 flex justify-between group hover:cursor-pointer font-semibold text-textPoint">
            <div onClick={onClickPlus}>
                <PlusBtn>+</PlusBtn>
            </div>
            <div className="flex-1 "onClick={onClickLcate} >
                
                <span>{lCateName}</span>
            </div>
            <div>
                <FoldBtn>⏶</FoldBtn>
            </div>
        </div>
        <div>
            
            {mCates.map((medium,i)=>
            <div>
                <MediumCategory mCateName = {medium.name} mCateId = {i} lCateName={lCateName}/>
            </div>)}
            {clicked ? 
                <form onSubmit={handleSubmit(onValid)} className="ml-5">
                    <input {...register("mName")} placeholder="입력해주세요" className="z-10 outline-none"/> 
                </form>: null}    
        </div>        
    </div>
    
    )
}