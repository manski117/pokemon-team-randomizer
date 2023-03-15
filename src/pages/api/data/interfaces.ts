export const roles = [
    'Fast Attacker',
    'Setup Sweeper',
    'Fast Support',
    'Bulky Support',
    'Fast Bulky Setup',
    'Bulky Attacker',
    'AV Pivot',
    'Wallbreaker',
    'Tera Blast user',
    'Bulky Setup',
  ];
  
  export interface Team {
      [index: string]: null | BattlePokemon;
      1: null | BattlePokemon;
      2: null | BattlePokemon;
      3: null | BattlePokemon;
      4: null | BattlePokemon;
      5: null | BattlePokemon;
      6: null | BattlePokemon;
  }

  export interface EVspread {
    HP?: number,
    Atk?: number,
    Def?: number,
    SpA?: number,
    SpD?: number,
    Spe?: number
  }

  export interface LockMatrix {
    [index: number]: boolean;
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
    6: boolean;
}
  
  
  export interface PokeSets {
    [speciesid: string]: {
      level: number;
      sets: {
        role: string;
        movepool: string[];
        teraTypes?: string[];
      }[];
    };
  }
  
  //final format before export text
  export interface BattleReady {
    species: string;
    item?: string | null;
    ability: string;
    teraType?: string | null;
    evSpread?: EVspread | null;
    nature?: string | null;
    moves: string[];
  }
  
  //master pokedex interface
  export interface SpeciesData {
    num: number;
    name: string;
    baseSpecies?: string;
    baseForme?: string;
    forme?: string;
    types: string[];
    genderRatio?: { M: number; F: number } | 'M' | 'F' | 'N';
    gender?: 'M' | 'F' | 'N';
    baseStats: {
      hp: number;
      atk: number;
      def: number;
      spa: number;
      spd: number;
      spe: number;
    };
    maxHP?: number;
    abilities:
      | { 0: string }
      | { 0: string; H: string }
      | { 0: string; 1: string; H: string }
      | { 0: string; H: string; S: string }
      | { 0: string; 1: string; H: string; S: string };
    heightm: number;
    weightkg: number;
    color: string;
    prevo?: string;
    evoType?: string;
    evoCondition?: string;
    evoItem?: string;
    evoMove?: string;
    evoLevel?: number;
    evoRegion?: string;
    tags?: string[];
    evos?: string[];
    eggGroups: string[];
    requiredMove?: string;
    gen?: number;
    canHatch?: boolean;
    requiredAbility?: string;
    battleOnly?: string | string[];
    changesFrom?: string;
    requiredItem?: string;
    requiredItems?: string[];
    otherFormes?: string[];
    cosmeticFormes?: string[];
    formeOrder?: string[];
    canGigantamax?: string;
    cannotDynamax?: boolean;
  }
  
  export interface NatureData {
    name: string;
    plus?: string;
    minus?: string;
  }
  
  export class BattlePokemon {
    species: string;
    ability: string;
    moves: string[];
    nature: string;
    evSpread?: EVspread;
    item?: string;
    teraType?: string;
    level?: number;
  
    constructor(species: string,  ability: string, moves: string[], nature: string, evSpread?: EVspread, item?: string, teraType?: string, level?: number) {
      this.species = species;
      this.ability = ability;
      this.moves = moves;
      this.evSpread = evSpread;
      this.item = item;
      this.nature = nature;
      this.teraType = teraType;
      this.level = level;
    }
  }
  
  // const charizard = new BattlePokemon('Charizard', 84, ['Earthquake', 'Flamethrower', 'Focus Blast'], 'Charizardite');
  
  //charizard.number = 100;
  