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
const LcateFoldBtn = tw.button`
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
    const [lCateBool, setLCateBool] = useState([
        {
            index:0,
            bool:true
        },
        {
            index:1,
            bool:true
        },
        {
            index:2,
            bool:true
        }
    ])
    const [mCateBool, setMCateBool] = useState([

    ])
    
    const onClickFold = (i) => {
        setLCateBool(
            lCateBool.map(item=>
                item.index===i ? {...item, bool: !item.bool}: item)
        )
    }

    const onClickPlus = (i) => {

    }
    return <div className="grid gap-2 ">
        <Lcate>
            <div className="">
                <PlusBtn >+</PlusBtn>
                <LCateName>교과</LCateName>
                
            </div>
            <div onClick={()=>onClickFold(0)} >
                <LcateFoldBtn>{lCateBool[0].bool ?"⏶" : "⏷"}</LcateFoldBtn>
            </div>
        </Lcate>
        {lCateBool[0].bool ? null: 
        <div className="grid gap-2">
            <Mcate className="">
                <div className=" ">
                    <PlusBtn>+</PlusBtn>
                    <span className="pl-1">1학년 1학기</span>
                </div>
                {[...Array(2).fill(1).map((_,i) => (
                <Scate key = {i}>
                    <span>
                        기업인수합병
                    </span>
                </Scate>    
                ))]}
                
            </Mcate>
            
            <Mcate className="">
                <div className=" ">
                    <PlusBtn>+</PlusBtn>        
                    <span className="pl-1">1학년 2학기</span>
                </div>
                {[...Array(2).fill(1).map((_,i) => (
                <Scate key = {i}>
                    <span>
                        기업인수합병
                    </span>
                </Scate>    
                ))]}
            </Mcate>    
        </div>
        
        }
        <Lcate>
            <div>
                <PlusBtn>+</PlusBtn> 
                <LCateName>비교과</LCateName>
                   
            </div>
            <div onClick={()=>onClickFold(1)} >
                <LcateFoldBtn>{lCateBool[1].bool ? "⏶": "⏷"}</LcateFoldBtn>
            </div>
            
        </Lcate>
        {lCateBool[1].bool ? null: 
        <div className="grid gap-2">
            <Mcate className="">
                <div className=" ">
                    <PlusBtn>+</PlusBtn>
                    <span className="pl-1">인턴</span>
                </div>
                <Scate >
                    <span>
                        (주) 무신사 고객관리 인턴 
                    </span>
                </Scate>
            </Mcate>
            
            <Mcate className="">
                <div className=" ">
                    <PlusBtn>+</PlusBtn>        
                    <span className="pl-1">동아리</span>
                </div>
            </Mcate>    
        </div>
        
        }
        <Lcate>
            <div>
                <PlusBtn>+</PlusBtn>
                <LCateName>기타</LCateName>
                
            </div>
            <div onClick={()=>onClickFold(2)} >
                <LcateFoldBtn>{lCateBool[2].bool ? "⏶": "⏷"}</LcateFoldBtn>
            </div>
            
        </Lcate>
        {lCateBool[2].bool ? null: 
        <div className="grid gap-2">
            <Mcate className="">
                <div className=" ">
                    <PlusBtn>+</PlusBtn>
                    <span className="pl-1">기타</span>
                </div>
            </Mcate>   
        </div>
        
        }
    </div>
}