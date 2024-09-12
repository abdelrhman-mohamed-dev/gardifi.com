"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { IconCopy } from "@tabler/icons-react";
import toast from "react-hot-toast";
// import { ArrowUpDown } from "lucide-react"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type clicksColumns = {
    clickedOn: string
    status: number
    device: string
    ip: string
    os: string
    deviceModel: string
    GCLID: string
    googleAdsAccount: string
    campaign: string
    network: string
    keyword: string
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
        accessorKey: "clickedOn",
        header: "Clicked On",
        cell: ({ row }) => {
            const clickedOn = new Date(row.getValue<string>("clickedOn"))
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
        accessorKey: "status",
        header: "status",
        cell: ({ row }) => {
            const status = row.getValue<0 | 1>("status")
            return (
                <div
                    className="text-center"
                >
                    {status === 1 ? (<svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="30"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "green" }}
                    >
                        <path d="m479.07 111.36-.79-12.53-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3-6.59 3C168.69 69.88 132.58 81.1 46.08 96.62l-12.36 2.21-.79 12.53c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73l6 2.41 6-2.41c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24zm-252.91 216L153.37 256l22.4-22.86 48.47 47.49 110.13-127.2 24.2 20.94z"></path>
                    </svg>) : (<svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="30"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "red" }}
                    >
                        <path d="M11.492 21.771c.294.157.663.157.957-.001 8.012-4.304 8.581-12.713 8.574-15.104a.988.988 0 0 0-.596-.903l-8.051-3.565a1.005 1.005 0 0 0-.813.001L3.57 5.765a.988.988 0 0 0-.592.891c-.034 2.379.445 10.806 8.514 15.115zM8.293 9.707l1.414-1.414L12 10.586l2.293-2.293 1.414 1.414L13.414 12l2.293 2.293-1.414 1.414L12 13.414l-2.293 2.293-1.414-1.414L10.586 12 8.293 9.707z"></path>
                    </svg>)}
                </div>
            )
        }
    },
    {
        accessorKey: "device",
        header: "device",
        cell: ({ row }) => {
            const deviceType = row.getValue<"Desktop" | "Mobile">("device")
            return (
                <div>
                    {deviceType === "Mobile" ? (
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="30"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M160 32c-16 0-32 16-32 32v384c0 16 16 32 32 32h192c16 0 32-16 32-32V64c0-16-16-32-32-32H160zm21.68 23h96v18h-96V55zM304 55h32v18h-32V55zM154 96h204v320H154V96zm70 342h63.984c16 0 16 16 16 16v6H208v-6s0-16 16-16z"></path>
                        </svg>
                    ) : (
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="30"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path>
                        </svg>
                    )}
                </div>
            )
        }
    },
    {
        accessorKey: "ip",
        header: "ip",
    },
    {
        accessorKey: "os",
        header: "os",
    },
    {
        accessorKey: "deviceModel",
        header: "device model",
    },
    {
        accessorKey: "GCLID",
        header: "GCLID",
        cell: ({ row }) => (
            <Button
                variant="link"
                onClick={() => {
                    navigator.clipboard.writeText(row.getValue<string>("GCLID"))
                    toast.success("copied to clipboard")
                }}
            >
                <IconCopy size={16} />
            </Button>
        )
    },
    {
        accessorKey: "googleAdsAccount",
        header: "google ads account",
    },
    {
        accessorKey: "campaign",
        header: "campaign",
    },
    {
        accessorKey: "network",
        header: "network",
    },
    {
        accessorKey: "keyword",
        header: "keyword",
    }
]
