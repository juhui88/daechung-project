import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/laytout"
import Note from "../../components/note"
import NoteCreate from "../../components/noteCreate"


export default function LCateDetail({cate}) {
    const router = useRouter()
    const [url, setUrl] = useState("")
    const [notes, setNotes] = useState([])
    const [isInitialMount, setIsInitialMount] = useState(true);
    const [id, setId] = useState()
    const length = cate.length
    const [isPost, setIsPost] = useState(false)


    const Post = (bool)=> {
        console.log("bool",bool)
    }
    useEffect(() => {
        let url = '';
        if (length === 1) {
            url = `http://${process.env.NEXT_PUBLIC_API_URL}/notes/wrt/large-cate/${router.query.lCateId}`;
        } else if (length === 2) {
            url = `http://${process.env.NEXT_PUBLIC_API_URL}/notes/wrt/medium-cate/${router.query.mCateId}`;
        } else {
            url = `http://${process.env.NEXT_PUBLIC_API_URL}/notes/wrt/small-cate/${router.query.sCateId}`;
            setId(router.query.sCateId)
        }
        setUrl(url);
    }, [cate, length, router.query.lCateId, router.query.mCateId, router.query.sCateId]);
        
    useEffect(()=>{
        if (isInitialMount){
            setIsInitialMount(false)
        } else {
            axios({
                method:"get",
                url:url,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(res=>{
                console.log("응답",res)
                setNotes(res.data.notes)
            })
            .catch(err=>console.log(err))
        }
        
    },[url, isInitialMount,axios]) 
    return <Layout>
        <div className=" pl-8 pr-28 ">
            <div className="mb-3 flex items-center">
                
                {cate.map((c,i)=>(
                    i!==cate.length-1  ? 
                    <div key={i} className="flex items-center font-extrabold text-gray-600 text-lg ">
                    <span>{c}</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </div> :<div key = {i} className="flex font-extrabold text-gray-600 text-lg ">
                <span>{c}</span>
            </div>
                    
                ))}
                
            </div>
            <div>
            {cate.length === 3 ?<NoteCreate sCateId={id}/> :null}
            {notes.map((n,i)=><div key = {i}><Note content={n.content} /* propFunction={Post} *//></div>) }
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


        
