import { memo } from "react"

function Header() {
    console.log("header rendered")
    return (
        <header>HEADER</header>
    )
}

export default memo(Header)