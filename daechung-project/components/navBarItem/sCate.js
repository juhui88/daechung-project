import tw from "tailwind-styled-components"

const Scate = tw.div`
    pl-8
    w-64
`

export default function SmallCategory () {
    return <Scate>
        <span>기업인수합병</span>
    </Scate>
}