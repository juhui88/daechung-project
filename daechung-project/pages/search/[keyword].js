import Layout from "@/components/laytout"

export default function SearchDetail({keyword}) {
    return <Layout>
        {keyword}
    </Layout>
}

export async function getServerSideProps({query : {keyword}}) {
    //나중에 링크통해서
    return {
      props: {
        keyword
      }
    }
  }