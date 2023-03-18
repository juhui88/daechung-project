import { useRouter } from "next/router"

export default function SmallCategory ({name}) {
    return (
    <div>
        <div className="pl-8  w-64  cursor-pointer mb-2">
            <span>{name}</span>
        </div>
    </div>)
}    
    
    