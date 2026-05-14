export const recipes = [
  {
    id: 1,
    name: "Classic Beef Burger",
    source: "Inspired by Gordon Ramsay's Ultimate Burger",
    heroImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format",
    category: "Western",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner"],
    ingredients: [
      { name: "Ground Beef", amount: "500g" },
      { name: "Burger Buns", amount: "2 large" },
      { name: "Lettuce", amount: "2 leaves" },
      { name: "Tomato", amount: "1 sliced" },
      { name: "Cheddar Cheese", amount: "2 slices" },
      { name: "Red Onion", amount: "1/4 sliced" }
    ],
    steps: [
      { desc: "Shape beef into 1-inch thick patties. Season both sides.", time: "5 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Grill over medium-high heat for 5 mins per side.", time: "10 mins", image: "https://img.freepik.com/free-vector/delicious-barbecue-party-background_23-2148154133.jpg" },
      { desc: "Toast buns and melt cheese on patties.", time: "2 mins", image: "https://img.freepik.com/free-vector/burger-ingredients-collection_23-2148135894.jpg" },
      { desc: "Assemble with lettuce, tomato, and onion.", time: "3 mins", image: "https://img.freepik.com/free-vector/flat-design-fast-food-illustrated_23-2148882885.jpg" }
    ]
  },
  {
    id: 2,
    name: "Tomato Pasta",
    source: "Based on Jamie Oliver's 15-Minute Pasta",
    heroImage: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&auto=format",
    category: "Western",
    difficulty: "Easy",
    time: 15,
    tags: ["Lunch", "Dinner", "Quick"],
    ingredients: [
      { name: "Pasta", amount: "200g" },
      { name: "Tomato Sauce", amount: "1 cup" },
      { name: "Garlic", amount: "2 cloves, minced" },
      { name: "Fresh Basil", amount: "1 handful" },
      { name: "Olive Oil", amount: "2 tbsp" }
    ],
    steps: [
      { desc: "Boil salted water and cook pasta.", time: "10 mins", image: "https://img.freepik.com/free-vector/pasta-concept-illustration_114360-10113.jpg" },
      { desc: "Sauté minced garlic in olive oil until fragrant.", time: "2 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Add sauce and basil. Simmer gently.", time: "3 mins", image: "https://img.freepik.com/free-vector/pasta-ingredients-concept_23-2148545802.jpg" },
      { desc: "Toss pasta in sauce and serve with cheese.", time: "1 min", image: "https://img.freepik.com/free-vector/flat-design-italian-food-background_23-2148154134.jpg" }
    ]
  },
  {
    id: 3,
    name: "Kung Pao Chicken",
    source: "Inspired by Ken Hom's Traditional Szechuan",
    heroImage: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format",
    category: "Chinese",
    difficulty: "Hard",
    time: 45,
    tags: ["Dinner"],
    ingredients: [
      { name: "Chicken Thighs", amount: "300g" },
      { name: "Peanuts", amount: "1/2 cup" },
      { name: "Dried Chilies", amount: "6-8 pieces" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Ginger", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Cube chicken and marinate with soy sauce.", time: "15 mins", image: "https://img.freepik.com/free-vector/chef-cartoon-style_23-2147515690.jpg" },
      { desc: "Stir-fry chicken in a hot wok until brown.", time: "5 mins", image: "https://img.freepik.com/free-vector/flat-design-asian-food-background_23-2148154135.jpg" },
      { desc: "Sauté chilies and ginger. Return chicken.", time: "3 mins", image: "https://img.freepik.com/free-vector/illustrated-person-cooking-food_23-2148888062.jpg" },
      { desc: "Toss in peanuts and stir over high heat.", time: "2 mins", image: "https://img.freepik.com/free-vector/chinese-food-illustrated_23-2148888063.jpg" }
    ]
  },
  {
    id: 4,
    name: "Egg Fried Rice",
    source: "Based on Uncle Roger's Fried Rice Essentials",
    heroImage: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format",
    category: "Chinese",
    difficulty: "Easy",
    time: 10,
    tags: ["Breakfast", "Lunch", "Quick"],
    ingredients: [
      { name: "Cooked Rice", amount: "2 cups, cold" },
      { name: "Eggs", amount: "2 large" },
      { name: "Soy Sauce", amount: "1 tbsp" },
      { name: "Scallions", amount: "1 stalk" },
      { name: "Peas", amount: "1/4 cup" }
    ],
    steps: [
      { desc: "Whisk eggs and scramble in a hot wok. Remove.", time: "2 mins", image: "https://img.freepik.com/free-vector/eggs-breakfast-concept-illustration_114360-10114.jpg" },
      { desc: "Stir-fry cold rice, breaking up clumps.", time: "4 mins", image: "https://img.freepik.com/free-vector/illustrated-chef-cooking-food_23-2148888064.jpg" },
      { desc: "Add soy sauce, eggs, scallions, and peas.", time: "3 mins", image: "https://img.freepik.com/free-vector/flat-design-asian-food-collection_23-2148154136.jpg" },
      { desc: "Serve immediately while steaming hot.", time: "1 min", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" }
    ]
  },
  {
    id: 5,
    name: "Beef Broccoli",
    source: "Based on Woks of Life Top-Rated Stir Fry",
    heroImage: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&auto=format",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Lunch", "Dinner"],
    ingredients: [
      { name: "Beef Flank Steak", amount: "250g" },
      { name: "Broccoli", amount: "1 head" },
      { name: "Oyster Sauce", amount: "2 tbsp" },
      { name: "Garlic", amount: "3 cloves" },
      { name: "Ginger", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Slice beef and toss with cornstarch.", time: "10 mins", image: "https://img.freepik.com/free-vector/hand-drawn-cooking-food-concept_23-2148888065.jpg" },
      { desc: "Blanch broccoli florets for 2 minutes.", time: "3 mins", image: "https://img.freepik.com/free-vector/broccoli-illustration_114360-10115.jpg" },
      { desc: "Stir-fry beef in a hot wok until browned.", time: "4 mins", image: "https://img.freepik.com/free-vector/flat-design-fast-food-collection_23-2148154137.jpg" },
      { desc: "Add broccoli and oyster sauce. Stir well.", time: "2 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" }
    ]
  },
  {
    id: 9,
    name: "Mapo Tofu",
    source: "Authentic Szechuan from Woks of Life",
    heroImage: "https://images.unsplash.com/photo-1541014741259-df549fa9ba6f?w=800&auto=format",
    category: "Chinese",
    difficulty: "Medium",
    time: 20,
    tags: ["Lunch", "Dinner", "Warm"],
    ingredients: [
      { name: "Soft Tofu", amount: "1 block, cubed" },
      { name: "Minced Pork", amount: "100g" },
      { name: "Doubanjiang", amount: "1.5 tbsp" },
      { name: "Szechuan Peppercorns", amount: "1 tsp" },
      { name: "Chicken Stock", amount: "1/2 cup" }
    ],
    steps: [
      { desc: "Fry peppercorns in oil, then remove. Brown the pork.", time: "5 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Add Doubanjiang and stock. Simmer pork.", time: "5 mins", image: "https://img.freepik.com/free-vector/illustrated-chef-cooking-food_23-2148888064.jpg" },
      { desc: "Carefully slide in tofu cubes. Simmer 5 mins.", time: "5 mins", image: "https://img.freepik.com/free-vector/steam-concept-illustration_114360-10117.jpg" },
      { desc: "Thicken with cornstarch slurry and serve.", time: "5 mins", image: "https://img.freepik.com/free-vector/chinese-food-illustrated_23-2148888063.jpg" }
    ]
  },
  {
    id: 10,
    name: "Chicken Alfredo",
    source: "Top Rated from Delish.com",
    heroImage: "https://images.unsplash.com/photo-1645112481338-301407338426?w=800&auto=format",
    category: "Western",
    difficulty: "Medium",
    time: 25,
    tags: ["Dinner"],
    ingredients: [
      { name: "Fettuccine", amount: "300g" },
      { name: "Chicken Breast", amount: "2 pieces" },
      { name: "Heavy Cream", amount: "1 cup" },
      { name: "Parmesan", amount: "1/2 cup" },
      { name: "Butter", amount: "2 tbsp" }
    ],
    steps: [
      { desc: "Cook pasta in salted water. Drain.", time: "10 mins", image: "https://img.freepik.com/free-vector/pasta-concept-illustration_114360-10113.jpg" },
      { desc: "Season and sear chicken until golden.", time: "8 mins", image: "https://img.freepik.com/free-vector/delicious-barbecue-illustrated_23-2148154138.jpg" },
      { desc: "Make sauce with butter, cream, and cheese.", time: "5 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Toss pasta and chicken in the sauce.", time: "2 mins", image: "https://img.freepik.com/free-vector/flat-design-italian-food-background_23-2148154134.jpg" }
    ]
  },
  {
    id: 11,
    name: "Tomato Egg Stir Fry",
    source: "Family Favorite from China Sichuan Food",
    heroImage: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format",
    category: "Chinese",
    difficulty: "Easy",
    time: 10,
    tags: ["Breakfast", "Lunch", "Quick"],
    ingredients: [
      { name: "Eggs", amount: "3 large" },
      { name: "Tomatoes", amount: "2 large" },
      { name: "Green Onion", amount: "1 stalk" },
      { name: "Sugar", amount: "1 tsp" },
      { name: "Ketchup", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Whisk eggs and scramble quickly. Remove.", time: "2 mins", image: "https://img.freepik.com/free-vector/eggs-breakfast-concept-illustration_114360-10114.jpg" },
      { desc: "Sauté tomatoes until soft and juicy.", time: "4 mins", image: "https://img.freepik.com/free-vector/lettuce-illustration_114360-10116.jpg" },
      { desc: "Add eggs back with sugar and ketchup.", time: "2 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Toss with green onions and serve hot.", time: "2 mins", image: "https://img.freepik.com/free-vector/chinese-food-illustrated_23-2148888063.jpg" }
    ]
  },
  {
    id: 12,
    name: "Garlic Butter Salmon",
    source: "Based on NYT Cooking: Simple Salmon",
    heroImage: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format",
    category: "Western",
    difficulty: "Easy",
    time: 15,
    tags: ["Lunch", "Dinner", "Quick"],
    ingredients: [
      { name: "Salmon Fillets", amount: "2 pieces" },
      { name: "Garlic", amount: "3 cloves" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Lemon Juice", amount: "1/2 lemon" }
    ],
    steps: [
      { desc: "Season salmon with salt and pepper.", time: "2 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Sear skin-side down for 5 mins.", time: "5 mins", image: "https://img.freepik.com/free-vector/delicious-barbecue-illustrated_23-2148154138.jpg" },
      { desc: "Add butter and garlic, baste the fish.", time: "3 mins", image: "https://img.freepik.com/free-vector/hand-drawn-cooking-food-concept_23-2148888065.jpg" },
      { desc: "Drizzle with lemon and serve.", time: "5 mins", image: "https://img.freepik.com/free-vector/salad-bowl-concept_23-2148545803.jpg" }
    ]
  },
  {
    id: 15,
    name: "Char Siu (BBQ Pork)",
    source: "Based on Omnivore's Cookbook Top-Rated Char Siu",
    heroImage: "https://images.unsplash.com/photo-1599307734115-46797b5e40e0?w=800&auto=format",
    category: "Chinese",
    difficulty: "Medium",
    time: 60,
    tags: ["Dinner"],
    ingredients: [
      { name: "Pork Shoulder", amount: "500g" },
      { name: "Hoisin Sauce", amount: "2 tbsp" },
      { name: "Honey", amount: "1 tbsp" },
      { name: "Five Spice Powder", amount: "1/2 tsp" },
      { name: "Soy Sauce", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Marinate pork shoulder in sauces for 24h.", time: "5 mins", image: "https://img.freepik.com/free-vector/illustrated-person-cooking-food_23-2148888062.jpg" },
      { desc: "Roast in oven at 200°C for 30 mins.", time: "30 mins", image: "https://img.freepik.com/free-vector/delicious-barbecue-party-background_23-2148154133.jpg" },
      { desc: "Baste with honey and roast for 15 more mins.", time: "15 mins", image: "https://img.freepik.com/free-vector/hand-drawn-cooking-food-concept_23-2148888065.jpg" },
      { desc: "Rest for 10 mins before slicing thinly.", time: "10 mins", image: "https://img.freepik.com/free-vector/chinese-food-illustrated_23-2148888063.jpg" }
    ]
  },
  {
    id: 16,
    name: "Classic Shepherd's Pie",
    source: "Gordon Ramsay's Top Review Recipe",
    heroImage: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=800&auto=format",
    category: "Western",
    difficulty: "Medium",
    time: 45,
    tags: ["Dinner", "Warm"],
    ingredients: [
      { name: "Ground Lamb", amount: "500g" },
      { name: "Potatoes", amount: "3 large" },
      { name: "Carrots", amount: "2 diced" },
      { name: "Onion", amount: "1 diced" },
      { name: "Tomato Paste", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Boil potatoes and mash with butter.", time: "15 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Brown lamb with onions and carrots.", time: "10 mins", image: "https://img.freepik.com/free-vector/illustrated-chef-cooking-food_23-2148888064.jpg" },
      { desc: "Layer meat and mash in a baking dish.", time: "5 mins", image: "https://img.freepik.com/free-vector/hand-drawn-cooking-food-concept_23-2148888065.jpg" },
      { desc: "Bake until golden brown on top.", time: "15 mins", image: "https://img.freepik.com/free-vector/delicious-barbecue-party-background_23-2148154133.jpg" }
    ]
  },
  {
    id: 17,
    name: "Wonton Soup",
    source: "Comforting Classic from Chinasichuanfood",
    heroImage: "https://images.unsplash.com/photo-1534422298391-e4f8c170db06?w=800&auto=format",
    category: "Chinese",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner", "Warm", "Light"],
    ingredients: [
      { name: "Wonton Wrappers", amount: "20 pieces" },
      { name: "Ground Pork", amount: "150g" },
      { name: "Shrimp", amount: "100g, minced" },
      { name: "Chicken Stock", amount: "3 cups" },
      { name: "Bok Choy", amount: "2 bunches" }
    ],
    steps: [
      { desc: "Mix pork and shrimp for filling.", time: "10 mins", image: "https://img.freepik.com/free-vector/illustrated-person-cooking-food_23-2148888062.jpg" },
      { desc: "Wrap filling in wonton skins.", time: "15 mins", image: "https://img.freepik.com/free-vector/hand-drawn-cooking-food-concept_23-2148888065.jpg" },
      { desc: "Boil wontons until they float.", time: "5 mins", image: "https://img.freepik.com/free-vector/steam-concept-illustration_114360-10117.jpg" },
      { desc: "Serve in hot stock with bok choy.", time: "2 mins", image: "https://img.freepik.com/free-vector/chinese-food-illustrated_23-2148888063.jpg" }
    ]
  },
  {
    id: 18,
    name: "Fish and Chips",
    source: "British Favorite from BBC Good Food",
    heroImage: "https://images.unsplash.com/photo-1524338198850-8a2ff63a6918?w=800&auto=format",
    category: "Western",
    difficulty: "Medium",
    time: 40,
    tags: ["Lunch", "Dinner"],
    ingredients: [
      { name: "White Fish Fillet", amount: "2 pieces" },
      { name: "Potatoes", amount: "3 large" },
      { name: "Flour", amount: "1 cup" },
      { name: "Beer (or soda water)", amount: "3/4 cup" },
      { name: "Baking Powder", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Cut potatoes into chips and fry once.", time: "15 mins", image: "https://img.freepik.com/free-vector/flat-design-fast-food-collection_23-2148154137.jpg" },
      { desc: "Make batter with flour and beer.", time: "5 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Dip fish in batter and fry until gold.", time: "10 mins", image: "https://img.freepik.com/free-vector/delicious-barbecue-party-background_23-2148154133.jpg" },
      { desc: "Fry chips again for extra crispiness.", time: "5 mins", image: "https://img.freepik.com/free-vector/flat-design-fast-food-illustrated_23-2148882885.jpg" }
    ]
  },
  {
    id: 19,
    name: "Dim Sum Egg Tarts",
    source: "Popular Dessert from Woks of Life",
    heroImage: "https://images.unsplash.com/photo-1590473031967-a2f0088924b1?w=800&auto=format",
    category: "Chinese",
    difficulty: "Hard",
    time: 60,
    tags: ["Breakfast", "Snack"],
    ingredients: [
      { name: "Puff Pastry", amount: "1 sheet" },
      { name: "Eggs", amount: "2 yolks" },
      { name: "Sugar", amount: "1/4 cup" },
      { name: "Milk", amount: "1/2 cup" },
      { name: "Vanilla Extract", amount: "1/2 tsp" }
    ],
    steps: [
      { desc: "Cut pastry and press into tart tins.", time: "15 mins", image: "https://img.freepik.com/free-vector/hand-drawn-cooking-food-concept_23-2148888065.jpg" },
      { desc: "Whisk egg yolks, milk, and sugar.", time: "5 mins", image: "https://img.freepik.com/free-vector/eggs-breakfast-concept-illustration_114360-10114.jpg" },
      { desc: "Pour custard into pastry shells.", time: "5 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" },
      { desc: "Bake at 200°C until custard is set.", time: "25 mins", image: "https://img.freepik.com/free-vector/delicious-barbecue-party-background_23-2148154133.jpg" }
    ]
  },
  {
    id: 20,
    name: "Steak Diane",
    source: "Classic Gordon Ramsay Masterclass",
    heroImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format",
    category: "Western",
    difficulty: "Hard",
    time: 30,
    tags: ["Dinner"],
    ingredients: [
      { name: "Beef Fillets", amount: "2 pieces" },
      { name: "Shallots", amount: "2 minced" },
      { name: "Mushrooms", amount: "1 cup" },
      { name: "Brandy", amount: "2 tbsp" },
      { name: "Heavy Cream", amount: "1/4 cup" }
    ],
    steps: [
      { desc: "Season and sear fillets in butter.", time: "8 mins", image: "https://img.freepik.com/free-vector/delicious-barbecue-illustrated_23-2148154138.jpg" },
      { desc: "Sauté shallots and mushrooms in the same pan.", time: "5 mins", image: "https://img.freepik.com/free-vector/broccoli-illustration_114360-10115.jpg" },
      { desc: "Add brandy and flambé (carefully!).", time: "2 mins", image: "https://img.freepik.com/free-vector/flat-design-fast-food-collection_23-2148154137.jpg" },
      { desc: "Stir in cream and return steaks to pan.", time: "5 mins", image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg" }
    ]
  }
];
