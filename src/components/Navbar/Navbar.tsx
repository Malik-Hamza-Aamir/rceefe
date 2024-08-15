import NavbarMobile from "./NavbarMobile"
import NavbarWebApp from "./NavbarWebApp"
import { NavBar } from "@/lib/types"

interface Props {
    navlinks: NavBar[]
}

const Navbar = ({ navlinks }: Props) => {
    return (
        <>
            <div className="">
                <NavbarWebApp navlinks={navlinks} />
                <NavbarMobile navlinks={navlinks} />
            </div>
        </>
    )
}

export default Navbar