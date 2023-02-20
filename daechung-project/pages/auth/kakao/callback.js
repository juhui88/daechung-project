import axios from "axios";
import { Router } from "next/router";
import { useEffect } from "react"
import { REDIRECT_URI } from "../../login";

export default function GetToken() {
    let code;

    const getUser = async (token) => {
        const {data} =  await axios({
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            url :"https://kapi.kakao.com/v2/user/me"
        })
        console.log(data);
    }
    
    useEffect(() => {
        code = new URL(window.location.href).searchParams.get('code')
        try {
            axios({
                method: "POST",
                headers: {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
                url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
                
            }).then((res) => {
                getUser(res.data.access_token)
                
            }).catch((err) => { console.log(err) })  
        } catch (err) {
            console.log(err)
        }
    }, [code])

    return (<div className="flex w-screen h-screen justify-center items-center">
        <span>로그인 중입니다. . .</span>
    </div>)
}