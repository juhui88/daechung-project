import Router from "next/router";
import { useEffect, useState } from "react";
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
const ProfileImg = tw.button`
    h-40
    w-40
    rounded-full
    cursor-pointer
    bg-cover
    focus:ring-2
    ring-gray-500
    transition
`


export default function Profile() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [isThirdMajor, setIsThirdMajor] = useState(false)
    const [profileImgNum, setProfileImgNum] = useState(0);

    const onValid = (data) => {
        console.log(data); // 나중에 여기서 백엔드로 옮기기
        Router.push('home')
    }

    const onClickThird = () => {
        if(!isThirdMajor){
            setIsThirdMajor(true)
        }
    }
    const onClickProImg = (num) => {
        setProfileImgNum(num)
    }
    return <div className="lg:h-screen lg:flex">
        <div className=" m-10 lg:flex-grow relative">
            <div className="mb-7">
                <span className="text-3xl font-extrabold text-gray-500">회원 정보 입력</span>
            </div>
            
            <form className=" grid gap-10 xl text-gray-500" onSubmit = {handleSubmit(onValid)}>
                <button type="submit" className="fixed top-3 right-3 font-semibold hover:scale-110 transition">시작하기➜</button>
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
                <InputWrap>
                    <InputField>
                        <span>제1전공*:</span>
                        <Input type="text" {...register(`stMajor`, {required:"전공을 입력해주세요"})}/>
                        
                    </InputField>
                    <ErrorSpan>{errors?.stMajor?.message}</ErrorSpan>
                    
                </InputWrap>
                <InputWrap>
                    <InputField>
                        <span>제2전공:</span>
                        <Input type="text" {...register(`ndMajor`)}/>
                        
                    </InputField>
                    <ErrorSpan>{errors?.ndMajor?.message}</ErrorSpan>
                    
                </InputWrap>
                {isThirdMajor?
                <InputWrap>
                    <InputField>
                        <span>제3전공:</span>
                        <Input type="text" {...register(`ndMajor`)}/>
                        
                    </InputField>
                    <ErrorSpan>{errors?.rdMajor?.message}</ErrorSpan>
                </InputWrap> :""}
            </form>
            <div onClick={onClickThird} className="mx-20 text-right cursor-pointer">+</div>
            <div className="hidden lg:flex absolute bottom-0">
                <img src = "누워있는대충이.png" className="object-contain w-32"/>
                <img src = "하트.png" className=" object-contain w-10"/>
            </div>
        </div>
        <div className="bg-bgPoint lg:flex-grow">
            <div className="p-10 text-3xl font-extrabold text-gray-500">
                <span>프로필을 선택하세요 :&#41;</span>
            </div>
            <div className="p-10 gap-8 grid grid-cols-3 justify-items-center ">
                <ProfileImg className="bg-[url('../public/profileImgs/profile_1.png')]" />
                <ProfileImg className="bg-[url('../public/profileImgs/profile_2.png')]" />
                <ProfileImg className="bg-[url('../public/profileImgs/profile_3.png')]" />
                <ProfileImg className="bg-[url('../public/profileImgs/profile_4.png')]" />
                <ProfileImg className="bg-[url('../public/profileImgs/profile_5.png')]" />
                <ProfileImg className="bg-[url('../public/profileImgs/profile_6.png')]" />
            </div>
        </div>
    </div>
}