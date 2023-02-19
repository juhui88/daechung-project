import CalendarBar from "./calendarBar";
import { Lcate } from "./navBar";

export default function ProfileBar({children}) {
    return (
        <div className="flex mt-44">
            <div className=" space-y-1">
                <Lcate>
                    계정
                </Lcate>
                <Lcate>
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