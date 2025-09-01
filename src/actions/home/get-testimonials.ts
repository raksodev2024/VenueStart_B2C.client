"use server";

import data from "../../data/testimonial.json";

export async function getTestimonials() {
  return data;
}