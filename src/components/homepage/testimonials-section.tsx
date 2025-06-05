import React from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real stories from people who found the help they needed.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {`"TherapyConnect made it so easy to find a therapist who
                    understood my anxiety. The booking process was seamless and
                    my therapist has been incredibly helpful."`}
              </p>
              <div className="font-semibold">Sarah M.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {` "I was hesitant about online therapy, but the platform made
                    me feel comfortable and secure. My therapist is amazing and
                    I've seen real progress."`}
              </p>
              <div className="font-semibold">Michael R.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {`"Finding a couples therapist that worked with our insurance
                    was a nightmare until I found TherapyConnect. Highly
                    recommend!"`}
              </p>
              <div className="font-semibold">Jennifer & David L.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
