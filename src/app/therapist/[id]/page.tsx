"use client";

import { BookSessionButton } from "@/components/book-session-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Therapist } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  Award,
  Briefcase,
  Calendar,
  Clock,
  Languages,
  MapPin,
  Star,
  Video,
} from "lucide-react";
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

  console.log(params);
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
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
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
        </main>
        <Footer />
      </div>
    );
  }

  if (isError) {
    if (error instanceof Error && error.message.includes("404")) {
      notFound();
    }
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container px-4 md:px-6 mx-auto py-12">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error instanceof Error
                ? error.message
                : "Failed to load therapist. Please try again."}
            </AlertDescription>
          </Alert>
        </main>
        <Footer />
      </div>
    );
  }

  if (!therapist) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
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
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative h-32 w-32 rounded-full border-4 border-background overflow-hidden bg-background">
              <Image
                src={therapist.profileImage}
                alt={therapist.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 space-y-2 pt-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h1 className="text-3xl font-bold">{therapist.name}</h1>
                <div className="flex items-center">
                  <div className="flex items-center mr-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{therapist.rating}</span>
                  </div>
                  <BookSessionButton therapist={therapist} />
                </div>
              </div>

              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{therapist.location}</span>
              </div>

              <p className="text-muted-foreground max-w-3xl">
                {therapist.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {therapist.speciality.map((specialty) => (
                  <Badge key={specialty} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Left Column - Info Cards */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">At a Glance</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Briefcase className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Experience</p>
                        <p className="text-muted-foreground">
                          {therapist.experience} years
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Award className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Qualification</p>
                        <p className="text-muted-foreground">
                          {therapist.qualification}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Languages className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Languages</p>
                        <p className="text-muted-foreground">
                          {therapist.languages.join(", ")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Availability</p>
                        <p className="text-muted-foreground">
                          {therapist.availability.join(", ")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-5 w-5 mr-3 text-blue-500 mt-0.5 justify-center">
                        {therapist.format.includes("Online") ? (
                          <Video className="h-5 w-5" />
                        ) : (
                          <MapPin className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">Session Format</p>
                        <p className="text-muted-foreground">
                          {therapist.format.join(", ")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Session Duration</p>
                        <p className="text-muted-foreground">50 minutes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Tabs */}
            <div className="md:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="approach">Approach</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="p-4 pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        About {therapist.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {therapist.name} is a{" "}
                        {therapist.gender === "Female"
                          ? "licensed female"
                          : "licensed male"}{" "}
                        therapist with {therapist.experience} years of
                        experience. {therapist.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Specialties
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {therapist.name} specializes in treating the following
                        conditions:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {therapist.speciality.map((specialty) => (
                          <li key={specialty}>{specialty}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Education & Experience
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {therapist.qualification}
                      </p>
                      <p className="text-muted-foreground">
                        With {therapist.experience} years of clinical
                        experience, {therapist.name} has helped hundreds of
                        clients achieve their mental health goals.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="approach" className="p-4 pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Therapeutic Approach
                      </h3>
                      <p className="text-muted-foreground">
                        {`${therapist.name} utilizes an integrative approach
                        tailored to each client's unique needs. Drawing from
                        evidence-based practices,
                        ${
                          therapist.gender === "Female" ? "she" : "he"
                        } creates a
                        supportive environment where clients can explore their
                        challenges and develop effective coping strategies.`}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Treatment Methods
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Cognitive Behavioral Therapy (CBT)</li>
                        <li>Mindfulness-Based Cognitive Therapy</li>
                        <li>Solution-Focused Brief Therapy</li>
                        <li>Trauma-Informed Care</li>
                        <li>Motivational Interviewing</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        What to Expect
                      </h3>
                      <p className="text-muted-foreground">
                        {`In your first session, ${therapist.name} will take time
                        to understand your concerns, goals, and history.
                        Together, you'll develop a personalized treatment plan
                        focused on your specific needs. Sessions are
                        collaborative, respectful, and focused on helping you
                        achieve meaningful change.`}
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="p-4 pt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Client Reviews
                        </h3>
                        <p className="text-muted-foreground">
                          Based on 24 reviews
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(therapist.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">
                          {therapist.rating}
                        </span>
                      </div>
                    </div>

                    {/* Sample Reviews */}
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">Anonymous Client</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          3 months ago
                        </p>
                        <p className="text-muted-foreground">
                          {therapist.name} is an amazing therapist.{" "}
                          {therapist.gender === "Female" ? "She" : "He"} really
                          listens and provides practical advice that has helped
                          me tremendously with my anxiety.
                        </p>
                      </div>

                      <div className="border-b pb-4">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">Anonymous Client</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 4
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          6 months ago
                        </p>
                        <p className="text-muted-foreground">
                          {`I've been working with ${therapist.name} for several
                          months now, and I've seen significant improvement in
                          my mental health. Highly recommend!`}
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">Anonymous Client</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 5
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          1 year ago
                        </p>
                        <p className="text-muted-foreground">
                          {therapist.gender === "Female" ? "She" : "He"} creates
                          such a safe and comfortable environment. I never feel
                          judged and always leave our sessions feeling better.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
