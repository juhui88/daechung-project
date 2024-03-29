import axios from "axios";
import CalendarBar from "./layoutComponents/calendar";
import tw from "tailwind-styled-components"
import { useRouter } from "next/router";
import Link from "next/link";

const Item = tw.div`
bg-itemBg p-2 pl-2 w-64 flex justify-between group hover:cursor-pointer font-semibold text-textPoint
`
export default function ProfileBar({ children }) {
    const router = useRouter()
    const onClickAboutMe = () => {
        router.push(`/profile`)
    }
    const onClickProfile = () => {
        router.push(`/profile/editProfile`)
    }
    return (
        <div>
        <Link href = {`/home`} className="flex items-end ml-5 my-20">
            <span className=" text-3xl text-gray-700 font-normal">HOME</span>
        </Link>
        <div className="flex ">
            <div className=" space-y-1">
                <Item onClick={onClickAboutMe}>
                    About me
                </Item>
                <Item onClick={onClickProfile}>
                    계정
                </Item>
                <Item>
                    로그아웃
                </Item>    
            </div>
            <div className="flex-1 ml-10">
                {children}
            </div>
            <div className="hidden lg:block">
                <CalendarBar/>
            </div>
        </div>
       
    </div>) 
        
}