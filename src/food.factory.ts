export class FoodItem {
  name: string;
  type: FoodType;
  unit: SizeType;
  getInfo = (): string => {
    return `Name: ${this.name}, Type: ${this.type}, Unit: ${this.unit}`;
  };
  constructor(name: string, type: FoodType, unit: SizeType) {
    this.name = name;
    this.type = type;
    this.unit = unit;
  }
}

export enum SizeType {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Family = "Family",
}

export enum FoodType {
  Dish = "Dish",
  Beverage = "Beverage",
  Dessert = "Dessert",
  Dressing = "Dressing",
}

export class FoodFactory {
  createFood = (name: string, type: FoodType, size: SizeType): FoodItem => {
    return new FoodItem(name, type, size);
  };
}
