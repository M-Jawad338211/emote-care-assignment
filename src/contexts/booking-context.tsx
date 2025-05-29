"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import type { Therapist } from "@/lib/types";

interface BookingContextType {
  isBookingOpen: boolean;
  selectedTherapist: Therapist | null;
  openBooking: (therapist: Therapist) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(
    null
  );

  const openBooking = (therapist: Therapist) => {
    setSelectedTherapist(therapist);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedTherapist(null);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        selectedTherapist,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
