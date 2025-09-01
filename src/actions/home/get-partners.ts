"use server";

import data from "../../data/partners.json";

export async function getPartners() {
  return data;
}