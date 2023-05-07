import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil";
import { changeState } from "./atom";

export default function Note({content, id, date}) {
    const {register, reset, handleSubmit } = useForm()
    const [modifyClick, setModifyClick] = useState(false);
    const [change, setChange] = useRecoilState(changeState);
    const btnRef = useRef()

    const onClickModify = () => {
        setModifyClick(prev => !prev)
       
    }

    const onClickDelete = () => {
        axios({
            method:"delete",
            url:`${process.env.NEXT_PUBLIC_API_URL}/notes/note-id/${id}`,
        }).then(res=>{
            console.log(res)
            setChange(prev=>!prev)
        })
        .catch(err=>console.log(err)) 
        
        console.log(change)
    }
    const onValid = (data) => {
        const formData = new FormData();
        formData.append('content', data.content);
        axios({
            method:"put",
            url:`${process.env.NEXT_PUBLIC_API_URL}/notes/content/${id}`,
            headers:{
                'Content-Type': 'multipart/form-data',
            },
            data:formData
        }).then(res=>{
            console.log("노트수정",res)
            setChange(prev=>!prev)
        })
        .catch(err=>console.log(err)) 
        setModifyClick(false)

    }
    const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (e) => {
        if (!e.shiftKey &&e.key === "Enter"){
                e.preventDefault();
                btnRef.current.click()
        }else if(e.shiftKey &&e.key === "Enter"){
            e.preventDefault();
            console.log("하ㅓ일ㄴ")
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            textarea.value = value.substring(0, start) + "\n" + value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        
        }
    }

    return<div className="flex h-32 space-x-2 mt-3 ">
        <div className="flex items-center justify-center w-40  ">
            <div className="w-28 h-32 bg-white shadow-2xl"/>
        </div>
        <div className="border flex-1 border-gray-400 p-1  relative">
            <div className="flex justify-between text-sm p-1 ">
                <div>
                    <span>{date}</span>
                </div>
                
                <div className="">
                    <span className="px-2 border-r-[1px] border-black cursor-pointer hover:font-bold" onClick={onClickModify}>수정</span>
                    <span className="px-2 cursor-pointer hover:font-bold" onClick={onClickDelete}>삭제</span>
                </div>
            </div>

            <div className="h-24 flex-1 absolute left-0 right-0  overflow-x-hidden pl-2">
                {modifyClick ?
                <form onSubmit={handleSubmit(onValid)} className="">
                    <textarea onKeyDown={handleKeyDown} placeholder={content} className="h-[89px] font-bold  w-full focus:outline-none whitespace-pre-wrap" {...register("content")}/>
                    <button className="hidden" ref = {btnRef}/>
                </form>
                :<span className="text-sm">{content} </span>}
                
            </div>
            
        </div>
    </div>
}