const hamburger = {
  hambSize: {big: {price: 10, calories: 40}, small: {price: 5, calories: 20}},
  ingredients: {cheese: {price: 1, calories: 20}, salad: {price: 2, calories: 5}, potato: {price: 1.5, calories: 10}},
  supplements: {spices: {price: 1.5, calories: 0}, mayonnaise: {price: 2, calories: 5}}
};

class Hamburger {
  constructor() {
    this.price = 0;
    this.calories = 0
  }

  chooseHambSize(size) {
    this.price += size.price;
    this.calories += size.price
  };

  addIngredients(ingred) {
    if (Array.isArray(ingred)) {
      for (let el of ingred) {
        this.price += el.price;
        this.calories += el.calories
      }
    }
    else {
      this.price += ingred.price;
      this.calories += ingred.calories
    }
  };

  addSupplements(supp) {
    if (Array.isArray(supp)) {
      for (let el of supp) {
        this.price += el.price;
        this.calories += el.calories
      }
    }
    else {
      this.price += supp.price;
      this.calories += supp.calories
    }
  };

  finalPrice() {
    return this.price;
  };

  finalCalories() {
    return this.calories;
  };
};

const burger = new Hamburger();

burger.chooseHambSize(hamburger.hambSize.big);
burger.addIngredients([hamburger.ingredients.cheese, hamburger.ingredients.salad]);
burger.addSupplements(hamburger.supplements.spices);
// burger.finalPrice();
// burger.finalCalories();
console.log(burger.finalPrice());
console.log(burger.finalCalories());









