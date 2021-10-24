export interface Food {
	name: string;
	calorie: number;
	imageUrl: string;
}

export interface CorbFood extends Food {
	quantity: number;
}
