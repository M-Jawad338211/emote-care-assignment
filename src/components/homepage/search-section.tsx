"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (val: string) => {
    router.push(`/find-therapist?search=${val}`);
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Start Your Journey to Better Mental Health
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Search by location, specialty, or therapist name to find the right
              therapist for you.
            </p>
          </div>
          <div className="w-full max-w-2xl space-y-4">
            <div className="flex gap-2">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter a speciality, location or search therapists"
                className="flex-1 h-12"
              />
              <Button
                onClick={() => handleSearch(searchQuery)}
                size="lg"
                className="h-12 px-8"
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSearch("Anxiety")}
                variant="outline"
              >
                Anxiety
              </Badge>
              <Badge
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSearch("Depression")}
                variant="outline"
              >
                Depression
              </Badge>
              <Badge
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSearch("Couples Therapy")}
                variant="outline"
              >
                Couples Therapy
              </Badge>
              <Badge
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSearch("PTSD")}
                variant="outline"
              >
                PTSD
              </Badge>
              <Badge
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSearch("Family Therapy")}
                variant="outline"
              >
                Family Therapy
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
