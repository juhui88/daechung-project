import { useRouter } from "next/router";
import { use, useEffect, useRef, useState } from "react";
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
    const [mCatesFold, setMCatesFold] = useState([])
    const [clicked, setClicked] = useState(false)
    const [isPost, setIsPost] = useState(false);

    const inputRef = useRef();

    const onClickLcate = ()=> {
        router.push({
            pathname:`/notes/${lCateName}`,
            query:{
                lCateId : lCateId
            }
        },`/notes/${lCateName}`)
    }


    const onClickPlus = () => {
        setLCateFold(true)
        setClicked(true)
    }
    const onClickFoldBtn = () => {
        setLCateFold(prev=>!prev)
        setClicked(false)
    }

    const onValid = (data) => {
        console.log(data)
        

        axios.post(`http://${process.env.NEXT_PUBLIC_API_URL}/medium-cates/large-cate-id/${lCateId}`,
        {
            mediumCateName: data.mName
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))

        reset();
        
        setClicked(false)
        console.log("isPost",isPost)
        setIsPost(prev=>!prev)
    }

    
    
    useEffect(()=>{
        axios.get(`http://${process.env.NEXT_PUBLIC_API_URL}/medium-cates/large-cate-id/${lCateId}`)
        .then(response=>{
            if(response.data.mediumCates) {
                setMCates(response.data.mediumCates)

                const length = Number(response.data.mediumCates.length)
                const falseList = Array(length).fill(false);
                setMCatesFold(falseList)
            }
            
        })
        .catch(error=>console.log(error))
        console.log(isPost)
    },[clicked, isPost, lCateFold])

    useEffect(()=> {
        if(inputRef.current && clicked ){
            inputRef.current.focus();
        }
    },[clicked,inputRef])
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
                <MediumCategory mCateName = {medium.name} mCateId = {medium.id} lCateName={lCateName} mCateIsFold = {mCatesFold[i]}/>
            </div>
           ) : null}
            {clicked ? 
                <form onSubmit={handleSubmit(onValid)} className="ml-5">
                    <input ref = {inputRef} {...register("mName")} placeholder="입력해주세요" className="z-10 outline-none focus:outline-dashed"/> 
                </form>: null}    
        </div>        
    </div>
    
    )
}