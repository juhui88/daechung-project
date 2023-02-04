import Layout from "@/components/laytout";

export default function LCateDetail({id}) {
    return <Layout>
        {id}
    </Layout>
}

export async function getServerSideProps({query : {id}}) {
    return {
        props: {
            id
        }
    }
}