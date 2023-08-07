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
      
      // console.log(pokemonLink, 'inside async function', pokemonNum);

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


export const fetchShowdownGif = (gifName: string) => {
    // console.log('does this link work?', `https://play.pokemonshowdown.com/sprites/ani/${gifName}.gif`);
    return `https://play.pokemonshowdown.com/sprites/ani/${gifName}.gif`;
}


//tests if image loads succssfully using the built in HTMLImageElement API method 'complete'
export function testImage(imageUrl: string): boolean {
    const image = new Image();
    image.src = imageUrl;
  
    return image.complete;
  };

/*
//let's test the tester
export function imageTestTester(){
    let test1 = testImage('https://img.icons8.com/fluency/96/null/pokeball.png');
    let test2 = testImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
    let test3 = testImage('https://play.pokemonshowdown.com/sprites/ani/taurospaldeacombat.gif');
    let test4 = testImage('https://play.pokemonshowdown.com/sprites/ani/pichu.gif');

    console.log('only 3 should fail');
    console.log('test1', test1);
    console.log('test2', test2);
    console.log('test3', test3);
    console.log('test4', test4);
}
*/

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



export const fetchShowdownGif = async (gifName: string): Promise<boolean> => {
    try {
      const gifLink = `https://play.pokemonshowdown.com/sprites/ani/${gifName}.gif`;
      const gifData = await fetch(gifLink);
      const status = gifData.status;
      if (status === 200) {
        console.log('success! image true', gifData);
        return true;
      } else {
        console.log('failure! image false', gifData);
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  };

*/