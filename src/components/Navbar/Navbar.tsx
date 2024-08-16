import NavbarMobile from "./NavbarMobile"
import NavbarWebApp from "./NavbarWebApp"
import { NavBar } from "@/lib/types"

interface Props {
    navlinks: NavBar[]
}

const Navbar = ({ navlinks }: Props) => {
    return (
        <>
            <NavbarWebApp navlinks={navlinks} />
            <NavbarMobile navlinks={navlinks} />
        </>
    )
}

export default Navbar