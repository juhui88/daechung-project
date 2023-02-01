import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-bgPoint min-h-screen">
      <Link href={"/login"}>
      <div className="text-textPoint font-semibold absolute right-2 top-2">
        <span>시작하기➜</span>
      </div>
      </Link>
      <div className="text-textPoint font-bold text-4xl absolute left-12 top-32 flex items-end">
        <span >대충</span>
        <img src="메인대충이.png" className="w-40"/>
      </div>
      
    </div>
  )
}
