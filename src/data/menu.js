const menuData = {
    food: [
        {
            name: `Beef Doner - "Skepasti"`,
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam tempore cumque recusandae distinctio provident consequatur nostrum repellat eaque quisquam voluptates.`,
            price: 7.5,
            img: `skepasti.png`
        },
        {
            name: `Special Burger"`,
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam tempore cumque recusandae distinctio provident consequatur nostrum repellat eaque quisquam voluptates.`,
            price: 7,
            img: `burger_special.png`
        }
    ],
    sweets: [
        {
            name: `Waffle`,
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam tempore cumque recusandae distinctio provident consequatur nostrum repellat eaque quisquam voluptates.`,
            price: 6,
            img: `vafla.png`
        }
    ],
    coffee: [],
    
    nonAlcoholic: [],
    alcoholic: []

}

export const MenuCategories = [
    {
        title: 'Food',
        dataKey: 'food'
    },
    {
        title: "Sweets",
        dataKey: 'sweets'
    },
    {
        title: "Coffee",
        dataKey: 'coffee'
    },
    {
        title: "Soft Drinks",
        dataKey: 'nonAlcoholic'
    },
    {
        title: "Alcoholic Drinks",
        dataKey: 'alcoholic'
    },
    {
        title: "Snacks",
        dataKey: 'snacks'
    },
]
export default menuData