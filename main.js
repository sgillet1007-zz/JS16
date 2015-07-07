
// PART ONE
var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}
FoodItem.prototype.toStrings = function () {
    return '\nName : ' + this.name + 
            '\nCalories : ' + this.calories + 
            '\nVegan : ' + this.vegan + 
            '\nGluten Free : ' + this.glutenFree + 
            '\nCitrus Free : ' + this.citrusFree; +
            '\n***********************'
}
// ************************FOOD ITEM VARIABLES*****************************************************************************************************************
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
Drink.prototype.toStrings = function () {
    var drinkStringArray = [];
for (var i = 0; i < this.ingredients.length; i++) {
    drinkStringArray.push(this.ingredients[i].toStrings());
};
var drinkString = drinkStringArray.join(' ');
    return '\nName : ' + this.name + 
            '\nDescription : ' + this.description + 
            '\nPrice : ' + this.price + 
            '\nIngredients : ' + drinkString + '\n' +
            '\n***********************'
}
//Instance of Margarita 
var margarita = new Drink ('Margarita', 'Awesome', 5.00, [tequila, margarita_mix, salt]);

// *****************************PLATE*************************************************************************************************************
var Plate = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Plate.prototype.toStrings = function () {
var plateStringArray = [];
for (var i = 0; i < this.ingredients.length; i++) {
    plateStringArray.push(this.ingredients[i].toStrings());
};
var plateString = plateStringArray.join(' ');

    return '\nName : ' + this.name + 
            '\nDescription : ' + this.description + 
            '\nPrice : ' + this.price + 
            '\nIngredients : ' + plateString + '\n'+
            '\n***********************';
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
Order.prototype.toStrings = function () {
    return '\nPlates : ' + this.plates +
            '\n***********************';
}

// *******************************MENU**********************************************************************************************************

var Menu = function (plates) {
    this.menu = plates;
    
}
Menu.prototype.toStrings = function () {
    // console.log('Menu CL: ' + this.menu)
    // console.log('This : ' + this)
     var menuStringArray = [];
     // console.log(menuStringArray);
    for (var i = 0; i < this.menu.length; i++) {
        menuStringArray.push(this.menu[i].toStrings());
        // console.log(menuStringArray);
    };
    var menuString = menuStringArray.join( ' ');
    // console.log(menuString);
    return 'MENU' + menuString +
            '\n***********************';
}

var menuMex = new Menu ([margarita, burritoPlate, guacPlate]);

// this.plate.map(
//        function (plate) {
//            return this.plate.toString();
//        });

// var output = menuMex.toStrings();
// console.log(output);

// *******************************RESTAURANT**********************************************************************************************************

var Restaurant = function (name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
}
Restaurant.prototype.toStrings = function () {
    var menuStringArray2 = [];
    console.log(this.menu)
    for (var i = 0; i < this.menu.length; i++) {
        menuStringArray2.push(this.menu[i].toStrings());
    };
    var menuString = menuStringArray2.join(' ');
console.log(menuString)

return console.log('Restaurant: ' + this.name +'\nDescription : ' + this.description + '\nMenu : ' + menuString);
}
// return   this.name + this.description + this.menu[0];

// console.log(menuMex)
var RioGrande = new Restaurant('Rio Grande', 'Great Place!', menuMex);
// console.log(RioGrande)

var output = RioGrande.toStrings();
console.log(output);
// this.plate.map(
//        function (plate) {
//            return this.plate.toString();
//        });

// / *******************************CUSTOMER*********************************************************************************************************
// var Customer = function (dietaryPreference) {
//     this.dietaryPreference = dietaryPreference;
// }
// Customer.prototype.toStrings = function () {
//     return '\nDietary Preference : ' + this.dietaryPreference +
//             '\n***********************';
// }
// *****************************************************************************************************************************************

// RioGrande.toStrings()




