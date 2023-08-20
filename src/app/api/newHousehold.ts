import cities from "@/app/api/cities.json";
import streets from "@/app/api/streets.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  const cityIndex = Math.floor(Math.random() * cities.length);
  const streetIndex = Math.floor(Math.random() * streets.length);
  const city = cities[cityIndex];
  const street = streets[streetIndex];
  res.status(200).json({ city: city, street: street });
}
