"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { Calendar } from "lucide-react";
import type { Therapist } from "@/lib/types";

interface TherapistBookingSectionProps {
  therapist: Therapist;
}

export function TherapistBookingSection({
  therapist,
}: TherapistBookingSectionProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would handle the form submission in a real application
    // For now, just close the dialog
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Book Session
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book a Session with {therapist.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="day">Preferred Day</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a day" />
              </SelectTrigger>
              <SelectContent>
                {therapist.availability.map((day) => (
                  <SelectItem key={day} value={day.toLowerCase()}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              {therapist.name} is available on{" "}
              {therapist.availability.join(", ")}
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
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Request Session</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
