"use client"
import { NavBar } from "@/lib/types"
import Link from "next/link"
import { IoMenuOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image";
import { LiaEditSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";

interface Props {
    navlinks: NavBar[]
}

const SideBar = ({ navlinks }: Props) => {
    const pathname = usePathname();

    return (
        <>
            {/* big screens */}
            <div className="h-screen relative w-[300px] border-r hidden md:block">
                <div className="flex items-center border-b h-[70px] px-4">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Image src="/logo.svg" alt="logo" width={42} height={42} className="bg-black rounded-md" />
                        <span className="">Coding Inc</span>
                    </Link>
                </div>

                <nav className="grid items-start text-sm font-medium px-4 py-3">
                    {
                        navlinks.map((navlink: NavBar) => {
                            const isActive = pathname === navlink.link;
                            return (
                                <Link
                                    key={navlink.id}
                                    href={navlink.link}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all ${isActive ? 'text-primary bg-muted' : 'hover:text-primary'} `}
                                >
                                    <LiaEditSolid className="h-4 w-4" />
                                    {navlink.text}
                                </Link>
                            )
                        })
                    }
                </nav>
            </div>

            {/* small screens */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <IoMenuOutline className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col">
                        <SheetHeader className="hidden">
                            <SheetTitle>Coding</SheetTitle>
                            <SheetDescription>
                                Select an option
                            </SheetDescription>
                        </SheetHeader>

                        <nav className="grid items-start text-sm font-medium px-4 py-3">
                            {
                                navlinks.map((navlink: NavBar) => {
                                    const isActive = pathname === navlink.link;
                                    return (
                                        <Link
                                            key={navlink.id}
                                            href={navlink.link}
                                            className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground ${isActive ? 'text-primary' : ''}`}
                                        >
                                            <LiaEditSolid className="h-4 w-4" />
                                            {navlink.text}
                                        </Link>
                                    )
                                })
                            }
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default SideBar