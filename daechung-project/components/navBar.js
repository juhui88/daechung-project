import tw from "tailwind-styled-components"

const Lcate = tw.div`
    bg-itemBg
    p-2
    pl-3
    w-64
`
const LCateName = tw.span`
    font-semibold
    text-textPoint
`
const LCateBtn = tw.button`
    text-gray-500
    opacity-0
    hover:opacity-100
    pl-2
`
const Mcate = tw.div`
    bg-white 
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
    return <div className="grid gap-2 w-">
        <Lcate>
            <LCateName>교과</LCateName>
            <LCateBtn>+</LCateBtn>
            
        </Lcate>
        <Mcate className="">
            <div className=" "><span>1학년 1학기</span></div>
            <Scate >
                <spn>
                    기업인수합병
                </spn>
            </Scate>
            <Scate >
                <spn>
                    기업인수합병
                </spn>
            </Scate>
        </Mcate>
        <Mcate className="">
            <div className=" "><span>1학년 2학기</span></div>
            <Scate className=" ">
                <spn>
                    기업인수합병
                </spn>
            </Scate>
        </Mcate>
        <Lcate>
            <LCateName>비교과</LCateName>
            <LCateBtn>+</LCateBtn>
        </Lcate>
        <Lcate>
            <LCateName>기타</LCateName>
            <LCateBtn>+</LCateBtn>
        </Lcate>
    </div>
}