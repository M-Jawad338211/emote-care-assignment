"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/booking-context";

export function GlobalBookingDialog() {
  const { isBookingOpen, selectedTherapist, closeBooking } = useBooking();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would handle the form submission in a real application
    // For now, just close the dialog
    closeBooking();
  };

  if (!selectedTherapist) {
    return null;
  }

  return (
    <Dialog open={isBookingOpen} onOpenChange={closeBooking}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            Book a Session with {selectedTherapist.name}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="day">Preferred Day</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a day" />
              </SelectTrigger>
              <SelectContent>
                {selectedTherapist.availability.map((day) => (
                  <SelectItem key={day} value={day.toLowerCase()}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              {selectedTherapist.name} is available on{" "}
              {selectedTherapist.availability.join(", ")}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Visit</Label>
            <Textarea
              id="reason"
              placeholder="Briefly describe what you'd like to discuss in your session"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={closeBooking}>
              Cancel
            </Button>
            <Button type="submit">Request Session</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
