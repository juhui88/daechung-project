import { kakaoInit } from "../components/kakaoInit";
import Router from "next/router";
import Link from "next/link";

export const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";

export default function Login() {
    const kakaoLogin = async () => {
         /*const kakao = kakaoInit();
        console.log(kakao.Auth.getAccessToken()); 
        kakao.Auth.login({
            success: () => {
                kakao.API.request({
                    url: '/v2/user/me', // 사용자 정보 가져오기
                    success: (res) => { 
                        // 로그인 성공할 경우 정보 확인 
                        console.log(res);
                        //Router.push('/join') // 가입하지 않은 유저라면
                    },
                    fail: (error) => {
                        console.log(error);
                    }
                })
            },
            fail: (error) => {
                console.log(error)
            }
        }) */
         Router.push(``) 
    }

    return (
    <div className="h-screen flex flex-col ">
        <div className="w-96 mt-32  mx-auto">
            <div className="mb-2">
                <span className="text-textPoint font-extrabold ">로그인</span>
            </div>
            <Link className="flex border-2 border-gray-300 p-2 cursor-pointer mb-2"
                href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`}>
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
                <p className="">회사소개</p>
                <p className="mt-6">Tel . 02-123-6789</p>
            </div>
        </div>
    </div>    
    )
    
        
    
}