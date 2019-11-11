const allIds: string[] = [];

export function generateIdWithPrefix (prefix:string): string {
	const timestamp = new Date().getTime();
	const rand = getRandomInt(1,9999);
	const uniqueId = prefix.toString() + timestamp.toString() + rand.toString();
	if (idNotUnique(uniqueId)) {
		// try again
		return generateIdWithPrefix(prefix);
	}
	allIds.push(uniqueId);
	return uniqueId;
}

function idNotUnique (id:string): boolean {
	return allIds.includes(id);
}

function getRandomInt (min:number, max:number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}