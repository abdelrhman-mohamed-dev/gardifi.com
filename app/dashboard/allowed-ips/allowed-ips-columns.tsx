"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { ActionDeleteDialog } from "./actionDeleteDialog"

// import { ArrowUpDown } from "lucide-react"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type clicksColumns = {
    ip: string
    blockCount: string
}

export const columns: ColumnDef<clicksColumns>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "ip",
        header: "IP",
    },
    {
        accessorKey: "blockCount",
        header: "Block Count",
    },
    {
        id: "action",
        header: "Action",
        cell: ({ row }) => <ActionDeleteDialog ip={row.original.ip} />,
    }
]
