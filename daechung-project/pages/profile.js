import { useState } from "react";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";

const InputWrap = tw.div`
    mx-20
`
const InputField = tw.div`
    border-2
    shadow-md
    font-semibold
    p-3
`
const Input = tw.input`
    focus:outline-none
    w-4/5
    ml-1
`
const ErrorSpan = tw.span`
    text-xs 
    p-2
`
const Img = tw.div`
    h-40
    w-40
    bg-white
    rounded-full
`

export default function Profile() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {majorNum, setMajorNum} = useState(1);
    const onValid = (data) => {
        console.log(data); // 나중에 여기서 백엔드로 옮기기
    }

    const onClick = () => {
        if(majorNum==!3){
            setMajorNum(prev=>prev+1)
        }
    }
    return <div className="lg:h-screen lg:flex">
        <div className=" m-10 lg:flex-grow">
            <div className="mb-7">
                <span className="text-3xl font-bold text-gray-500">회원 정보 입력</span>
            </div>
            
            <form className="grid gap-10 xl text-gray-500" onSubmit = {handleSubmit(onValid)}>
                <button type="submit" className="absolute top-3 right-3 font-semibold ">시작하기➜</button>
                <InputWrap>
                    <InputField>
                        <span>이름*:</span>
                        <Input type="text" {...register("name", {required:"이름을 입력해주세요"})}/>    
                    </InputField>
                     
                    <ErrorSpan>{errors?.name?.message}</ErrorSpan>
                </InputWrap>
                <InputWrap>
                    <InputField>
                        <span>학교*:</span>
                        <Input type="text" {...register("uniName", {required:"학교명을 입력해주세요"})}/>
                        
                    </InputField>
                    <ErrorSpan>{errors?.uniName?.message}</ErrorSpan>
                </InputWrap>
                <InputWrap>
                    <InputField>
                        <span>학번*:</span>
                        <Input type="text" {...register("stuId", {required:"학번을  입력해주세요"})}/>
                    
                    </InputField>
                    <ErrorSpan>{errors?.stuId?.message}</ErrorSpan>
                </InputWrap>
                {}
                <InputWrap>
                    <InputField>
                        <span>제1전공*:</span>
                        <Input type="text" {...register("major", {required:"전공을 입력해주세요"})}/>
                        
                    </InputField>
                    <ErrorSpan>{errors?.major?.message}</ErrorSpan>
                </InputWrap>
                <button className="">+</button>
            </form>
        </div>
        <div className="bg-bgPoint lg:flex-grow">
            <div className="p-10 text-3xl font-bold text-gray-500">
                <span>프로필을 선택하세요 :&#41;</span>
            </div>
            <div className="p-10 gap-8 grid grid-cols-3 justify-items-center">
                <Img/>
                <Img/>
                <Img/>
                <Img/>
                <Img/>
                <Img/>
            </div>
        </div>
    </div>
}