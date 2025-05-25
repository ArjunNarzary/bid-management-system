"use client"

import { DataTable } from "./_components/data-table"
import { columns } from "./_components/columns"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { useDebounce } from "@/hooks/useDebounce"
import { EmailResponse, TransformedEmail } from "@/types/email"

interface ApiResponse {
  emails: EmailResponse[]
  total: number
  page: number
  limit: number
}

export default function DashboardPage() {
  const [selectedEmail, setSelectedEmail] = useState<TransformedEmail | null>(
    null
  )
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [searchQuery, setSearchQuery] = useState("")
  const [data, setData] = useState<ApiResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSyncing, setIsSyncing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const fetchEmails = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch(
        `/api/emails?page=${
          pageIndex + 1
        }&limit=${pageSize}&search=${debouncedSearchQuery}`
      )
      if (!response.ok) {
        throw new Error("Failed to fetch emails")
      }
      const responseData = await response.json()
      setData(responseData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const syncEmails = async () => {
    setIsSyncing(true)
    try {
      const response = await fetch("/api/sync")
      if (!response.ok) {
        throw new Error("Failed to sync emails")
      }
      setIsSyncing(false)
    } catch (err) {
      console.error("Error syncing emails:", err)
      setIsSyncing(false)
    }
  }

  // Initial fetch
  useEffect(() => {
    fetchEmails()
  }, [pageIndex, pageSize, debouncedSearchQuery])

  // Polling every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      syncEmails()
    }, 1 * 60 * 1000) // 5 minutes in milliseconds

    return () => clearInterval(interval)
  }, []) // Empty dependency array means this effect runs once on mount

  const handlePaginationChange = (
    newPageIndex: number,
    newPageSize: number
  ) => {
    setPageIndex(newPageIndex)
    setPageSize(newPageSize)
  }

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    setPageIndex(0) // Reset to first page when searching
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const transformedEmails: TransformedEmail[] =
    data?.emails.map((email) => ({
      ...email,
      receivedAt: new Date(email.receivedAt),
      createdAt: new Date(email.createdAt),
      updatedAt: new Date(email.updatedAt),
      attachments:
        email?.attachments?.map((attachment) => ({
          ...attachment,
          createdAt: new Date(attachment.createdAt),
          updatedAt: new Date(attachment.updatedAt),
        })) ?? [],
    })) || []

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end items-center">
        <span className="text-gray-500 text-sm">
          {isSyncing && "Syncing emails....."}
        </span>
      </div>
      <DataTable<TransformedEmail>
        columns={columns}
        data={transformedEmails}
        onRowClick={setSelectedEmail}
        pageCount={Math.ceil((data?.total || 0) / pageSize)}
        onPaginationChange={handlePaginationChange}
        onSearch={handleSearch}
        isLoading={isLoading}
      />
      <Sheet open={!!selectedEmail} onOpenChange={() => setSelectedEmail(null)}>
        <SheetContent className="w-[600px] sm:w-[800px] overflow-auto">
          <SheetHeader>
            <SheetTitle>{selectedEmail?.subject}</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">
                From: {selectedEmail?.from}
              </p>
              <p className="text-sm text-muted-foreground">
                To: {selectedEmail?.to?.join(", ")}
              </p>
              <p className="text-sm text-muted-foreground">
                Date: {selectedEmail?.receivedAt?.toLocaleString()}
              </p>
            </div>
            <div className="prose max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedEmail?.htmlContent || "",
                }}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
