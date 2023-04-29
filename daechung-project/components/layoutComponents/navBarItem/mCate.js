import axios from "axios"
import moment from "moment"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil"
import tw from "tailwind-styled-components"
import { changeState, deleteState, mCateFoldState } from "../../atom"
import { FoldBtn, PlusBtn } from "../navBar"
import SmallCategory from "./sCate"

export default function MediumCategory({mCateName, mCateId, lCateName,mCateIsFold}) {
    const router = useRouter();
    const {register, handleSubmit,reset} = useForm()
    const [sCates, setSCates] = useState([])
    const [mCateFold ,setMCateFold] = useState(mCateIsFold)
    const [clicked, setClicked] = useState(false)
    const [isPost, setIsPost] = useState(false)
    
    const [isDelete, setIsDelete] = useRecoilState(deleteState);
    const [change, setChange] = useRecoilState(changeState)

    const onClickDelte = () => {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/medium-cates/medium-cate-id/${mCateId}`)
        .then(res=>{
            console.log(res)
            setChange(prev=>!prev)
        })
        .catch(err=>console.log(err))
        setIsDelete(false)
    }

    const onClickPlus = () => {
        setClicked(true)
        setMCateFold(true)
    }
     const onClickFoldBtn = () => {
        setMCateFold(prev=>!prev)
        setClicked(false)
    }


    const onClickMcate = () => {
        router.push({
            pathname:`/notes/${lCateName}/${mCateName}`,
            query:{
                mCateId : mCateId
            }
        },`/notes/${lCateName}/${mCateName}`)
    }


   
    const onValid = (data) => {
        console.log(data)
        if (sCates)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/small-cates/medium-cate-id/${mCateId}`,
        {
            smallCateName: data.sName,
            startedAt : moment().format("YYYY-MM-DD"),
            endedAt: moment().format("YYYY-MM-DD")
        }).then(res=>{
            console.log(res)
            setChange(prev => !prev)
        })
        .catch(err=>console.log(err))

        setClicked(false)
        reset()
        setIsPost(prev=>!prev)
    }

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/small-cates/medium-cate-id/${mCateId}`)
        .then(response=>{
            if (response.data.smallCates.length !== 0 ){
                setSCates(response.data.smallCates)
            }
            
        })
        .catch(error=>console.log(error))
        console.log(mCateFold)
        console.log("sCates",sCates)
    },[clicked, isPost,mCateFold,isDelete, change, setChange])

    

    return (<div>
    <div className="text-gray-600  grid  gap-2  font-medium pl-1 group w-64 my-2">
        <div className="flex justify-between">
            {isDelete ? 
            <div onClick={onClickDelte}>
            <PlusBtn>🗑</PlusBtn>
            </div>
            :
            <div onClick={onClickPlus}>
                <PlusBtn>+</PlusBtn>
            </div>
            }
            
            <div className="flex-1 cursor-pointer"onClick={onClickMcate} >
                <span className="pl-1">{mCateName}</span>
            </div>
            <div onClick={onClickFoldBtn} className="flex items-center">
                <FoldBtn>{mCateFold ? 
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
            {mCateFold ?sCates.map((small, i) =>  
            <div className="" key = {i} >
                {<SmallCategory name = {small.name} id = {small.id} lCateName = {lCateName} mCateName = {mCateName}/>}
            </div>) :null}
            {clicked ? 
                <form onSubmit={handleSubmit(onValid)} className="ml-8">
                    <input {...register("sName")} placeholder="입력해주세요" className="z-10 outline-none"/> 
                </form>: null}    
        </div>
    </div>
</div>)
}