"use server";

import data from "../../data/why-list-with-us.json";

export async function getWhyListWithUs() {
  return data;
}