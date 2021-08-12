import { directory, Fig, mapDirection } from "../src/rover/directory.js";

class Rover {
	constructor(position, direction) {
		this.direction = direction;
		this.x = position[0];
		this.y = position[1];
		this.directory = Object.keys(directory).length;
	}
	turnLeft() {
		this.direction = (this.direction + this.directory - Fig) % this.directory;
	}

	turnRight() {
		this.direction = (this.direction + this.directory + Fig) % this.directory;
	}

	move(command) {
		if (command === "F") {
			if (this.direction === 0 || this.direction === 2) {
				this.x += Fig;
			} else if (this.direction === 1 || this.direction === 3) {
				this.y += Fig;
			}
		} else if (command === "B") {
			if (this.direction === 0 || this.direction === 2) {
				this.x -= Fig;
			} else if (this.direction === 1 || this.direction === 3) {
				this.y -= Fig;
			}
		}
	}

	translate(commands) {
		let command = commands.toUpperCase().split(""),
			x;
		for (x in command) {
			if (command[x] === "R") {
				this.turnRight();
			} else if (command[x] === "L") {
				this.turnLeft();
			} else if (command[x] === "F" || command[x] === "B") {
				this.move(command[x]);
			} else {
				return "Wrong commands";
			}
		}
		return `[${this.x}, ${this.y}], ${mapDirection(this.direction)}`;
	}
}

export default Rover;
