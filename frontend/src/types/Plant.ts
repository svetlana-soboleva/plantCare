export interface Plant {
    id?: number;
    name: string;
    species: string;
    location: string;
    wateringFrequency: number;
    sunlightRequirement?: string;
    soilType?: string;
    isIndoorPlant?: boolean;
}