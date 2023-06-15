const checkURLStatus = async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url);
      const status = response.status;
      if (status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  };

export function fetchPokemonImageByNum(pokemonNum: number){
    
      let pokemonLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNum}.png`;
      const pokemonData = fetch(pokemonLink);
      
      console.log(pokemonLink, 'inside async function', pokemonNum);

      let statusCode: Promise<boolean> = checkURLStatus(pokemonLink);

      //@ts-ignore
      if (statusCode === true){
        return pokemonLink;
        //@ts-ignore
      } else if (statusCode === false){
        pokemonLink = 'https://img.icons8.com/fluency/96/null/pokeball.png';
      }
      return pokemonLink;
      
    
  };


/*
  export const fetchPokemonImageByNum = async (pokemonNum: number): Promise<string> => {
    
    let pokemonLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNum}.png`;
    const pokemonData = await fetch(pokemonLink);
    console.log(pokemonData.url, pokemonData, 'first the url, then the obj');
    let imgURL: string = pokemonData.url;
    console.log(imgURL, 'image url as a string...');
    const data = await pokemonData.json();
    console.log(pokemonLink, 'inside async function', pokemonNum);

    let statusCode = await checkURLStatus(pokemonData.url);

    if (statusCode === true){
      pokemonLink = imgURL;
    } else if (statusCode === false){
      pokemonLink = 'https://img.icons8.com/fluency/96/null/pokeball.png';
    }
    return pokemonLink;
    
  
};

*/