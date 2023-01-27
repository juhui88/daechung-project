import { kakaoInit } from "../components/kakaoInit";
import  Router  from "next/router";

export default function Login(){
    const kakaoLogin = async() => {
        const kakao = kakaoInit();
        console.log(kakao.Auth.getAccessToken()); 
        kakao.Auth.login({
            success: () => {
                kakao.API.request({
                    url: '/v2/user/me', // 사용자 정보 가져오기
                    success: (res) => { 
                        // 로그인 성공할 경우 정보 확인 
                        console.log(res);
                        Router.push('/profile') // 이미 가입한 유저라면 /profile
                    },
                    fail: (error) => {
                        console.log(error);
                    }
                })
            },
            fail: (error) => {
                console.log(error)
            }
        })
    }

    return (
    <div className="h-screen flex flex-col ">
        <div className="w-96 mt-32  mx-auto">
            <div className="mb-2">
                <span className="text-textPoint font-semibold ">로그인</span>
            </div>
            <div className="flex border-2 border-gray-300 p-2 cursor-pointer mb-2" onClick={kakaoLogin}>
                <img className="h-6" src="kakaoLogo.png"/>
                <span className="mx-auto text-gray-600">카카오톡 계정으로 로그인</span>
            </div>
            <div className="py-1 text-sm text-gray-600 ">
                <input type="checkbox"/>
                <span className="">로그인 정보 저장</span>
            </div>
        </div>
        <div className="flex-1 flex flex-col">
            <div className="flex-1"/>
            <div>
                <span className="text-textPoint font-extrabold text-2xl p-3">대충</span>
            </div>
            <div className="bg-bgPoint h-36 p-3">
                <p className="">회사소개</p>
                <p className="mt-6">Tel . 02-123-6789</p>
            </div>
        </div>
    </div>    
    )
    
        
    
}