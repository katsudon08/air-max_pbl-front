"use client"

import { Weather } from "@/types/weather";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export const columns: ColumnDef<Weather>[] = [
    {
        accessorKey: "date",
        header: "日付"
    },
    {
        accessorKey: "temperature",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    温度
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "humidity",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    湿度
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "pressure",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    気圧
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    }
]