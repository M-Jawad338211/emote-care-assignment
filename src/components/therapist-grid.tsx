"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { TherapistCard } from "@/components/therapist-card";
import { TherapistGridSkeleton } from "@/components/therapist-grid-skeleton";
import { TherapistSort } from "@/components/therapist-sort";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface TherapistsResponse {
  therapists: Array<{
    id: number;
    name: string;
    speciality: string[];
    location: string;
    availability: string[];
    rating: number;
    description: string;
    qualification: string;
    experience: number;
    format: string[];
    gender: string;
    languages: string[];
    profileImage: string;
    coverImage: string;
  }>;
  total: number;
}

async function fetchTherapists(
  searchParams: URLSearchParams
): Promise<TherapistsResponse> {
  const response = await fetch(`/api/therapists?${searchParams.toString()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch therapists");
  }
  return response.json();
}

export function TherapistGrid() {
  const searchParams = useSearchParams();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["therapists", searchParams.toString()],
    queryFn: () => fetchTherapists(searchParams),
  });

  if (isLoading) {
    return <TherapistGridSkeleton />;
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          {error instanceof Error
            ? error.message
            : "Failed to load therapists. Please try again."}
        </AlertDescription>
      </Alert>
    );
  }

  const therapists = data?.therapists || [];
  const total = data?.total || 0;

  return (
    <div>
      <div className="flex justify-between items-center flex-col-reverse sm:flex-row mb-6">
        <p className="text-muted-foreground">
          Showing {therapists.length} of {total} therapist
          {total !== 1 ? "s" : ""}
        </p>
        <TherapistSort />
      </div>

      {therapists.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No therapists found matching your criteria.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Try adjusting your filters to see more results.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {therapists.map((therapist) => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>
      )}
    </div>
  );
}
