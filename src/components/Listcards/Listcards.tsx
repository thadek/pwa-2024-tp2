import { useState, useEffect } from 'react'
import { useChampions } from '../../Hooks/useChampions';
import { Champion } from '../../Types/Champion';
import Card from '../Card/Card';
import { Loading } from '../../Pages/Loading/Loading';


const  Listcards=() => {

  const { getChampions} = useChampions();

  const [champions, setChampions] = useState<Champion[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getC = async () => {
      const champions = await getChampions();
      setChampions(champions);
      setIsLoading(false);
    }
    getC();
  }, [])

  if(isLoading) return <Loading text='Se estan cargando los campeones..'/>;

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