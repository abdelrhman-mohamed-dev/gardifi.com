"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type AccountsColumns = {
    campaign: string
    googleAdsAccount: string
    adClicks: number
    blockedIp: string
    savedBudget: string
}

export const columns: ColumnDef<AccountsColumns>[] = [
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
        accessorKey: "campaign",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    campaign
                    <ArrowUpDown className="mx-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "googleAdsAccount",
        header: "Google Ads Account",
    },
    {
        accessorKey: "adClicks",
        header: "Ad Clicks",
    },
    {
        accessorKey: "blockedIp",
        header: "Blocked IP",
    },
    {
        accessorKey: "savedBudget",
        header: "Saved Budget",
    }
]
