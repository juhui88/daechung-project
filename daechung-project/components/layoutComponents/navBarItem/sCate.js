import { deleteState } from "@/components/atom"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { PlusBtn } from "../navBar";
import axios from "axios";

export default function SmallCategory ({name,id}) {
    const [isDelete, setIsDelete] = useRecoilState(deleteState);

    const onClickDelte = () => {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/small-cates/small-cate-id/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        setIsDelete(false)
    }

    return (
    <div>
        <div className="flex  w-64  group cursor-pointer mb-2">
            {isDelete ? 
            <div className="opacity-0 group-hover:opacity-100 text-gray-500 hover:font-bold hover:text-gray-700 hover:duration-300 w-3 absolute" onClick={onClickDelte}>
                <button className="">🗑</button>
            </div>
            :null}
            <span className="pl-8 peer" >{name}</span>
        </div>
    </div>)
}    
    
    