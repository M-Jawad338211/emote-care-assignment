"use client";

import AboutTherapist from "@/components/therapist-profile/about";
import Approach from "@/components/therapist-profile/approach";
import InfoCards from "@/components/therapist-profile/info-cards";
import ProfileHeader from "@/components/therapist-profile/profile-header";
import Reviews from "@/components/therapist-profile/reviews";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Therapist } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

async function fetchTherapist(id: string): Promise<Therapist> {
  const response = await fetch(`/api/therapists/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch therapist");
  }
  return response.json();
}

export default function TherapistProfilePage() {
  const params = useParams();
  const id = params.id;

  const {
    data: therapist,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["therapist", id],
    queryFn: () => fetchTherapist(id as string),
  });

  if (isLoading) {
    return (
      <section id="main" className="flex-1">
        <Skeleton className="w-full h-48 md:h-64 lg:h-80" />
        <div className="container px-4 md:px-6 mx-auto -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Skeleton className="h-32 w-32 rounded-full" />
            <div className="flex-1 space-y-2 pt-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    if (error instanceof Error && error.message.includes("404")) {
      notFound();
    }
    return (
      <section
        id="main"
        className="flex-1 container px-4 md:px-6 mx-auto py-12"
      >
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error instanceof Error
              ? error.message
              : "Failed to load therapist. Please try again."}
          </AlertDescription>
        </Alert>
      </section>
    );
  }

  if (!therapist) {
    notFound();
  }

  return (
    <section id="main" className="flex-1">
      {/* Hero Section with Cover Image */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 bg-muted">
        <Image
          src={therapist.coverImage}
          alt={`${therapist.name} cover`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container px-4 md:px-6 mx-auto -mt-16 relative z-10">
        <ProfileHeader therapist={therapist} />
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <InfoCards therapist={therapist} />
          {/* Right Column - Tabs */}
          <div className="md:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="approach">Approach</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="p-4 pt-6">
                <AboutTherapist therapist={therapist} />
              </TabsContent>
              <TabsContent value="approach" className="p-4 pt-6">
                <Approach therapist={therapist} />
              </TabsContent>
              <TabsContent value="reviews" className="p-4 pt-6">
                <Reviews therapist={therapist} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="mt-16"></div>
    </section>
  );
}
