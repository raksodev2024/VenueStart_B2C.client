"use server";

import data from "../../data/contact.json";

export async function getContact() {
  return data;
}