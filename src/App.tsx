import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useChampions } from './Hooks/useChampions';
import './App.css'
import { ChampionImages, Champion } from './Types/Champion';

function App() {


  const { getChampions, getChampion, getChampionImgsURL } = useChampions();
  //const [count, setCount] = useState(0)

  const [champ, setChamp] = useState<Champion>();
  const [champions, setChampions] = useState<Champion[]>();
  const [selectValue, setSelectValue] = useState<string>("Yasuo");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getC = async () => {
      //Traer todos los campeones
      const champions = await getChampions();
      setChampions(champions);
    }
    getC();
  }, [])

  useEffect(() => {
    const getC = async () => {
      //Traer un campeon
      const champ = await getChampion(selectValue);
      setChamp(champ);
      setIsLoading(false);
    }
    getC();
  }, [selectValue])


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    setSelectValue(e.target.value);

  }



  if(isLoading) return <h1>Cargando...</h1>;


  return (
    <>
      <div >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="">Vite + React</h1>
      <div className="card">
        <select value={selectValue} onChange={handleSelectChange}>
          {champions && Object.keys(champions).map((champ) => {
            return <option key={champ} value={champ}>{champ}</option>
          }
          )}
        </select>
        <h2>{champ?.name}</h2>
        <div className="flex">
          {champ && champ?.skins.map(skin => {
            return <img src={getChampionImgsURL(champ.id, skin.num).loading} className="App-logo" alt="skin" />
          })}
        </div>

       
      </div>
     
    </>
  )
}

export default App
