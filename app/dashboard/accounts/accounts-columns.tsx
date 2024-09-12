"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"



export type AccountsColumns = {
    id: string
    userId: string
    googleAdsID: string
    googleAdsAccount: string
    status: string
    adClicks: number
    blockedIp: string
    savedBudget: string
}

export const columns: ColumnDef<AccountsColumns>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    id
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "userId",
        header: "User ID",
    },
    {
        accessorKey: "googleAdsID",
        header: "Google Ads ID",
    },
    {
        accessorKey: "googleAdsAccount",
        header: "Google Ads Account",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return <div className={`rounded-full px-1 ${row.getValue<string>("status") === "Linked" ? "bg-green-600/30 text-green-500" : "bg-red-600/30 text-red-500"}`}>{row.getValue<string>("status")}</div>
        },
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
