import { Therapist } from "@/lib/types";
import React from "react";

export default function AboutTherapist({
  therapist,
}: {
  therapist: Therapist;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">About {therapist.name}</h3>
        <p className="text-muted-foreground">
          {therapist.name} is a{" "}
          {therapist.gender === "Female" ? "licensed female" : "licensed male"}{" "}
          therapist with {therapist.experience} years of experience.{" "}
          {therapist.description}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Specialties</h3>
        <p className="text-muted-foreground mb-3">
          {therapist.name} specializes in treating the following conditions:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {therapist.speciality.map((specialty) => (
            <li key={specialty}>{specialty}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Education & Experience</h3>
        <p className="text-muted-foreground mb-2">{therapist.qualification}</p>
        <p className="text-muted-foreground">
          With {therapist.experience} years of clinical experience,{" "}
          {therapist.name} has helped hundreds of clients achieve their mental
          health goals.
        </p>
      </div>
    </div>
  );
}
