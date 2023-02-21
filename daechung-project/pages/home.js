import Layout from "../components/laytout";
import Note from "../components/note"
import axios from "axios";

export default function Homepage() {
    
    
    return <Layout>
        <div className="pb-10 pl-8 pr-28 ">
            {[1, 2, 3, 4, 5, 6, 7].map(i => <div key = {i}>
                <Note/>
                </div>)}
            
        </div>
    </Layout>
    
    
}