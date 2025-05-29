"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useBooking } from "@/contexts/booking-context";
import type { Therapist } from "@/lib/types";

interface BookSessionButtonProps {
  therapist: Therapist;
  size?: "sm" | "default" | "lg";
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  className?: string;
}

export function BookSessionButton({
  therapist,
  size = "default",
  variant = "default",
  className,
}: BookSessionButtonProps) {
  const { openBooking } = useBooking();

  const handleBookSession = () => {
    openBooking(therapist);
  };

  return (
    <Button
      onClick={handleBookSession}
      size={size}
      variant={variant}
      className={className}
    >
      <Calendar className="mr-2 h-4 w-4" />
      Book Session
    </Button>
  );
}
