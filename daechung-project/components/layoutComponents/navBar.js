import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import tw from "tailwind-styled-components"
import { lCateFoldState } from "../atom"
import LargeCategory from "./navBarItem/lCate"
import MediumCategory from "./navBarItem/mCate"

export const PlusBtn = tw.button`
    opacity-0
    group-hover:opacity-100
    text-gray-500
    hover:font-bold
    hover:text-gray-700
    hover:duration-300
    w-3
`
export const FoldBtn = tw.button`
    opacity-0
    group-hover:opacity-100
    group-hover:duration-300
    pr-3
    text-gray-600
`
const LCate = [
    {
        name: "교과",
        mediumCates: [
            {
                name: "1학년1학기"
            },
            {
                name: "1학년2학기"
            },
            {
                name: "2학년 1학기"
            },

        ]
    },
    {
        name: "비교과",
        mediumCates: [
            {
                name: "학회 TAB"
            },
            {
                name: "UMC"
            },

        ]
    },
    {
        name: "기타",
        mediumCates: [
            {
                name: "어쩌구저쩌구 공모전"
            },
            {
                name: "어쩌구저쩌구 서포터즈"
            },

        ]
    },
]

export default function NavBar() {
    const router = useRouter();
    const [lcate, setLCate] = useState([])
    const [menuIsOpen , setMenuIsOpen] = useState(false);
    const onClickLFold = (i) => {
        setfold(
            fold.map(item=>
                item.index===i ? {...item, isFold: !item.isFold}: item)
        )
    }

    const handleMenu = () => {
        setMenuIsOpen(prev => !prev)
    }
    const onClickLcate = (name) => {
        router.push(`/notes/${name}`);
    }
    const onClickMcate = (lcateName, mCateName) => {
        router.push(`/notes/${lcateName}/${mCateName}`);
    }

    useEffect(()=>{
        axios.get(`http://${process.env.NEXT_PUBLIC_API_URL}/large-cates`)
        .then(response=>{
            setLCate(response.data.largeCates)
            console.log(response.data.largeCates)
            /* const falseList = (response.data.length).fill(false);
            setLCate(falseList) */
        })
        .catch(error=>console.log(error))
    },[])

    
    return <div className="relative w-64 h-full ">
        <div className="grid gap-2">
            {LCate.map((large,i )=><div> {/* 백엔드 안정화되면 수정 */}
            <LargeCategory lCateName= {large.name} mCates = {large.mediumCates}/>
        </div>)}
        </div>
    </div>
}