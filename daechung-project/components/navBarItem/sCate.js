import { useRouter } from "next/router"
import tw from "tailwind-styled-components"

const Scate = tw.div`
    pl-8
    w-64
    cursor-pointer
`

export default function SmallCategory ({lCate, mCate}) {
    const router = useRouter();
    const onClickSCate = () => {
        router.push(`/notes/${lCate}/${mCate}/기업인수합병`)
    }

    return <Scate onClick={onClickSCate}>
        <span>기업인수합병</span>
    </Scate>
}