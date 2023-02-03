import CalendarBar from "./calendarBar";
import NavBar from "./navBar";

export default function Layout({children}) {
    return (
        <>
        {children}
        <div className="">
            <NavBar/>
            <CalendarBar />
        </div>
        
        </>
        
    )
}