import { type NextRequest, NextResponse } from "next/server";
import therapistsData from "@/data/therapists.json";
import type { Therapist } from "@/lib/types";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const therapistId = Number.parseInt(id);
  const therapist = (therapistsData as Therapist[]).find(
    (t) => t.id === therapistId
  );

  if (!therapist) {
    return NextResponse.json({ error: "Therapist not found" }, { status: 404 });
  }

  return NextResponse.json(therapist);
}
