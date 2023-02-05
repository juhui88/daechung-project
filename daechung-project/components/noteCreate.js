export default function NoteCreate() {
    return<div className="flex h-32 space-x-3">
        <label className="border border-gray-400 flex items-center justify-center w-28">
            <span className="font-extrabold text-4xl cursor-pointer text-gray-500 ">+</span>
            <input type="file" className="hidden"/>    
        </label>
        
        <div className="border flex-1 border-gray-400 ">
        
            <textarea type="text" className="text-sm h-full p-1 w-full break-all normal-nums" rows = {3}/>
        </div>
    </div>
}