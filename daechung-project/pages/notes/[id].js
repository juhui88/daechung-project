import Layout from "@/components/laytout";
import Note from "@/components/note";
import NoteCreate from "@/components/noteCreate";

export default function LCateDetail({id}) {
    return <Layout>
        <div className=" pl-8  ">
            <div className="mb-3">
                <span className="font-extrabold text-gray-600 text-lg ">{id}</span>
            </div>
            <NoteCreate/>
            <Note/>
        </div>
        
         
    </Layout>
}

export async function getServerSideProps({query : {id}}) {
    return {
        props: {
            id
        }
    }
}