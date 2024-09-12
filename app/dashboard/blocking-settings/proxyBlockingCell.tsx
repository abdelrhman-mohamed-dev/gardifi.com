/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState } from "react";
import { MultiSelect } from "@/components/multiSelect";
import { useData } from "@/context/DataContext";

// Define the structure of the options used in MultiSelect
interface FrameworkOption {
    value: string;
    label: string;
}

const frameworksList: FrameworkOption[] = [
    { value: "isProxy", label: "Is Proxy" },
    { value: "is_vpn", label: "Is Vpn" },
    { value: "isSpam", label: "is Spam" },
    { value: "isTorNode", label: "Is Tor Node" },
    { value: "isSuspicious", label: "Is Suspicious" },
];

interface ProxyBlockingCellProps {
    row: {
        original: {
            proxyBlocking: string[];
            accountId: string;
        };
    };
}

function ProxyBlockingCell({ row }: ProxyBlockingCellProps) {
    const { setNewSettings } = useData();
    const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(row.original.proxyBlocking);

    // Handle the selection change and trigger setNewSettings
    const handleFrameworkChange = async (newSelectedFrameworks: string[]) => {
        // Update the selected frameworks state with the new selected frameworks
        setSelectedFrameworks(newSelectedFrameworks);

        // Extract boolean values based on the new selection
        const is_vpn = newSelectedFrameworks.includes("is_vpn");
        const isProxy = newSelectedFrameworks.includes("isProxy");
        const isSpam = newSelectedFrameworks.includes("isSpam");
        const isSuspicious = newSelectedFrameworks.includes("isSuspicious");
        const isTorNode = newSelectedFrameworks.includes("isTorNode");

        // Call the setNewSettings API
        const success = await setNewSettings(
            row.original.accountId,
            is_vpn,
            isProxy,
            isSpam,
            isSuspicious,
            isTorNode
        );

        // Update local state if API call was successful
        if (success) {
            setSelectedFrameworks(newSelectedFrameworks);

        }
        // router.refresh();
    };

    return (
        <div className="flex items-center">
            <MultiSelect
                defaultValue={selectedFrameworks}
                options={frameworksList}
                onValueChange={handleFrameworkChange} // Call the new handler on value change
                value={selectedFrameworks} // Bind the selectedFrameworks to the value prop
                placeholder="Select frameworks"
                variant="inverted"
                animation={2}
                maxCount={3}
            />
        </div>
    );
}

export default ProxyBlockingCell;
