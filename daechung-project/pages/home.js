import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Layout from "@/components/laytout";
import NoteCreate from "@/components/noteCreate";
import Note from "@/components/note";
import { useForm } from "react-hook-form";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default function Home() {
  const [lCateIds, setLCateIds] = useState([])
  const [isInitialMount, setIsInitialMount] = useState(true);
  const [notes, setNotes] = useState([])
  const {register, handleSubmit} = useForm()
  
  const onValid = (data) => {
    console.log(data)
  }
    /* useEffect(()=>{
      if(isInitialMount){
        setIsInitialMount(false)
      }else{
        axios.get(`http://${process.env.NEXT_PUBLIC_API_URL}/large-cates`)
        .then(res=>{
            res.data.largeCates.map(i=>setLCateIds(prev=>[...prev, i.id]))
        })
        .catch(error=>console.log(error))

        lCateIds.map(l=>{
          axios.get(`http://${process.env.NEXT_PUBLIC_API_URL}/notes/wrt/large-cate/${l}`)
          .then(res=>{
            console.log(res.data.notes)
            setNotes(prev=>[...prev, res.data.notes])
            console.log(notes)
          }  
          ).catch(err=>console.log(err))})


      }
        
    },[isInitialMount]) */


    return (
      <Layout>
        <div className="pl-8 pr-28 "> 
        <NoteCreate/>
        {/* <form onSubmit={handleSubmit(onValid)}>
          
            <div>
              <div>
                <label>
                   <input type="file" {...register("file")}/>
            <button>시발

            </button>
                </label>
              </div>
            </div>
           
          
        </form> */}
        </div>
        
        
      </Layout>

    )
    
    
}