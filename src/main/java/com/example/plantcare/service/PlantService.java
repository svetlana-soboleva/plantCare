package com.example.plantcare.service;

import com.example.plantcare.model.Plant;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class PlantService {

    private List<Plant> plants = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong();


    public List<Plant> getAllPlants() {
        return plants;
    }

    public Optional<Plant> getPlantById(Long id) {
        return plants.stream().filter(plant -> plant.getId()
                .equals(id))
                .findFirst();
    }

    public Plant addPlant(Plant plant) {
        Long newId = idCounter.getAndIncrement();
        Plant newPlant = new Plant.PlantBuilder(plant.getName(), plant.getSpecies(), plant.getLocation(), plant.getWateringFrequency())
                .withSunlightRequirement(plant.getSunlightRequirement())
                .withSoilType(plant.getSoilType())
                .withIndoorPlant(plant.isIndoorPlant())
                .build();
        newPlant.setId(newId);
        plants.add(newPlant);
        return newPlant;
    }


    public Optional<Plant> updatePlant(Long id, Plant updatedPlant) {

        Optional<Plant> existingPlant = getPlantById(id);

        existingPlant.ifPresent(plant -> {
            Plant updated = new Plant.PlantBuilder(
                    updatedPlant.getName() != null ? updatedPlant.getName() : plant.getName(),
                    updatedPlant.getSpecies() != null ? updatedPlant.getSpecies() : plant.getSpecies(),
                    updatedPlant.getLocation() != null ? updatedPlant.getLocation() : plant.getLocation(),
                    updatedPlant.getWateringFrequency() > 0 ? updatedPlant.getWateringFrequency() : plant.getWateringFrequency()
            )
                    .withSunlightRequirement(updatedPlant.getSunlightRequirement() != null ? updatedPlant.getSunlightRequirement() : plant.getSunlightRequirement())
                    .withSoilType(updatedPlant.getSoilType() != null ? updatedPlant.getSoilType() : plant.getSoilType())
                    .withIndoorPlant(updatedPlant.isIndoorPlant())
                    .build();

            updated.setId(plant.getId());

            plants.set(plants.indexOf(plant), updated);
        });

        return Optional.ofNullable(updatedPlant);
    }

    public boolean deletePlant(Long id) {
        return plants.removeIf(plant -> plant.getId().equals(id));
    }
}