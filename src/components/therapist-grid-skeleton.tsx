import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function TherapistGridSkeleton() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-9 w-48" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-32 w-full rounded-none" />

            <CardHeader className="relative pt-0 px-6">
              <div className="flex -mt-10 mb-3">
                <Skeleton className="h-20 w-20 rounded-full" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-10" />
                </div>

                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full" />
              </div>
            </CardHeader>

            <CardContent className="px-6">
              <div className="space-y-3">
                <div>
                  <Skeleton className="h-3 w-20 mb-2" />
                  <div className="flex flex-wrap gap-1.5">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-14" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Skeleton className="h-3 w-16 mb-2" />
                    <Skeleton className="h-4 w-12" />
                  </div>

                  <div>
                    <Skeleton className="h-3 w-16 mb-2" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>

                <div>
                  <Skeleton className="h-3 w-24 mb-2" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>

                <div>
                  <Skeleton className="h-3 w-20 mb-2" />
                  <div className="flex flex-wrap gap-1.5">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-2 flex justify-between">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
