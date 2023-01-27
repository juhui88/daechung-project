import Router from 'next/router';
import { useState } from 'react';
import { kakaoInit } from '../components/kakaoInit';

export default function Logout(){
    const kakaoLogout = () => {
        const kakao = kakaoInit();
        console.log(kakao.Auth.getAccessToken()); 
        // 카카오 접근 토큰 확인
        //로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능

        kakao.API.request({ // 카카오 로그인 링크 해제
            url: '/v1/user/unlink',
            success: (res) => {
                console.log(res);
                Router.push('/');
                //로그아웃 성공할 경우 정보 확인 후 /페이지로 push
            },
            fail : (error) => {
                console.log(error)
            }
        })
    }
    return (
        <>
            <button onClick={kakaoLogout}>logout</button>
        </>
    )
}