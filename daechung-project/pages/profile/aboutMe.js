import ProfileBar from "@/components/profileBar";

export default function AboutMe(){
    
    
    return(<div>
        <ProfileBar>
            <div>
                <div className="absolute left-72 top-10">
                    <img src="/profileImgs/profile_1.png" className="rounded-full w-32 border-2"/>
                </div>        
            </div>
            <div className="w-3/4 ">
                <div className="flex justify-end">
                    <span className="p-2 py-1 bg-bgPoint rounded-xl flex items-center">Memo
                            <span className="p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-2 h-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </span>
                </div>
                <div className="bg-white shadow-xl text-gray-500 px-5 grid gap-10 py-2">
                    <div>
                        <span className="text-lg font-extrabold ">YEAR 2021</span>
                        <div className="grid ml-5">
                            <span>영어학개론</span>
                            <span>브랜드전략</span>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg font-extrabold ">YEAR 2022</span>
                        <div className="grid ml-5">
                            <span>영어학개론</span>
                            <span>브랜드전략</span>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg font-extrabold ">YEAR 2021</span>
                        <div className="grid ml-5">
                            <span>브랜드 전략</span>
                            <span>무신사 고객관리 인턴</span>
                            <span>비랩 동아리</span>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileBar>
        
    </div>)
}