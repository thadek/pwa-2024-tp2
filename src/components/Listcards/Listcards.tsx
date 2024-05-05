import { useContext } from 'react';
import { SearchContext } from '../../context/context';
import { useState, useEffect } from 'react'
import { useChampions } from '../../Hooks/useChampions';
import { Champion } from '../../Types/Champion';
import Card from '../Card/Card';
import { Loading } from '../../Pages/Loading/Loading';


const  Listcards=() => {

  const { searchValue, roleValue } = useContext(SearchContext);

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
        {champions && Object.entries(champions)
          .filter(([key, champion]) => 
            (roleValue === '' || champion.tags.includes(roleValue)) &&
            (searchValue === '' || champion.name.toLowerCase().includes(searchValue.toLowerCase()))
          )
          .map(([key, champion]) => {
            return <Card key={key} champ={champion} />
          })
        }
      </div>
    </>
  );
};

export default Listcards