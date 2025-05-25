"use client"

import { TransformedEmail } from "@/types/email"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<TransformedEmail>[] = [
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "from",
    header: "From",
  },
  {
    accessorKey: "receivedAt",
    header: "Date",
    cell: ({ row }) => row.original.receivedAt.toLocaleString(),
  },
]
