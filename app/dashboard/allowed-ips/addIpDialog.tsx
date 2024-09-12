"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useData } from "@/context/DataContext";

export function AddIpDialog() {
    const { addNewIp } = useData();  // Context function
    const [ip, setIp] = useState("");  // State to store IP address
    const [error, setError] = useState("");  // State to store validation error

    // Simple regex for validating IP address
    const isValidIp = (ip: string) => {
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipRegex.test(ip);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate IP
        if (!isValidIp(ip)) {
            setError("Please enter a valid IP address");
            return;
        }

        // Reset error and call the context function to add IP
        setError("");
        await addNewIp(ip);

        // Optionally reset input after submission
        setIp("");
    };

    return (
        <Dialog>
            <DialogTrigger className="max-sm:w-full" asChild>
                <Button variant="default">Add IP</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-black dark:text-white">Add IP</DialogTitle>
                    <DialogDescription>
                        Add an IP address to your allowed list.
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="ip" className="sr-only">
                                IP Address
                            </Label>
                            <Input
                                className="text-black dark:text-white"
                                id="ip"
                                placeholder="89.0.142.86"
                                value={ip}
                                onChange={(e) => setIp(e.target.value)}
                            />
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    </div>
                    <DialogFooter className="flex gap-5 !justify-between">
                        <Button type="submit" variant="default">
                            Add IP
                        </Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
