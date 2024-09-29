import TotalProblemsSolved from "@/components/Problems/TotalProblemsSolved"
import ProblemsFilters from "@/components/Problems/ProblemsFilters"
import ProblemsTable from "@/components/Problems/ProblemsTable"
import MyProgress from "@/components/Problems/MyProgress"
import { Problems, TableColumns } from "@/lib/types"

const page = () => {

    const columns: TableColumns[] = [
        { field: 'status', header: '' },
        { field: 'id', header: '#' },
        { field: 'title', header: 'Title' },
        { field: 'solution', header: 'Solution' },
        { field: 'acceptance', header: 'Acceptance' },
        { field: 'difficulty', header: 'Difficulty' },
        { field: 'tags', header: 'Tags' }
    ];

    const problems: Problems[] = [
        {
            id: 1,
            title: "Two Sum",
            status: true,
            difficulty: "Easy",
            acceptance: "47.8%",
            solution: "https://google.com",
            tags: 'Array',
        },
        {
            id: 2,
            title: "If Array Has Duplicate Numbers",
            status: false,
            difficulty: "Easy",
            acceptance: "55.3%",
            solution: "https://google.com",
            tags: 'Hash Maps'
        }
    ];

    return (
        <div className="text-[13px] font-semibold min-h-full max-h-[85vh] overflow-y-auto overflow-x-hidden">
            <div className="md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1400px] w-full mx-auto flex justify-between gap-4 pt-[40px]">
                <div className="w-[70%]">
                    <h1 className="text-[20px]">Category - All</h1>
                    <h2 className="mt-[10px] mb-[15px] text-[16px] font-bold underline decoration-2 underline-offset-4 decoration-yellow-500">Algorithms</h2>

                    <TotalProblemsSolved />
                    <ProblemsFilters />
                    <ProblemsTable columns={columns} problems={problems} />
                </div>

                <div className="w-[30%] border border-red-500">
                    {/* <MyProgress /> */}
                </div>
            </div>
        </div>
    )
}

export default page