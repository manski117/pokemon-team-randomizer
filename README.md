# Pokmeon Team Randomizer

This is a pokemon team randomizer. It is designed to generate a random team of gen9 legal pokemon and allow the user to export this team to [showdown](https://pokemonshowdown.com/).

Currently it is only designed to work with generation 9 (Scarlet and Violet games). Eventually more generations and features will be added.

Updated the readme from a new repo. Does the change show up on the github?

# TODO: 
## Create team slot components
- **DONE**  ~~make sure each slot can randomize individually~~
- **DONE** make sure they are aware of what the other pokemon will be
- **DONE** send pokemon back to root state for export
- regex to sanitize hostile escape characters
- **DONE** ~~layout and styling~~

## Add Styling 
- **DONE** pokemon images (api call?) 
    implemented via pokemon api. Not annimated gifs but they look cool and most importantly, they work! 

- design layout and colors *current task 6/17*

- **DONE** add typing display 
- responsive design

- edit styles so that modal is bigger




## Export to modal
- make modal appear with text on button press. 
    **DONE** line 588 is where the current export line should be sent to when "export" is clicked
    **DONE** modal should be able to close
    **DONE** make sure that modifying a team slot is reflected in modal export


## Tests to write:
- make sure no pokemon have same species
- make sure no same item
- make sure no combined stat total over 510
- make sure no individual stat over 252
- don't allow hostile html injection into inputs
- make sure pokeObjRecieved updates accurately

## Features left TODO: 
 - **DONE** force monotype 
 - **DONE** debug: Shuffle button is counting down without being turned on 


<!-- BELOW HERE IS STUFF TO DO TO IMPROVE MVP -->


### Planned Future Features:
- filter by popularity
- abilities
- natures (ability to randomize natures, natures match role, etc.)
- stats
- doubles logic
- other generations
- tiers
- auto-populate / auto complete inputs
- check validity

## Program team-crafting logic
- items based on pkmn team role

#### Bugs to fix: 
 - Arceus of a certain type MUST appear with the plate of that corresponding type.

