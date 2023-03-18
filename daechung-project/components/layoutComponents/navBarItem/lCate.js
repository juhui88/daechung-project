import { FoldBtn, PlusBtn } from "../navBar";

const LCate = ["교과", "비교과", "기타"]


export default function LargeCategory({name}){

    return(
    <div className="bg-itemBg p-2 pl-2 w-64 flex justify-between group hover:cursor-pointer font-semibold text-textPoint">
        <div className="flex-1">
            <PlusBtn>+</PlusBtn>
            <span>{name}</span>
        </div>
        <div>
            <FoldBtn>⏶</FoldBtn>
        </div>
    </div>
    )
}