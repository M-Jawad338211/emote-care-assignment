import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit">
                🌟 Trusted by 10,000+ clients
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Find Your Perfect Therapist Today
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect with licensed mental health professionals who understand
                your needs. Book sessions online or in-person with verified
                therapists in your area.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href={"/find-therapist"}>
                  Find a Therapist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                How It Works
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Licensed professionals</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Secure & confidential</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.png"
              width="400"
              height="400"
              alt="Therapy session illustration"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
