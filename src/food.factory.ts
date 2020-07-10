class Food {
	name: string;
	constructor(name: string){
		this.name = `Dish: ${name}`;
	}
}

export class FoodFactory {

	create = (name:string): Food => {
		return new Food(name)
	}
}

