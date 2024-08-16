"use client";
import { NavBar } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsFillTerminalFill } from "react-icons/bs";

interface Props {
    navlinks: NavBar[];
}

const NavbarWebApp = ({ navlinks }: Props) => {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex md:items-center border-b h-[65px] bg-[#272626] text-[13px]  font-semibold  text-[#818080]">
            <div className="md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1400px] w-full mx-auto flex justify-between">
                {/* Logo and some elems */}
                <div className="flex items-center gap-2">
                    <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={40}
                        height={40}
                    />
                    <div>
                        {navlinks.slice(0, 6).map((navlink: NavBar) => {
                            const isActive = pathname === navlink.link || (pathname === "/" && navlink.link === "/problems");
                            return (
                                <Link
                                    key={navlink.id}
                                    href={navlink.link}
                                    className={`mr-4 ${navlink.link !== "#" ? 'hover:text-[#e4e4e4]' : 'cursor-not-allowed'} ${isActive ? 'text-[#e4e4e4]' : ''}`}

                                >
                                    {navlink.text.replace(/^./, navlink.text[0].toUpperCase())}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* register login */}
                <div className="flex items-center">
                    <BsFillTerminalFill color="rgb(221, 221, 221)" size={18} className=" cursor-pointer" />
                    {navlinks.slice(6, 10).map((navlink: NavBar) => {
                        const isActive = pathname === navlink.link;
                        return (
                            <Link
                                key={navlink.id}
                                href={navlink.link}
                                className={`ml-4 hover:text-[#e4e4e4] ${isActive ? 'text-[#e4e4e4]' : ''}`}
                            >
                                {navlink.text.replace(/^./, navlink.text[0].toUpperCase())}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavbarWebApp;