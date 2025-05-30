"use client";

import type React from "react";
import { useState } from "react";
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
import { toast } from "sonner";

interface BookingFormData {
  name: string;
  day: string;
  reason: string;
}

export function GlobalBookingDialog() {
  const { isBookingOpen, selectedTherapist, closeBooking } = useBooking();
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    day: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success toast
    toast.success("Booking Request Sent!", {
      description: `Your session request with ${selectedTherapist?.name} has been submitted successfully. You will receive a confirmation email shortly.`,
      duration: 5000,
    });

    // Reset form and close dialog
    setFormData({ name: "", day: "", reason: "" });
    setIsSubmitting(false);
    closeBooking();
  };

  const handleClose = () => {
    setFormData({ name: "", day: "", reason: "" });
    closeBooking();
  };

  if (!selectedTherapist) {
    return null;
  }

  return (
    <Dialog open={isBookingOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            Book a Session with {selectedTherapist.name}
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 pt-4"
          data-testid="booking-form"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              data-testid="name-input"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="day">Preferred Day</Label>
            <Select
              value={formData.day}
              onValueChange={(value) => handleInputChange("day", value)}
              required
            >
              <SelectTrigger data-testid="day-select">
                <SelectValue placeholder="Select a day" />
              </SelectTrigger>
              <SelectContent>
                {selectedTherapist.availability.map((day) => (
                  <SelectItem
                    key={day}
                    value={day.toLowerCase()}
                    data-testid={`day-option-${day.toLowerCase()}`}
                  >
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
              data-testid="reason-textarea"
              placeholder="Briefly describe what you'd like to discuss in your session"
              className="min-h-[100px]"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              data-testid="submit-button"
            >
              {isSubmitting ? "Submitting..." : "Request Session"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
