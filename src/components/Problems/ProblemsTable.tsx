"use client";
import { Problems, TableColumns } from "@/lib/types";
import { Check, Youtube } from 'lucide-react';
import { Badge } from "../ui/badge";

type TableProps = {
    columns: TableColumns[];
    problems: Problems[];
}

const renderTableCell = (problem: Problems, columnData: TableColumns) => {
    const value = problem[columnData.field as keyof Problems];

    if (columnData.field === 'status' && problem.status) {
        return problem.status ? <Check className="text-green-400 h-[18px] w-[18px]" strokeWidth={3} /> : null;
    }

    if (columnData.header === 'Difficulty') {
        return <Badge className="text-[11px] rounded-full h-[18px] px-2 font-medium bg-green-500 hover:bg-green-500">{value}</Badge>
    }

    if (columnData.header === 'Solution') {
        return <a href={value as string} target="_blank" rel="noopener noreferrer"><Youtube className="text-red-400 hover:text-red-500 h-[18px] w-[18px] ml-[15px]" /></a>
    }

    return value;
}

const ProblemsTable = ({ columns, problems }: TableProps) => {
    return (
        <table className="w-full  text-[13px] text-left">
            <thead className="bg-zinc-100 h-[30px] text-zinc-400">
                <tr>
                    {columns.map((columnData: TableColumns) => (
                        <th key={columnData.field} scope="col" className={`font-medium ${columnData.header === "#" ? 'pl-3 pr-5' : ''}`}> {columnData.header}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {
                    problems.map((problem: Problems) => (
                        <tr key={problem.id} className="cursor-pointer hover:bg-zinc-100 border-b">
                            {
                                columns.map((columnData: TableColumns) => (
                                    <td key={columnData.field} className={`font-semibold ${columnData.header === "#" ? 'pl-3 pr-5' : ''}`}>
                                        {renderTableCell(problem, columnData)}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ProblemsTable