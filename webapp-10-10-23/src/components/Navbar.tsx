import { link } from "fs"
"use client"

const navigasjon = [
    {
        label: "hjem",
        href: "/"
    },
    {
        label: "Svar",
        href: "/responses"
    }
]

const Navbar =  () => {
return (
    <nav className="">
        {navigasjon.map(() => (
            <Link
            ></Link>
        ))}
    </nav>
)
}

export default Navbar