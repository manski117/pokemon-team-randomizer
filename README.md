# Pokmeon Team Randomizer

This is a pokemon team randomizer. It is designed to generate a random team of gen9 legal pokemon and allow the user to export this team to [showdown](https://pokemonshowdown.com/).

Currently it is only designed to work with generation 9 (Scarlet and Violet games). Eventually more generations and features will be added.

Updated the readme from a new repo. Does the change show up on the github?

# TODO: 
## Create team slot components
- **DONE**  ~~make sure each slot can randomize individually~~
- make sure they are aware of what the other pokemon will be
- send pokemon back to root state for export
- regex to sanitize hostile escape characters
- **DONE** ~~layout and styling~~

## Add Styling
- yeah, lets get them images
- pokemon images (api call?)
- responsive design

## Program team-crafting logic
- items
- lock button

## Export to modal
- make modal appear with text on button press.


## TODO: Debug/Fix:
- make sure locked pkmn are added to array before randomizing the rest.

## Tests to write:
- make sure no pokemon have same species
- make sure no same item
- make sure no combined stat total over 510
- make sure no individual stat over 252
- don't allow hostile html injection into inputs
- make sure pokeObjRecieved updates accurately

## Planned Future Features:
- by type
- abilities
- natures
- stats
- doubles logic
- other generations
- tiers
- edit moves, abilities, items, stats
- auto-populate / auto complete inputs
- check validity


