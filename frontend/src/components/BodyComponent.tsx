import { useEffect, useState } from 'react';
import AddPlant from './AddPlant'
import PlantList from './PlantList';
import { Plant } from '../types/Plant';
import PlantService from '../services/PlantService';


export const BodyComponent = () => {

    const [plants, setPlants] = useState<Plant[]>([]);
//isloading
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [location, setLocation] = useState('');
    const [wateringFrequency, setWateringFrequency] = useState<number>(0);


    const fetchPlants = async () => {
        try {
            const plantData = await PlantService.getPlants();
            setPlants(plantData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async () => {
        //event.preventDefault();
        // maybe I need to use insertable or partial to remove id
        const newPlant: Plant = {
            id: 0,
            name,
            species,
            location,
            wateringFrequency,
            sunlightRequirement: "Medium",
            soilType: "Loamy",
            isIndoorPlant: true
        };

        try {
            await PlantService.addPlant(newPlant);
            await fetchPlants()
            setName('');
            setSpecies('');
            setLocation('');
            setWateringFrequency(0);
        } catch (error) {
            console.error('Error adding plant:', error);
        }
    };
    
    useEffect(() => {
         fetchPlants()
    }, []);
    


  return (
    <div className="flex flex-row justify-center gap-20 mt-20">
    <AddPlant
    name={name}
    setName={setName}
    species={species}
    setSpecies={setSpecies}
    location={location}
    setLocation={setLocation}
    wateringFrequency={wateringFrequency}
    setWateringFrequency={setWateringFrequency}
    handleSubmit={handleSubmit}
    />
    <PlantList plants ={plants}/>
</div>
  )
}
