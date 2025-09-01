"use server";

import data from "../../data/how-it-works.json";

export async function getWorks() {
  return data;
}