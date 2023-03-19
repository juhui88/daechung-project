import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import tw from "tailwind-styled-components";
import Image from 'next/image'

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
    my-10
`


export default function Signup() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [profileImgNum, setProfileImgNum] = useState(0);
    const router = useRouter();
    const token = router.query.token
    const onValid = (data) => {
        console.log(data); // 나중에 여기서 백엔드로 옮기기
        axios.post(
            `http://${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
            {
                schoolName:data.uniName,
                studentNumber: Number(data.stuId),
                major1:data.major1,
                major2:data.major2 ? data.major2 : "",
                profileImgUrl:"dfdsfsfa",//이미지 무조건 있게
            },
            {
                headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
        }).then(res=>{
            console.log(res)
            router.push({
                pathname: "/home",
                query: {
                    token: token
                }
            },"/home")
        })
        
    }

    const onClickProImg = (num) => {
        setProfileImgNum(num)
    }
    return <div className="lg:h-screen lg:flex">
        <div className=" m-10 lg:flex-grow relative ">
            <div className="mb-7">
                <span className="text-3xl font-extrabold text-gray-500">회원 정보 입력</span>
            </div>
            
            <form className=" grid gap-10 xl text-gray-500" onSubmit = {handleSubmit(onValid)}>
                <button type="submit" className="hidden lg:block absolute lg:fixed lg:bottom-10 lg:right-10 font-semibold hover:scale-110 transition text-textPoint border-2 border-gray-300 p-2 text-xl shadow-lg">시작하기➜</button>
                <button type="submit" className="absolute -top-3 right-0 lg:hidden font-semibold hover:scale-110 transition text-textPoint border-2 border-gray-300 p-2 text-xl shadow-lg">시작하기➜</button>
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
                        <Input type="text" {...register(`major1`, {required:"전공을 입력해주세요"})}/>
                        
                    </InputField>
                    <ErrorSpan>{errors?.major1?.message}</ErrorSpan>
                    
                </InputWrap>
                <InputWrap>
                    <InputField>
                        <span>제2전공:</span>
                        <Input type="text" {...register(`major2`)}/>
                        
                    </InputField>
                    
                </InputWrap>
            </form>
            <div className="hidden lg:flex absolute bottom-0">
                <Image src = "/누워있는대충이.png" className="object-contain"  width={128} height={30}/>
                <Image src = "/하트.png" className=" object-contain" width={40} height={30}/>
            </div> 
        </div>
        <div className="bg-bgPoint lg:flex-grow w-1/6">
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