import React from "react";

export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="text-3xl font-bold text-blue-600">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="text-3xl font-bold text-green-600">500+</div>
            <div className="text-sm text-muted-foreground">
              Licensed Therapists
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-muted-foreground">Specialties</div>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="text-3xl font-bold text-red-600">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
