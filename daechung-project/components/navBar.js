import { useRouter } from "next/router"
import { useState } from "react"
import tw from "tailwind-styled-components"

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
const PlusBtn = tw.button`
    opacity-0
    group-hover:opacity-100
    text-gray-500
    hover:font-bold
    hover:text-gray-700
    hover:duration-300
    w-3
`
const FoldBtn = tw.button`
    opacity-0
    group-hover:opacity-100
    group-hover:duration-300
    pr-3
    text-gray-600
`
const Mcate = tw.div`
    text-gray-600 
    grid 
    gap-2 
    font-medium
    pl-1
    group
    w-64
`
const Scate = tw.div`
    pl-8
    w-64
`

export default function NavBar() {
    const router = useRouter();
    const [lCateBool, setLCateBool] = useState([
        {
            index:0,
            bool:true
        },
        {
            index:1,
            bool:false
        },
        {
            index:2,
            bool:true
        }
    ])
    const [menuIsOpen , setMenuIsOpen] = useState(false);
    
    const onClickLFold = (i) => {
        setLCateBool(
            lCateBool.map(item=>
                item.index===i ? {...item, bool: !item.bool}: item)
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
        <Lcate onClick={()=>onClickLcate("교과")}>
            <div className="">
                <PlusBtn >+</PlusBtn>
                <LCateName>교과</LCateName>
                
            </div>
            <div onClick={()=>onClickLFold(0)} >
                <FoldBtn>{lCateBool[0].bool ?"⏷" :"⏶" }</FoldBtn>
            </div>
        </Lcate>
        {lCateBool[0].bool ? 
        <div className="grid gap-2">
            <Mcate className="">
                <div className="flex justify-between">
                    <div>
                        <PlusBtn>+</PlusBtn>
                        <span className="pl-1">1학년 1학기</span>
                    </div>
                    
                    <div onClick={()=>(0)}>
                        
                    </div>
                    
                </div>
                {
                [...Array(2).fill(1).map((_,i) => (
                <Scate key = {i}>
                    <span>
                        기업인수합병
                    </span>
                </Scate>    
                ))]}
                
            </Mcate>
            
            <Mcate className="">
                <div className=" flex justify-between">
                    <div>
                        <PlusBtn>+</PlusBtn>        
                        <span className="pl-1">1학년 2학기</span>
                    </div>
                    <div onClick={()=>(1)}>
                        
                    </div>
                    
                </div>
                {
                [...Array(2).fill(1).map((_,i) => (
                <Scate key = {i}>
                    <span>
                        기업인수합병
                    </span>
                </Scate>    
                ))]}
                
            </Mcate>    
        </div>
        
        :null}
        <Lcate onClick={()=>onClickLcate("비교과")}>
            <div>
                <PlusBtn>+</PlusBtn> 
                <LCateName>비교과</LCateName>
                   
            </div>
            <div onClick={()=>onClickLFold(1)} >
                <FoldBtn>{lCateBool[1].bool ? "⏷":"⏶" }</FoldBtn>
            </div>
            
        </Lcate>
        {lCateBool[1].bool ? 
        <div className="grid gap-2">
            <Mcate className="">
                <div className="flex justify-between">
                    <div>
                        <PlusBtn>+</PlusBtn>
                        <span className="pl-1">인턴</span>
                    </div>
                </div>
                {
                <Scate >
                    <span>
                        (주) 무신사 고객관리 인턴 
                    </span>
                </Scate>}
            </Mcate>
            
            <Mcate className="">
                <div className="flex justify-between ">
                    <div>
                        <PlusBtn>+</PlusBtn>        
                        <span className="pl-1">동아리</span>
                    </div>
                    
                </div>
            </Mcate>    
        </div>
        
        :null}
        <Lcate onClick={()=>onClickLcate("기타")}>
            <div>
                <PlusBtn>+</PlusBtn>
                <LCateName>기타</LCateName>
                
            </div>
            <div onClick={()=>onClickLFold(2)} >
                <FoldBtn>{lCateBool[2].bool ? "⏷":"⏶" }</FoldBtn>
            </div>
            
        </Lcate>
        {lCateBool[2].bool ? 
        <div className="grid gap-2">
            <Mcate className="">
                <div className=" ">
                    <PlusBtn>+</PlusBtn>
                    <span className="pl-1">기타</span>
                </div>
            </Mcate>   
        </div>
        :null}    
        </div>
        
        <button onClick={handleMenu} className="absolute right-3 bottom-10 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
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