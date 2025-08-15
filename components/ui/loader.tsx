"use client";

import { cn } from "@/lib/utils";

import * as React from "react";

export function Loader({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-stg-sky-blue border-t-stg-yellow animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-stg-yellow border-t-stg-gray animate-spin animation-delay-150"></div>
        <div className="absolute inset-4 rounded-full border-4 border-stg-gray border-t-stg-sky-blue animate-spin animation-delay-300"></div>
      </div>
    </div>
  );
}