import Layout from "../../components/laytout";
import Note from "../../components/note"
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "../../components/atom";

export default function Home({params}) {
    const [token,setToken] = useRecoilState(tokenState);
    const [largeCateData, setLargeCateData] = useState([]);

        
        
    useEffect(()=>{
         /* async function getLargeCates(){
            await axios.get(`http://13.124.100.192/large-cates`,{
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type" : "application/json"
                }
            })
            .then(res=>{
                setLargeCateData(res.data.largeCates)
            })
            .catch(err=>console.log(err))
        }
        getLargeCates()*/
        if(token===""){
            setToken(params);
        }
        
    },[]) 
    return <Layout>
        <div className="pb-10 pl-8 pr-28 ">
            {[1, 2, 3, 4, 5, 6, 7].map(i => <div key = {i}>
                <Note/>
                </div>)}
            
        </div>
    </Layout>
    
    
}

export async function getServerSideProps({ params:{params}}){
    return {
        props:{params}
    }
}