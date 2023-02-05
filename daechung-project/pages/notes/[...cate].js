import Layout from "@/components/laytout";
import Note from "@/components/note";
import NoteCreate from "@/components/noteCreate";

export default function LCateDetail({cate}) {
    console.log(cate);
    return <Layout>
        <div className=" pl-8 pr-28 ">
            <div className="mb-3 flex items-center">
                {cate.map((c,i)=> i!==cate.length-1 ?
                <div className="flex items-center font-extrabold text-gray-600 text-lg ">
                    <span>{c}</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </div>
                :<div className="flex font-extrabold text-gray-600 text-lg ">
                <span>{c}</span>
            </div>)}
                
            </div>
            <div>
            {cate.length===3 ?<NoteCreate/> :null}
            
            <Note/>    
            </div>
            
        </div>
        
         
    </Layout>
}

export async function getServerSideProps({params : {cate}}) {
    return {
        props: {
            cate
        }
    }
}


        