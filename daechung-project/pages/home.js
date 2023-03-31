import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "@/components/laytout";
import Note from "@/components/note";

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

  useEffect(()=>{
     axios.get(`https://${process.env.NEXT_PUBLIC_API_URL}/notes/main`)
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
            <Note content={note.content}/>
            </div>)}
        </div>
        
        
      </Layout>

    )
    
    
}