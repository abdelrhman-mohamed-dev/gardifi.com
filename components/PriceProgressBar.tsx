"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

// Define the type for multiple progress segments
type ProgressSegment = {
    value: number
    color: string
}

interface PriceProgressBarProps
    extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    segments: ProgressSegment[]
}

const PriceProgressBar = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    PriceProgressBarProps
>(({ className, segments, ...props }, ref) => {
    return (
        <ProgressPrimitive.Root
            ref={ref}
            style={{ direction: "ltr" }}
            className={cn(
                "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
                className
            )}
            {...props}
        >
            {/* This wrapper will help stack the segments side by side */}
            <div className="flex h-full w-full">
                {segments.map((segment, index) => (
                    <div
                        key={index}
                        className={`h-full transition-all ${segment.color}`}
                        style={{
                            width: `${segment.value}%`,
                            // backgroundColor: segment.color,
                        }}
                    />
                ))}
            </div>
        </ProgressPrimitive.Root>
    )
})
PriceProgressBar.displayName = ProgressPrimitive.Root.displayName

export { PriceProgressBar }
