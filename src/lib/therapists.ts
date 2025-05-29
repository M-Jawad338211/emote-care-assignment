import type { Therapist } from "./types"

export async function getTherapists(): Promise<Therapist[]> {
  const response = await fetch("/api/therapists")
  if (!response.ok) {
    throw new Error("Failed to fetch therapists")
  }
  const data = await response.json()
  return data.therapists
}

export async function getTherapistById(id: number): Promise<Therapist | undefined> {
  const response = await fetch(`/api/therapists/${id}`)
  if (!response.ok) {
    return undefined
  }
  return response.json()
}
