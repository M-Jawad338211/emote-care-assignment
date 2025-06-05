import Link from "next/link";
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="font-bold">TherapyConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Connecting you with licensed mental health professionals for a
              healthier, happier life.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">For Clients</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/find-therapist"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-muted-foreground hover:text-foreground"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Insurance Coverage
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Mental Health Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">For Therapists</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/for-therapists"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Join Our Network
                </Link>
              </li>
              <li>
                <Link
                  href="/therapist-resources"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Therapist Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-management"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Practice Management
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TherapyConnect. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="/hipaa"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              HIPAA Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
