import alcoholItems from "./alcohol";
import coffeeItems from "./coffee";
import foodItems from "./food";
import snacksItems from "./snacks";
import softDrinksItems from "./softDrinks";
import sweetItems from "./sweets";

const menuData = {
    "0_food": {
        title: "Food",
        items: foodItems
    },
    "1_sweets": {
        title: "Sweets",
        items: sweetItems
    },
    "2_coffee": {
        title: "Coffee",
        items: coffeeItems
    },
    "3_alcoholic": {
        title: "Alcoholic Drinks",
        items: alcoholItems
    },
    "4_nonAlcoholic": {
        title: "Non-Alcoholic Drinks",
        items: softDrinksItems
    },
    "5_snacks": {
        title: "Snacks",
        items: snacksItems
    },
};
export default menuData;
