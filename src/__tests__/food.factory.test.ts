import { FoodFactory, FoodItem, FoodType, SizeType } from "../food.factory";

test("Can create a food item", () => {
  const foodFactory = new FoodFactory();
  const foodItem = foodFactory.createFood(
    "Food name",
    FoodType.Dish,
    SizeType.Small
  );
  expect(foodItem instanceof FoodItem).toBeTruthy;
});
