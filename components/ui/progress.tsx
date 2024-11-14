"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(({ className, value, ...props }, ref) => {
  const getColor = (value: number) => {
    if (value >= 90) return "bg-green-500";
    if (value >= 80) return "bg-blue-500";
    if (value >= 60) return "bg-[#ea580c]";
    return "bg-red-500";
  };
  return (
    <ProgressPrimitive.Root ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)} {...props}>
      <ProgressPrimitive.Indicator className={cn("h-full transition-all", getColor(value || 0))} style={{ width: `${value || 0}%` }} />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
