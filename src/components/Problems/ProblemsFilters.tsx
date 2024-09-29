"use client"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import Filter from "./Filter";

type ProblemsFiltersProps = {

};

const difficultyFilters = {
    heading: 'Difficulty',
    dropDownLabel: 'Choose Difficulty',
    filterData: [
        {
            value: 'All',
            header: 'All'
        },
        {
            value: 'Easy',
            header: 'Easy'
        },
        {
            value: 'Medium',
            header: 'Medium'
        },
        {
            value: 'Hard',
            header: 'Hard'
        },
    ]
}

const statusFilters = {
    heading: 'Status',
    dropDownLabel: 'Choose Status',
    filterData: [
        {
            value: 'None',
            header: 'None'
        },
        {
            value: 'Solved',
            header: 'Solved'
        },
        {
            value: 'Unsolved',
            header: 'Unsolved'
        },
    ]
}

const tagsFilters = {
    heading: 'Tags',
    dropDownLabel: 'Choose Tags',
    filterData: [
        {
            value: 'All',
            header: 'All'
        },
        {
            value: 'Array',
            header: 'Array'
        },
        {
            value: 'Linked List',
            header: 'Linked List'
        },
    ]
}

const ProblemsFilters = () => {
    return (
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-x-[25px] items-center my-[25px]">
            <div className="w-[390px] relative">
                <Input placeholder="Search Questions Titles, Description or IDs" className="placeholder:text-[11px] text-[11px] pl-[43px] outline-none" />
                <Search className="absolute w-[16px] h-[16px] text-zinc-500 bottom-[10px] left-4" />
            </div>
            <div></div>
            <div><Filter heading={difficultyFilters.heading} dropDownLabel={difficultyFilters.dropDownLabel} filterData={difficultyFilters.filterData} /></div>
            <div><Filter heading={statusFilters.heading} dropDownLabel={statusFilters.dropDownLabel} filterData={statusFilters.filterData} /></div>
            <div><Filter heading={tagsFilters.heading} dropDownLabel={tagsFilters.dropDownLabel} filterData={tagsFilters.filterData} /></div>
        </div>
    )
}

export default ProblemsFilters