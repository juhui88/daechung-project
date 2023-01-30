import { useState } from "react"
import tw from "tailwind-styled-components"

const Lcate = tw.div`
    bg-itemBg
    p-2
    pl-3
    w-64
    flex
    justify-between
    group
    hover:cursor-pointer
`
const LCateName = tw.span`
    font-semibold
    text-textPoint
`
const LCatePlusBtn = tw.button`
    text-gray-500
    pl-2
    hover:scale-125
`
const LcateFoldBtn = tw.button`
    opacity-0
    group-hover:opacity-100
    group-hover:duration-300
    pr-3
    text-gray-600
`
const Mcate = tw.div`
    px-3 w-64 
    text-gray-600 
    grid 
    gap-2 
    font-medium
`
const Scate = tw.div`
    pl-5
`
export default function NavBar() {
    const [lCateBool, setLcateBool] = useState([
        {
            index:0,
            bool:false
        },
        {
            index:1,
            bool:false
        },
        {
            index:2,
            bool:false
        }
    ])
    
    const onClickFold = (i) => {
        setLcateBool(
            lCateBool.map(item=>
                item.index===i ? {...item, bool: !item.bool}: item)
        )
    }

    return <div className="grid gap-2 sc">
        <Lcate>
            <div>
                <LCateName>교과</LCateName>
                <LCatePlusBtn >+</LCatePlusBtn>
            </div>
            <div onClick={()=>onClickFold(0)} >
                <LcateFoldBtn>{lCateBool[0].bool ?"⏶" : "⏷"}</LcateFoldBtn>
            </div>
        </Lcate>
        {lCateBool[0].bool ? null: 
        <div className="grid gap-2">
            <Mcate className="">
                <div className=" "><span>1학년 1학기</span></div>
                <Scate >
                    <span>
                        기업인수합병
                    </span>
                </Scate>
                <Scate >
                    <span>
                        기업인수합병
                    </span>
                </Scate>
            </Mcate>
            
            <Mcate className="">
                <div className=" "><span>1학년 2학기</span></div>
                <Scate className=" ">
                    <span>
                        기업인수합병
                    </span>
                </Scate>
            </Mcate>    
        </div>
        
        }
        <Lcate>
            <div>
                <LCateName>비교과</LCateName>
                <LCatePlusBtn>+</LCatePlusBtn>    
            </div>
            <div onClick={()=>onClickFold(1)} >
                <LcateFoldBtn>{lCateBool[1].bool ? "⏶": "⏷"}</LcateFoldBtn>
            </div>
            
        </Lcate>
        <Lcate>
            <div>
                <LCateName>기타</LCateName>
                <LCatePlusBtn>+</LCatePlusBtn>
            </div>
            <div onClick={()=>onClickFold(2)} >
                <LcateFoldBtn>{lCateBool[2].bool ? "⏶": "⏷"}</LcateFoldBtn>
            </div>
            
        </Lcate>
    </div>
}