"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <span className="hidden font-bold sm:inline-block">
              TherapyConnect
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/find-therapist"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Find a Therapist
            </Link>
            <Link
              href="#how-it-works"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              How It Works
            </Link>
            <Link
              href="#for-therapists"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              For Therapists
            </Link>
            <Link
              href="#resources"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Resources
            </Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="font-bold">TherapyConnect</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link
                  href="#find-therapist"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Find a Therapist
                </Link>
                <Link
                  href="/how-it-works"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  How It Works
                </Link>
                <Link
                  href="#for-therapists"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  For Therapists
                </Link>
                <Link
                  href="#resources"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Resources
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end mr-2 md:mr-0">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="font-bold">TherapyConnect</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button size="sm" asChild>
              <Link href={"/find-therapist"}>Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
