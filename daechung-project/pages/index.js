import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-bgPoint min-h-screen">
      <Link href={"/login"}>
      <div className="text-textPoint font-semibold absolute right-0">
        <span>시작하기➜</span>
      </div>
      </Link>
      <div>
        <span className="text-textPoint font-bold text-4xl absolute left-12 top-32">대충</span>
        <img src=""/>
      </div>
      
    </div>
  )
}
