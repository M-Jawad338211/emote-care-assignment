"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TherapistSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sortBy") || "recommended";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "recommended") {
      params.delete("sortBy");
    } else {
      params.set("sortBy", value);
    }
    router.push(`/find-therapist?${params.toString()}`);
  };

  return (
    <Select value={currentSort} onValueChange={handleSortChange}>
      <SelectTrigger className="max-w-xs w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="recommended">Sort by: Recommended</SelectItem>
        <SelectItem value="rating-high">
          Sort by: Rating (High to Low)
        </SelectItem>
        <SelectItem value="rating-low">
          Sort by: Rating (Low to High)
        </SelectItem>
        <SelectItem value="experience-high">
          Sort by: Experience (High to Low)
        </SelectItem>
        <SelectItem value="experience-low">
          Sort by: Experience (Low to High)
        </SelectItem>
        <SelectItem value="name">Sort by: Name (A-Z)</SelectItem>
      </SelectContent>
    </Select>
  );
}
