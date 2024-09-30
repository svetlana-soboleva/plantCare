import { Plant } from "../types/Plant.ts";

const API_URL = "http://localhost:8080/api/plants";

const getPlants = async (): Promise<() => Promise<Plant[]>> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data;
};

const addPlant = async (plant: Plant): Promise<Plant> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plant),
  });
  if (!response.ok) {
    throw new Error("Failed to add");
  }

  return await response.json();
};

export default {
  getPlants,
  addPlant,
};
