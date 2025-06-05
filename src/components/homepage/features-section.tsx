import React from "react";
import { Card, CardContent } from "../ui/card";
import { Calendar, Heart, Shield } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose TherapyConnect?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We make finding and booking therapy sessions simple, secure, and
              accessible.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Licensed & Verified</h3>
              <p className="text-muted-foreground">
                All therapists are licensed professionals with verified
                credentials and backgrounds.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
              <p className="text-muted-foreground">
                Book appointments instantly with real-time availability and
                automated reminders.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="mx-auto h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Personalized Matching</h3>
              <p className="text-muted-foreground">
                Find therapists who specialize in your specific needs and accept
                your insurance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
