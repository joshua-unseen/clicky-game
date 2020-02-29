# clicky-game
A react.js memory game

## Frameworks
The game is built with React using Bootstrap styling. State keeps track of scoring and controls some animations.  The jdenticon package is responsible for creating and updating the icons.

## Playing the game
Click tiles to score points. You lose if you click the same tile twice.  You win if you click all 12 tiles.

## Dev notes
Simple win logic implemented.  Dynamic icon update sorted (no 2 sessions will have the same icons.)  State is implemented for win/loss tracking, which will wait for a future update.
