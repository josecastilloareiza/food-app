import { FoodFactory } from "./food.factory";

import { SizeType, FoodType } from "./food.factory";

function run() {
  const foodFactory = new FoodFactory();
  const result = [];

  result.push(
    foodFactory.createFood("Red Wine", FoodType.Beverage, SizeType.Small)
  );
  result.push(
    foodFactory.createFood("Tropical Milk", FoodType.Dessert, SizeType.Medium)
  );

  console.warn(result);

  const list = result.map((item) => {
    return item.getInfo();
  });

  console.warn(list.join("\n"));
}

run();
