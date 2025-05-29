import { type NextRequest, NextResponse } from "next/server";
import therapistsData from "@/data/therapists.json";
import type { Therapist } from "@/lib/types";

export async function GET(request: NextRequest) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search")?.toLowerCase() || "";
  const specialties =
    searchParams.get("specialties")?.split(",").filter(Boolean) || [];
  const formats = searchParams.get("formats")?.split(",").filter(Boolean) || [];
  const languages =
    searchParams.get("languages")?.split(",").filter(Boolean) || [];
  const locations = searchParams.get("locations")
    ? [searchParams.get("locations")!]
    : [];
  const minRating = Number.parseFloat(searchParams.get("minRating") || "0");
  const sortBy = searchParams.get("sortBy") || "recommended";

  let filteredTherapists = therapistsData as Therapist[];

  // Apply search filter (name and specialties)
  if (search) {
    filteredTherapists = filteredTherapists.filter(
      (therapist) =>
        therapist.name.toLowerCase().includes(search) ||
        therapist.speciality.some((specialty) =>
          specialty.toLowerCase().includes(search)
        )
    );
  }

  // Apply specialty filter
  if (specialties.length > 0) {
    filteredTherapists = filteredTherapists.filter((therapist) =>
      specialties.some((specialty) => therapist.speciality.includes(specialty))
    );
  }

  // Apply format filter
  if (formats.length > 0) {
    filteredTherapists = filteredTherapists.filter((therapist) =>
      formats.some((format) => therapist.format.includes(format))
    );
  }

  // Apply language filter
  if (languages.length > 0) {
    filteredTherapists = filteredTherapists.filter((therapist) =>
      languages.some((language) => therapist.languages.includes(language))
    );
  }

  // Apply location filter
  if (locations.length > 0) {
    filteredTherapists = filteredTherapists.filter((therapist) =>
      locations.includes(therapist.location)
    );
  }

  // Apply rating filter
  if (minRating > 0) {
    filteredTherapists = filteredTherapists.filter(
      (therapist) => therapist.rating >= minRating
    );
  }

  // Apply sorting
  switch (sortBy) {
    case "rating-high":
      filteredTherapists.sort((a, b) => b.rating - a.rating);
      break;
    case "rating-low":
      filteredTherapists.sort((a, b) => a.rating - b.rating);
      break;
    case "experience-high":
      filteredTherapists.sort((a, b) => b.experience - a.experience);
      break;
    case "experience-low":
      filteredTherapists.sort((a, b) => a.experience - b.experience);
      break;
    case "name":
      filteredTherapists.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      // Keep original order for "recommended"
      break;
  }

  return NextResponse.json({
    therapists: filteredTherapists,
    total: filteredTherapists.length,
  });
}
