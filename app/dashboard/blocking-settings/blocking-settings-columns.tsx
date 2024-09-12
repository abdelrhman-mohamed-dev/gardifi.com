"use client";
import { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import ProxyBlockingCell from "./proxyBlockingCell";



export type clicksColumns = {
    googleAdsID: string;
    googleAdsAccount: string;
    proxyBlocking: string[];
    thresholdRule: string;
    unBlockingAfter: string;
    accountId: string;
};

export const columns: ColumnDef<clicksColumns>[] = [
    {
        accessorKey: "googleAdsID",
        header: "Google Ads ID",
    },
    {
        accessorKey: "googleAdsAccount",
        header: "Google Ads Account",
    },
    {
        accessorKey: "proxyBlocking",
        header: "Proxy Blocking",
        cell: ({ row }) => {

            return (
                <ProxyBlockingCell row={row} />
            );
        },
    },
    {
        accessorKey: "thresholdRule",
        header: "Threshold Rule",
    },
    {
        accessorKey: "unBlockingAfter",
        header: "UnBlocking IP After",
    },
];
