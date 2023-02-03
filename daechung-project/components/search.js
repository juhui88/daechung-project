import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Search() {
    const router = useRouter();
    const {register, watch, handleSubmit} = useForm();
    const onValid = (data) => {
        router.push(`/search/${data.keyword}`)
    }
    return (
        <div className="relative w-96 mt-6 mb-3 ml-72">
            <form onSubmit={handleSubmit(onValid)} >
                <input className="border bg-none p-1 w-96 pl-3 border-gray-500 " {...register("keyword")} placeholder="검색"/>
                <button className="absolute right-2 top-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                </button>
            </form>
        </div>
    )
}