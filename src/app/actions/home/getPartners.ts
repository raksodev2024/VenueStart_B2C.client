"use server";

import partners from "../../data/partners.json";

export async function getpartners() {
  return partners;
}