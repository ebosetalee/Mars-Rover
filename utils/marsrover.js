class MarsRover {
	constructor(position, direction) {
		this.position = position;
		this.direction = direction;
		this.x = position[0];
		this.y = position[1];
	}

	turnLeft(direction) {
		switch (direction.toUpperCase()) {
			case "NORTH":
				return (this.direction = "WEST");
			case "WEST":
				return (this.direction = "SOUTH");
			case "SOUTH":
				return (this.direction = "EAST");
			case "EAST":
				return (this.direction = "NORTH");
		}
	}

	turnRight(direction) {
		switch (direction.toUpperCase()) {
			case "NORTH":
				return (this.direction = "EAST");
			case "EAST":
				return (this.direction = "SOUTH");
			case "SOUTH":
				return (this.direction = "WEST");
			case "WEST":
				return (this.direction = "NORTH");
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
		} else {
			return "Wrong command";
		}
	}

	translate(commands) {
		let command = commands.toUpperCase().split(""), x;
		for (x in command) {
			if (command[x] === "R") {
				this.turnRight(this.direction);
			} else if (command[x] === "L") {
				this.turnLeft(this.direction);
			} else {
				this.move(command[x]);
			}
		}
		return `[${this.x}, ${this.y}], ${this.direction}`;
	}
}

const mars = new MarsRover([4, 2], "EAST");

console.log(mars.translate("FLFFFRFLB"));
