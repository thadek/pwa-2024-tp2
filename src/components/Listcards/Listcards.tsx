import { useContext } from 'react';
import { SearchContext } from '../../context/context';
import { useState, useEffect } from 'react'
import { useChampions } from '../../Hooks/useChampions';
import { Champion } from '../../Types/Champion';
import Card from '../Card/Card';
import { Loading } from '../../Pages/Loading/Loading';


export const roles = {
  Assassin: 'Asesino',
  Fighter: 'Luchador',
  Mage: 'Mago',
  Marksman: 'Tirador',
  Support: 'Apoyo',
  Tank: 'Tanque',
};



const Listcards = () => {

  const { searchValue, roleValue } = useContext(SearchContext);

  const { getChampions } = useChampions();

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

  const filtered = champions && Object.entries(champions)
    .filter(([key, champion]) =>
      (roleValue === '' || champion.tags.includes(roleValue)) &&
      (searchValue === '' || champion.name.toLowerCase().includes(searchValue.toLowerCase()))
    );

  if (isLoading) return <Loading text='Se estan cargando los campeones..' />;

  
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 pt-6  ">
        {champions &&
          filtered!.map(([key, champion]) => {
            return <Card key={key} champ={champion} />
          })

        }

        {filtered!.length === 0 && <div className=" flex justify-center items-center text-center w-screen h-screen  ">
          <h1 className="text-2xl justify text-white">No se encontraron campeones que coincidan con {searchValue} {roleValue? `en la categoría ${roles[roleValue]} `:""}</h1>
          </div>
        
        }
      </div>
    </>
  );
};

export default Listcards