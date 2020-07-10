import { FoodFactory } from './food.factory';



function run (){
	const foodFactory = new FoodFactory();
	const result = []

	result.push(foodFactory.create('Spagettis'));
	result.push(foodFactory.create('Steak'));
	
	console.warn(result);
}

run();
