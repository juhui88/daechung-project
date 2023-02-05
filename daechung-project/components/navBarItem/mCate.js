import { useState } from "react"
import { useRecoilState } from "recoil"
import tw from "tailwind-styled-components"
import { mCateFoldState } from "../atom"
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
const semester = ["1학년 1학기","1학년 2학기","2학년 1학기"," 2학년 2학기"," 3학년 1학기","3학년 2학기","4학년 1학기", "4학년 2학기"]

export default function MediumCategory({mCate, lCateIndex}) {
    const [fold,setFold] = useRecoilState(mCateFoldState)

    
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

    return <Mcate>
    <div className="flex justify-between">
        <div>
            <PlusBtn>+</PlusBtn>
            <span className="pl-1">{mCate}</span>
        </div>
        <div onClick={()=>onClickLFold(mCate)}>
            <FoldBtn>{fold[lCateIndex][index].isFold? "⏷":"⏶" }</FoldBtn>
        </div>
    </div>
    {fold[lCateIndex][index].isFold ? 
    <SmallCategory/>
    : null}
    
    </Mcate>
}