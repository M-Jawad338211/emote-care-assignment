import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookSessionButton } from "@/components/book-session-button";
import type { Therapist } from "@/lib/types";

interface TherapistCardProps {
  therapist: Therapist;
}

export function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md py-0">
      <div className="relative h-32 w-full">
        <Image
          src={therapist.coverImage}
          alt={`${therapist.name} cover`}
          fill
          className="object-cover"
        />
      </div>

      <CardHeader className="relative pt-0 px-6">
        <div className="flex -mt-10 mb-3">
          <div className="relative h-20 w-20 rounded-full border-4 border-background overflow-hidden">
            <Image
              src={therapist.profileImage}
              alt={therapist.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{therapist.name}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{therapist.rating}</span>
            </div>
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{therapist.location}</span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {therapist.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1.5">Specialties</p>
            <div className="flex flex-wrap gap-1.5">
              {therapist.speciality.map((specialty) => (
                <Badge key={specialty} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Experience</p>
              <p className="font-medium">{therapist.experience} years</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Languages</p>
              <p className="font-medium">{therapist.languages.join(", ")}</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-1.5">
              Session Format
            </p>
            <div className="flex space-x-2">
              {therapist.format.includes("Online") && (
                <div className="flex items-center text-xs">
                  <Video className="h-3.5 w-3.5 mr-1 text-blue-500" />
                  <span>Online</span>
                </div>
              )}
              {therapist.format.includes("In-person") && (
                <div className="flex items-center text-xs">
                  <MapPin className="h-3.5 w-3.5 mr-1 text-green-500" />
                  <span>In-person</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-1.5">Availability</p>
            <div className="flex flex-wrap gap-1.5">
              {therapist.availability.map((day) => (
                <Badge key={day} variant="outline" className="text-xs">
                  {day}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 pb-6 pt-2 flex justify-between gap-x-2 mt-auto">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/therapist/${therapist.id}`}>View Profile</Link>
        </Button>
        <BookSessionButton therapist={therapist} size="sm" />
      </CardFooter>
    </Card>
  );
}
