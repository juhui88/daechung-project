import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import tw from "tailwind-styled-components"
import LargeCategory from "./navBarItem/lCate"
import MediumCategory from "./navBarItem/mCate"
import ModifyButton from "./navBarItem/modifyBtn"

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
    text-gray-500
    hover:text-black
`

export default function NavBar() {
    const router = useRouter();
    const [lcate, setLCate] = useState([])
    const [lCatesFold, setLCatesFold] = useState()

    const onClickLFold = (i) => {
        setfold(
            fold.map(item=>
                item.index===i ? {...item, isFold: !item.isFold}: item)
        )
    }


    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/large-cates`)
        .then(response=>{
            if (response.data.largeCates.length !== 0 ){
                setLCate(response.data.largeCates)

                const length = Number(response.data.largeCates.length)
                const falseList = Array(length).fill(false);
                setLCatesFold(falseList)
            }
            
        })
        .catch(error=>console.log(error))
    },[])

    
    return <div className="relative w-64 h-full ">
        <div className="grid gap-2">
            {lcate.map((large,i )=><div key = {i}>
            <LargeCategory lCateName= {large.name} lCateId = {large.id} isFold = {lCatesFold[i]}/>
        </div>)}
        </div>
        <div className="absolute -top-10 right-0">
            <ModifyButton/>
        </div>
    </div>
}