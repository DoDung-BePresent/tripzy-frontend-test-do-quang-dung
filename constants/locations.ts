import locationsData from "@/data/locations.json";

export const locations = locationsData.locations;

export type Location = (typeof locations)[0];
