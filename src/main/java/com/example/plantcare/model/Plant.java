package com.example.plantcare.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String species;
    private String location;
    private int wateringFrequency;

    private String sunlightRequirement = "Medium";
    private String soilType = "Loamy";
    private boolean isIndoorPlant = true;


    public Plant() {
    }

    private Plant(PlantBuilder builder) {
        this.name = builder.name;
        this.species = builder.species;
        this.location = builder.location;
        this.wateringFrequency = builder.wateringFrequency;
        this.sunlightRequirement = builder.sunlightRequirement;
        this.soilType = builder.soilType;
        this.isIndoorPlant = builder.isIndoorPlant;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getSpecies() {
        return species;
    }

    public String getLocation() {
        return location;
    }

    public int getWateringFrequency() {
        return wateringFrequency;
    }

    public String getSunlightRequirement() {
        return sunlightRequirement;
    }

    public String getSoilType() {
        return soilType;
    }

    public boolean isIndoorPlant() {
        return isIndoorPlant;
    }

    public static class PlantBuilder {

        private final String name;
        private final String species;
        private final String location;
        private final int wateringFrequency;

        // Optional
        private String sunlightRequirement = "Medium";
        private String soilType = "Loamy";
        private boolean isIndoorPlant = true;

        public PlantBuilder(String name, String species, String location, int wateringFrequency) {
            if (name == null || species == null || location == null || wateringFrequency <= 0) {
                throw new IllegalArgumentException("Name, species, location, and watering frequency are required and cannot be null or zero.");
            }
            this.name = name;
            this.species = species;
            this.location = location;
            this.wateringFrequency = wateringFrequency;
        }

        // Optional field setters (with chaining)
        public PlantBuilder withSunlightRequirement(String sunlightRequirement) {
            this.sunlightRequirement = sunlightRequirement;
            return this;
        }

        public PlantBuilder withSoilType(String soilType) {
            this.soilType = soilType;
            return this;
        }

        public PlantBuilder withIndoorPlant(boolean isIndoorPlant) {
            this.isIndoorPlant = isIndoorPlant;
            return this;
        }

        public Plant build() {
            return new Plant(this);
        }
    }
}
