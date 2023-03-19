import { useState } from "react"
import { useForm } from "react-hook-form";

export default function NoteCreate() {
    const [ img, setImg ] = useState([])
    const [ previewImg, setPreviewImg ] = useState([])
    const [imgNum, setImgNum] = useState(0);
    const {register, handleSubmit} = useForm()

    const insertImg = (e) => {
        const fileArr = e.target.files;

        let fileURLs = [];
    
        let file;

        for (let i = 0; i < fileArr.length; i++) {
            file = fileArr[i];
            
            let reader = new FileReader();
                reader.onload = () => {
                console.log(reader.result);
                fileURLs[i] = reader.result;
                setPreviewImg([...fileURLs]);
            };
            reader.readAsDataURL(file);
        }
        
    }
    const onClickNumUp = () => {
        setImgNum(prev => prev !==previewImg.length-1 ? prev+1: prev)
    }
    const onClickNumDown = () => {
        setImgNum(prev => prev !== 0 ? prev-1 : prev)
    }

    const onValid = (data) => {
        console.log(data)
    }
    return <div className="flex h-32 space-x-5">
        <div className="w-40 relative flex items-center justify-center ">
            {previewImg.length !== 0 && imgNum !== 0 ? 
                <span onClick={onClickNumDown} className="absolute left-0 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
            
            : null}
            {previewImg.length > 1 && imgNum !== previewImg.length-1 ? 
                <span onClick={onClickNumUp} className=" absolute right-0 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                
            : null}
            <label className="relative flex items-center justify-center cursor-pointer shadow-2xl w-28 bg-white h-32">
            {previewImg.length !== 0 ? 
                <div className="relative  w-28 h-32 ">
                    <img src={previewImg[imgNum]} className="bg-contain h-full" />
                    <span className="absolute right-0 bottom-0 bg-white px-3 text-sm font-bold text-textPoint shadow-md">{imgNum+1}/{previewImg.length}</span>
                </div>
                :
                <span className="font-extrabold text-4xl  text-gray-500 ">+</span>}
                <input type="file" className="hidden" onChange={(e)=>insertImg(e)} multiple/>
            </label>   

        </div>
        <form  onSubmit={handleSubmit(onValid)} className="border flex-1 border-gray-400 ">
        
            <input {...register("text")} type="text" className="text-sm h-full p-1 w-full break-all normal-nums" rows={3} />
            <button className="hidden"/>
        </form>
    </div>
}