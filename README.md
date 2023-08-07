# Pokmeon Team Randomizer

This is a pokemon team randomizer. It is designed to generate a random team of gen9 legal pokemon and allow the user to export this team to [showdown](https://pokemonshowdown.com/).

Intended for use by the pokemon competitive community. It's a free tool and I hope to build more soon. Use to your heart's content to challenge yourself by giving you a random team of pokemon to take on Showdown's constructed ladder or play with your friends. 

Currently the app is only designed to work with generation 9 (Scarlet and Violet games). Eventually more generations and features will be added.

## Disclaimer

This was made as a tool for my friends and I to use since we couldn't find an existing randomization tool that we liked for generation 9. This is a passion project that I made for fun and not intended to be used for profit by me or anyone else. I do not own the rights to pokemon, and I am not affiliated with Smogon or Pokemon Showdown.

## Current Features
- Generates a team of 6 random pokemon from pre-constructed competitive movesets.
- Generated teams are always competitively legal by default and ready to go with some very rare exceptions (see bugs).
- Stats and nature are neutral by default but can be easily edited.
- Exporting your team is *extremely easy.* Just press the **Export** button and copy the text into Showdown's team editor.
- **Lock** buttons prevent a team slot from being re-randomized when **Shuffle** button is pressed. So if you really like one pokemon but not the rest, you can keep the ones you like on re-shuffle.
- 'Limit Rolls' button limits the number of times you can re-generate your team before disabling the shuffle button. Try using it to challenge you and your friends to see who can build the best team with limited re-shuffles. Lock down the mons you like and shuffle the ones you don't. I hope this can help you generate a team very quickly, but still one you like.
- Type filter allows you to generate mono-type teams for those looking for a new challenge or a way to spice up custom battles against friends. 
- Items are randomly generated but will always be competitvely useful items. Pokemon generated will always have different items by default. However, check items closely, as this may occasionally result in items that don't make sense or may interact with movesets and abilities in strange ways.
- All moves, items, natures, abilities, and terra types can be edited at any time. However, if a user makes a change, it is the user's responsibility to make sure that change is legal. 

### Bugs (I mean bugs in the code. *Not bug types*)
- Multiple Arceus can end up on a team due to their different types being coded as different species name. For now users can get around this bug by re-shuffling if more than 1 Arceus ends up on a team. Fix coming soon.
- Arceus do not come with plates necessary for their intended type. This can currently be fixed by the user manually changing the item to the [correct plate](https://bulbapedia.bulbagarden.net/wiki/Plate).
- If you find a bug, feel free to report the bug by messaging me on github or [emailing me.](choromanski117@gmail.com)


### Planned Future Features:
- filter by popularity
- abilities
- natures (ability to randomize natures, natures match role, etc.)
- optimized stats
- doubles logic
- filter items
- smart item generation based on pokemon's abilities and role on a team.
- other generations
- filter tiers
- auto-populate / auto complete inputs
- check validity against Smogon and/or VGC rules


