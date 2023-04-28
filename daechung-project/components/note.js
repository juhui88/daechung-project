import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil";
import { changeState } from "./atom";

export default function Note({content, id}) {
    const {register, reset, handleSubmit } = useForm()
    const [modifyClick, setModifyClick] = useState(false);
    const [cont, setCont] = useState(content)

    const [change, setChange] = useRecoilState(changeState);

    const onClickModify = () => {
        setModifyClick(prev => !prev)
       
    }

    const onClickDelete = () => {
        axios({
            method:"delete",
            url:`${process.env.NEXT_PUBLIC_API_URL}/notes/note-id/${id}`,
        }).then(res=>console.log(res))
        .catch(err=>console.log(err)) 
        setChange(prev=>!prev)
        console.log(change)
    }
    const onValid = (data) => {
        const formData = new FormData();
        formData.append('content', data.content);
        setCont(data.content)
        axios({
            method:"put",
            url:`${process.env.NEXT_PUBLIC_API_URL}/notes/content/${id}`,
            headers:{
                'Content-Type': 'multipart/form-data',
            },
            data:formData
        }).then(res=>console.log("노트수정",res))
        .catch(err=>console.log(err)) 
        setModifyClick(false)

    }

    return<div className="flex h-32 space-x-2 mt-3 ">
        <div className="flex items-center justify-center w-40  ">
            <div className="w-28 h-32 bg-white shadow-2xl"/>
        </div>
        <div className="border flex-1 border-gray-400 p-1  relative">
            <div className="flex justify-between text-sm p-1 ">
                <div>
                    <span>날짜</span>
                </div>
                
                <div className="">
                    <span className="px-2 border-r-[1px] border-black cursor-pointer hover:font-bold" onClick={onClickModify}>수정</span>
                    <span className="px-2 cursor-pointer hover:font-bold" onClick={onClickDelete}>삭제</span>
                </div>
            </div>

            <div className="h-24 absolute left-0 right-0">
                {modifyClick ?
                <form onSubmit={handleSubmit(onValid)} className="">
                    <input  placeholder = {cont} className="font-bold  w-full focus:outline-none whitespace-pre-wrap" {...register("content")}/>
                </form>
                :<span className="text-sm">{cont} </span>}
                
            </div>
            
        </div>
    </div>
}