import React from "react";
import { Pokedex } from "../data/pokedex";

export function checkType(dex: any, species: string, type: string){
    //returns boolean
    //true says proceed
    //false will force re-roll
    if (type === 'all'){
      return true;
    }
    let specName = species.toLowerCase();
    let speciesTypeArr: string[] = dex[specName]?.types;
    console.log(speciesTypeArr, type, species, dex[specName]);
    if (speciesTypeArr.includes(type)){
      return true;
    } else{
      return false;
    }
  }



