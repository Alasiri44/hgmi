import { createClient } from "@sanity/client";

const SANITY_API_TOKEN = import.meta.env.VITE_SANITY_API_TOKEN;
export const client = createClient({
  projectId: "hszx9wpv", 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const writeClient = createClient({
  projectId: "hszx9wpv", 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: SANITY_API_TOKEN,
});