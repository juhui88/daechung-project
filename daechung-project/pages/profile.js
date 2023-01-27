import { useForm } from "react-hook-form";

export default function Profile() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onValid = (data) => {
        console.log(data);
    }
    return <div className="flex w-full h-screen">
        <div className=" m-10">
            <div className="mb-7">
                <span className="text-3xl font-bold text-gray-500">회원 정보 입력</span>
            </div>
            
            <form className="grid gap-2" onSubmit = {handleSubmit(onValid)}>
                <div className=" border-2 border-blue-500">
                    <span>이름*:</span>
                    <input  {...register("name", {required:"이름을 입력해주세요"})}/> 
                    
                    <span>{errors?.name?.message}</span>
                </div>
                <div>
                    <span>학교*:</span>
                    <input {...register("uniName", {required:"학교명을 입력해주세요"})}/>
                    <span>{errors?.uniName?.message}</span>
                </div>
                <div>
                    <span>학번*:</span>
                    <input {...register("stuID", {required:"학번을 입력해주세요"})}/>
                    <span>{errors?.stuId?.message}</span>
                </div>
                <div>
                    <span>제1전공*:</span>
                    <input {...register("major", {required:"전공을 입력해주세요"})}/>
                    <span>{errors?.major?.message}</span>
                </div>
                <div>
                    <button>시작하기➜</button>
                </div>
            </form>
        </div>
        <div className="bg-bgPoint flex-grow">
            dfd
        </div>
    </div>
}