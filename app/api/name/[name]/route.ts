import { NextResponse } from "next/server"
import type { Country } from "@/types/country"

export async function GET(request: Request, { params }: { params: { name: string } }) {
  try {
    // Get the name parameter from the URL
    const name = params.name

    // Get all countries from the /all endpoint
    const response = await fetch(`${new URL(request.url).origin}/api/all`)

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch countries data" }, { status: response.status })
    }

    const countries: Country[] = await response.json()

    // Filter countries by name.common (case insensitive)
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(name.toLowerCase()),
    )

    if (filteredCountries.length === 0) {
      return NextResponse.json({ message: `No countries found with name containing "${name}"` }, { status: 404 })
    }

    return NextResponse.json(filteredCountries)
  } catch (error) {
    console.error("Error filtering countries by name:", error)
    return NextResponse.json({ error: "Failed to filter countries by name" }, { status: 500 })
  }
}

