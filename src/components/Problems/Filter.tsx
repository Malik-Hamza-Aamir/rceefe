import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { FilterData } from "@/lib/types"

type FilterProps = {
    heading: string;
    dropDownLabel: string;
    filterData: FilterData[]
}


const Filter = ({ heading, dropDownLabel, filterData }: FilterProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center gap-[2px] text-[12px] text-zinc-500 hover:cursor-pointer">{heading} <ChevronDown strokeWidth={3} className="h-[16px] w-[16px] text-zinc-500" /></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[150px] mr-[90px]">
                <DropdownMenuLabel>{dropDownLabel}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={filterData[0].value}>
                    {
                        filterData.map((data: FilterData) => (
                            <DropdownMenuRadioItem key={data.value} value={data.value}>{data.header}</DropdownMenuRadioItem>
                        ))
                    }
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Filter