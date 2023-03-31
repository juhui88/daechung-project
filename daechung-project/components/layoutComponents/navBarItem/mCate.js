import axios from "axios"
import moment from "moment"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil"
import tw from "tailwind-styled-components"
import { mCateFoldState } from "../../atom"
import { FoldBtn, PlusBtn } from "../navBar"
import SmallCategory from "./sCate"

export default function MediumCategory({mCateName, mCateId, lCateName,mCateIsFold}) {
    const router = useRouter();
    const {register, handleSubmit,reset} = useForm()
    const [sCates, setSCates] = useState([])
    const [mCateFold ,setMCateFold] = useState(mCateIsFold)
    const [clicked, setClicked] = useState(false)
    const [isPost, setIsPost] = useState(false)
    
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

    const onClickScate = (sCateName,sCateId) => {
        router.push({
            pathname:`/notes/${lCateName}/${mCateName}/${sCateName}`,
            query:{
                sCateId : sCateId
            }
        },`/notes/${lCateName}/${mCateName}/${sCateName}`)
    } 


   
    const onValid = (data) => {
        console.log(data)
        if (sCates)
        axios.post(`https://${process.env.NEXT_PUBLIC_API_URL}/small-cates/medium-cate-id/${mCateId}`,
        {
            smallCateName: data.sName,
            startedAt : moment().format("YYYY-MM-DD"),
            endedAt: moment().format("YYYY-MM-DD")
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))

        setClicked(false)
        reset()
        setIsPost(prev=>!prev)
    }

    useEffect(()=>{
        axios.get(`https://${process.env.NEXT_PUBLIC_API_URL}/small-cates/medium-cate-id/${mCateId}`)
        .then(response=>{
            if (response.data.smallCates.length !== 0 ){
                setSCates(response.data.smallCates)
            }
            
        })
        .catch(error=>console.log(error))
        console.log(mCateFold)
        console.log("sCates",sCates)
    },[clicked, isPost,mCateFold])

    

    return (<div>
    <div className="text-gray-600  grid  gap-2  font-medium pl-1 group w-64 my-2">
        <div className="flex justify-between">
            <div onClick={onClickPlus}>
                <PlusBtn>+</PlusBtn>
            </div>
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
            <div key = {i} onClick = {()=>onClickScate(small.name, small.id)}>
                {<SmallCategory name = {small.name} />}
            </div>) :null}
            {clicked ? 
                <form onSubmit={handleSubmit(onValid)} className="ml-8">
                    <input {...register("sName")} placeholder="입력해주세요" className="z-10 outline-none"/> 
                </form>: null}    
        </div>
    </div>
</div>)
}