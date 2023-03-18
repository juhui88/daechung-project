import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import tw from "tailwind-styled-components"
import { mCateFoldState } from "../../atom"
import { FoldBtn, PlusBtn } from "../navBar"
import SmallCategory from "./sCate"

const Mcate = tw.div`
    text-gray-600 
    grid 
    gap-2 
    font-medium
    pl-1
    group
    w-64
`

const sCate = [
    {
        name:"데이터마이닝"
    },
    {
        name:"시스템프로그래밍"
    },
]
export default function MediumCategory({name}) {
    /* const router = useRouter();

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
    }
    const onClickMcate = () => {
        router.push(`/notes/${lCate[lCateIndex]}/${mCate}`)
    } */

    return <Mcate >
    <div className="flex justify-between">
        <div className="flex-1 cursor-pointer">
            <PlusBtn>+</PlusBtn>
            <span className="pl-1">{name}</span>
        </div>
        <div>
            <FoldBtn>⏷</FoldBtn>
        </div>
    </div>
    {sCate.map(small => <SmallCategory name = {small.name}/>)}
    </Mcate>
}