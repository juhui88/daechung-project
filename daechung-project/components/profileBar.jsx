import axios from "axios";
import CalendarBar from "./calendarBar";
import { Lcate } from "./navBar";

export default function ProfileBar({ children }) {
    const onClick = () => {
        axios({
            method: "POST",
            url: `https://kapi.kakao.com/v1/user/logout?taraget_id_type=user_id&target_id=${localStorage.getItem("id")}`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => {
            console.log(res);
            localStorage.removeItem("token")
            localStorage.removeItem("id")
            
        })
    }
    return (
        <div className="flex mt-44">
            <div className=" space-y-1">
                <Lcate>
                    계정
                </Lcate>
                <Lcate onClick={onClick}>
                    로그아웃
                </Lcate>    
            </div>
            <div className="flex-1">
                {children}
            </div>
            <div className="">
                <CalendarBar/>
            </div>
        </div>
    )
}