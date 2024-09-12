"use client"

import { Button } from "@/components/ui/button"
import * as React from "react"
import { saveAs } from "file-saver"
import { Input } from "@/components/ui/input"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    ColumnFiltersState,
    VisibilityState,
    getFilteredRowModel,
    SortingState,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DataTablePagination } from "./accounts-data-table-pagination"
import { AddAccountDialog } from "./addAccountDialog"
import { IconFileExport, IconViewportTall } from "@tabler/icons-react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
        },
    })

    // Function to convert the table data to CSV
    const exportToCSV = () => {
        // Extract column headers
        const headers = table.getHeaderGroups().flatMap((headerGroup) =>
            headerGroup.headers.map((header) => header.column.columnDef.header)
        );

        // Extract rows
        const rows = table.getRowModel().rows.map((row) =>
            row.getVisibleCells().map((cell) =>
                String(flexRender(cell.column.columnDef.cell, cell.getContext()))
            )
        );

        // Create CSV content
        const csvContent = [
            headers.join(","), // Header row
            ...rows.map((row) => row.join(",")), // Data rows
        ].join("\n");

        // Create a Blob and download the CSV
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "accounts_table_data.csv");
    };

    return (
        <div className="rounded-lg dark:bg-black text-black dark:text-white p-4 border">
            <div className="flex flex-col md:flex-row items-center justify-between py-4">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("googleAdsAccount")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("googleAdsAccount")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />

                <div className="flex gap-2 my-6 md:items-center justify-end w-full">
                    <AddAccountDialog />
                    <div className="flex items-center gap-2">
                        <Button onClick={exportToCSV} variant="outline" className="">
                            <IconFileExport className="ml-2 h-4 w-4" />
                            Export
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="">
                                    <IconViewportTall className="ml-2 h-4 w-4" />
                                    View
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {table
                                    .getAllColumns()
                                    .filter(
                                        (column) => column.getCanHide()
                                    )
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        )
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className="">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead className="text-center" key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    className=" cursor-pointer h-[50px]"
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell className="text-center" key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">

                <DataTablePagination table={table} />
            </div>
        </div>
    )
}
