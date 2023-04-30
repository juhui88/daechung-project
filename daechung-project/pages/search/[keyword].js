import dynamic from "next/dynamic"

const Layout = dynamic(import("@/components/laytout"))

export default function SearchDetail({keyword}) {
  return <Layout>
    <div className=" pl-8 pr-28 ">
      <span className="font-extrabold">
        {keyword}
      </span>
        <span>
          에 대한 검색결과
        </span>
        <div className="py-3">
          구현 준비 중...
        </div>
    </div>
        
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