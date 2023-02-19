export default function Note() {
    return<div className="flex h-32 space-x-5 mt-3 ">
        <div className="flex items-center justify-center w-40  ">
            <div className="w-28 h-32 bg-white shadow-2xl"/>
        </div>
        <div className="border flex-1 border-gray-400 p-1 w-96">
            <span className="text-sm">내용물 </span>
        </div>
    </div>
}