import axios from "axios";
import { useRef, useState } from "react"
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { changeState } from "./atom";


export default function NoteCreate({sCateId}) {
    const [ img, setImg ] = useState([])
    const [ previewImg, setPreviewImg ] = useState([])
    const [imgNum, setImgNum] = useState(0);
    const {register,reset, handleSubmit} = useForm()
    const [files, setFiles] = useState()
    const btnRef = useRef()

    const [change, setChange] = useRecoilState(changeState)
    
    axios.interceptors.request.eject()
    const insertImg = (e) => {
        const fileArr = e.target.files;

        let fileURLs = [];
    
        let file;

        for (let i = 0; i < fileArr.length; i++) {
            file = fileArr[i];
            
            let reader = new FileReader();
                reader.onload = () => {
                fileURLs[i] = reader.result;
                setPreviewImg([...fileURLs]);
            };
            reader.readAsDataURL(file);
        }
        alert("파일 업로드 기능 구현 준비 중")
    }

    const onClickNumUp = () => {
        setImgNum(prev => prev !==previewImg.length-1 ? prev+1: prev)
    }
    const onClickNumDown = () => {
        setImgNum(prev => prev !== 0 ? prev-1 : prev)
    }

    const onValid = (data) => {
        console.log(data.files)
        const formData = new FormData();
        formData.append('content', data.content);
        console.log(formData)
        if (Array.from(data.files).length !== 0 ){
            Array.from(data.files).map(f=>formData.append('file', f))
        }
        
         axios({
            method:"post",
            url:`${process.env.NEXT_PUBLIC_API_URL}/notes/small-cate-id/${sCateId}`,
            headers:{
                'Content-Type': 'multipart/form-data',
            },
            data:formData
        }).then(res=>{
            console.log("notecreate",res)
            setChange(prev=> !prev)
        })
        .catch(err=>console.log(err)) 
        reset() 
        setPreviewImg([])
        
        console.log("체인지",change)
        
    }

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
    return <div className="flex h-32">
        <form className="w-full" onSubmit={handleSubmit(onValid)}>
            <div className="flex space-x-2 ">
                <div className=" w-40 relative flex items-center justify-center ">
                    {previewImg.length !== 0 && imgNum !== 0 ? 
                    <span onClick={onClickNumDown} className="absolute z-10 left-0 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                
                : null}
                {previewImg.length > 1 && imgNum !== previewImg.length-1 ? 
                    <span onClick={onClickNumUp} className="absolute z-10 text-gray-500 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                
                    : null}
                    <label htmlFor="files">
                        {previewImg.length !== 0 ? 
                        <div className="relative  w-28 h-32 shadow-xl flex items-center">
                            <img src={previewImg[imgNum]} className="" />
                            <span className="absolute bottom-0 bg-itemBg px-1 rounded-md text-textPoint font-bold right-2">{imgNum+1}/{previewImg.length}</span>
                        </div>
                        :
                        <div className="w-28 h-32 flex justify-center items-center shadow-xl cursor-pointer ">
                            <span className="text-5xl font-bold text-gray-500 ">+</span>
                        </div>} 
                    
                    </label>   
                    <input id="files" {...register("files")} type="file" className="hidden" onChange={(e)=>insertImg(e)} multiple/> 
                </div>
                
                <div className="flex-1 ">
                    <textarea onKeyDown={handleKeyDown} {...register("content")} type="text" className="border border-gray-400 text-sm h-32 p-1 w-full break-all normal-nums" rows={3} />
                    <button className="hidden" ref = {btnRef} >버튼</button>
                </div>
                
            </div>
            
        </form>
    </div>
}