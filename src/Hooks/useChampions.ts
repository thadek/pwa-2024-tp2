export const useChampions = () => {

  const riotBasicURL = import.meta.env.VITE_RIOT_URL_DDRAGON;
  const ddragonVersionURL = import.meta.env.VITE_RIOT_URL_DDRAGON_VER;

  async function getChampion(champion: string) {
    try {
      const res = await fetch(`${ddragonVersionURL}/data/es_MX/champion/${champion}.json`)
      if (!res.ok) {
        throw new Error("Error al cargar los datos del campeón")
      }
      const data = await res.json()
      
      //Agregar la propiedad randomSkin al objeto del campeón
      data.data[champion].randomSkin = getRandomChampSkin(data.data[champion].skins)
    
      return data.data[champion]
    } catch (err: any) {
      console.log(err)
      return { error: err.message }
    }

  }


 


  async function getChampions() {
    try {
      const res = await fetch(`${ddragonVersionURL}/data/es_MX/championFull.json`)
      if (!res.ok) {
        throw new Error("Error al cargar los datos del campeón")
      }
      const data = await res.json()

      
      return data.data
    } catch (err: any) {
      return { error: err.message }
    }

  }



const getRandomChampSkin = (skins: any) => {

  const random = Math.floor(Math.random() * skins.length);
  return skins[random].num;

}


   function getChampionImgsURL(champion: string, skin = 0) {
    return {
      skin: `${riotBasicURL}/img/champion/splash/${champion}_${skin}.jpg`,
      centered: `${riotBasicURL}/img/champion/centered/${champion}_${skin}.jpg`,
      loading: `${riotBasicURL}/img/champion/loading/${champion}_${skin}.jpg`,
      tile: `${ddragonVersionURL}/img/champion/tiles/${champion}_${skin}.jpg`,
      icon: `${ddragonVersionURL}/img/champion/${champion}.png`,
      
    }
  }

  const getSpellImgURL = (spell: string) => `${ddragonVersionURL}/img/spell/${spell}.png`;
    
  

  return {
    getChampion, getChampions, getChampionImgsURL,getSpellImgURL,getRandomChampSkin
  }

}    