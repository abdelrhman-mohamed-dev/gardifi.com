"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock transaction data
const transactions = [
    {
        id: "TXN123",
        name: "John Doe",
        img: "https://github.com/shadcn.png",
        value: "+$250",
        percentage: "+12%",
        type: "success",
    },
    {
        id: "TXN124",
        name: "Jane Doe",
        img: "https://github.com/shadcn.png",
        value: "-$100",
        percentage: "-5%",
        type: "pending",
    },
    {
        id: "TXN125",
        name: "Mark Smith",
        img: "https://github.com/shadcn.png",
        value: "+$500",
        percentage: "+20%",
        type: "success",
    },
    {
        id: "TXN126",
        name: "Sara Jones",
        img: "https://github.com/shadcn.png",
        value: "-$75",
        percentage: "-3%",
        type: "pending",
    },
];

export function TransactionsCard() {
    const [activeTab, setActiveTab] = useState("all");

    const filteredTransactions = transactions.filter((txn) => activeTab === "all" || txn.type === activeTab);

    return (
        <Card className="w-full  md:w-[50%]  flex flex-col min-h-full">
            <CardHeader>
                <CardTitle>Transactions</CardTitle>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto">
                {/* Tabs for filtering */}
                <Tabs defaultValue="all" onValueChange={setActiveTab}>
                    <TabsList className="mb-4">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="success">Success</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {filteredTransactions.map((txn) => (
                            <TransactionItem key={txn.id} transaction={txn} />
                        ))}
                    </TabsContent>
                    <TabsContent value="success">
                        {filteredTransactions.map((txn) => (
                            <TransactionItem key={txn.id} transaction={txn} />
                        ))}
                    </TabsContent>
                    <TabsContent value="pending">
                        {filteredTransactions.map((txn) => (
                            <TransactionItem key={txn.id} transaction={txn} />
                        ))}
                    </TabsContent>
                </Tabs>
            </CardContent>

            {/* Ensure the footer sticks to the bottom */}
            <CardFooter className="mt-auto flex justify-between">
                <Button className="max:md:w-[48%]" variant="secondary">Show Full History</Button>
                <Button className="max:md:w-[50%]" variant="default">Add New Transaction</Button>
            </CardFooter>
        </Card>
    );
}

// Single Transaction Item Component
function TransactionItem({ transaction }: { transaction: typeof transactions[number] }) {
    return (
        <div className="flex items-center justify-between py-3 border-b last:border-none">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src={transaction.img} />
                    <AvatarFallback>{transaction.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-sm text-muted-foreground">{transaction.id}</p>
                </div>
            </div>

            <div className="text-right">
                <p className="font-medium">{transaction.value}</p>
                <p
                    className={`text-sm ${transaction.percentage.startsWith("+") ? "text-green-500" : "text-red-500"
                        }`}
                >
                    {transaction.percentage}
                </p>
            </div>
        </div>
    );
}
