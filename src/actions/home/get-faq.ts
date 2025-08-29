"use server";

import data from "../../data/faq.json";

export async function getFAQ() {
  return data;
}