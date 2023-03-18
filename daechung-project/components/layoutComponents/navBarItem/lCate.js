import { useRouter } from "next/router";
import { FoldBtn, PlusBtn } from "../navBar";
import MediumCategory from "./mCate";

const LCate = ["교과", "비교과", "기타"]


export default function LargeCategory({lCateName, mCates}){
    const router = useRouter()
    const onClickLcate = ()=> {
        router.push(`/notes/${lCateName}`)
    }
    return(
    <div>
        <div onClick={onClickLcate} className="bg-itemBg p-2 pl-2 w-64 flex justify-between group hover:cursor-pointer font-semibold text-textPoint">
            <div className="flex-1">
                <PlusBtn>+</PlusBtn>
                <span>{lCateName}</span>
            </div>
            <div>
                <FoldBtn>⏶</FoldBtn>
            </div>
        </div>
        <div>
            {mCates.map((medium,i)=>
            <div>
                <MediumCategory mCateName = {medium.name} mCateId = {i} lCateName={lCateName}/>
            </div>)}    
        </div>        
    </div>
    
    )
}