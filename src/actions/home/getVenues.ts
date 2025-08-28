"use server";

import data from "../../data/test.json";

export async function getVenues() {
  return data;
}