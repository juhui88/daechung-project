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
    const {register, handleSubmit,reset} = useForm();
    const [sCates, setSCates] = useState([])
    const [mCateFold ,setMCateFold] = useState(mCateIsFold)
    const [clicked, setClicked] = useState(false)

    const onClickPlus = () => {
        setClicked(prev=>!prev)
        setMCateFold(true)
        if(clicked){
            document.getElementsByClassName("z-10").focus()
        }
        
    }
    const onClickMcate = () => {
        router.push(`/notes/${lCateName}/${mCateName}`)
    }
    const onClickScate = (sCate) => {
        router.push(`/notes/${lCateName}/${mCateName}/${sCate}`)
    } 


    const onClickFoldBtn = () => {
        setMCateFold(prev=>!prev)
    }
    const onValid = (data) => {
        console.log(data)
        axios.post(`http://${process.env.NEXT_PUBLIC_API_URL}/small-cates/${mCateId}`,
        {
            smallCateName: data.sName,
            startedAt : moment().format("YYYY-MM-DD"),
            endedAt: moment().format("YYYY-MM-DD")
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))

        setClicked(false)
        reset()
    }

    useEffect(()=>{
        axios.get(`http://${process.env.NEXT_PUBLIC_API_URL}/small-cates/${mCateId}`)
        .then(response=>{
            setSCates(response.data.smallcates)
            console.log(response.data.smallcates)
        })
        .catch(error=>console.log(error))
    },[clicked])

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
            <div key = {i} onClick = {()=>onClickScate(small.name)}>
                <SmallCategory name = {small.name} />
            </div>) :null}
            {clicked ? 
                <form onSubmit={handleSubmit(onValid)} className="ml-8">
                    <input {...register("sName")} placeholder="입력해주세요" className="z-10 outline-none"/> 
                </form>: null}    
        </div>
    </div>
</div>)
}