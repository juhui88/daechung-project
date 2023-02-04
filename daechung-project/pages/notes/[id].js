import Layout from "@/components/laytout";
import Note from "@/components/note";

export default function LCateDetail({id}) {
    return <Layout>
        <div className=" pl-8 text-bold text-gray-600 text-lg  pb-3">
            {id}
        </div>
        
        <Note/>
    </Layout>
}

export async function getServerSideProps({query : {id}}) {
    return {
        props: {
            id
        }
    }
}