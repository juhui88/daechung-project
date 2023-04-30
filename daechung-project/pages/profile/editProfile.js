import ProfileBar from "@/components/profileBar";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function Profile() {
    const [previewImg, setPreviewImg] = useState("/profileImgs/profile_1.png")
    const {register, handleSubmit, formState:{errors}} = useForm();
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

    const onValid = (data)=> {
        console.log(data)
    }

    return (
    <div>
        <ProfileBar>
            <div className="flex space-x-10">
                <div className="space-y-3">
                    <img src={previewImg} className="w-32 h-32 border-2 rounded-full bg-contain "/> 
                    <label className="cursor-pointer w-32 flex justify-center">
                        <span className="border-2 p-1 rounded-lg text-sm">프로필편집</span>
                        <input type="file" className="hidden" onChange={(e)=>insertImg(e)} />
                    </label>       
                </div>
                <div className="flex-1">
                    <form className=" text-gray-500 " onSubmit = {handleSubmit(onValid)}>
                        <div className="grid gap-5 ">
                            <div className="space-x-2">
                                <span className="font-bold">이름:</span>
                                <input className=" w-3/4 lg:w-80 border-2 rounded-xl w-" type="text" {...register("name")}/>
                            
                            </div>
                            <div className="space-x-2">
                                <span className="font-bold">학교:</span>
                                <input className=" w-3/4 lg:w-80 border-2 rounded-xl w-" type="text" {...register("name")}/>
                            
                            </div>
                            <div className="space-x-2">
                                <span className="font-bold">학번:</span>
                                <input className=" w-3/4 lg:w-80 border-2 rounded-xl w-" type="text" {...register("name")}/>
                            
                            </div>
                            <div className="space-x-2 flex">
                                <span className="font-bold">전공:</span>
                                <div className="grid gap-5">
                                    <input className=" w-3/4 lg:w-80 border-2 rounded-xl w-" type="text" {...register("name")}/>
                                    <input className=" w-3/4 lg:w-80 border-2 rounded-xl w-" type="text" {...register("name")}/>    
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>       
            </div>
        </ProfileBar>
    </div>
    )
    
}