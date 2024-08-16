"use client";
import { IoMenu } from "react-icons/io5";
import { NavBar } from "@/lib/types";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
    navlinks: NavBar[]
}

const NavbarMobile = ({ navlinks }: Props) => {
    const pathname = usePathname();

    return (
        <div className="grid grid-cols-2 gap-2 md:hidden">
            <Sheet>
                <SheetTrigger asChild className="h-[35px] relative">
                    <button className=" flex w-4 absolute top-[10px] left-[10px]"><IoMenu className="border border-black rounded-xs" /></button>
                </SheetTrigger>
                <SheetContent side="top" className="h-screen bg-[#272626] text-white">
                    <SheetHeader className="hidden">
                        <SheetTitle>Coding</SheetTitle>
                        <SheetDescription>
                            Select an option
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        {navlinks.map((navlink: NavBar) => {
                            const isActive = pathname === navlink.link || (pathname === "/" && navlink.link === "/problems");
                            return (
                                <Link
                                    key={navlink.id}
                                    href={navlink.link}
                                    className={`${navlink.link !== "#" ? 'hover:text-[#e4e4e4]' : 'cursor-not-allowed'} ${isActive ? 'text-[#e4e4e4]' : ''}`}
                                >
                                    {navlink.text.replace(/^./, navlink.text[0].toUpperCase())}
                                </Link>

                            );
                        })}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default NavbarMobile