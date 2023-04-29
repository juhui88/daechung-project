import { changeState, deleteState } from "@/components/atom"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { PlusBtn } from "../navBar";
import axios from "axios";

export default function SmallCategory ({name,id, mCateName, lCateName}) {
    const [isDelete, setIsDelete] = useRecoilState(deleteState);
    const [change, setChange] = useRecoilState(changeState)
    const router = useRouter()

    const onClickDelte = () => {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/small-cates/small-cate-id/${id}`)
        .then(res=>{
            console.log(res)
            setChange(prev=>!prev)
        })
        .catch(err=>console.log(err))
        setIsDelete(false)
    }
    const onClickScate = (sCateName,sCateId) => {
        router.push({
            pathname:`/notes/${lCateName}/${mCateName}/${sCateName}`,
            query:{
                sCateId : sCateId
            }
        },`/notes/${lCateName}/${mCateName}/${sCateName}`)
    } 

    return (
    <div>
        <div className=" w-64  group cursor-pointer mb-2">
            {isDelete ? 
            <div className="opacity-0 group-hover:opacity-100 text-gray-500 hover:font-bold hover:text-gray-700 hover:duration-300 w-3 absolute" onClick={onClickDelte}>
                <button className="">🗑</button>
            </div>
            :null}
            <div className="ml-8 peer " onClick={()=>onClickScate(name, id)}>{name}</div>
        </div>
    </div>)
}    
    
    