import alcoholItems from "./alcohol";
import coffeeItems from "./coffee";
import foodItems from "./food";
import snacksItems from "./snacks";
import softDrinksItems from "./softDrinks";
import sweetItems from "./sweets";

const menuData = {
    "0_food": {
        title: {
            en: "Food",
            el: "Φαγητο",
        },
        items: foodItems,
    },
    "1_sweets": {
        title: {
            en: "Sweets",
            el: "Γλυκα",
        },
        items: sweetItems,
    },
    "2_coffee": {
        title: {
            en: "Coffee",
            el: "Καφες",
        },
        items: coffeeItems,
    },
    "3_alcoholic": {
        title: {
            en: "Alcoholic Drinks",
            el: "Αλκοολ",
        },
        items: alcoholItems,
    },
    "4_nonAlcoholic": {
        title: {
            en: "Non-Alcoholic Drinks",
            el: "Μη Αλκοολουχα",
        },
        items: softDrinksItems,
    },
    "5_snacks": {
        title: {
            en: "Snacks",
            el: "Σνακς",
        },
        items: snacksItems,
    },
};
export default menuData;
