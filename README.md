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
- yeah, lets get them images
- pokemon images (api call?)
- responsive design


## Program team-crafting logic
- items based on pkmn team role

## Export to modal
- make modal appear with text on button press.


## Tests to write:
- make sure no pokemon have same species
- make sure no same item
- make sure no combined stat total over 510
- make sure no individual stat over 252
- don't allow hostile html injection into inputs
- make sure pokeObjRecieved updates accurately

## Features left TODO: 
 - limited re-rolls
 - force monotype

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


#### Bugs to fix: 
 - Arceus of a certain type MUST appear with the plate of that corresponding type.


