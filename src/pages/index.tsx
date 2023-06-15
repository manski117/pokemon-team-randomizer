import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

//import functions
import { getRandomPokemon } from "./api/functions/random";
import { fetchPokemonImageByNum } from "./api/functions/imageFetching";
//import data
import { RandomSetsSV } from "./api/data/randomSetsSV";
import { Pokedex } from "./api/data/pokedex";
//interfaces
import {
  BattlePokemon,
  PokeSets,
  Team,
  LockMatrix,
  EVspread,
} from "./api/data/interfaces";

//components
import TeamSlot from "./components/TeamSlot";

//TODO TOMORROW:
/*
Main issue X: My edits in Team Slot components work just fine and are saved on the tempObj in their state.
The problem is that I'm trying to get those changes to show up on my export
Way I'm trying to solve this issueY: setState is asynch so I can only update the team state once the 
data from ALL components has been passed to this one. I'm currently putting them in a little container that 
is called stagedTeam. The main problem is that for some reason, even though stagedTeam is being changed,
those changes are somehow gone when they get to the updateTeam call.
*/

const Home: NextPage = () => {
  const [teamData, setTeamData] = React.useState<string>("");
  const [lockedSlots, setLockedSlots] = React.useState<LockMatrix>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const [team, setTeam] = React.useState<Team>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  });
  //use for signal to update teamslot
  const [signalToUpdateTeamSlot, setSignalToUpdateTeamSlot] = React.useState(
    Date.now()
  );
  const [signalToConfirmExport, setSignalToConfirmExport] = React.useState(
    Date.now()
  );
  const [rollsLeft, setRollsLeft] = React.useState(3);
  const [limitRolls, setLimitRolls] = React.useState(false);
  const [monotype, setMonotype] = React.useState<string>('all');


  let stagedTeam = { ...team };

  React.useEffect(() => {
    // console.log('the current ROOT state:', team, lockedSlots);
  }, [team, lockedSlots]);

  React.useEffect(() => {
    //whenever there is ANY change to the 'team' state, the text-version of it (teamData) will automatically update 
    let exportTxt: string = stringifyTeam(team);
    // console.log(team);
    setTeamData(exportTxt);
  }, [team]);

  React.useEffect(() => {
    //Call initialTeam method 
    generateRandomMonFirstBatch();
    //Pass an empty array as a dependency to prevent useEffect from running again
  }, [])

  function toggleLockSlotN(n: number) {
    let newLockedData: LockMatrix = { ...lockedSlots };
    newLockedData[n] = !lockedSlots[n]; //easily swap between true/false

    setLockedSlots(newLockedData);
    console.log(lockedSlots);
  }

  function toggleLimitRolls(){
    setLimitRolls(!limitRolls);
    setRollsLeft(3);
  }

  function subtractRoll(){
    let rollsRemaining: number;
    if (!limitRolls){
      rollsRemaining = rollsLeft;
    } else{
      rollsRemaining = rollsLeft-1;
    }
    setRollsLeft(rollsRemaining);
  }

  function sendNewDataToRoot(
    updatedBattlePokemonObject: BattlePokemon,
    i: number
  ) {
    //called by child components
    //passes finalized pokeObj into root state with index that matches teamSlot number
    // console.log(
    //   "this is where root state would be updated:",
    //   i,
    //   updatedBattlePokemonObject
    // );
    stagedTeam[i] = updatedBattlePokemonObject;

    let newTeamState = { ...team };
    newTeamState[i] = updatedBattlePokemonObject;
    //update team state ONCE.
    //This if-statement makes it so that setTeam does not trigger until all components have had a chance to update the stagedTeam array
    if (i > 1) {
      // console.log(
      //   "this should only trigger ONCE when the last team slot is passed into stagedTeam"
      // );
      setTeam(stagedTeam);
    }

    // console.log("compare these:", team, stagedTeam);
  }

  ///lets just try editing main team obj directly.


  function exportData() {
    setSignalToConfirmExport(Date.now());
  }


  function generateRandomMonFirstBatch() {
    /////randomize mons and set state/////
    //TODO: add lock logic
    //TODO: add locked-in mons to teamSoFar array

      //
      //intake current team
      //set up slots to import those that are locked in
      //make lock button disabled if species is null?
        //or just commit to having that auto-populate and never letting the user have the chance to have an empty slot?
    
    

    //make running list of chosen mons to ensure no duplicate species.
    let teamSoFar: string[] = [];
    let itemsSoFar: string[] = [];

    


    //chose 6 mons, checking running list each time

    //generate first mon





    // TODO: make each conditional based on lockedSlots state
      //for some reason there is a bug with stat assignment when this happens? 
    let slot1: BattlePokemon | null = null;
    if(true){
      do {
        slot1 = getRandomPokemon(RandomSetsSV as any);
        //@ts-ignore
      } while (teamSoFar.includes(slot1.species) || itemsSoFar.includes(slot1.item));
      teamSoFar.push(slot1.species);
      //@ts-ignore
      itemsSoFar.push(slot1.item);
    }
    

    //generate the rest, checking as you go
    //`do-while` lines are meant to serve as a way to prevent the same species from being added twice.
    //Basically, the program is saying "as long as this species name you picked out exists in the team so far, re-do the randomization until you get one that is NOT a species already in there. Only then can you exit loop and move on.

    let slot2: BattlePokemon;
    do {
     
        slot2 = getRandomPokemon(RandomSetsSV as any);
    
      //@ts-ignore
    } while (teamSoFar.includes(slot2.species) || itemsSoFar.includes(slot2.item));
    teamSoFar.push(slot2.species);
    //@ts-ignore
    itemsSoFar.push(slot2.item);

    let slot3: BattlePokemon;
    do {
      slot3 = getRandomPokemon(RandomSetsSV as any);
      //@ts-ignore
    } while (teamSoFar.includes(slot3.species)  || itemsSoFar.includes(slot3.item));
    teamSoFar.push(slot3.species);
    //@ts-ignore
    itemsSoFar.push(slot3.item);

    let slot4: BattlePokemon;
    do {
      slot4 = getRandomPokemon(RandomSetsSV as any);
      //@ts-ignore
    } while (teamSoFar.includes(slot4.species)  || itemsSoFar.includes(slot4.item));
    teamSoFar.push(slot4.species);
    //@ts-ignore
    itemsSoFar.push(slot4.item);

    let slot5: BattlePokemon;
    do {
      slot5 = getRandomPokemon(RandomSetsSV as any);
      //@ts-ignore
    } while (teamSoFar.includes(slot5.species)  || itemsSoFar.includes(slot5.item));
    teamSoFar.push(slot5.species);
    //@ts-ignore
    itemsSoFar.push(slot5.item);

    let slot6: BattlePokemon;
    do {
      slot6 = getRandomPokemon(RandomSetsSV as any);
      //@ts-ignore
    } while (teamSoFar.includes(slot6.species)  || itemsSoFar.includes(slot6.item));
    teamSoFar.push(slot6.species);
    //@ts-ignore
    itemsSoFar.push(slot6.item);

    let newTeamState = {
      1: slot1,
      2: slot2,
      3: slot3,
      4: slot4,
      5: slot5,
      6: slot6,
    };

    //update team state ONCE.
    setTeam((prevState) => {
      return { ...prevState, ...newTeamState };
    });
    setTeamData("you hit the generate button. State should have updated.");
    setSignalToUpdateTeamSlot(Date.now()); //passed as prop to initiate change in child components
    // console.log('teamSoFar:', teamSoFar);
  }

  function generateMoreRandomMons() {
    /////randomize mons and set state/////
    //TODO: Modify the do-while loops to have mono-type capability.
      //SHOULD just inolve slotX.type?
      //proooooooooobably jsut break down and make these into functions....cdz
    let teamCopy = {...team};

    //make running list of chosen mons to ensure no duplicate species.
    let teamSoFar: string[] = buildTeamSpeciesArray(teamCopy);
    let itemsSoFar: string[] = buildTeamItemsArray(teamCopy);
    

    // TODO: make each conditional based on lockedSlots state
      //for some reason there is a bug with stat assignment when this happens? 
    /*
      let slot1: BattlePokemon | null;
    //if slot is locked, don't generate a new mon
    if(lockedSlots[1]){
      slot1 = teamCopy[1];
    }else{
      do {
        slot1 = getRandomPokemon(RandomSetsSV as any);
        //@ts-ignore
      } while (teamSoFar.includes(slot1.species) || itemsSoFar.includes(slot1.item));
    }
    */
    let slot1: BattlePokemon | null = generateRandomSlot(1, teamSoFar, itemsSoFar);
    //@ts-ignore
    teamSoFar.push(slot1.species);
    //@ts-ignore
    itemsSoFar.push(slot1.item);


    function generateRandomSlot(slot: number, teamArr: string[], itemArr: string[]){
      //take in the most recent arrays
      //compare those arrays and execute the do-while loops
      let pokeObj: BattlePokemon | null;
      //if slot is locked, don't generate a new mon
      if(lockedSlots[slot]){
        //@ts-ignore
        pokeObj = teamCopy[slot];
      }else{
        do {
          pokeObj = getRandomPokemon(RandomSetsSV as any);
          //@ts-ignore
          //pokeObj will not be locked-in until all these conditions are met
        } while (teamArr.includes(pokeObj.species) || itemArr.includes(pokeObj.item) || !(checkType(Pokedex, pokeObj.species, monotype)));
      }
      //return the BattlePokemonObject, then it will be parsed by the teamSoFar lines
      return pokeObj;
    }
    
    
    function checkType(dex: any, species: string, type: string){
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




    

    //generate the rest, checking as you go
    //`do-while` lines are meant to serve as a way to prevent the same species from being added twice.
    //Basically, the program is saying "as long as this species name you picked out exists in the team so far, re-do the randomization until you get one that is NOT a species already in there. Only then can you exit loop and move on.

    let slot2: BattlePokemon | null = generateRandomSlot(2, teamSoFar, itemsSoFar);
    //@ts-ignore
    teamSoFar.push(slot2.species);
    //@ts-ignore
    itemsSoFar.push(slot2.item);

    let slot3: BattlePokemon | null = generateRandomSlot(3, teamSoFar, itemsSoFar);
    //@ts-ignore
    teamSoFar.push(slot3.species);
    //@ts-ignore
    itemsSoFar.push(slot3.item);

    let slot4: BattlePokemon | null = generateRandomSlot(4, teamSoFar, itemsSoFar);
    //@ts-ignore
    teamSoFar.push(slot4.species);
    //@ts-ignore
    itemsSoFar.push(slot4.item);

    let slot5: BattlePokemon | null = generateRandomSlot(5, teamSoFar, itemsSoFar);
    //@ts-ignore
    teamSoFar.push(slot5.species);
    //@ts-ignore
    itemsSoFar.push(slot5.item);

    let slot6: BattlePokemon | null = generateRandomSlot(6, teamSoFar, itemsSoFar);
    //@ts-ignore
    teamSoFar.push(slot6.species);
    //@ts-ignore
    itemsSoFar.push(slot6.item);

    let newTeamState = {
      1: slot1,
      2: slot2,
      3: slot3,
      4: slot4,
      5: slot5,
      6: slot6,
    };

    //update team state ONCE.
    setTeam((prevState) => {
      return { ...prevState, ...newTeamState };
    });
    setTeamData("you hit the generate button. State should have updated.");
    setSignalToUpdateTeamSlot(Date.now()); //passed as prop to initiate change in child components
    // console.log('teamSoFar:', teamSoFar);
    subtractRoll();
  }

  function buildTeamSpeciesArray(team:Team): string[]{
    //todo: delete later if not used
    let teamSpeciesSoFar: string[] = [];
    //Loop through all keys in the team object
    for(let i in team){
      //Check if the value is not null and if it is locked
      //@ts-ignore
      if((team[i] !== null) && (lockedSlots[i])){
        //@ts-ignore
        console.log('the species', team[i].species, 'is locked and should not change');
        //Push the species of the pokemon to the teamSpeciesSoFar array
        //@ts-ignore
        teamSpeciesSoFar.push(team[i].species);
      }
    }
    //Return the array of species
    return teamSpeciesSoFar;
  }

  function buildTeamItemsArray(team:Team): string[]{
    //todo: delete later if not used
    let teamItemSoFar: string[] = [];
    //Loop through all keys in the team object
    for(let i in team){
      //Check if the value is not null and if it is locked
      //@ts-ignore
      if((team[i] !== null) && (lockedSlots[i])){
        //@ts-ignore
        console.log('the item', team[i].item, 'is locked and should not change');
        //Push the item of the pokemon to the item array
        //@ts-ignore
        teamItemSoFar.push(team[i].item);
      }
    }
    //Return the array of item
    return teamItemSoFar;
  }

  function createStatString(statBlock: any) {
    //take the EVs from the obj and return them as a string
    let statString = "EVs: ";
    for (let stat in statBlock) {
      //if a stat is not defined, skip it
      if (statBlock[stat]) {
        statString += `${statBlock[stat]} ${stat} / `;
      }
    }
    return statString;
  }

  function stringifyTeam(team: Team): string {
    //stringify poke obj into smogon format
    let exportTxt: string = "";

    for (const i in team) {
      //loop through each pokemon object and parse out its data
      let pokemon = team[i];
      //teraType could by null
      let teraTypeExists: string = pokemon?.teraType
        ? `Tera Type: ${pokemon!.teraType}`
        : "";
      //EV spreads are optional, must be parsed into list
      let evSpread: string = createStatString(pokemon?.evSpread);
      // console.log('EV SPREAD RIGHT HERE:', pokemon?.evSpread)
      //turn moves into hyphenated list
      let moves = pokemon?.moves.map((move) => `-${move}`).join("\n");
      //concatinate all together
      let pokeText = `${pokemon?.species} @ ${pokemon?.item}\nAbility: ${pokemon?.ability}\n${teraTypeExists}\n${evSpread}\n${pokemon?.nature} Nature\n${moves}\n\n`;
      exportTxt = exportTxt.concat("", pokeText);
    }
    // EVs: 84 HP / 84 Atk / 84 Def / 84 SpA / 84 SpD / 84 Spe

    //send the string data to the callback function
    // console.log('trying to send this to textarea:', exportTxt);
    return exportTxt;
  }

  //@ts-ignore
  function updateMonotypeState(event){
    if (event.target.value === "ALL TYPES"){
      setMonotype('all');
    }else{
      setMonotype(event.target.value);
    }
    
  };

  return (
    <>
      <Head>
        <title>Pokemon Team Randomizer</title>
        <meta
          name="generate random teams for showdown import"
          content="Generated by create-t3-app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#93d9d1] to-[#15162c]">
        <h1 className="text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl">
          Pokemon Randomizer
        </h1>
        <h2>{(monotype === 'all') ? `only ${monotype} types should be generated.` : "All types will be generated!"}</h2>
        <nav id="functionality-buttons" className="flex">
          <button
            className="btn"
            onClick={generateMoreRandomMons}
            disabled={rollsLeft < 1 ? true : false}
          >
            Shuffle!
          </button>
          <button className="btn" onClick={toggleLimitRolls}>
            {limitRolls ? `Rolls Remaining: ${rollsLeft}` : `Rolls Remaining: INF (but also ${rollsLeft})`}
          </button>
          <button className="btn" onClick={exportData}>
            Export
          </button>
          <select className="select select-bordered w-full max-w-xs" onChange={updateMonotypeState}>
            <option disabled selected>
              Force Monotype?
            </option>
            <option>ALL TYPES</option>
            <option>Bug</option>
            <option>Dark</option>
            <option>Dragon</option>
            <option>Electric</option>
            <option>Fairy</option>
            <option>Fighting</option>
            <option>Fire</option>
            <option>Flying</option>
            <option>Ghost</option>
            <option>Grass</option>
            <option>Ground</option>
            <option>Ice</option>
            <option>Poison</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Steel</option>
            <option>Water</option>
          </select>
        </nav>;
        

        <div id="team-gui" className="flex flex-wrap">
          <TeamSlot
            slotNum={1}
            pokeObj={team[1] ? team[1] : null}
            toggleLock={toggleLockSlotN}
            signalToUpdate={signalToUpdateTeamSlot}
            signalToExport={signalToConfirmExport}
            exportFinal={sendNewDataToRoot}
          />
          <TeamSlot
            slotNum={2}
            pokeObj={team[2] ? team[2] : null}
            toggleLock={toggleLockSlotN}
            signalToUpdate={signalToUpdateTeamSlot}
            signalToExport={signalToConfirmExport}
            exportFinal={sendNewDataToRoot}
          />
          <TeamSlot
            slotNum={3}
            pokeObj={team[3] ? team[3] : null}
            toggleLock={toggleLockSlotN}
            signalToUpdate={signalToUpdateTeamSlot}
            signalToExport={signalToConfirmExport}
            exportFinal={sendNewDataToRoot}
          />
          <TeamSlot
            slotNum={4}
            pokeObj={team[4] ? team[4] : null}
            toggleLock={toggleLockSlotN}
            signalToUpdate={signalToUpdateTeamSlot}
            signalToExport={signalToConfirmExport}
            exportFinal={sendNewDataToRoot}
          />
          <TeamSlot
            slotNum={5}
            pokeObj={team[5] ? team[5] : null}
            toggleLock={toggleLockSlotN}
            signalToUpdate={signalToUpdateTeamSlot}
            signalToExport={signalToConfirmExport}
            exportFinal={sendNewDataToRoot}
          />
          <TeamSlot
            slotNum={6}
            pokeObj={team[6] ? team[6] : null}
            toggleLock={toggleLockSlotN}
            signalToUpdate={signalToUpdateTeamSlot}
            signalToExport={signalToConfirmExport}
            exportFinal={sendNewDataToRoot}
          />
        </div>

        <label htmlFor="my-modal" className="btn">
          Export Team
        </label>

        {/* Place nothing below here except for the modal!!! */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        {/* TODO: put the exported team txt here! */}
        <div className="modal">
          <div className="modal-box">
            <div id="todo-this-will-eventually-go-in-modal" className="w-4/5">
                <textarea
                  name="export"
                  id="export"
                  className="h-80 w-full"
                  value={teamData}
                  onChange={generateRandomMonFirstBatch}
                ></textarea>
                
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
