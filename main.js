
// PART ONE
var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}
FoodItem.prototype.toString = function () {
    return 'Name : ' + this.name + 
            '\nCalories : ' + this.calories + 
            '\nVegan : ' + this.vegan + 
            '\nGluten Free : ' + this.glutenFree + 
            '\nCitrus Free : ' + this.citrusFree;
}
// ************************FOOD ITEM VARIABLES USED TO BUILD PLATES ORDERS MENUS*****************************************************************************************************************
    // Three FoodItems that go into the Burrito Plate
        var tortilla = new FoodItem('Tortilla', 150, true, false, true);
        var chicken = new FoodItem('Chicken', 200, false, true, true);
        var lettuce = new FoodItem('Lettuce', 30, true, false, false);
    // Three FoodItems that go into the Guac Plate
        var tacoShell = new FoodItem('Taco Shell', 150, true, false, true);
        var groundBeef = new FoodItem('Ground Beef', 250, false, true, true);
        var guacamole = new FoodItem('Guacamole', 150, true, true, true);
    // Three FoodItems that go into the Margarita
        var tequila = new FoodItem('Tequila', 100, true, true, true);
        var margarita_mix = new FoodItem('Margarita Mix', 200, true, true, false);
        var salt = new FoodItem('Salt', 0, true, true, true);

// ***************************DRINK**************************************************************************************************************
// PART TWO
var Drink = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Drink.prototype.toString = function () {
    return 'Name : ' + this.name + 
            '\nDescription : ' + this.description + 
            '\nPrice : ' + this.price + 
            '\nIngredients : ' + this.ingredients;
}
//Instance of Margarita 
var maragrita = new Drink ('Margarita', 'Awesome', 5.00, [tequila, margarita_mix, salt]);

// *****************************PLATE*************************************************************************************************************
var Plate = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Plate.prototype.toString = function () {
    return 'Name : ' + this.name + 
            '\nDescription : ' + this.description + 
            '\nPrice : ' + this.price + 
            '\nIngredients : ' + this.ingredients;
}
    // Plate.prototype.isVegan = function () {
    //     return this.foodItem.vegan;
    // }
    // Plate.prototype.isGlutenFree = function () {
    //     return and(pluck(this.ingredients, 'glutenFree'));
    // }

    // Plate.prototype.isCitrusFree = function () {
    //     console.log("CITRUS? : " + this.foodItem.citrusFree);
    //     return this.foodItem.citrusFree;
    // }

// Instance of Burrito Plate
var burritoPlate = new Plate('Burrito Plate', 'Huge', 6.00, [tortilla, chicken, lettuce]);
// Instance of Guac Plate
var guacPlate = new Plate('Guac Plate', 'Delicious', 6.00, [tacoShell, groundBeef, guacamole]);

// *******************************ORDER**********************************************************************************************************

var Order = function (plates) {
    this.order = plates;
}
Order.prototype.toString = function () {
    return 'Plates : ' + this.plates;
}

// *******************************MENU**********************************************************************************************************

var Menu = function (plates) {
    this.menu = plates;
}
Menu.prototype.toString = function () {
    return 'Menu: ' + this.menu;
}

var menuMex = ([maragrita, burritoPlate, guacPlate]);
// *******************************RESTAURANT**********************************************************************************************************

var Restaurant = function (name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
}
Restaurant.prototype.toString = function () {
    return 'Name : ' + this.name + 
            '\nDescription : ' + this.description + 
            '\nMenu : ' + this.menu;
}

var RioGrande = new Restaurant('Rio Grande', 'Great Place!', menuMex);

// *******************************CUSTOMER*********************************************************************************************************
var Customer = function (dietaryPreference) {
    this.dietaryPreference = dietaryPreference;
}
Customer.prototype.toString = function () {
    return 'Dietary Preference : ' + this.dietaryPreference;
}
// *****************************************************************************************************************************************

console.log(RioGrande.toString());




