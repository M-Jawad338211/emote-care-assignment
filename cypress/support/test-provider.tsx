import { BookingProvider } from "@/contexts/booking-context";
import React from "react";

export function TestProvider({ children }: { children: React.ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>;
}
