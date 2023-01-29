export default function Homepage(){
    return <div className="flex justify-between h-24">
        <span className="flex items-end ml-5 text-3xl text-gray-700 font-normal">HOME</span>
        <div className="p-5 flex flex-col-2 space-x-2 items-center h-10">
            <div className="items-center w-6 h-6 rounded-full ring-1 ring-black"/>
            <span className="text-xl" >⌵</span>
        </div>
    </div>
}