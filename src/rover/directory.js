export const directory = {
	NORTH: 0,
	EAST: 1,
	SOUTH: 2,
	WEST: 3
};

export const Fig = 1;

export function mapDirection(n) {
	if (typeof n == "number") {
		return Object.keys(directory)[n];
	} else if (typeof n === "string") {
		return Object.keys(directory).indexOf(n);
	}
}
