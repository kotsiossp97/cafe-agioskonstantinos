const foodItems = [
    {
        title: {
            en: "Beef Doner",
            gr: "Γύρος Βοδινό",
        },
        desc: {
            en: "Fresh beef doner, warm pita, yogurt, tomato, cucumber and lettuce.",
            gr: "Φρέσκο βοδινό κρέας, ζεστή πίτα, γιαούρτι, ντομάτα, αγγούρι και μαρούλι.",
        },
        img: "gyros.png",
        price: 6,
    },
    {
        title: {
            en: 'Beef Doner - "Skepasti"',
            gr: 'Γύρος Βοδινό - "Σκεπαστή"',
        },
        desc: {
            en: "Beef doner with cheese and mustard sauce in greek pitta with french fries.",
            gr: "Βοδινός γύρος με τυρί και σάλτσα μουστάρδας σε ελληνική πίτα με πατάτες τηγανιτές.",
        },
        img: "skepasti.png",
        price: 7,
    },
    {
        title: {
            en: "Burger",
            gr: "Χάμπουργκερ",
        },
        desc: {
            en: "Beef burger, cheese, tomato, cucumber, lettuce and french fries.",
            gr: "Μοσχαρίσιο μπιφτέκι, τυρί, ντομάτα, αγγούρι, μαρούλι και πατάτες τηγανιτές.",
        },
        img: "",
        price: 5,
    },
    {
        title: {
            en: "Special Burger",
            gr: 'Χάμπουργκερ - "Σπέσιαλ"',
        },
        desc: {
            en: "Beef burger, cheese, bacon, tomato, cucumber, lettuce and french fries.",
            gr: "Μοσχαρίσιο μπιφτέκι, τυρί, μπέικον, ντομάτα, αγγούρι, μαρούλι και πατάτες τηγανιτές.",
        },
        img: "burger_special.png",
        price: 6,
    },
    {
        title: {
            en: "Chicken Souvlaki",
            gr: "Σουβλάκι Κοτόπουλο",
        },
        desc: {
            en: "Chicken souvlaki, served with tomato, cucumber, lettuce, french fries and Greek pita.",
            gr: "Κοτόπουλο σουβλάκι, συνοδεύεται με ντομάτα, αγγούρι, μαρούλι, πατάτες τηγανιτές και ελληνική πίτα",
        },
        img: "souvlaki.png",
        price: 6,
    },
    {
        title: {
            en: "Chicken Wrap",
            gr: "Wrap Κοτόπουλο",
        },
        desc: {
            en: "",
            gr: "",
        },
        img: "chicken_wrap.png",
        price: 6,
    },
    {
        title: {
            en: "Chicken Nuggets",
            gr: "Κοτομπουκίες",
        },
        desc: {
            en: "",
            gr: "",
        },
        img: "",
        price: 5,
    },
    {
        title: {
            en: "Pizza Margarita",
            gr: "Πίτσα Μαργαρίτα",
        },
        desc: {
            en: "",
            gr: "",
        },
        img: "pizza_margarita.png",
        price: 5,
    },
    {
        title: {
            en: "Pizza Special",
            gr: "Πίτσα Σπέσιαλ",
        },
        desc: {
            en: "",
            gr: "",
        },
        img: "pizza_special.png",
        price: 6,
    },
];

export default foodItems;
