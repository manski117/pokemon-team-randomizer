import React from "react";
import { useState } from "react";
import { StatContext } from "./TeamSlot";

export default function StatInput({stat, statValue, slotNum}: any){
    const {tempPokeObj, setTempPokeObj} = React.useContext(StatContext);

    React.useEffect(() => {
        //this code will run whenever the "locked" state of this team slot changes
    }, [tempPokeObj]);

        //make sure number is longer
    function setInitialInput(){
        let slotID = 'slot' + slotNum;
        let thisSlot =  document.getElementById(`${slotID}`);
        //either put a blank or the name as the default value
        let evNumber: string = statValue ? statValue : 0;
        ((thisSlot as HTMLDivElement).querySelector(`#stat-${stat}-${slotNum}`) as HTMLInputElement).value = evNumber; 
    }

    function updateStatState(newStatValue: any){

        //create a temporary deep copy of our obj
        let pokeObjCopy: any = JSON.parse(JSON.stringify(tempPokeObj));
        pokeObjCopy.evSpread[`${stat}`] = parseInt(newStatValue);
        setTempPokeObj(pokeObjCopy);
    }

    
    function handleChange(event: any){
        // console.log(event.target.value);
        updateStatState(event.target.value);
        // setStatNum(event.target.value);
    }

    return (
        <div className="form-control">
            <label className="input-group input-group-xs ml-3">
                <span>{stat}</span>
                <input value={tempPokeObj ? tempPokeObj?.evSpread[`${stat}`] : 0} type="number" min={0} max={252} placeholder="0" className="input input-bordered input-xs w-14"  id={`stat-${stat}-${slotNum}`} onChange={handleChange} />
            </label>
        </div>
      );
}





    //make state from prop
    
    //allow state to be changed

    //validate number

    //make sure number is longer
    // function setInitialInput(){
    //     let slotID = 'slot' + slotNum;
    //     let thisSlot =  document.getElementById(`${slotID}`);
    //     //either put a blank or the name as the default value
    //     let evNumber: string = statValue ? statValue : 0;
    //     ((thisSlot as HTMLDivElement).querySelector(`#stat-${stat}-${slotNum}`) as HTMLInputElement).setAttribute('value', evNumber); 
    // }


    /* const prevPropsRef = React.useRef(); 
    React.useEffect(() => {
        //this will check on every component update to see if props have changed.
        //this will update the pokeObjRecieved state if it detects a change
        // console.log('this should run whenever this TeamSlot component updates...does it?');
        if (statValue !== prevPropsRef.current) {
            if (statValue){
                setStatNum(statValue);
                console.log('THIS SHOULD ONLY PRINT WHEN A NEW MON IS GENERATED!!!!')
            } else{
                console.log('still no numbers eh?')
            }
        } else{
            console.log('looks like no change occured to the Ref')
        }
    }); 
    
    
    
    
        function resetValue(){
        let slotID = 'slot' + slotNum;
        let thisSlot =  document.getElementById(`${slotID}`);
        let currentValue = ((thisSlot as HTMLDivElement).querySelector(`#stat-${stat}-${slotNum}`) as HTMLInputElement).value;
        console.log('fixin to compare:', currentValue, statValue);
    }
    
    
    
    */




