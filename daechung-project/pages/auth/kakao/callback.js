import { tokenState } from "@/components/atom";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react"
import { useRecoilState } from "recoil";

export default function GetToken() {
    let code;
    const router = useRouter();
    const [token, setToken] = useRecoilState(tokenState);

    useEffect(() => {
        code = new URL(window.location.href).searchParams.get('code')
        async function getToken(){
            await axios.get(`http://${process.env.NEXT_PUBLIC_API_URL}/auth/kakao/callback?code=${code}`)
            .then(res=>{
                setToken(res.data.token)
                localStorage.setItem("token",res.data.token)
                if(res.data.isActive){
                    router.push({
                        pathname:"/home",
                        query: {
                            token: res.data.token
                        }
                    },"/home")
                }
                else{ 
                router.push({
                    pathname:`/signup`,
                    query:{
                        token: res.data.token
                    }
                },"/signup")
            }
                
            
            })
            .catch(err=>console.log(err))
        }
        getToken() 
    }, [code])
    return (<div className="flex w-screen h-screen justify-center items-center">
        <span>로그인 중입니다. . .</span>
    </div>)
}