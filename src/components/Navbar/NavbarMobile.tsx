"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavBar } from "@/lib/types";

interface Props {
    navlinks: NavBar[]
}

const NavbarMobile = ({ navlinks }: Props) => {
    const [openNavbarMobile, setOpenNavbarMobile] = useState();

    return (
        <div className="md:hidden">
            <button className="border-2 border-s border-red-500"><IoMenu /></button>
        </div>
    )
}

export default NavbarMobile