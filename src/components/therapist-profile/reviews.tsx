import { Therapist } from "@/lib/types";
import { Star } from "lucide-react";
import React from "react";

export default function Reviews({ therapist }: { therapist: Therapist }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Client Reviews</h3>
          <p className="text-muted-foreground">Based on 24 reviews</p>
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
          <span className="ml-2 font-medium">{therapist.rating}</span>
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
          <p className="text-xs text-muted-foreground mb-2">3 months ago</p>
          <p className="text-muted-foreground">
            {therapist.name} is an amazing therapist.{" "}
            {therapist.gender === "Female" ? "She" : "He"} really listens and
            provides practical advice that has helped me tremendously with my
            anxiety.
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
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-2">6 months ago</p>
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
                    i < 5 ? "fill-yellow-400 text-yellow-400" : "text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-2">1 year ago</p>
          <p className="text-muted-foreground">
            {therapist.gender === "Female" ? "She" : "He"} creates such a safe
            and comfortable environment. I never feel judged and always leave
            our sessions feeling better.
          </p>
        </div>
      </div>
    </div>
  );
}
