"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useCallback, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SPECIALTIES = [
  "Anxiety",
  "Depression",
  "PTSD",
  "Couples Therapy",
  "Family Therapy",
  "Grief Counseling",
  "Substance Abuse",
  "Trauma",
  "OCD",
  "Self-esteem",
  "Teen Counseling",
  "ADHD",
  "Stress Management",
  "Mindfulness",
  "Anger Management",
  "Eating Disorders",
  "Veterans' Mental Health",
  "Women's Mental Health",
  "Career Counseling",
];

const LANGUAGES = [
  "English",
  "Spanish",
  "Mandarin",
  "French",
  "Urdu",
  "Arabic",
  "Japanese",
  "Korean",
  "Hindi",
  "Italian",
  "Gujarati",
  "Somali",
  "Chinese",
];

const LOCATIONS = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "San Francisco, CA",
  "Austin, TX",
  "Seattle, WA",
  "Dearborn, MI",
  "Miami, FL",
  "Boston, MA",
  "San Diego, CA",
  "Denver, CO",
  "San Jose, CA",
  "Philadelphia, PA",
  "Portland, OR",
  "Dallas, TX",
  "Phoenix, AZ",
  "Houston, TX",
  "Minneapolis, MN",
  "Atlanta, GA",
  "Salt Lake City, UT",
];

interface TherapistFiltersProps {
  onFilterApplied?: () => void;
}

export function TherapistFilters({ onFilterApplied }: TherapistFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>(
    searchParams.get("specialties")?.split(",").filter(Boolean) || []
  );
  const [selectedFormats, setSelectedFormats] = useState<string[]>(
    searchParams.get("formats")?.split(",").filter(Boolean) || []
  );
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    searchParams.get("languages")?.split(",").filter(Boolean) || []
  );
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    searchParams.get("locations") ? [searchParams.get("locations")!] : []
  );
  const [minRating, setMinRating] = useState([
    Number.parseFloat(searchParams.get("minRating") || "0"),
  ]);

  const updateURL = useCallback(
    (updates: Record<string, string | string[] | number>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (
          value === "" ||
          value === 0 ||
          (Array.isArray(value) && value.length === 0)
        ) {
          params.delete(key);
        } else if (Array.isArray(value)) {
          params.set(key, value.join(","));
        } else {
          params.set(key, value.toString());
        }
      });

      router.push(`/find-therapist?${params.toString()}`);
      // Call the callback when filters are applied (for mobile dialog)
      if (onFilterApplied) {
        onFilterApplied();
      }
    },
    [router, searchParams, onFilterApplied]
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    updateURL({ search: value });
  };

  const toggleSpecialty = (specialty: string) => {
    const newSpecialties = selectedSpecialties.includes(specialty)
      ? selectedSpecialties.filter((s) => s !== specialty)
      : [...selectedSpecialties, specialty];
    setSelectedSpecialties(newSpecialties);
    updateURL({ specialties: newSpecialties });
  };

  const toggleFormat = (format: string) => {
    const newFormats = selectedFormats.includes(format)
      ? selectedFormats.filter((f) => f !== format)
      : [...selectedFormats, format];
    setSelectedFormats(newFormats);
    updateURL({ formats: newFormats });
  };

  const toggleLanguage = (language: string) => {
    const newLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter((l) => l !== language)
      : [...selectedLanguages, language];
    setSelectedLanguages(newLanguages);
    updateURL({ languages: newLanguages });
  };

  const clearAllFilters = () => {
    setSearch("");
    setSelectedSpecialties([]);
    setSelectedFormats([]);
    setSelectedLanguages([]);
    setSelectedLocations([]);
    setMinRating([0]);
    router.push("/find-therapist");
    if (onFilterApplied) {
      onFilterApplied();
    }
  };

  const hasActiveFilters =
    search ||
    selectedSpecialties.length > 0 ||
    selectedFormats.length > 0 ||
    selectedLanguages.length > 0 ||
    selectedLocations.length > 0 ||
    minRating[0] > 0;

  return (
    <div className="space-y-6">
      {hasActiveFilters && (
        <Button onClick={clearAllFilters} variant="outline" className="w-full">
          <X className="mr-2 h-4 w-4" />
          Clear All Filters
        </Button>
      )}

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search therapists or specialties..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-8"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Location</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={selectedLocations[0] || ""}
            onValueChange={(value) => {
              if (value === "" || value === "all") {
                setSelectedLocations([]);
                updateURL({ locations: [] });
              } else {
                setSelectedLocations([value]);
                updateURL({ locations: [value] });
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {LOCATIONS.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Specialties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {SPECIALTIES.map((specialty) => (
              <Badge
                key={specialty}
                variant={
                  selectedSpecialties.includes(specialty)
                    ? "default"
                    : "outline"
                }
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => toggleSpecialty(specialty)}
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Session Format</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="online"
                checked={selectedFormats.includes("Online")}
                onChange={() => toggleFormat("Online")}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="online"
                className="text-sm font-medium cursor-pointer"
              >
                Online
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="in-person"
                checked={selectedFormats.includes("In-person")}
                onChange={() => toggleFormat("In-person")}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="in-person"
                className="text-sm font-medium cursor-pointer"
              >
                In-person
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Minimum Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={minRating}
              onValueChange={setMinRating}
              max={5}
              step={0.1}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span className="font-medium">{minRating[0].toFixed(1)}+</span>
              <span>5.0</span>
            </div>
            <Button
              onClick={() => updateURL({ minRating: minRating[0] })}
              size="sm"
              className="w-full"
              variant="outline"
            >
              Apply Rating Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Languages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map((language) => (
              <Badge
                key={language}
                variant={
                  selectedLanguages.includes(language) ? "default" : "outline"
                }
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => toggleLanguage(language)}
              >
                {language}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
