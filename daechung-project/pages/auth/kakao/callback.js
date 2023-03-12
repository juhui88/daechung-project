import axios from "axios";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import { tokenState } from "../../../components/atom";

export default function GetToken() {
    let code;
    let token;
    const router = useRouter();

   /*  const isUser = async (token) => {
         console.log(token)
        await axios({
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            url :"https://kapi.kakao.com/v2/user/me"
        }).then(res => console.log(res))
         .catch(err=>console.log(err))
    } */
    
    useEffect(() => {
        code = new URL(window.location.href).searchParams.get('code')
        async function getToken(){
            await axios.get(`http://13.124.100.192/auth/kakao/callback?code=${code}`)
            .then(res=>{
                token = res.data.token
                console.log(token);
                axios.get(`http://13.124.100.192/users/me`,{
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type" : "application/json"
                    }
                }).then(res=>{
                    if(res.data.user.major1){
                        router.push(`/home/${token}`)
                    }else{
                        router.push(`/join/${token}`)
                    }
                })
                .catch(err=>console.log(err))
                
            })
            .catch(err=>console.log(err))
        }
        getToken() 
        /* try {

            
            token = result.data.token; 
            
             if(result.data.isUser === false){
                router.push("/join")
            }else{
                router.push("/home")
            } 
            
        }
        } catch(err){
            console.log(err)
        } */
    }, [code, token])
    return (<div className="flex w-screen h-screen justify-center items-center">
        <span>로그인 중입니다. . .</span>
    </div>)
}