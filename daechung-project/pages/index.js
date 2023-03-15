import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-bgPoint min-h-screen ">
        <div className="text-textPoint font-extrabold text-5xl  flex items-end absolute top-28 left-32">
          <span >대충</span>
          <img src="메인대충이.png" className="w-40"/>
        </div>
        <Link href={"/login"}>
        <div className="text-textPoint font-[700] absolute top-80 left-32 ">
          <span className="border-2 border-gray-300 p-2 text-xl shadow-lg">시작하기➜</span>
        </div>
        </Link>  
      
    </div>
  )
}
