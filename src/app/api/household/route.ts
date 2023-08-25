import cities from "@/app/api/household/cities.json";
import streets from "@/app/api/household/streets.json";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export function GET(req: NextApiRequest, res: NextApiResponse) {
  const cityIndex = Math.floor(Math.random() * cities.length);
  const streetIndex = Math.floor(Math.random() * streets.length);
  const city = cities[cityIndex];
  const street = streets[streetIndex];
  return NextResponse.json({
    city,
    address: `${street} ${Math.floor(Math.random() * 100)}`,
  });
}
