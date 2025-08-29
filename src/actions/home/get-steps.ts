"use server";

import data from "../../data/steps.json";

export async function getSteps() {
  return data;
}