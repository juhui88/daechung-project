import CalendarBar from "./calendarBar";
import { Lcate } from "./navBar";

export default function ProfileBar() {
    return (
        <div className="flex">
            <div className="mt-40 space-y-1">
            <Lcate>
                계정
            </Lcate>
            <Lcate>
                로그아웃
            </Lcate>    
            </div>
            <div className="flex-1">

            </div>
            <div className="mt-40">
                <CalendarBar/>
            </div>
        </div>
    )
}