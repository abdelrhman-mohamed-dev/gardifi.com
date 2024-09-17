import React from 'react'
import { Card } from './ui/card'
import WorldMap from './WorldMap/WorldMap'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { HelpCircle } from 'lucide-react'

const WorldMapCard = () => {
    const userData = {
        USA: 1000,
        CAN: 200,
        CHN: 500,
        IND: 800,
    }
    return (
        <Card className="p-3  w-full h-full md:w-[50%] ">
            <h2 className="font-bold flex items-center gap-2 text-black dark:text-white">
                اماكن تواجد المستخدمين
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
            <WorldMap userData={userData} />
        </Card>
    )
}

export default WorldMapCard