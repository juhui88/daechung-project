import { deleteState } from "@/components/atom";
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil";

export default function ModifyButton() {
    const [modiBtnClicked, setModiBtnClicked] = useState(false);
    const [isDelete, setIsDelete] = useRecoilState(deleteState);
    const onClick = () => {
        setModiBtnClicked(prev=>!prev)
    }

    const onClickDelte = () => {
        setIsDelete(prev=>!prev)
        console.log(isDelete)
    }
    return (
    <div>
        <div className = "absolute right-0"onClick={onClick}>
            ...
        </div>
        {modiBtnClicked ?
        <div className="border-[1px] w-32 bg-white absolute right-5 -top-10 cursor-pointer">
            <div className="border-b-[1px]" onClick={onClickDelte}>
                <span className="pl-2">삭제하기</span>
            </div>
            <div>
                <span className="pl-2">순서 바꾸기</span>
            </div>
        </div>
        :null}
    </div>)
}    
    
    