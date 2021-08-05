# Mars Rover
## Problem Description
Develop an API that translates commands sent from earth to intrustions that are understood by the rover in the moon.

The rover is given a coordinate once it lands using the arguments(x, y, irection) e.g (4, 2, EAST).

To understand the cordinates, draft a map representation of (4, 2) with the arrow facing east i.e right. Then, follow the command `FLFFFRFLB` and the coordinates will be (6, 4, NORTH). 

NOTE: 
` F ` -> Move forward on current heading
` B ` -> Move backwards on current heading
` L ` -> Rotate left by 90 degrees (but don't move)
` R ` -> Rotate right by 90 degrees (but don't move)

Also, negative coordinates are valid because Mars is a globe.

The rover is given a command string containing multiple commands as input and must return the its current coordinates after the command are executed.

## Solution Description
` F ` = +1
` B ` = -1

` NORTH ` is positive
` EAST ` is positive
` SOUTH ` is negative
` WEST ` is negative

Just like the graph table.

` x ` = `North` & `South`
` y ` = `East` & `West` 

Therefore:
1. 90 degrees left(L) from North is West
2. 90 degrees right(R) from North is East
3. 90 degrees left(L) from South is East
4. 90 degrees right(R) from South is West and vice versa