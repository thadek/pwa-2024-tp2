import { useState, useEffect } from 'react'
import { useChampions } from '../../Hooks/useChampions';
import { Champion } from '../../Types/Champion';
import Card from '../Card/Card';

const  Listcards=() => {

  const { getChampions} = useChampions();

  const [champions, setChampions] = useState<Champion[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getC = async () => {
      const champions = await getChampions();
      setChampions(champions);
      setIsLoading(false);
    }
    getC();
  }, [])

  
  if(isLoading) return <h1>Cargando...</h1>;

  return (
    <>

        <div className="flex flex-wrap justify-center gap-4 p-">
        {champions && Object.entries(champions).map(champion =>{
          return <Card key={champion[0]} 
          champ = {champion[1]}
          />
        })}
        </div>
     
    </>
  )
}

export default Listcards