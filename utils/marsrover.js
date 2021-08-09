class MarsRover {
	constructor(position, direction) {
		this.direction = direction;
		this.x = position[0];
		this.y = position[1];
	}

	turn(direction) {
        if (direction === "NORTH"){
            this.direction = direction === "R" ? "EAST" : "WEST"
        } else if (direction === "EAST"){
            this.direction = direction === "R" ? "SOUTH" : "NORTH"
        } else if (direction === "SOUTH"){
            this.direction = direction === "R" ? "WEST" : "EAST"
        }else if (direction === "WEST"){
            this.direction = direction === "R" ? "NORTH" : "SOUTH"
        }
	}

	move(command) {
		if (command === "F") {
			if (this.direction === "NORTH" || this.direction === "SOUTH") {
				this.x += 1;
			} else if (this.direction === "EAST" || this.direction === "WEST") {
				this.y += 1;
			}
		} else if (command === "B") {
			if (this.direction === "NORTH" || this.direction === "SOUTH") {
				this.x -= 1;
			} else if (this.direction === "EAST" || this.direction === "WEST") {
				this.y -= 1;
			}
		}
	}

	translate(commands) {
		let command = commands.toUpperCase().split(""), x;
		for (x in command) {
			if (command[x] === "R" || command[x] === "L") {
				this.turn(this.direction);
			} else if(command[x] === "F" || command[x] === "B") {
				this.move(command[x]);
			} else{
                return "Wrong commands"
            }
		}
		return `[${this.x}, ${this.y}], ${this.direction}`;
	}
}

const mars = new MarsRover([4, 2], "EAST");

console.log(mars.translate("FLFFFRFLB"));
