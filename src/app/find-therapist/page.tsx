"use client";

import { Suspense, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TherapistFilters } from "@/components/therapist-filters";
import { TherapistGrid } from "@/components/therapist-grid";
import { TherapistGridSkeleton } from "@/components/therapist-grid-skeleton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { useSearchParams } from "next/navigation";

function FilterButton() {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  // Count active filters
  const activeFilters = [
    searchParams.get("search"),
    searchParams.get("specialties"),
    searchParams.get("formats"),
    searchParams.get("languages"),
    searchParams.get("locations"),
    searchParams.get("minRating") &&
    Number.parseFloat(searchParams.get("minRating")!) > 0
      ? "rating"
      : null,
  ].filter(Boolean).length;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative">
          <Filter className="mr-2 h-4 w-4" />
          Filters
          {activeFilters > 0 && (
            <Badge
              variant="destructive"
              className="ml-2 h-5 w-5 rounded-full p-0 text-xs"
            >
              {activeFilters}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Filter Therapists</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <TherapistFilters onFilterApplied={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function FindTherapistPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find Your Therapist
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our network of licensed professionals and find the
                  perfect match for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6 mx-auto">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6 text-end">
              <FilterButton />
            </div>

            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              {/* Desktop Filters Sidebar */}
              <div className="hidden lg:block space-y-6">
                <TherapistFilters />
              </div>

              {/* Therapist Grid */}
              <div>
                <Suspense fallback={<TherapistGridSkeleton />}>
                  <TherapistGrid />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
