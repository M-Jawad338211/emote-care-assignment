import { Therapist } from "@/lib/types";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BookSessionButton } from "../booking/book-session-button";
import { Badge } from "../ui/badge";

export default function ProfileHeader({ therapist }: { therapist: Therapist }) {
  return (
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
  );
}
