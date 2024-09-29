"use client";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shuffle } from 'lucide-react';


const TotalProblemsSolved = () => {
    return (
        <div className="grid grid-cols-[auto_auto_auto_auto_1fr_auto] gap-x-[10px] items-center">
            <span className="text-zinc-600 text-[11px]">144/1000 Solved</span>
            <Badge className="text-[11px] rounded-full h-[18px] px-4 font-medium bg-green-500 hover:bg-green-500">Easy 247</Badge>
            <Badge className="text-[11px] rounded-full h-[18px] px-4 font-medium bg-yellow-500 hover:bg-yellow-500">Medium 500</Badge>
            <Badge className="text-[11px] rounded-full h-[18px] px-4 font-medium bg-red-500 hover:bg-red-500">Hard 300</Badge>
            <div></div>
            <Button variant="outline" className="h-[25px] px-4 text-[11px] text-zinc-400 font-semibold gap-1">Pick One <Shuffle className="text-zinc-400 h-[12px] w-[12px]" /></Button>
        </div>
    )
}

export default TotalProblemsSolved