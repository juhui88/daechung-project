import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "@/components/laytout";
import Note from "@/components/note";
import { useRecoilState } from "recoil";
import { sequenceState } from "@/components/atom";

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
  const [notes, setNotes] = useState([])
  const [sequence, setSequence] = useRecoilState(sequenceState);

  useEffect(()=>{
     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notes/${sequence}/main`)
        .then(response=>{
          if(response.data.notes.length !== 0) {
            setNotes(response.data.notes)
            
          }
          console.log(response.data)
        })
        .catch(error=>console.log(error))
  },[useState])


    return (
      <Layout>
        <div className="pl-8 pr-28 "> 
          {notes.map((note,i)=><div key={i}>
            <Note content={note.content} id = {note.id} date={note.createdAt.slice(0,10)}/>
            </div>)}
        </div>
        
        
      </Layout>

    )
    
    
}