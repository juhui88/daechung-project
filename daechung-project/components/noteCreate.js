import { useState } from "react"

export default function NoteCreate() {
    const [imgSrc, setImgSrc] = useState([]);
    const [imgNum, setImgNum] = useState(0);

    const handleChangeFiles = (files) => {
        
        console.log(files)
        for (let i = 0; i < files.length; i++) {
            let file = files[i]
            const reader = new FileReader();
            reader.onload = () => {
                console.log(reader.result);
                setImgSrc([...imgSrc, reader.result])
            }
            reader.readAsDataURL(file)
        }
        console.log(imgSrc)
    }
    
    return<div className="flex h-32 space-x-8">
        <label className=" flex items-center justify-center w-28 cursor-pointer shadow-2xl">
            {imgSrc.length !== 0 ? 
                <div className="relative">
                    <img src={imgSrc[imgNum]} className="" />
                    <span className="absolute right-0 bg-white px-3 text-sm font-bold text-textPoint shadow-md">{imgNum+1}/{imgSrc.length}</span>
                </div>
                 :
                <span className="font-extrabold text-4xl  text-gray-500 ">+</span>}
            <input type="file" className="hidden" onChange={(e) =>handleChangeFiles(e.target.files)} multiple/>
        </label>
        <div className="border flex-1 border-gray-400 ">
        
            <textarea type="text" className="text-sm h-full p-1 w-full break-all normal-nums" rows = {3}/>
        </div>
    </div>
}