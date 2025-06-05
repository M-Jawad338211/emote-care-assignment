import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Award,
  Briefcase,
  Calendar,
  Clock,
  Languages,
  MapPin,
  Video,
} from "lucide-react";
import { Therapist } from "@/lib/types";

export default function InfoCards({ therapist }: { therapist: Therapist }) {
  return (
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
  );
}
