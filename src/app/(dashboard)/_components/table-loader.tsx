import { Skeleton } from "@/components/ui/skeleton"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"

export default function TableLoader() {
  return (
    <TableBody>
      {new Array(10).fill(0).map((row, idx) => (
        <TableRow key={idx}>
          {new Array(3).fill(0).map((cell, idx) => (
            <TableCell key={idx}>
              <Skeleton className="w-[200px] h-[20px] rounded-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}
