import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import tw from "tailwind-styled-components"
import { mCateFoldState } from "../../atom"
import { FoldBtn, PlusBtn } from "../navBar"
import SmallCategory from "./sCate"
const sCate = [
    {
        name:"데이터마이닝"
    },
    {
        name:"시스템프로그래밍"
    },
]
export default function MediumCategory({mCateName, mCateId, lCateName}) {
    const router = useRouter();
    const [scates, setScates] = useState([])
/* 
    const findIndex = () => {
        for (let i =0; i < fold.length ; i ++) {
            if (fold[lCateIndex][i].name===mCate) return i
        }
    }

    const index = findIndex();

    const onClickLFold = (mCate) => {
        setFold(
            fold.map(item=>
                item.map(item2 =>
                    item2.name===mCate ? {...item2, isFold: !item2.isFold}: item2))
                
        )
    }*/
    const onClickMcate = () => {
        router.push(`/notes/${lCateName}/${mCateName}`)
    }
    const onClickScate = (sCate) => {
        router.push(`/notes/${lCateName}/${mCateName}/${sCate}`)
    } 

    useEffect(()=>{
        axios.get(`http://${process.env.NEXT_PUBLIC_API_URL}/small-cates/${mCateId}`)
        .then(response=>{
            setScates(response.data.smallcates)
            console.log(response.data.smallcates)
            /* const falseList = (response.data.length).fill(false);
            setLCate(falseList) */
        })
        .catch(error=>console.log(error))
    },[])

    return (<div>
    <div className="text-gray-600  grid  gap-2  font-medium pl-1 group w-64 my-2">
        <div onClick={onClickMcate} className="flex justify-between">
            <div className="flex-1 cursor-pointer">
                <PlusBtn>+</PlusBtn>
                <span className="pl-1">{mCateName}</span>
            </div>
            <div>
                <FoldBtn>⏷</FoldBtn>
            </div>
        </div>
        <div>
            {scates.map(small =><div onClick={()=>onClickScate(small.name)}>
                <SmallCategory name = {small.name}/>
            </div> )}
        </div>
    </div>
</div>)
}