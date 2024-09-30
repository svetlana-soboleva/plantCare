import React, { useEffect, useState } from 'react';
import { Plant } from '../types/Plant.ts';
import PlantService from "../services/PlantService.ts";
import { FcEmptyTrash } from "react-icons/fc";

const PlantList: React.FC = () => {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const plantData = await PlantService.getPlants();
                // @ts-ignore
                setPlants(plantData);
            } catch (error) {
                console.error(error);
            }
        };
         fetchPlants()
    }, []);


    return (
        plants.length === 0 ? (
            <div className="flex flex-col items-center">
                <h1 className="text-gray-500 "> No plants yet</h1>
                <FcEmptyTrash />
            </div>
        ) : (
            <div className="flex flex-col justify-start items-center gap-4">
                <h2 className="text-xl italic font-bold">Plant List</h2>
                <ul className="flex flex-col gap-4">
                    {plants.map((plant) => (
                        <li
                            className="flex flex-row content-start bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
                            key={plant.id}
                        >
                            <img
                                src="/plant.png" // Ensure this path is correct
                                alt={plant.name}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex flex-col gap-2">
                                <div className="text-blue-950 font-bold text-lg">
                                    {plant.name}
                                </div>
                                <div className="opacity-60">
                                    {plant.species}
                                </div>
                                <div className="opacity-60 text-gray-500">
                                    Water me every {plant.wateringFrequency} days
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );

};

export default PlantList;
