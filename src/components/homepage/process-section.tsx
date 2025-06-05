import { Calendar, MessageCircle, Search } from "lucide-react";
import React from "react";

export default function ProcessSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting started with therapy has never been easier. Follow these
              simple steps.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Search className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Search & Filter</h3>
              <p className="text-muted-foreground">
                Browse therapists by location, specialty, insurance, and
                availability.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <Calendar className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Book Appointment</h3>
              <p className="text-muted-foreground">
                Schedule your session instantly with real-time availability.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <MessageCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. Start Therapy</h3>
              <p className="text-muted-foreground">
                Meet with your therapist online or in-person and begin your
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
