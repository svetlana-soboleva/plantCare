import { PiPlant } from "react-icons/pi";


interface AddPlantProps {
    name: string;
    setName: (name: string) => void;
    species: string;
    setSpecies: (species: string) => void;
    location: string;
    setLocation: (location: string) => void;
    wateringFrequency: number;
    setWateringFrequency: (wateringFrequency: number) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AddPlant: React.FC<AddPlantProps> = ({
    name,
    setName,
    species,
    setSpecies,
    location,
    setLocation,
    wateringFrequency,
    setWateringFrequency,
    handleSubmit,
}) =>  {

    
    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-xl italic font-bold text-indigo-400">Add a new plant</h2>
            <form className="flex flex-col gap-10 items-center" onSubmit={handleSubmit}>
                <div className="flex flex-row gap-4 items-center">
                    <PiPlant/>
                    <label className="flex flex-col text-indigo-700 font-bold">
                        Plant Name:

                        <input required value={name}
                               onChange={(e) => setName(e.target.value)}
                               type="text" name="query" placeholder="Monstera"/>
                    </label>
                </div>

                <div className="flex flex-row gap-4 items-center">
                    <PiPlant/>
                    <label className="flex flex-col text-indigo-700 font-bold">
                        Plant species:
                        <input
                            type="text"
                            value={species}
                            onChange={(e) => setSpecies(e.target.value)}
                            placeholder="Nephrolepis exaltata"
                            required/>
                    </label>
                </div>


                <div className="flex flex-row gap-4 items-center">
                    <PiPlant/>
                    <label className="flex flex-col text-indigo-700 font-bold">
                        Home location:
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Kitchen"
                            required/>
                    </label>

                </div>

                <div className="flex flex-row gap-4 items-center">
                    <PiPlant/>
                    <label className="flex flex-col text-indigo-700 font-bold">
                        Water frequency (days):
                        <input
                            type="number"
                            value={wateringFrequency}
                            onChange={(e) => setWateringFrequency(Number(e.target.value))}
                            required/>
                    </label>
                </div>

                <button
                    type="submit"
                    className=" bg-green-500 w-20 h-20 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddPlant

