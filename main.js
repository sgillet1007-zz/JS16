var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}
var Drink = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
var Plate = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
var Order = function (plates) {
    this.plates = plates;
}
var Menu = function (plates) {
    this.plates = plates;
}
var Restaurant = function (name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
}
var Customer = function (dietaryPreference) {
    this.dietaryPreference = dietaryPreference;
}

// PART ONE
FoodItem.prototype.toString = function () {
    var output = 'Name : ' + this.name + '\nCalories : ' + this.calories + '\nVegan : ' + this.vegan + '\nGluten Free : ' + this.glutenFree + '\nCitrus Free????? : ' + this.citrusFree;
    //    console.log(output);
    return output;
}


// PART TWO
Drink.prototype.toString = function () {
    var output = 'Name : ' + this.name + '\nDescription : ' + this.description + '\nPrice : ' + this.price + '\nIngredients : ' + this.ingredients;
    //    console.log(output);
    return output;
}
Plate.prototype.toString = function () {
    var output = 'Name : ' + this.name + '\nDescription : ' + this.description + '\nPrice : ' + this.price + '\nIngredients : ' + this.ingredients;
    //    console.log(output);
    return output;
}

Plate.prototype.isVegan = function () {
    return this.foodItem.vegan;
}

Plate.prototype.isGlutenFree = function () {
    return and(pluck(this.ingredients, 'glutenFree'));
}

Plate.prototype.isCitrusFree = function () {
    console.log("CITRUS? : " + this.foodItem.citrusFree);
    return this.foodItem.citrusFree;
}

Order.prototype.toString = function () {
    var output = '\nPlates : ' + this.plates;
    //    console.log(output);
    return output;
}
Menu.prototype.toString = function () {
    //    var output = '\nMenu : ' + this.plates.map;
    this.plate.map(
        function (plate) {
            return plate.toString();
        });
}
Restaurant.prototype.toString = function () {
    var output = 'Name : ' + this.name + '\nDescription : ' + this.description + '\nMenu : ' + this.menu;
    //    console.log(output);
    return output;
}
Customer.prototype.toString = function () {
    var output = '\nDietary Preference : ' + this.dietaryPreference;
    //    console.log(output);
    return output;
}

var tortilla = new FoodItem('Tortilla', '150', true, false, true);
var lettuce = new FoodItem('lettuce', '20', true, true, true);
var chicken = new FoodItem('Chicken', '800', false, true, true);
var sriracha = new FoodItem('Sriracha', '900', true, false, true);

var apple = new FoodItem('Apple', '150', true, true, false);
var ribeye = new FoodItem('Ribeye', '1500', false, true, true);

var bigBurrito = new Plate('Burrito', 'Delicious', '3.50', [tortilla, lettuce, chicken, sriracha]);
//var guacPlate = new Plate('Guac', 'Delicious', '5.50', ['Avocados', 'Salsa', 'Lime', 'Cilantro']);
//var margarita = new Plate('Ballin Blue Marg', 'Delicious', '.50', ['Tequila', 'Lime Juice', 'Margarita Mix', 'TripleSec']);

var rioMenu = new Menu(bigBurrito);
var rioGrande = new Restaurant(rioMenu);
console.log(rioGrande.toString());



//var menu1 = new Menu(['A la carte', 'test', 'test'])
//menu1.toString()
//
//orange.toString()
//console.log('-------------')
//apple.toString()
//console.log('-------------')
//ribeye.toString()
//console.log('-------------')
