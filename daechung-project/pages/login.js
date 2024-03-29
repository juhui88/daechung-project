import Router from "next/router";
import Link from "next/link";


export default function Login() {
    return (
    <div className="h-screen flex flex-col ">
        <div className="w-96 mt-32  mx-auto">
            <div className="mb-2">
                <span className="text-textPoint font-extrabold ">로그인</span>
            </div>
            <Link href = {`${process.env.NEXT_PUBLIC_API_URL}/auth/kakao/callback`}  className="flex border-2 border-gray-300 p-2 cursor-pointer mb-2">
                <img className="h-6" src="kakaoLogo.png"/>
                <span className="mx-auto text-gray-600">카카오톡 계정으로 시작하기</span>
            </Link>
        </div>
        <div className="flex-1 flex flex-col">
            <div className="flex-1"/>
            <div className="flex items-end">
                <span className="text-textPoint font-extrabold text-2xl p-3">대충</span>
                <img src="메인대충이.png" className="w-20 mb-2"/>
            </div>
            <div className="bg-bgPoint h-36 p-3">
                <p className="mt-6">Instagram: @dae_gang_co</p>
            </div>
        </div>
    </div>    
    )
    
        
    
}