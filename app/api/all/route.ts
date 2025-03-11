import { NextResponse } from "next/server";
import type { Country } from "@/types/country";
import countriesJSON from "../../../data/countries.json";

const countries: Country[] = countriesJSON as Country[];

export async function GET() {
  try {
    // If countries array is empty, we'd normally fetch from the API
    if (countries.length === 0) {
      // For demo purposes - in a real app, you'd provide the JSON data
      return NextResponse.json(
        { message: "Please provide the countries data" },
        { status: 404 }
      );
    }

    return NextResponse.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    return NextResponse.json(
      { error: "Failed to fetch countries" },
      { status: 500 }
    );
  }
}
