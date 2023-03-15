import { RandomSetsSV } from '../data/randomSetsSV';
import { PokeSets, BattleReady, BattlePokemon, EVspread } from '../data/interfaces';
import { Pokedex } from '../data/pokedex';
import { Natures } from '../data/natures';

function getRandomKey<T>(obj: T): keyof T {
    return Object.keys(obj as Record<keyof T, any>)[Math.floor(Math.random() * Object.keys(obj as Record<keyof T, any>).length)] as keyof T;
  }

function pick4Moves(arr: string[]){
  //take an array of 4+ moves and randomly select moves into an output array of 4 moves. 

  if (arr.length < 4){
    return arr;
  } else{
    
    //randomize moves and grab 4
    const shuffledArray = arr.sort(() => Math.random() - 0.5);

    
    return shuffledArray.slice(0,4);
  }
}

export function getRandomPokemon(setData: PokeSets): BattlePokemon {
  //this obj contains all battle ready pokemon data
  let monSet: BattleReady = {
    species: '',
    item: null,
    ability: '',
    teraType: null,
    evSpread: null,
    nature: null,
    moves: [],
  }

  //select random key
  const randomSpecies:string = Object.keys(setData)[Math.floor(Math.random() * Object.keys(setData).length)]!;

  //find pokedex data
  const dexData = Pokedex[randomSpecies];

  //get relevant information from that key
  //grab the set array
  let sets = setData[randomSpecies]!.sets;

  //grab a random set from that array
  let randomSet = sets[Math.floor(Math.random() * Object.keys(sets).length)];


  

  //////parse relevant info
  //get name of pokemon
  monSet.species = randomSpecies.charAt(0).toUpperCase() + randomSpecies.slice(1);

  //give item
  monSet.item = 'Leftovers'; //TODO: write program to divi up items based on role

  //assign ability
  //TODO: assign abilities based on roles
  if ((Object.keys(dexData!.abilities).length) > 1 ){
    let randomAbility: string = dexData!.abilities[getRandomKey(dexData!.abilities)];
    monSet.ability = randomAbility;
  } else {
    monSet.ability = dexData!.abilities[0];
  }

  //assign EVs
  //TODO: assing EVs based on roles
  
  monSet.evSpread = {
    HP: 84,
    Atk: 84,
    Def: 84,
    SpA: 84,
    SpD: 84,
    Spe: 84
  }

  //assign Nature
  //TODO: assign nature based on roles
  monSet.nature = Natures['quirky']!.name;
  

  //assign moveset
  //moves are divided by role already, so just pick them randomly
  monSet.moves = pick4Moves(randomSet!.movepool);

  //determine tera type randomly, but only if tera is possible
  if(randomSet!.teraTypes){
    let shuffledTypes: string[] = randomSet!.teraTypes.sort(() => Math.random() - 0.5);
    monSet.teraType = shuffledTypes[0];
  }
  

  //test line
  // console.log("Species:", randomSpecies);
  // console.log("Raw Set:", randomSet);
  // console.log("Abilities:", dexData!.abilities);
  // console.log("Battle Ready Pokemon:", monSet);
  

  //construct battle-ready pokemon class
  const battleMon = new BattlePokemon(`${monSet.species}`, `${monSet.ability}`, monSet.moves, `${monSet.nature}`, monSet.evSpread, `${monSet.item}`, `${monSet.teraType}`);

  return battleMon;
}


