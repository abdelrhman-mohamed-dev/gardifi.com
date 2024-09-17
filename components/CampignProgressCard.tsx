import React from 'react'
import { PriceProgressBar } from './PriceProgressBar'
import { IconArrowUp } from '@tabler/icons-react'
import { Card } from './ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { HelpCircle } from 'lucide-react'

const CampignProgressCard = () => {
    return (
        <div className="w-full md:w-[300px]">
            <Card className="p-4">
                <h2 className="font-bold flex items-center gap-2 text-black dark:text-white">
                    اجمالي عدد الحملات
                    <span>
                        <TooltipProvider>
                            <Tooltip >
                                <TooltipTrigger>
                                    <HelpCircle className="text-gray-500 dark:text-gray-400 h-3 w-3" />
                                </TooltipTrigger>
                                <TooltipContent className="w-[200px]" side="bottom">
                                    <p>اجمالي الحظر يوجد فيه شرح لاكثر الطرق التي يتم حظر بيها المستخدمين غير الحقيقيين</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </span>
                </h2>
                <div className="flex items-center justify-between py-4">
                    <p className="text-2xl font-bold">
                        5,000
                    </p>
                    <span className="text-xs rounded-md dark:bg-gray-800 bg-gray-100 text-green-500 p-1 flex items-center">100% <IconArrowUp className="w-4 h-4" /></span>
                </div>
                <PriceProgressBar segments={[
                    { value: 30, color: "bg-green-500" },
                    { value: 20, color: "bg-orange-500" },
                    { value: 20, color: "bg-red-500" },
                ]} />
                <div className="p-2 mt-2 space-y-2 text-sm">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-500 rounded-full w-3 h-3" />
                            <span>X Free </span>
                        </div>
                        <span>2000</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bg-orange-500 rounded-full w-3 h-3" />
                            <span>mostafa Ads</span>
                        </div>
                        <span>3000</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bg-red-500 rounded-full w-3 h-3" />
                            <span>boody Ads</span>
                        </div>
                        <span>1000</span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CampignProgressCard