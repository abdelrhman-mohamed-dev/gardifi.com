"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"

// import { ArrowUpDown } from "lucide-react"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type clicksColumns = {
    blockedOn: string
    blockReason: string
    ip: string
    googleAdsAccount: string
    campaign: string
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
        accessorKey: "blockedOn",
        header: "Blocked On",
        cell: ({ row }) => {
            const clickedOn = new Date(row.getValue<string>("blockedOn"))
            return clickedOn.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
        }
    },
    {
        accessorKey: "blockReason",
        header: "Block Reason",
    },
    {
        accessorKey: "ip",
        header: "IP",
    },
    {
        accessorKey: "googleAdsAccount",
        header: "Google Ads Account",
    },
    {
        accessorKey: "campaign",
        header: "Campaign",
    },
    {
        accessorKey: "blockCount",
        header: "Block Count",
    },

]
