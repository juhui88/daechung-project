import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import tw from "tailwind-styled-components"
import { lCateFoldState } from "./atom"
import MediumCategory from "./navBarItem/mCate"

const Lcate = tw.div`
    bg-itemBg
    p-2
    pl-1
    w-64
    flex
    justify-between
    group
    hover:cursor-pointer
`
const LCateName = tw.span`
    font-semibold
    text-textPoint
    pl-1
`
export const PlusBtn = tw.button`
    opacity-0
    group-hover:opacity-100
    text-gray-500
    hover:font-bold
    hover:text-gray-700
    hover:duration-300
    w-3
`
export const FoldBtn = tw.button`
    opacity-0
    group-hover:opacity-100
    group-hover:duration-300
    pr-3
    text-gray-600
`

const Scate = tw.div`
    pl-8
    w-64
`
const mCate = [
    [
        "1학년 1학기", "1학년 2학기"
    ],
    [
        "인턴", "동아리"
    ],
    [
        "기타"
    ]
]

export default function NavBar() {
    const router = useRouter();
    const [fold, setfold] = useRecoilState(lCateFoldState);
    const [menuIsOpen , setMenuIsOpen] = useState(false);
    
    const onClickLFold = (i) => {
        setfold(
            fold.map(item=>
                item.index===i ? {...item, isFold: !item.isFold}: item)
        )
    }

    const handleMenu = () => {
        setMenuIsOpen(prev => !prev)
    }
    const onClickLcate = (name) => {
        router.push(`/notes/${name}`);
    }
    
    return <div className="relative w-64 h-full">
        <div className="grid gap-2">
        <Lcate>
            <div className="flex-1" onClick={()=>onClickLcate("교과")}>
                <PlusBtn >+</PlusBtn>
                <LCateName>교과</LCateName>
                
            </div>
            <div onClick={()=>onClickLFold(0)} >
                <FoldBtn>{fold[0].isFold ?"⏷" :"⏶" }</FoldBtn>
            </div>
        </Lcate>
        {fold[0].isFold ? 
        <div className="grid gap-2">
            {mCate[0].map((m,i)=><MediumCategory mCate = {m} lCateIndex = {0} key={i}/>)}
        </div>
        
        :null}
        <Lcate>
            <div className="flex-1" onClick={()=>onClickLcate("비교과")}>
                <PlusBtn>+</PlusBtn> 
                <LCateName>비교과</LCateName>
                   
            </div>
            <div onClick={()=>onClickLFold(1)} >
                <FoldBtn>{fold[1].isFold ? "⏷":"⏶" }</FoldBtn>
            </div>
            
        </Lcate>
        {fold[1].isFold ? 
        <div className="grid gap-2">
              {mCate[1].map((m,i)=><MediumCategory mCate = {m} lCateIndex = {1} key = {i}/>)}
        </div>
        
        :null}
        <Lcate>
            <div className="flex-1" onClick={()=>onClickLcate("기타")}>
                <PlusBtn>+</PlusBtn>
                <LCateName>기타</LCateName>
                
            </div>
            <div onClick={()=>onClickLFold(2)} >
                <FoldBtn>{fold[2].isFold ? "⏷":"⏶" }</FoldBtn>
            </div>
            
        </Lcate>
        {fold[2].isFold ? 
        <div className="grid gap-2">
            {mCate[2].map((m,i)=><MediumCategory mCate = {m} lCateIndex = {2} key = {i}/>)} 
        </div>
        :null}    
        </div>
        
        <button onClick={handleMenu} className="absolute right-3 bottom-10 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </button>
        {
            menuIsOpen ? 
            <div className="absolute right-3 bottom-16 grid text-sm w-40 border-2 border-gray-200 text-gray-500 divide-y-2">
            <span className="pl-1">순서 바꾸기</span>
            <span className="pl-1">삭제하기</span>
            <span className="pl-1">이름바꾸기</span>
        </div> : null
        }
        
    </div>
}