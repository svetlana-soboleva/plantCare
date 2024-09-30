import Header from "./components/header.tsx"
import PlantList from "./components/PlantList.tsx";
import AddPlant from "./components/AddPlant.tsx";

function App() {


  return (
    <>
        <Header/>
        <div className="flex flex-row justify-center gap-20 mt-20">
            <AddPlant/>
            <PlantList/>
        </div>


    </>
  )
}

export default App
