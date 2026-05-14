export const recipes = [
  {
    id: 1,
    name: "Classic Beef Burger",
    source: "Inspired by Gordon Ramsay",
    category: "Western",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner"],
    equipment: ["Cast Iron Skillet", "Spatula", "Mixing Bowl"],
    ingredients: [
      { name: "Ground Beef (80/20)", amount: "500g" },
      { name: "Burger Buns", amount: "2 large" },
      { name: "Lettuce", amount: "2 leaves" },
      { name: "Tomato", amount: "1 sliced" },
      { name: "Cheddar Cheese", amount: "2 slices" },
      { name: "Red Onion", amount: "1/4 sliced" }
    ],
    optionalIngredients: [
      { name: "Bacon", amount: "2 strips" },
      { name: "Pickles", amount: "4 slices" }
    ],
    steps: [
      { desc: "Shape beef into 1-inch thick patties. Season generously with salt and pepper.", heat: null, time: "5 mins" },
      { desc: "Heat skillet. Sear patties for 4 mins on the first side.", heat: "High", time: "4 mins" },
      { desc: "Flip patties. Add cheese and cover with a lid to melt.", heat: "Medium", time: "4 mins" },
      { desc: "Toast buns in the same pan until golden.", heat: "Medium", time: "2 mins" },
      { desc: "Assemble with lettuce, tomato, and onion.", heat: null, time: "3 mins" }
    ]
  },
  {
    id: 2,
    name: "Tomato Pasta",
    source: "Based on Jamie Oliver",
    category: "Western",
    difficulty: "Easy",
    time: 15,
    tags: ["Lunch", "Dinner", "Quick"],
    equipment: ["Large Pot", "Sauté Pan", "Colander"],
    ingredients: [
      { name: "Pasta (Spaghetti/Penne)", amount: "200g" },
      { name: "Tomato Sauce", amount: "1 cup" },
      { name: "Garlic", amount: "2 cloves, minced" },
      { name: "Fresh Basil", amount: "1 handful" },
      { name: "Olive Oil", amount: "2 tbsp" }
    ],
    optionalIngredients: [
      { name: "Parmesan Cheese", amount: "2 tbsp" },
      { name: "Chili Flakes", amount: "1 pinch" }
    ],
    steps: [
      { desc: "Boil salted water and cook pasta until al dente.", heat: "High", time: "10 mins" },
      { desc: "Sauté minced garlic in olive oil until fragrant but not brown.", heat: "Medium", time: "2 mins" },
      { desc: "Add tomato sauce and half the basil. Simmer gently.", heat: "Low", time: "3 mins" },
      { desc: "Toss drained pasta into the sauce. Garnish with remaining basil.", heat: "Low", time: "1 min" }
    ]
  },
  {
    id: 3,
    name: "Kung Pao Chicken",
    source: "Inspired by Ken Hom",
    category: "Chinese",
    difficulty: "Hard",
    time: 45,
    tags: ["Dinner"],
    equipment: ["Wok", "Spatula", "Mixing Bowl"],
    ingredients: [
      { name: "Chicken Thighs", amount: "300g" },
      { name: "Peanuts", amount: "1/2 cup" },
      { name: "Dried Chilies", amount: "6-8 pieces" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Ginger", amount: "1 tbsp, minced" },
      { name: "Shaoxing Wine", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Szechuan Peppercorns", amount: "1 tsp" },
      { name: "Bell Peppers", amount: "1/2 cup" }
    ],
    steps: [
      { desc: "Cube chicken and marinate with soy sauce and wine.", heat: null, time: "15 mins" },
      { desc: "Heat oil. Fry peanuts until golden. Remove and set aside.", heat: "Medium", time: "3 mins" },
      { desc: "Stir-fry chicken in the wok until browned and cooked through.", heat: "High", time: "5 mins" },
      { desc: "Sauté chilies and ginger. Return chicken and peanuts to wok.", heat: "High", time: "3 mins" },
      { desc: "Toss quickly with a splash of soy sauce for a smoky finish.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 4,
    name: "Egg Fried Rice",
    source: "Based on Uncle Roger",
    category: "Chinese",
    difficulty: "Easy",
    time: 10,
    tags: ["Breakfast", "Lunch", "Quick"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Cooked Rice (Cold)", amount: "2 cups" },
      { name: "Eggs", amount: "2 large" },
      { name: "Soy Sauce", amount: "1 tbsp" },
      { name: "Scallions", amount: "1 stalk" },
      { name: "MSG (King of Flavor)", amount: "1 pinch" }
    ],
    optionalIngredients: [
      { name: "Frozen Peas", amount: "1/4 cup" },
      { name: "Sesame Oil", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Whisk eggs. Scramble in a hot wok until barely set. Remove.", heat: "High", time: "2 mins" },
      { desc: "Add oil and stir-fry cold rice, breaking up any clumps.", heat: "High", time: "4 mins" },
      { desc: "Add soy sauce, eggs, scallions, and MSG.", heat: "High", time: "3 mins" },
      { desc: "Toss vigorously over the highest heat possible for 'Wok Hei'.", heat: "High", time: "1 min" }
    ]
  },
  {
    id: 5,
    name: "Beef Broccoli",
    source: "Woks of Life",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Beef Flank Steak", amount: "250g" },
      { name: "Broccoli", amount: "1 head" },
      { name: "Oyster Sauce", amount: "2 tbsp" },
      { name: "Garlic", amount: "3 cloves, minced" },
      { name: "Cornstarch", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Sesame Seeds", amount: "1 tsp" },
      { name: "Sliced Carrots", amount: "1/4 cup" }
    ],
    steps: [
      { desc: "Slice beef against the grain and toss with cornstarch.", heat: null, time: "10 mins" },
      { desc: "Blanch broccoli in boiling water for 2 mins, then drain.", heat: "High", time: "3 mins" },
      { desc: "Stir-fry beef in a hot wok until browned.", heat: "High", time: "4 mins" },
      { desc: "Add broccoli, garlic, and oyster sauce. Stir until thickened.", heat: "Medium", time: "2 mins" }
    ]
  },
  {
    id: 6,
    name: "Mapo Tofu",
    source: "Authentic Szechuan",
    category: "Chinese",
    difficulty: "Medium",
    time: 20,
    tags: ["Lunch", "Dinner", "Warm"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Soft Tofu", amount: "1 block, cubed" },
      { name: "Minced Pork", amount: "100g" },
      { name: "Doubanjiang (Bean Paste)", amount: "1.5 tbsp" },
      { name: "Szechuan Peppercorns", amount: "1 tsp" },
      { name: "Chicken Stock", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Chili Oil", amount: "1 tbsp" },
      { name: "Fermented Black Beans", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Fry peppercorns in oil until fragrant, then discard them.", heat: "Low", time: "2 mins" },
      { desc: "Brown the pork in the peppercorn oil.", heat: "Medium", time: "3 mins" },
      { desc: "Add Doubanjiang and stock. Bring to a simmer.", heat: "Medium", time: "5 mins" },
      { desc: "Carefully slide in tofu cubes. Simmer gently so they don't break.", heat: "Low", time: "5 mins" },
      { desc: "Thicken with cornstarch slurry and serve with scallions.", heat: "Medium", time: "5 mins" }
    ]
  },
  {
    id: 7,
    name: "Chicken Alfredo",
    source: "Delish.com",
    category: "Western",
    difficulty: "Medium",
    time: 25,
    tags: ["Dinner"],
    equipment: ["Pasta Pot", "Large Sauté Pan"],
    ingredients: [
      { name: "Fettuccine", amount: "300g" },
      { name: "Chicken Breast", amount: "2 pieces" },
      { name: "Heavy Cream", amount: "1 cup" },
      { name: "Parmesan Cheese", amount: "1/2 cup" },
      { name: "Butter", amount: "2 tbsp" }
    ],
    optionalIngredients: [
      { name: "Parsley", amount: "1 tbsp" },
      { name: "Garlic Powder", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Cook fettuccine in salted water until al dente.", heat: "High", time: "10 mins" },
      { desc: "Season and sear chicken until golden and cooked through.", heat: "Medium", time: "8 mins" },
      { desc: "Melt butter in pan. Add cream and parmesan. Whisk until smooth.", heat: "Low", time: "5 mins" },
      { desc: "Toss pasta and sliced chicken into the sauce.", heat: "Low", time: "2 mins" }
    ]
  },
  {
    id: 8,
    name: "Tomato Egg Stir Fry",
    source: "China Sichuan Food",
    category: "Chinese",
    difficulty: "Easy",
    time: 10,
    tags: ["Breakfast", "Lunch", "Quick"],
    equipment: ["Wok or Non-stick Pan"],
    ingredients: [
      { name: "Eggs", amount: "3 large" },
      { name: "Tomatoes", amount: "2 large, wedged" },
      { name: "Green Onion", amount: "1 stalk" },
      { name: "Sugar", amount: "1 tsp" },
      { name: "Ketchup", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Sesame Oil", amount: "a few drops" },
      { name: "Garlic", amount: "1 clove" }
    ],
    steps: [
      { desc: "Whisk eggs and scramble quickly. Remove while still soft.", heat: "Medium", time: "2 mins" },
      { desc: "Sauté tomatoes until they release their juices.", heat: "Medium", time: "4 mins" },
      { desc: "Add scrambled eggs back with sugar and ketchup.", heat: "Medium", time: "2 mins" },
      { desc: "Toss with green onions and serve over rice.", heat: "Medium", time: "2 mins" }
    ]
  },
  {
    id: 9,
    name: "Garlic Butter Salmon",
    source: "NYT Cooking",
    category: "Western",
    difficulty: "Easy",
    time: 15,
    tags: ["Lunch", "Dinner", "Quick"],
    equipment: ["Sauté Pan", "Tongs"],
    ingredients: [
      { name: "Salmon Fillets", amount: "2 pieces" },
      { name: "Garlic", amount: "3 cloves, minced" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Lemon Juice", amount: "1/2 lemon" }
    ],
    optionalIngredients: [
      { name: "Dill", amount: "1 tsp" },
      { name: "Honey", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Season salmon with salt and pepper on both sides.", heat: null, time: "2 mins" },
      { desc: "Sear skin-side down until crispy.", heat: "Medium", time: "5 mins" },
      { desc: "Flip and add butter and garlic. Baste the fish continuously.", heat: "Medium", time: "3 mins" },
      { desc: "Drizzle with lemon juice before serving.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 10,
    name: "Char Siu (BBQ Pork)",
    source: "Omnivore's Cookbook",
    category: "Chinese",
    difficulty: "Medium",
    time: 60,
    tags: ["Dinner"],
    equipment: ["Oven", "Roasting Rack", "Brush"],
    ingredients: [
      { name: "Pork Shoulder", amount: "500g" },
      { name: "Hoisin Sauce", amount: "2 tbsp" },
      { name: "Honey", amount: "1 tbsp" },
      { name: "Five Spice Powder", amount: "1/2 tsp" },
      { name: "Soy Sauce", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Red Food Coloring", amount: "1 drop" },
      { name: "Maltose", amount: "1 tbsp (for extra glaze)" }
    ],
    steps: [
      { desc: "Marinate pork shoulder strips in sauces for at least 24h.", heat: null, time: "5 mins" },
      { desc: "Preheat oven to 200°C. Roast pork for 30 mins.", heat: "High", time: "30 mins" },
      { desc: "Baste with extra honey glaze and roast for 15 more mins.", heat: "High", time: "15 mins" },
      { desc: "Rest for 10 mins before slicing thinly.", heat: null, time: "10 mins" }
    ]
  },
  {
    id: 11,
    name: "Classic Shepherd's Pie",
    source: "Gordon Ramsay",
    category: "Western",
    difficulty: "Medium",
    time: 45,
    tags: ["Dinner", "Warm"],
    equipment: ["Large Skillet", "Pot", "Baking Dish"],
    ingredients: [
      { name: "Ground Lamb", amount: "500g" },
      { name: "Potatoes", amount: "3 large" },
      { name: "Carrots", amount: "2 diced" },
      { name: "Onion", amount: "1 diced" },
      { name: "Tomato Paste", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Worcestershire Sauce", amount: "1 tbsp" },
      { name: "Rosemary", amount: "1 sprig" }
    ],
    steps: [
      { desc: "Boil potatoes and mash with butter and milk.", heat: "High", time: "15 mins" },
      { desc: "Brown lamb with onions and carrots in a skillet.", heat: "Medium", time: "10 mins" },
      { desc: "Add tomato paste and herbs. Transfer to a baking dish.", heat: "Medium", time: "5 mins" },
      { desc: "Spread mash on top. Bake until golden brown.", heat: "High", time: "15 mins" }
    ]
  },
  {
    id: 12,
    name: "Wonton Soup",
    source: "Chinasichuanfood",
    category: "Chinese",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner", "Warm", "Light"],
    equipment: ["Mixing Bowl", "Soup Pot"],
    ingredients: [
      { name: "Wonton Wrappers", amount: "20 pieces" },
      { name: "Ground Pork", amount: "150g" },
      { name: "Shrimp", amount: "100g, minced" },
      { name: "Chicken Stock", amount: "3 cups" },
      { name: "Bok Choy", amount: "2 bunches" }
    ],
    optionalIngredients: [
      { name: "White Pepper", amount: "1/4 tsp" },
      { name: "Sesame Oil", amount: "1/2 tsp" }
    ],
    steps: [
      { desc: "Mix pork, shrimp, and seasonings. Wrap in wonton skins.", heat: null, time: "15 mins" },
      { desc: "Bring chicken stock to a boil.", heat: "High", time: "5 mins" },
      { desc: "Cook wontons in boiling water until they float.", heat: "High", time: "5 mins" },
      { desc: "Serve in hot stock with blanched bok choy.", heat: "Medium", time: "5 mins" }
    ]
  },
  {
    id: 13,
    name: "Fish and Chips",
    source: "BBC Good Food",
    category: "Western",
    difficulty: "Medium",
    time: 40,
    tags: ["Lunch", "Dinner"],
    equipment: ["Deep Fryer or Large Pot", "Mixing Bowl"],
    ingredients: [
      { name: "White Fish Fillet (Cod/Haddock)", amount: "2 pieces" },
      { name: "Potatoes", amount: "3 large" },
      { name: "Flour", amount: "1 cup" },
      { name: "Cold Beer", amount: "3/4 cup" },
      { name: "Baking Powder", amount: "1 tsp" }
    ],
    optionalIngredients: [
      { name: "Malt Vinegar", amount: "for serving" },
      { name: "Tartar Sauce", amount: "2 tbsp" }
    ],
    steps: [
      { desc: "Cut potatoes into chips and fry once at lower heat.", heat: "Medium", time: "15 mins" },
      { desc: "Whisk flour, baking powder, and beer for the batter.", heat: null, time: "5 mins" },
      { desc: "Dip fish in batter and fry until golden and crispy.", heat: "High", time: "10 mins" },
      { desc: "Fry chips again at higher heat for extra crunch.", heat: "High", time: "5 mins" }
    ]
  },
  {
    id: 14,
    name: "Dim Sum Egg Tarts",
    source: "Woks of Life",
    category: "Chinese",
    difficulty: "Hard",
    time: 60,
    tags: ["Breakfast", "Snack"],
    equipment: ["Tart Tins", "Oven", "Whisk"],
    ingredients: [
      { name: "Puff Pastry (Store-bought)", amount: "1 sheet" },
      { name: "Egg Yolks", amount: "2" },
      { name: "Sugar", amount: "1/4 cup" },
      { name: "Milk", amount: "1/2 cup" },
      { name: "Vanilla Extract", amount: "1/2 tsp" }
    ],
    optionalIngredients: [
      { name: "Evaporated Milk", amount: "2 tbsp (for richer filling)" }
    ],
    steps: [
      { desc: "Cut puff pastry and press into tart tins.", heat: null, time: "15 mins" },
      { desc: "Whisk yolks, milk, and sugar until dissolved.", heat: null, time: "5 mins" },
      { desc: "Pour custard into pastry shells, filling 80%.", heat: null, time: "5 mins" },
      { desc: "Bake at 200°C until pastry is puffy and golden.", heat: "High", time: "25 mins" }
    ]
  },
  {
    id: 15,
    name: "Steak Diane",
    source: "Gordon Ramsay",
    category: "Western",
    difficulty: "Hard",
    time: 30,
    tags: ["Dinner"],
    equipment: ["Large Skillet", "Spoon for Basting"],
    ingredients: [
      { name: "Beef Fillets", amount: "2 pieces" },
      { name: "Shallots", amount: "2 minced" },
      { name: "Mushrooms", amount: "1 cup, sliced" },
      { name: "Brandy", amount: "2 tbsp" },
      { name: "Heavy Cream", amount: "1/4 cup" }
    ],
    optionalIngredients: [
      { name: "Dijon Mustard", amount: "1 tsp" },
      { name: "Parsley", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Season and sear fillets in butter until browned.", heat: "High", time: "8 mins" },
      { desc: "Sauté shallots and mushrooms in the same pan.", heat: "Medium", time: "5 mins" },
      { desc: "Add brandy and flambé carefully with a long lighter.", heat: "High", time: "2 mins" },
      { desc: "Stir in cream and mustard. Return steaks to pan.", heat: "Low", time: "5 mins" }
    ]
  },
  {
    id: 16,
    name: "Carbonara",
    source: "Serious Eats",
    category: "Western",
    difficulty: "Medium",
    time: 20,
    tags: ["Lunch", "Dinner"],
    equipment: ["Pasta Pot", "Mixing Bowl", "Skillet"],
    ingredients: [
      { name: "Spaghetti", amount: "200g" },
      { name: "Guanciale (or Pancetta)", amount: "100g" },
      { name: "Eggs", amount: "2 whole + 1 yolk" },
      { name: "Pecorino Romano", amount: "50g" },
      { name: "Black Pepper", amount: "lots" }
    ],
    optionalIngredients: [
      { name: "Garlic", amount: "1 clove (not traditional!)" }
    ],
    steps: [
      { desc: "Fry guanciale in a cold skillet until crispy.", heat: "Medium", time: "10 mins" },
      { desc: "Whisk eggs, cheese, and pepper in a bowl.", heat: null, time: "2 mins" },
      { desc: "Boil pasta. Reserve some starchy pasta water.", heat: "High", time: "8 mins" },
      { desc: "Toss pasta with grease and egg mix OFF the heat to avoid scrambling.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 17,
    name: "Sweet and Sour Pork",
    source: "Traditional Chinese",
    category: "Chinese",
    difficulty: "Hard",
    time: 40,
    tags: ["Dinner"],
    equipment: ["Wok", "Deep Fry Thermometer"],
    ingredients: [
      { name: "Pork Loin", amount: "300g" },
      { name: "Pineapple", amount: "1/2 cup" },
      { name: "Bell Peppers", amount: "1 cup" },
      { name: "Rice Vinegar", amount: "3 tbsp" },
      { name: "Ketchup", amount: "2 tbsp" }
    ],
    optionalIngredients: [
      { name: "Cucumber", amount: "1/4 cup" },
      { name: "Egg", amount: "1 (for batter)" }
    ],
    steps: [
      { desc: "Dredge pork in starch and double-fry for crunch.", heat: "High", time: "15 mins" },
      { desc: "Stir-fry peppers and pineapple quickly.", heat: "High", time: "5 mins" },
      { desc: "Make sauce with vinegar, sugar, and ketchup.", heat: "Medium", time: "5 mins" },
      { desc: "Toss everything together until glaze is thick.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 18,
    name: "Lemon Chicken",
    source: "HK Diner Style",
    category: "Chinese",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner"],
    equipment: ["Sauté Pan", "Small Saucepan"],
    ingredients: [
      { name: "Chicken Breast", amount: "2 pieces" },
      { name: "Lemon Juice", amount: "1/4 cup" },
      { name: "Honey", amount: "2 tbsp" },
      { name: "Cornstarch", amount: "for dredging" },
      { name: "Chicken Broth", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Lemon Zest", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Coat chicken in cornstarch and fry until golden.", heat: "Medium", time: "10 mins" },
      { desc: "Simmer lemon juice, broth, and honey in a saucepan.", heat: "Medium", time: "5 mins" },
      { desc: "Thicken sauce with starch slurry until glossy.", heat: "Medium", time: "2 mins" },
      { desc: "Slice chicken and pour sauce over immediately.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 19,
    name: "Steak Frites",
    source: "French Bistro",
    category: "Western",
    difficulty: "Medium",
    time: 25,
    tags: ["Dinner"],
    equipment: ["Cast Iron Skillet", "Deep Pot"],
    ingredients: [
      { name: "Sirloin Steak", amount: "2 pieces" },
      { name: "Potatoes", amount: "3 large" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Fresh Thyme", amount: "2 sprigs" },
      { name: "Garlic", amount: "2 cloves" }
    ],
    optionalIngredients: [
      { name: "Shallots", amount: "1 minced" }
    ],
    steps: [
      { desc: "Double-fry potato batons until crispy. Salt immediately.", heat: "High", time: "15 mins" },
      { desc: "Sear steak 3-4 mins per side for medium-rare.", heat: "High", time: "8 mins" },
      { desc: "Baste with butter, garlic, and thyme at the end.", heat: "Medium", time: "2 mins" },
      { desc: "Rest steak for 5 mins before serving with fries.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 20,
    name: "Scallop Chow Mein",
    source: "Local Zi Char",
    category: "Chinese",
    difficulty: "Medium",
    time: 20,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok", "Noodle Pot"],
    ingredients: [
      { name: "Egg Noodles", amount: "200g" },
      { name: "Scallops", amount: "100g" },
      { name: "Bean Sprouts", amount: "1 cup" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Chives", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "X.O. Sauce", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Parboil and drain noodles. Set aside.", heat: "High", time: "5 mins" },
      { desc: "Sear scallops until opaque and golden brown.", heat: "High", time: "3 mins" },
      { desc: "Add noodles, sprouts, and soy sauce. Stir-fry.", heat: "High", time: "5 mins" },
      { desc: "Toss with chives and serve steaming hot.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 21,
    name: "Margherita Pizza",
    source: "Italian Classic",
    category: "Western",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner"],
    equipment: ["Pizza Stone or Baking Sheet", "Oven"],
    ingredients: [
      { name: "Pizza Dough", amount: "1 ball" },
      { name: "Fresh Mozzarella", amount: "100g" },
      { name: "Tomato Puree", amount: "1/2 cup" },
      { name: "Fresh Basil", amount: "1 handful" },
      { name: "Extra Virgin Olive Oil", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Parmesan", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Stretch dough and spread tomato puree evenly.", heat: null, time: "10 mins" },
      { desc: "Add mozzarella chunks and drizzle with oil.", heat: null, time: "2 mins" },
      { desc: "Bake at max oven temp until crust is charred.", heat: "High", time: "10 mins" },
      { desc: "Finish with fresh basil leaves post-bake.", heat: null, time: "1 min" }
    ]
  },
  {
    id: 22,
    name: "Szechuan Beef",
    source: "Spicy Favorite",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Dinner"],
    equipment: ["Wok", "Mixing Bowl"],
    ingredients: [
      { name: "Beef Strips", amount: "300g" },
      { name: "Celery", amount: "1 cup, sliced" },
      { name: "Dried Chilies", amount: "10 pieces" },
      { name: "Szechuan Sauce", amount: "3 tbsp" },
      { name: "Carrot", amount: "1 julienned" }
    ],
    optionalIngredients: [
      { name: "Ginger", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Flash-fry beef strips until slightly crispy.", heat: "High", time: "5 mins" },
      { desc: "Sauté chilies, carrots, and celery in wok.", heat: "High", time: "5 mins" },
      { desc: "Add beef back with Szechuan sauce. Stir well.", heat: "High", time: "3 mins" },
      { desc: "Toss over high heat for a smoky finish.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 23,
    name: "Caesar Salad",
    source: "Classic Starter",
    category: "Western",
    difficulty: "Easy",
    time: 15,
    tags: ["Lunch", "Light"],
    equipment: ["Large Salad Bowl", "Small Bowl (for dressing)"],
    ingredients: [
      { name: "Romaine Lettuce", amount: "1 head" },
      { name: "Croutons", amount: "1/2 cup" },
      { name: "Parmesan Cheese", amount: "1/4 cup" },
      { name: "Caesar Dressing", amount: "3 tbsp" }
    ],
    optionalIngredients: [
      { name: "Grilled Chicken", amount: "1 breast, sliced" },
      { name: "Anchovies", amount: "2 fillets" }
    ],
    steps: [
      { desc: "Chop romaine and place in a large chilled bowl.", heat: null, time: "5 mins" },
      { desc: "Toss with dressing until leaves are well coated.", heat: null, time: "2 mins" },
      { desc: "Add croutons and freshly shaved parmesan.", heat: null, time: "2 mins" },
      { desc: "Top with optional chicken and serve cold.", heat: null, time: "3 mins" }
    ]
  },
  {
    id: 24,
    name: "Dan Dan Noodles",
    source: "Street Food Classic",
    category: "Chinese",
    difficulty: "Hard",
    time: 35,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok", "Mixing Bowl", "Noodle Pot"],
    ingredients: [
      { name: "Wheat Noodles", amount: "200g" },
      { name: "Minced Pork", amount: "100g" },
      { name: "Sui Mi Ya Cai (Pickled Greens)", amount: "2 tbsp" },
      { name: "Sesame Paste", amount: "2 tbsp" },
      { name: "Chili Oil", amount: "3 tbsp" }
    ],
    optionalIngredients: [
      { name: "Crushed Peanuts", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Fry pork with Ya Cai until very dry and crispy.", heat: "Medium", time: "10 mins" },
      { desc: "Whisk sesame paste, chili oil, and soy sauce for the sauce.", heat: null, time: "5 mins" },
      { desc: "Cook noodles and drain, leaving a bit of water.", heat: "High", time: "5 mins" },
      { desc: "Assemble: sauce at bottom, then noodles, then pork.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 25,
    name: "Roast Chicken",
    source: "Gordon Ramsay",
    category: "Western",
    difficulty: "Medium",
    time: 90,
    tags: ["Dinner"],
    equipment: ["Roasting Pan", "Oven"],
    ingredients: [
      { name: "Whole Chicken", amount: "1.5kg" },
      { name: "Lemon", amount: "1 whole" },
      { name: "Garlic", amount: "1 head" },
      { name: "Fresh Thyme", amount: "1 bunch" },
      { name: "Butter", amount: "50g" }
    ],
    optionalIngredients: [
      { name: "Onion", amount: "1 halved" }
    ],
    steps: [
      { desc: "Stuff chicken with lemon, garlic, and thyme.", heat: null, time: "10 mins" },
      { desc: "Rub skin with butter, salt, and pepper.", heat: null, time: "5 mins" },
      { desc: "Roast at 200°C for 1 hour 15 mins until juices run clear.", heat: "High", time: "75 mins" },
      { desc: "Rest for at least 15 mins before carving.", heat: null, time: "15 mins" }
    ]
  },
  {
    id: 26,
    name: "General Tso's Chicken",
    source: "Takeout Favorite",
    category: "Chinese",
    difficulty: "Medium",
    time: 35,
    tags: ["Dinner"],
    equipment: ["Wok", "Mixing Bowl"],
    ingredients: [
      { name: "Chicken Thighs", amount: "300g" },
      { name: "Dried Chilies", amount: "8 pieces" },
      { name: "Ginger", amount: "1 tbsp, minced" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Cornstarch", amount: "for frying" }
    ],
    optionalIngredients: [
      { name: "Sesame Seeds", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Coat chicken in starch and deep fry until crispy.", heat: "High", time: "15 mins" },
      { desc: "Sauté ginger, garlic, and chilies in wok.", heat: "High", time: "3 mins" },
      { desc: "Add sauce (soy, vinegar, sugar) and simmer.", heat: "Medium", time: "5 mins" },
      { desc: "Toss chicken in sauce until perfectly coated.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 27,
    name: "Mac and Cheese",
    source: "Comfort Food",
    category: "Western",
    difficulty: "Easy",
    time: 25,
    tags: ["Lunch", "Dinner"],
    equipment: ["Saucepan", "Pot"],
    ingredients: [
      { name: "Macaroni Noodles", amount: "250g" },
      { name: "Sharp Cheddar", amount: "2 cups" },
      { name: "Milk", amount: "1.5 cups" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Flour", amount: "2 tbsp" }
    ],
    optionalIngredients: [
      { name: "Breadcrumbs", amount: "1/4 cup" }
    ],
    steps: [
      { desc: "Cook macaroni al dente and drain.", heat: "High", time: "10 mins" },
      { desc: "Make a roux by melting butter and whisking in flour.", heat: "Low", time: "5 mins" },
      { desc: "Whisk in milk slowly, then melt in cheese.", heat: "Low", time: "5 mins" },
      { desc: "Toss pasta in the cheese sauce and serve.", heat: "Low", time: "2 mins" }
    ]
  },
  {
    id: 28,
    name: "Yangzhou Fried Rice",
    source: "Classic Banquet Style",
    category: "Chinese",
    difficulty: "Medium",
    time: 20,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Cold Jasmine Rice", amount: "2 cups" },
      { name: "Shrimp", amount: "1/2 cup" },
      { name: "Char Siu", amount: "1/2 cup, diced" },
      { name: "Eggs", amount: "2 beaten" },
      { name: "Peas", amount: "1/4 cup" }
    ],
    optionalIngredients: [
      { name: "Lard", amount: "1 tsp (for authentic taste)" }
    ],
    steps: [
      { desc: "Scramble eggs and set aside. Keep them soft.", heat: "Medium", time: "3 mins" },
      { desc: "Stir-fry shrimp and char siu in wok.", heat: "High", time: "5 mins" },
      { desc: "Add rice and stir-fry, breaking any clumps.", heat: "High", time: "5 mins" },
      { desc: "Toss with soy sauce, eggs, and peas.", heat: "High", time: "3 mins" }
    ]
  },
  {
    id: 29,
    name: "Beef Stew",
    source: "Hearty Western",
    category: "Western",
    difficulty: "Medium",
    time: 120,
    tags: ["Dinner", "Warm"],
    equipment: ["Dutch Oven or Heavy Pot"],
    ingredients: [
      { name: "Beef Chuck", amount: "500g" },
      { name: "Potatoes", amount: "2 large, cubed" },
      { name: "Carrots", amount: "2 large, sliced" },
      { name: "Red Wine", amount: "1 cup" },
      { name: "Beef Broth", amount: "2 cups" }
    ],
    optionalIngredients: [
      { name: "Celery", amount: "1 stalk" },
      { name: "Bay Leaf", amount: "1" }
    ],
    steps: [
      { desc: "Sear beef cubes until deeply browned on all sides.", heat: "High", time: "10 mins" },
      { desc: "Add veggies and wine. Deglaze the pan well.", heat: "Medium", time: "5 mins" },
      { desc: "Pour in broth and simmer low for 1.5 - 2 hours.", heat: "Low", time: "90 mins" },
      { desc: "Season and serve hot with crusty bread.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 30,
    name: "Hot and Sour Soup",
    source: "Classic Chinese",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Lunch", "Dinner", "Warm"],
    equipment: ["Soup Pot"],
    ingredients: [
      { name: "Soft Tofu", amount: "1/2 block, julienned" },
      { name: "Wood Ear Mushrooms", amount: "1/4 cup" },
      { name: "Black Vinegar", amount: "3 tbsp" },
      { name: "White Pepper", amount: "1 tsp" },
      { name: "Egg", amount: "1 beaten" }
    ],
    optionalIngredients: [
      { name: "Bamboo Shoots", amount: "2 tbsp" }
    ],
    steps: [
      { desc: "Boil broth with mushrooms and tofu.", heat: "High", time: "10 mins" },
      { desc: "Add vinegar and pepper for the signature kick.", heat: "Medium", time: "2 mins" },
      { desc: "Thicken with cornstarch slurry and drizzle in egg slowly.", heat: "Low", time: "5 mins" },
      { desc: "Garnish with fresh green onions.", heat: null, time: "1 min" }
    ]
  },
  {
    id: 31,
    name: "Eggs Benedict",
    source: "Brunch Classic",
    category: "Western",
    difficulty: "Hard",
    time: 30,
    tags: ["Breakfast"],
    equipment: ["Saucepan", "Toaster", "Whisk"],
    ingredients: [
      { name: "English Muffins", amount: "2" },
      { name: "Eggs", amount: "2 poached" },
      { name: "Ham or Canadian Bacon", amount: "2 slices" },
      { name: "Butter", amount: "100g, melted" },
      { name: "Egg Yolks", amount: "2" }
    ],
    optionalIngredients: [
      { name: "Chives", amount: "1 tsp" },
      { name: "Cayenne Pepper", amount: "1 pinch" }
    ],
    steps: [
      { desc: "Make Hollandaise: whisk yolks and slowly drizzle in melted butter until thick.", heat: "Low", time: "10 mins" },
      { desc: "Poach eggs in simmering water with a splash of vinegar.", heat: "Low", time: "5 mins" },
      { desc: "Toast muffins and sear ham in a pan.", heat: "Medium", time: "3 mins" },
      { desc: "Place ham and egg on muffin. Pour over Hollandaise.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 32,
    name: "Steamed Fish",
    source: "Cantonese Style",
    category: "Chinese",
    difficulty: "Medium",
    time: 15,
    tags: ["Dinner", "Light"],
    equipment: ["Steamer", "Large Plate"],
    ingredients: [
      { name: "Whole Sea Bass", amount: "500g" },
      { name: "Ginger", amount: "2 inches, julienned" },
      { name: "Soy Sauce", amount: "3 tbsp" },
      { name: "Scallions", amount: "2 stalks, shredded" },
      { name: "Cooking Oil", amount: "2 tbsp" }
    ],
    optionalIngredients: [
      { name: "Cilantro", amount: "1 handful" }
    ],
    steps: [
      { desc: "Stuff fish with half the ginger and steam for 8-10 mins until opaque.", heat: "High", time: "10 mins" },
      { desc: "Discard fish water. Add soy sauce over the fish.", heat: null, time: "1 min" },
      { desc: "Top with remaining ginger and scallions. Heat oil until smoking.", heat: "High", time: "2 mins" },
      { desc: "Pour hot oil over the greens to release fragrance.", heat: null, time: "1 min" }
    ]
  },
  {
    id: 33,
    name: "Spring Rolls",
    source: "Classic Appetizer",
    category: "Chinese",
    difficulty: "Medium",
    time: 40,
    tags: ["Snack", "Lunch"],
    equipment: ["Wok or Deep Fryer", "Mixing Bowl"],
    ingredients: [
      { name: "Spring Roll Wrappers", amount: "10 sheets" },
      { name: "Cabbage", amount: "1 cup, shredded" },
      { name: "Carrots", amount: "1/2 cup, julienned" },
      { name: "Mushrooms", amount: "1/4 cup, sliced" },
      { name: "Soy Sauce", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Glass Noodles", amount: "1/4 cup" },
      { name: "Minced Pork", amount: "100g" }
    ],
    steps: [
      { desc: "Sauté veggies and pork with soy sauce. Cool completely.", heat: "Medium", time: "10 mins" },
      { desc: "Place filling in wrappers and roll tightly, sealing with water.", heat: null, time: "15 mins" },
      { desc: "Fry rolls in hot oil until golden brown and crispy.", heat: "High", time: "10 mins" },
      { desc: "Drain on paper towels and serve with sweet chili sauce.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 34,
    name: "Chow Mein",
    source: "Street Noodles",
    category: "Chinese",
    difficulty: "Easy",
    time: 15,
    tags: ["Lunch", "Dinner", "Quick"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Chow Mein Noodles", amount: "200g" },
      { name: "Cabbage", amount: "1 cup, shredded" },
      { name: "Carrot", amount: "1/2 julienned" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Bean Sprouts", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Chicken Slices", amount: "100g" },
      { name: "Sesame Oil", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Sauté cabbage and carrots until softened.", heat: "High", time: "5 mins" },
      { desc: "Add noodles and stir-fry, breaking up any clumps.", heat: "High", time: "3 mins" },
      { desc: "Toss with soy sauce and bean sprouts.", heat: "High", time: "5 mins" },
      { desc: "Finish with a dash of sesame oil and serve.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 35,
    name: "Fish Tacos",
    source: "Baja Style",
    category: "Western",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner"],
    equipment: ["Skillet", "Tongs", "Small Bowl"],
    ingredients: [
      { name: "White Fish (Tilapia/Cod)", amount: "300g" },
      { name: "Corn Tortillas", amount: "6 small" },
      { name: "Cabbage Slaw", amount: "1 cup" },
      { name: "Lime Juice", amount: "1 tbsp" },
      { name: "Chili Powder", amount: "1 tsp" }
    ],
    optionalIngredients: [
      { name: "Avocado", amount: "1 sliced" },
      { name: "Sour Cream", amount: "2 tbsp" }
    ],
    steps: [
      { desc: "Season fish with chili powder and sear until flaky.", heat: "Medium", time: "8 mins" },
      { desc: "Warm tortillas in a dry pan until soft.", heat: "Low", time: "3 mins" },
      { desc: "Mix cabbage with lime juice and optional cream.", heat: null, time: "5 mins" },
      { desc: "Assemble: fish on tortilla, topped with slaw and avocado.", heat: null, time: "4 mins" }
    ]
  },
  {
    id: 36,
    name: "Honey Walnut Shrimp",
    source: "Banquet Classic",
    category: "Chinese",
    difficulty: "Hard",
    time: 40,
    tags: ["Dinner"],
    equipment: ["Wok", "Mixing Bowl"],
    ingredients: [
      { name: "Large Shrimp", amount: "250g" },
      { name: "Walnuts", amount: "1/2 cup" },
      { name: "Honey", amount: "2 tbsp" },
      { name: "Mayonnaise", amount: "3 tbsp" },
      { name: "Condensed Milk", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Sesame Seeds", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Candy walnuts in a sugar syrup until glossy. Set aside.", heat: "Low", time: "10 mins" },
      { desc: "Batter and fry shrimp until golden and crispy.", heat: "High", time: "15 mins" },
      { desc: "Mix mayo, honey, and condensed milk to make the sauce.", heat: null, time: "5 mins" },
      { desc: "Toss fried shrimp in sauce and top with walnuts.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 37,
    name: "Chicken Parm",
    source: "Italian-American",
    category: "Western",
    difficulty: "Medium",
    time: 40,
    tags: ["Dinner"],
    equipment: ["Skillet", "Baking Sheet", "Meat Mallet"],
    ingredients: [
      { name: "Chicken Breast", amount: "2 pieces" },
      { name: "Breadcrumbs", amount: "1 cup" },
      { name: "Marinara Sauce", amount: "1 cup" },
      { name: "Mozzarella Cheese", amount: "1/2 cup" },
      { name: "Parmesan", amount: "1/4 cup" }
    ],
    optionalIngredients: [
      { name: "Fresh Basil", amount: "2 leaves" }
    ],
    steps: [
      { desc: "Flatten chicken and bread it with flour, egg, and breadcrumbs.", heat: null, time: "10 mins" },
      { desc: "Fry chicken cutlets until golden on both sides.", heat: "Medium", time: "10 mins" },
      { desc: "Top with sauce and mozzarella. Bake until cheese is bubbly.", heat: "High", time: "15 mins" },
      { desc: "Serve hot, garnished with parmesan and basil.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 38,
    name: "Dim Sum Har Gow",
    source: "Expert Level",
    category: "Chinese",
    difficulty: "Hard",
    time: 60,
    tags: ["Breakfast", "Lunch"],
    equipment: ["Steamer", "Rolling Pin", "Bamboo Brush"],
    ingredients: [
      { name: "Wheat Starch", amount: "1 cup" },
      { name: "Large Shrimp", amount: "200g, minced" },
      { name: "Bamboo Shoots", amount: "1/4 cup, minced" },
      { name: "Lard or Vegetable Oil", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Pork Fat", amount: "1 tbsp (for extra juiciness)" }
    ],
    steps: [
      { desc: "Prepare dough using boiling water and wheat starch. Rest.", heat: null, time: "20 mins" },
      { desc: "Mix shrimp, bamboo, and oil for the filling.", heat: null, time: "10 mins" },
      { desc: "Roll dough thin and pleat dumplings tightly.", heat: null, time: "20 mins" },
      { desc: "Steam over high heat for exactly 6 minutes.", heat: "High", time: "6 mins" }
    ]
  },
  {
    id: 39,
    name: "French Onion Soup",
    source: "Classic French",
    category: "Western",
    difficulty: "Medium",
    time: 60,
    tags: ["Dinner", "Warm"],
    equipment: ["Heavy Pot", "Oven-safe Bowls"],
    ingredients: [
      { name: "Yellow Onions", amount: "4 large, sliced" },
      { name: "Beef Stock", amount: "4 cups" },
      { name: "Baguette", amount: "4 slices" },
      { name: "Gruyere Cheese", amount: "1 cup" },
      { name: "Butter", amount: "3 tbsp" }
    ],
    optionalIngredients: [
      { name: "Thyme", amount: "2 sprigs" },
      { name: "Brandy", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Caramelize onions in butter until dark brown and sweet.", heat: "Low", time: "40 mins" },
      { desc: "Add stock and thyme. Simmer for 15 minutes.", heat: "Medium", time: "15 mins" },
      { desc: "Ladle into bowls, top with bread and cheese.", heat: null, time: "2 mins" },
      { desc: "Broil in oven until cheese is browned and bubbly.", heat: "High", time: "3 mins" }
    ]
  },
  {
    id: 40,
    name: "Beef Hor Fun",
    source: "Stir Fry King",
    category: "Chinese",
    difficulty: "Medium",
    time: 15,
    tags: ["Lunch", "Dinner", "Quick"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Flat Rice Noodles", amount: "300g" },
      { name: "Beef Slices", amount: "150g" },
      { name: "Bean Sprouts", amount: "1 cup" },
      { name: "Dark Soy Sauce", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Chive Flowers", amount: "1/4 cup" }
    ],
    steps: [
      { desc: "Sear beef slices quickly at very high heat. Remove.", heat: "High", time: "3 mins" },
      { desc: "Char the noodles in the wok until they get 'Wok Hei' aroma.", heat: "High", time: "5 mins" },
      { desc: "Add sprouts, beef, and dark soy sauce.", heat: "High", time: "3 mins" },
      { desc: "Toss vigorously for 2 mins and serve immediately.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 41,
    name: "General Tso's Cauliflower",
    source: "Vegetarian Alternative",
    category: "Chinese",
    difficulty: "Medium",
    time: 35,
    tags: ["Dinner", "Vegetarian"],
    equipment: ["Baking Sheet", "Wok"],
    ingredients: [
      { name: "Cauliflower Florets", amount: "1 head" },
      { name: "Cornstarch", amount: "1/2 cup" },
      { name: "General Tso Sauce", amount: "1/2 cup" },
      { name: "Ginger", amount: "1 tbsp" },
      { name: "Dried Chilies", amount: "5 pieces" }
    ],
    optionalIngredients: [
      { name: "Sesame Seeds", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Coat cauliflower in cornstarch and bake at 200°C until crispy.", heat: "High", time: "20 mins" },
      { desc: "Sauté ginger and chilies in wok.", heat: "Medium", time: "3 mins" },
      { desc: "Add sauce and thicken. Toss cauliflower to coat.", heat: "Medium", time: "5 mins" },
      { desc: "Garnish with sesame seeds.", heat: null, time: "1 min" }
    ]
  },
  {
    id: 42,
    name: "Eggs Florentine",
    source: "Brunch Favorite",
    category: "Western",
    difficulty: "Hard",
    time: 30,
    tags: ["Breakfast"],
    equipment: ["Poaching Pan", "Skillet"],
    ingredients: [
      { name: "English Muffins", amount: "2" },
      { name: "Fresh Spinach", amount: "2 cups" },
      { name: "Eggs", amount: "2" },
      { name: "Hollandaise Sauce", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Nutmeg", amount: "1 pinch" }
    ],
    steps: [
      { desc: "Sauté spinach with butter and a pinch of nutmeg.", heat: "Medium", time: "5 mins" },
      { desc: "Poach eggs in simmering water.", heat: "Low", time: "5 mins" },
      { desc: "Toast muffins. Top with spinach and egg.", heat: null, time: "5 mins" },
      { desc: "Pour over Hollandaise sauce.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 43,
    name: "Shrimp Scampi",
    source: "Classic Italian",
    category: "Western",
    difficulty: "Easy",
    time: 20,
    tags: ["Dinner", "Quick"],
    equipment: ["Large Skillet", "Pasta Pot"],
    ingredients: [
      { name: "Shrimp", amount: "300g" },
      { name: "Linguine", amount: "200g" },
      { name: "Garlic", amount: "4 cloves" },
      { name: "White Wine", amount: "1/4 cup" },
      { name: "Lemon Juice", amount: "2 tbsp" }
    ],
    optionalIngredients: [
      { name: "Red Chili Flakes", amount: "1/4 tsp" }
    ],
    steps: [
      { desc: "Cook linguine in salted water.", heat: "High", time: "10 mins" },
      { desc: "Sauté garlic and shrimp in butter and oil.", heat: "Medium", time: "5 mins" },
      { desc: "Add wine and lemon juice. Simmer for 2 mins.", heat: "Medium", time: "3 mins" },
      { desc: "Toss with pasta and parsley.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 44,
    name: "Braised Pork Belly (Hong Shao Rou)",
    source: "Chairman Mao's Favorite",
    category: "Chinese",
    difficulty: "Medium",
    time: 90,
    tags: ["Dinner", "Warm"],
    equipment: ["Clay Pot or Heavy Pot"],
    ingredients: [
      { name: "Pork Belly", amount: "500g" },
      { name: "Rock Sugar", amount: "30g" },
      { name: "Star Anise", amount: "2 pieces" },
      { name: "Soy Sauce", amount: "3 tbsp" },
      { name: "Ginger", amount: "3 slices" }
    ],
    optionalIngredients: [
      { name: "Hard Boiled Eggs", amount: "2" }
    ],
    steps: [
      { desc: "Blanch pork cubes in boiling water. Drain.", heat: "High", time: "5 mins" },
      { desc: "Melt sugar in oil until caramelized.", heat: "Low", time: "5 mins" },
      { desc: "Add pork and coat in sugar. Add soy sauce and spices.", heat: "Medium", time: "5 mins" },
      { desc: "Simmer with water for 1 hour until tender.", heat: "Low", time: "60 mins" }
    ]
  },
  {
    id: 45,
    name: "Steak au Poivre",
    source: "French Classic",
    category: "Western",
    difficulty: "Hard",
    time: 30,
    tags: ["Dinner"],
    equipment: ["Heavy Skillet", "Tongs"],
    ingredients: [
      { name: "Filet Mignon", amount: "2 steaks" },
      { name: "Black Peppercorns", amount: "2 tbsp, crushed" },
      { name: "Cognac", amount: "2 tbsp" },
      { name: "Heavy Cream", amount: "1/4 cup" },
      { name: "Butter", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Shallots", amount: "1 minced" }
    ],
    steps: [
      { desc: "Press crushed peppercorns onto both sides of steaks.", heat: null, time: "5 mins" },
      { desc: "Sear steaks to desired doneness. Remove and rest.", heat: "High", time: "10 mins" },
      { desc: "Add cognac to pan and flambé carefully.", heat: "High", time: "2 mins" },
      { desc: "Whisk in cream and butter. Pour over steaks.", heat: "Low", time: "5 mins" }
    ]
  },
  {
    id: 46,
    name: "Ants Climbing a Tree",
    source: "Classic Szechuan",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Glass Noodles", amount: "100g" },
      { name: "Minced Pork", amount: "150g" },
      { name: "Doubanjiang", amount: "1 tbsp" },
      { name: "Ginger/Garlic", amount: "1 tbsp each" },
      { name: "Chicken Broth", amount: "1 cup" }
    ],
    optionalIngredients: [
      { name: "Chili Oil", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Soak glass noodles in warm water until soft.", heat: null, time: "10 mins" },
      { desc: "Brown pork and add ginger, garlic, and paste.", heat: "Medium", time: "5 mins" },
      { desc: "Add broth and noodles. Simmer until broth is absorbed.", heat: "Medium", time: "8 mins" },
      { desc: "Garnish with green onions.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 47,
    name: "Baked Ziti",
    source: "Italian-American Comfort",
    category: "Western",
    difficulty: "Easy",
    time: 45,
    tags: ["Dinner", "Warm"],
    equipment: ["Pasta Pot", "Baking Dish"],
    ingredients: [
      { name: "Ziti Pasta", amount: "300g" },
      { name: "Ricotta Cheese", amount: "1 cup" },
      { name: "Marinara Sauce", amount: "2 cups" },
      { name: "Mozzarella", amount: "1 cup" },
      { name: "Parmesan", amount: "1/4 cup" }
    ],
    optionalIngredients: [
      { name: "Italian Sausage", amount: "2 links, cooked" }
    ],
    steps: [
      { desc: "Cook pasta al dente. Drain.", heat: "High", time: "10 mins" },
      { desc: "Mix pasta with ricotta and half the sauce.", heat: null, time: "5 mins" },
      { desc: "Layer in baking dish with remaining sauce and mozzarella.", heat: null, time: "5 mins" },
      { desc: "Bake at 190°C until bubbly and golden.", heat: "Medium", time: "20 mins" }
    ]
  },
  {
    id: 48,
    name: "Beef with Oyster Sauce",
    source: "Stir Fry Classic",
    category: "Chinese",
    difficulty: "Easy",
    time: 20,
    tags: ["Lunch", "Dinner", "Quick"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Beef Flank", amount: "300g" },
      { name: "Oyster Sauce", amount: "3 tbsp" },
      { name: "Onion", amount: "1 sliced" },
      { name: "Ginger/Garlic", amount: "1 tsp each" },
      { name: "Cornstarch", amount: "1 tsp" }
    ],
    optionalIngredients: [
      { name: "Straw Mushrooms", amount: "1/2 cup" }
    ],
    steps: [
      { desc: "Marinate beef with soy sauce and cornstarch.", heat: null, time: "10 mins" },
      { desc: "Stir-fry beef at high heat until browned. Remove.", heat: "High", time: "3 mins" },
      { desc: "Sauté onions, ginger, and garlic.", heat: "Medium", time: "3 mins" },
      { desc: "Add beef and oyster sauce. Toss quickly.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 49,
    name: "Eggplant Parmigiana",
    source: "Italian Classic",
    category: "Western",
    difficulty: "Medium",
    time: 60,
    tags: ["Dinner", "Vegetarian"],
    equipment: ["Baking Dish", "Skillet"],
    ingredients: [
      { name: "Eggplant", amount: "2 large, sliced" },
      { name: "Marinara Sauce", amount: "2 cups" },
      { name: "Mozzarella", amount: "1 cup" },
      { name: "Parmesan", amount: "1/2 cup" },
      { name: "Flour", amount: "for dredging" }
    ],
    optionalIngredients: [
      { name: "Fresh Basil", amount: "1 handful" }
    ],
    steps: [
      { desc: "Dredge eggplant in flour and fry until golden.", heat: "Medium", time: "20 mins" },
      { desc: "Layer sauce, eggplant, and cheese in baking dish.", heat: null, time: "10 mins" },
      { desc: "Repeat layers. Bake at 190°C.", heat: "Medium", time: "25 mins" },
      { desc: "Let rest for 5 mins before serving.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 50,
    name: "Sesame Chicken",
    source: "Takeout Favorite",
    category: "Chinese",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok", "Mixing Bowl"],
    ingredients: [
      { name: "Chicken Breast", amount: "300g" },
      { name: "Sesame Seeds", amount: "2 tbsp" },
      { name: "Honey", amount: "2 tbsp" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Cornstarch", amount: "for coating" }
    ],
    optionalIngredients: [
      { name: "Red Pepper Flakes", amount: "1 pinch" }
    ],
    steps: [
      { desc: "Coat chicken in starch and fry until crispy.", heat: "High", time: "10 mins" },
      { desc: "Heat honey and soy sauce in wok until bubbly.", heat: "Medium", time: "3 mins" },
      { desc: "Toss chicken in sauce. Add sesame seeds.", heat: "Medium", time: "2 mins" },
      { desc: "Serve immediately over rice.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 51,
    name: "Clam Chowder",
    source: "New England Style",
    category: "Western",
    difficulty: "Medium",
    time: 40,
    tags: ["Lunch", "Warm"],
    equipment: ["Soup Pot"],
    ingredients: [
      { name: "Clams", amount: "1 can or 1 lb fresh" },
      { name: "Potatoes", amount: "2 cubed" },
      { name: "Bacon", amount: "2 strips, diced" },
      { name: "Heavy Cream", amount: "1 cup" },
      { name: "Onion", amount: "1 diced" }
    ],
    optionalIngredients: [
      { name: "Celery", amount: "1 stalk" }
    ],
    steps: [
      { desc: "Fry bacon until crispy. Add onions and sauté.", heat: "Medium", time: "5 mins" },
      { desc: "Add potatoes and clam juice. Simmer until tender.", heat: "Medium", time: "15 mins" },
      { desc: "Stir in cream and clams. Heat through.", heat: "Low", time: "10 mins" },
      { desc: "Season with salt and lots of black pepper.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 52,
    name: "Twice Cooked Pork",
    source: "Szechuan Classic",
    category: "Chinese",
    difficulty: "Medium",
    time: 40,
    tags: ["Dinner"],
    equipment: ["Wok", "Pot"],
    ingredients: [
      { name: "Pork Belly", amount: "300g" },
      { name: "Leek", amount: "1 large, sliced" },
      { name: "Doubanjiang", amount: "1 tbsp" },
      { name: "Sweet Bean Sauce", amount: "1 tbsp" },
      { name: "Ginger", amount: "3 slices" }
    ],
    optionalIngredients: [
      { name: "Green Bell Pepper", amount: "1/2" }
    ],
    steps: [
      { desc: "Boil pork belly with ginger for 20 mins. Cool and slice thin.", heat: "High", time: "25 mins" },
      { desc: "Fry pork slices until they start to curl.", heat: "Medium", time: "5 mins" },
      { desc: "Add sauces and leeks. Stir-fry quickly.", heat: "High", time: "5 mins" },
      { desc: "Serve hot.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 53,
    name: "Beef Wellington",
    source: "Luxury Classic",
    category: "Western",
    difficulty: "Hard",
    time: 120,
    tags: ["Dinner", "Special"],
    equipment: ["Oven", "Baking Sheet", "Plastic Wrap"],
    ingredients: [
      { name: "Beef Fillet", amount: "500g" },
      { name: "Puff Pastry", amount: "1 sheet" },
      { name: "Mushroom Duxelles", amount: "1 cup" },
      { name: "Prosciutto", amount: "4-6 slices" },
      { name: "Egg Wash", amount: "1 egg" }
    ],
    optionalIngredients: [
      { name: "English Mustard", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Sear beef and brush with mustard. Chill.", heat: "High", time: "10 mins" },
      { desc: "Wrap beef in duxelles and prosciutto using plastic wrap. Chill.", heat: null, time: "30 mins" },
      { desc: "Wrap in puff pastry. Brush with egg wash.", heat: null, time: "10 mins" },
      { desc: "Bake at 200°C for 25-30 mins.", heat: "High", time: "30 mins" }
    ]
  },
  {
    id: 54,
    name: "Salt and Pepper Squid",
    source: "Cantonese Style",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Appetizer", "Snack"],
    equipment: ["Wok or Deep Fryer"],
    ingredients: [
      { name: "Squid Rings", amount: "300g" },
      { name: "Cornstarch", amount: "1/2 cup" },
      { name: "Szechuan Pepper/Salt", amount: "1 tbsp" },
      { name: "Red Chili", amount: "1 sliced" },
      { name: "Garlic", amount: "2 cloves, minced" }
    ],
    optionalIngredients: [
      { name: "Cilantro", amount: "for garnish" }
    ],
    steps: [
      { desc: "Coat squid in cornstarch mixed with salt/pepper.", heat: null, time: "5 mins" },
      { desc: "Deep fry squid until golden. Drain.", heat: "High", time: "5 mins" },
      { desc: "Sauté garlic and chilies in a clean wok.", heat: "High", time: "2 mins" },
      { desc: "Toss squid back in and serve hot.", heat: "High", time: "2 mins" }
    ]
  },
  {
    id: 55,
    name: "Chicken Pot Pie",
    source: "American Comfort",
    category: "Western",
    difficulty: "Medium",
    time: 60,
    tags: ["Dinner", "Warm"],
    equipment: ["Pie Dish", "Oven"],
    ingredients: [
      { name: "Cooked Chicken", amount: "2 cups" },
      { name: "Frozen Peas/Carrots", amount: "1 cup" },
      { name: "Pie Crust", amount: "2 sheets" },
      { name: "Chicken Gravy", amount: "2 cups" },
      { name: "Onion", amount: "1 diced" }
    ],
    optionalIngredients: [
      { name: "Potatoes", amount: "1/2 cup, diced" }
    ],
    steps: [
      { desc: "Sauté onions and mix with chicken and veggies.", heat: "Medium", time: "5 mins" },
      { desc: "Add gravy and simmer for 5 mins.", heat: "Medium", time: "5 mins" },
      { desc: "Place in pie crust, cover with top crust.", heat: null, time: "10 mins" },
      { desc: "Bake at 200°C for 30-35 mins.", heat: "High", time: "35 mins" }
    ]
  },
  {
    id: 56,
    name: "Drunken Chicken",
    source: "Shaoxing Specialty",
    category: "Chinese",
    difficulty: "Medium",
    time: 120,
    tags: ["Dinner", "Light"],
    equipment: ["Pot", "Container"],
    ingredients: [
      { name: "Chicken Thighs", amount: "500g" },
      { name: "Shaoxing Wine", amount: "1 cup" },
      { name: "Chicken Broth", amount: "1 cup" },
      { name: "Ginger/Scallion", amount: "for poaching" },
      { name: "Wolfberries", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Rock Sugar", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Poach chicken in water with ginger/scallion until cooked.", heat: "Medium", time: "20 mins" },
      { desc: "Shock in ice water to tighten skin.", heat: null, time: "10 mins" },
      { desc: "Submerge in wine/broth mixture. Refrigerate for 24h.", heat: null, time: "5 mins" },
      { desc: "Slice and serve cold.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 57,
    name: "Gnocchi with Sage Butter",
    source: "Italian Simple",
    category: "Western",
    difficulty: "Easy",
    time: 20,
    tags: ["Lunch", "Dinner", "Quick"],
    equipment: ["Pot", "Skillet"],
    ingredients: [
      { name: "Potato Gnocchi", amount: "400g" },
      { name: "Butter", amount: "4 tbsp" },
      { name: "Fresh Sage", amount: "10 leaves" },
      { name: "Parmesan", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Lemon Zest", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Boil gnocchi until they float. Drain.", heat: "High", time: "5 mins" },
      { desc: "Brown butter in skillet until nutty. Add sage.", heat: "Medium", time: "5 mins" },
      { desc: "Toss gnocchi in sage butter until slightly crispy.", heat: "Medium", time: "5 mins" },
      { desc: "Serve with plenty of parmesan.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 58,
    name: "Dry Fried Green Beans",
    source: "Szechuan Classic",
    category: "Chinese",
    difficulty: "Medium",
    time: 20,
    tags: ["Lunch", "Dinner", "Vegetarian"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Green Beans", amount: "300g" },
      { name: "Minced Pork (optional)", amount: "50g" },
      { name: "Sui Mi Ya Cai", amount: "1 tbsp" },
      { name: "Dried Chilies", amount: "5 pieces" },
      { name: "Garlic", amount: "2 cloves, minced" }
    ],
    optionalIngredients: [
      { name: "Sesame Oil", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Fry green beans in oil until skin is puckered. Drain.", heat: "High", time: "8 mins" },
      { desc: "Sauté garlic, chilies, and pork.", heat: "High", time: "5 mins" },
      { desc: "Add beans and Ya Cai. Toss over high heat.", heat: "High", time: "3 mins" },
      { desc: "Season and serve.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 59,
    name: "Coquilles Saint-Jacques",
    source: "French Seafood",
    category: "Western",
    difficulty: "Hard",
    time: 45,
    tags: ["Dinner", "Special"],
    equipment: ["Scallop Shells or Small Dishes", "Oven"],
    ingredients: [
      { name: "Sea Scallops", amount: "8 pieces" },
      { name: "Mushrooms", amount: "1/2 cup, minced" },
      { name: "White Wine", amount: "1/4 cup" },
      { name: "Heavy Cream", amount: "1/2 cup" },
      { name: "Gruyere Cheese", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Breadcrumbs", amount: "2 tbsp" }
    ],
    steps: [
      { desc: "Poach scallops in wine for 2 mins. Remove.", heat: "Medium", time: "5 mins" },
      { desc: "Make sauce with cream, wine liquid, and mushrooms.", heat: "Medium", time: "10 mins" },
      { desc: "Place scallops in shells, cover with sauce and cheese.", heat: null, time: "5 mins" },
      { desc: "Broil until golden and bubbly.", heat: "High", time: "5 mins" }
    ]
  },
  {
    id: 60,
    name: "Congee (Rice Porridge)",
    source: "Asian Comfort",
    category: "Chinese",
    difficulty: "Easy",
    time: 60,
    tags: ["Breakfast", "Warm"],
    equipment: ["Large Pot"],
    ingredients: [
      { name: "Rice", amount: "1 cup" },
      { name: "Water or Broth", amount: "8 cups" },
      { name: "Ginger", amount: "2 slices" },
      { name: "Century Egg (optional)", amount: "1" },
      { name: "Green Onions", amount: "for garnish" }
    ],
    optionalIngredients: [
      { name: "Fried Dough Stick (You Tiao)", amount: "1" }
    ],
    steps: [
      { desc: "Bring rice and liquid to a boil.", heat: "High", time: "10 mins" },
      { desc: "Simmer low, stirring occasionally, until creamy.", heat: "Low", time: "45 mins" },
      { desc: "Add ginger and choice of toppings (pork, fish, egg).", heat: "Low", time: "5 mins" },
      { desc: "Serve hot with green onions.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 61,
    name: "Eggplant Lasagna",
    source: "Healthy Italian",
    category: "Western",
    difficulty: "Medium",
    time: 75,
    tags: ["Dinner", "Vegetarian"],
    equipment: ["Baking Dish", "Skillet"],
    ingredients: [
      { name: "Eggplant", amount: "2 large" },
      { name: "Ricotta", amount: "1 cup" },
      { name: "Marinara Sauce", amount: "2 cups" },
      { name: "Mozzarella", amount: "1 cup" },
      { name: "Egg", amount: "1" }
    ],
    optionalIngredients: [
      { name: "Spinach", amount: "1 cup" }
    ],
    steps: [
      { desc: "Slice eggplant and grill or roast until soft.", heat: "High", time: "20 mins" },
      { desc: "Mix ricotta with egg and optional spinach.", heat: null, time: "5 mins" },
      { desc: "Layer sauce, eggplant, and ricotta mixture.", heat: null, time: "10 mins" },
      { desc: "Top with mozzarella and bake at 190°C.", heat: "Medium", time: "30 mins" }
    ]
  },
  {
    id: 62,
    name: "Red Cooked Fish",
    source: "Family Style",
    category: "Chinese",
    difficulty: "Medium",
    time: 30,
    tags: ["Dinner"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Whole Fish or Fillets", amount: "500g" },
      { name: "Dark Soy Sauce", amount: "2 tbsp" },
      { name: "Ginger/Garlic", amount: "1 tbsp each" },
      { name: "Sugar", amount: "1 tbsp" },
      { name: "Star Anise", amount: "1 piece" }
    ],
    optionalIngredients: [
      { name: "Shiitake Mushrooms", amount: "4" }
    ],
    steps: [
      { desc: "Fry fish in wok until skin is golden on both sides.", heat: "High", time: "10 mins" },
      { desc: "Add ginger, garlic, and mushrooms.", heat: "Medium", time: "3 mins" },
      { desc: "Add soy sauce, sugar, anise, and a cup of water.", heat: "Medium", time: "15 mins" },
      { desc: "Baste fish with sauce until liquid reduces.", heat: "Medium", time: "5 mins" }
    ]
  },
  {
    id: 63,
    name: "Beef Tartare",
    source: "French Bistro",
    category: "Western",
    difficulty: "Hard",
    time: 30,
    tags: ["Appetizer", "Special"],
    equipment: ["Sharp Knife", "Mixing Bowl"],
    ingredients: [
      { name: "Beef Tenderloin", amount: "200g, very fresh" },
      { name: "Capers", amount: "1 tbsp" },
      { name: "Shallots", amount: "1 tbsp, minced" },
      { name: "Egg Yolk", amount: "1" },
      { name: "Dijon Mustard", amount: "1 tsp" }
    ],
    optionalIngredients: [
      { name: "Cornichons", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Hand-mince the beef into very small cubes.", heat: null, time: "15 mins" },
      { desc: "Mix with capers, shallots, mustard, and oil.", heat: null, time: "5 mins" },
      { desc: "Season with salt and pepper to taste.", heat: null, time: "2 mins" },
      { desc: "Shape into a disk and top with raw egg yolk.", heat: null, time: "3 mins" }
    ]
  },
  {
    id: 64,
    name: "Zha Jiang Mian",
    source: "Beijing Soul Food",
    category: "Chinese",
    difficulty: "Medium",
    time: 40,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok", "Noodle Pot"],
    ingredients: [
      { name: "Wheat Noodles", amount: "200g" },
      { name: "Ground Pork", amount: "200g" },
      { name: "Sweet Bean Sauce", amount: "2 tbsp" },
      { name: "Soy Bean Paste", amount: "2 tbsp" },
      { name: "Cucumber", amount: "1 julienned" }
    ],
    optionalIngredients: [
      { name: "Radish", amount: "1/4 cup, julienned" }
    ],
    steps: [
      { desc: "Fry ground pork until fat renders.", heat: "Medium", time: "10 mins" },
      { desc: "Add bean pastes and a little water. Simmer until thick.", heat: "Low", time: "15 mins" },
      { desc: "Cook noodles and drain.", heat: "High", time: "5 mins" },
      { desc: "Top noodles with sauce and fresh veggies.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 65,
    name: "Clams in White Wine",
    source: "Italian Seafood",
    category: "Western",
    difficulty: "Easy",
    time: 20,
    tags: ["Dinner", "Quick"],
    equipment: ["Large Pan with Lid"],
    ingredients: [
      { name: "Clams", amount: "1 lb" },
      { name: "White Wine", amount: "1/2 cup" },
      { name: "Garlic", amount: "3 cloves, sliced" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Parsley", amount: "1 handful" }
    ],
    optionalIngredients: [
      { name: "Chili Flakes", amount: "1/4 tsp" }
    ],
    steps: [
      { desc: "Sauté garlic and chili flakes in butter.", heat: "Medium", time: "3 mins" },
      { desc: "Add clams and white wine. Cover with lid.", heat: "High", time: "5 mins" },
      { desc: "Steam until all clams have opened.", heat: "High", time: "5 mins" },
      { desc: "Garnish with parsley and serve with bread.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 66,
    name: "Cereal Prawns",
    source: "Singapore Signature",
    category: "Chinese",
    difficulty: "Hard",
    time: 30,
    tags: ["Dinner", "Special"],
    equipment: ["Wok", "Spatula"],
    ingredients: [
      { name: "Large Prawns", amount: "300g" },
      { name: "Nestum Cereal", amount: "1 cup" },
      { name: "Curry Leaves", amount: "2 sprigs" },
      { name: "Chili Padi", amount: "2" },
      { name: "Butter", amount: "30g" }
    ],
    optionalIngredients: [
      { name: "Milk Powder", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Deep fry prawns until crispy. Drain.", heat: "High", time: "5 mins" },
      { desc: "Melt butter. Fry curry leaves and chilies until fragrant.", heat: "Medium", time: "3 mins" },
      { desc: "Add cereal and milk powder. Toast until golden.", heat: "Low", time: "5 mins" },
      { desc: "Toss prawns in cereal mixture until coated.", heat: "Low", time: "2 mins" }
    ]
  },
  {
    id: 67,
    name: "Beef Stroganoff",
    source: "Russian-Western",
    category: "Western",
    difficulty: "Medium",
    time: 30,
    tags: ["Dinner"],
    equipment: ["Large Skillet"],
    ingredients: [
      { name: "Beef Sirloin", amount: "400g, sliced" },
      { name: "Mushrooms", amount: "1 cup, sliced" },
      { name: "Sour Cream", amount: "1/2 cup" },
      { name: "Beef Broth", amount: "1/2 cup" },
      { name: "Egg Noodles", amount: "200g" }
    ],
    optionalIngredients: [
      { name: "Dijon Mustard", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Sear beef strips quickly and remove.", heat: "High", time: "5 mins" },
      { desc: "Sauté mushrooms and onions in the same pan.", heat: "Medium", time: "5 mins" },
      { desc: "Add broth and sour cream. Simmer to thicken.", heat: "Low", time: "5 mins" },
      { desc: "Return beef to pan and serve over noodles.", heat: "Low", time: "2 mins" }
    ]
  },
  {
    id: 68,
    name: "Ants Climbing a Tree",
    source: "Szechuan Classic",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Bean Thread Vermicelli", amount: "100g" },
      { name: "Minced Pork", amount: "150g" },
      { name: "Doubanjiang", amount: "1 tbsp" },
      { name: "Ginger/Garlic", amount: "1 tbsp each" },
      { name: "Chicken Broth", amount: "1 cup" }
    ],
    optionalIngredients: [
      { name: "Chili Oil", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Soak noodles until soft. Cut into shorter lengths.", heat: null, time: "10 mins" },
      { desc: "Fry pork with aromatics and bean paste.", heat: "High", time: "5 mins" },
      { desc: "Add broth and noodles. Stir until liquid is gone.", heat: "Medium", time: "5 mins" },
      { desc: "Toss with green onions and serve.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 69,
    name: "Coq au Vin",
    source: "French Classic",
    category: "Western",
    difficulty: "Hard",
    time: 120,
    tags: ["Dinner", "Special"],
    equipment: ["Dutch Oven"],
    ingredients: [
      { name: "Chicken Thighs", amount: "4 pieces" },
      { name: "Red Wine", amount: "2 cups" },
      { name: "Bacon Lardons", amount: "100g" },
      { name: "Mushrooms", amount: "1 cup" },
      { name: "Pearl Onions", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Brandy", amount: "2 tbsp" }
    ],
    steps: [
      { desc: "Fry bacon and brown chicken in its fat. Remove.", heat: "High", time: "15 mins" },
      { desc: "Sauté veggies. Add wine and deglaze.", heat: "Medium", time: "10 mins" },
      { desc: "Return chicken. Simmer low for 1.5 hours.", heat: "Low", time: "90 mins" },
      { desc: "Thicken with flour-butter paste at the end.", heat: "Medium", time: "5 mins" }
    ]
  },
  {
    id: 70,
    name: "Kung Pao Tofu",
    source: "Vegetarian Szechuan",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Lunch", "Dinner", "Vegetarian"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Extra Firm Tofu", amount: "1 block, cubed" },
      { name: "Peanuts", amount: "1/4 cup" },
      { name: "Dried Chilies", amount: "6" },
      { name: "Kung Pao Sauce", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Zucchini", amount: "1/2 cup, cubed" }
    ],
    steps: [
      { desc: "Fry tofu cubes until golden and crispy.", heat: "High", time: "10 mins" },
      { desc: "Sauté chilies and zucchini.", heat: "High", time: "5 mins" },
      { desc: "Add tofu, peanuts, and sauce. Toss to coat.", heat: "Medium", time: "3 mins" },
      { desc: "Serve hot with rice.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 71,
    name: "Risotto alla Milanese",
    source: "Italian Classic",
    category: "Western",
    difficulty: "Medium",
    time: 40,
    tags: ["Dinner"],
    equipment: ["Heavy Bottom Pot", "Whisk"],
    ingredients: [
      { name: "Arborio Rice", amount: "1.5 cups" },
      { name: "Saffron Threads", amount: "1 pinch" },
      { name: "Beef Broth", amount: "4 cups" },
      { name: "Parmesan", amount: "1/2 cup" },
      { name: "White Wine", amount: "1/2 cup" }
    ],
    optionalIngredients: [
      { name: "Bone Marrow", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Infuse saffron in warm broth.", heat: "Low", time: "10 mins" },
      { desc: "Toast rice in butter. Deglaze with wine.", heat: "Medium", time: "5 mins" },
      { desc: "Add broth ladle by ladle, stirring constantly.", heat: "Medium", time: "20 mins" },
      { desc: "Finish with butter and parmesan for creaminess.", heat: "Low", time: "5 mins" }
    ]
  },
  {
    id: 72,
    name: "Lion's Head Meatballs",
    source: "Shanghai Classic",
    category: "Chinese",
    difficulty: "Hard",
    time: 60,
    tags: ["Dinner", "Warm"],
    equipment: ["Clay Pot or Dutch Oven"],
    ingredients: [
      { name: "Ground Pork", amount: "500g" },
      { name: "Water Chestnuts", amount: "1/4 cup, minced" },
      { name: "Bok Choy", amount: "1 head" },
      { name: "Soy Sauce/Ginger/Sugar", amount: "for seasoning" }
    ],
    optionalIngredients: [
      { name: "Salted Duck Egg Yolk", amount: "1 per ball" }
    ],
    steps: [
      { desc: "Form large meatballs. Brown the outside in a pan.", heat: "High", time: "10 mins" },
      { desc: "Layer bok choy in pot. Place meatballs on top.", heat: null, time: "5 mins" },
      { desc: "Add broth and soy sauce. Simmer low for 45 mins.", heat: "Low", time: "45 mins" },
      { desc: "Serve with the tender greens.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 73,
    name: "Osso Buco",
    source: "Italian Luxury",
    category: "Western",
    difficulty: "Hard",
    time: 150,
    tags: ["Dinner", "Special"],
    equipment: ["Dutch Oven", "Kitchen Twine"],
    ingredients: [
      { name: "Veal Shanks", amount: "2 pieces" },
      { name: "White Wine", amount: "1 cup" },
      { name: "Canned Tomatoes", amount: "1 cup" },
      { name: "Gremolata", amount: "for topping" }
    ],
    optionalIngredients: [
      { name: "Carrots/Celery/Onion", amount: "1 cup each" }
    ],
    steps: [
      { desc: "Sear shanks until browned. Remove.", heat: "High", time: "10 mins" },
      { desc: "Sauté aromatic veggies. Add wine to deglaze.", heat: "Medium", time: "5 mins" },
      { desc: "Return meat, add tomatoes/broth. Braise for 2 hours.", heat: "Low", time: "120 mins" },
      { desc: "Top with fresh gremolata before serving.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 74,
    name: "Stir Fried Tomato with Beef",
    source: "Cantonese Home Cooking",
    category: "Chinese",
    difficulty: "Easy",
    time: 20,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Beef Strips", amount: "200g" },
      { name: "Tomatoes", amount: "3 large" },
      { name: "Ketchup", amount: "2 tbsp" },
      { name: "Sugar", amount: "1 tsp" }
    ],
    optionalIngredients: [
      { name: "Green Bell Pepper", amount: "1/2" }
    ],
    steps: [
      { desc: "Sear beef quickly and set aside.", heat: "High", time: "3 mins" },
      { desc: "Cook tomatoes until mushy and juicy.", heat: "Medium", time: "5 mins" },
      { desc: "Add beef back with ketchup and sugar.", heat: "High", time: "2 mins" },
      { desc: "Serve over white rice.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 75,
    name: "Fish Chowder",
    source: "Maritime Western",
    category: "Western",
    difficulty: "Medium",
    time: 40,
    tags: ["Lunch", "Warm"],
    equipment: ["Stock Pot"],
    ingredients: [
      { name: "White Fish Fillet", amount: "300g" },
      { name: "Potatoes", amount: "2 diced" },
      { name: "Celery/Onion", amount: "1/2 cup each" },
      { name: "Milk/Cream", amount: "2 cups" }
    ],
    optionalIngredients: [
      { name: "Old Bay Seasoning", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Sauté onions and celery in butter.", heat: "Medium", time: "5 mins" },
      { desc: "Add potatoes and broth. Simmer until soft.", heat: "Medium", time: "15 mins" },
      { desc: "Add fish and milk. Cook until fish is flaky.", heat: "Low", time: "10 mins" },
      { desc: "Season and serve hot.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 76,
    name: "Three Cup Chicken",
    source: "Taiwanese Classic",
    category: "Chinese",
    difficulty: "Medium",
    time: 30,
    tags: ["Dinner"],
    equipment: ["Wok or Clay Pot"],
    ingredients: [
      { name: "Chicken Thighs", amount: "500g" },
      { name: "Sesame Oil", amount: "1/4 cup" },
      { name: "Soy Sauce", amount: "1/4 cup" },
      { name: "Shaoxing Wine", amount: "1/4 cup" },
      { name: "Thai Basil", amount: "1 large handful" }
    ],
    optionalIngredients: [
      { name: "Whole Garlic Cloves", amount: "10" }
    ],
    steps: [
      { desc: "Fry garlic and ginger in sesame oil until golden.", heat: "Medium", time: "5 mins" },
      { desc: "Brown chicken pieces in the oil.", heat: "High", time: "8 mins" },
      { desc: "Add soy sauce and wine. Simmer until glaze is thick.", heat: "Medium", time: "15 mins" },
      { desc: "Toss in basil and serve immediately.", heat: "High", time: "1 min" }
    ]
  },
  {
    id: 77,
    name: "Quiche Lorraine",
    source: "French Brunch",
    category: "Western",
    difficulty: "Medium",
    time: 60,
    tags: ["Breakfast", "Lunch"],
    equipment: ["Pie Dish", "Oven"],
    ingredients: [
      { name: "Pie Crust", amount: "1 sheet" },
      { name: "Bacon", amount: "150g" },
      { name: "Eggs", amount: "3" },
      { name: "Heavy Cream", amount: "1 cup" },
      { name: "Swiss Cheese", amount: "1 cup" }
    ],
    optionalIngredients: [
      { name: "Nutmeg", amount: "1 pinch" }
    ],
    steps: [
      { desc: "Blind bake the crust for 10 mins.", heat: "High", time: "15 mins" },
      { desc: "Fry bacon until crispy. Spread over crust with cheese.", heat: "Medium", time: "10 mins" },
      { desc: "Whisk eggs and cream. Pour into crust.", heat: null, time: "5 mins" },
      { desc: "Bake at 180°C for 35 mins until set.", heat: "Medium", time: "35 mins" }
    ]
  },
  {
    id: 78,
    name: "Steamed Egg",
    source: "Chinese Home Comfort",
    category: "Chinese",
    difficulty: "Easy",
    time: 20,
    tags: ["Breakfast", "Light"],
    equipment: ["Steamer", "Shallow Bowl"],
    ingredients: [
      { name: "Eggs", amount: "2" },
      { name: "Warm Water", amount: "1.5x egg volume" },
      { name: "Minced Pork", amount: "50g" },
      { name: "Soy Sauce", amount: "1 tsp" }
    ],
    optionalIngredients: [
      { name: "Salted Egg", amount: "1/2" }
    ],
    steps: [
      { desc: "Whisk eggs with warm water and strain.", heat: null, time: "5 mins" },
      { desc: "Steam egg mixture over medium heat for 10 mins.", heat: "Medium", time: "10 mins" },
      { desc: "Sauté pork and place on top of set eggs.", heat: "Medium", time: "5 mins" },
      { desc: "Drizzle with soy sauce and serve.", heat: null, time: "1 min" }
    ]
  },
  {
    id: 79,
    name: "Penne alla Vodka",
    source: "Italian-American Classic",
    category: "Western",
    difficulty: "Medium",
    time: 25,
    tags: ["Dinner"],
    equipment: ["Pasta Pot", "Large Pan"],
    ingredients: [
      { name: "Penne Pasta", amount: "200g" },
      { name: "Vodka", amount: "1/4 cup" },
      { name: "Tomato Paste", amount: "2 tbsp" },
      { name: "Heavy Cream", amount: "1/2 cup" },
      { name: "Parmesan", amount: "1/4 cup" }
    ],
    optionalIngredients: [
      { name: "Pancetta", amount: "50g" }
    ],
    steps: [
      { desc: "Cook penne. Sauté onions in oil.", heat: "Medium", time: "10 mins" },
      { desc: "Add tomato paste and vodka. Simmer until reduced.", heat: "Medium", time: "5 mins" },
      { desc: "Stir in cream and cheese. Toss with pasta.", heat: "Low", time: "5 mins" },
      { desc: "Serve hot with extra cheese.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 80,
    name: "Lazi Ji (Chili Chicken)",
    source: "Spicy Heaven",
    category: "Chinese",
    difficulty: "Hard",
    time: 40,
    tags: ["Dinner", "Special"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Chicken Cubes", amount: "400g" },
      { name: "Dried Red Chilies", amount: "2 cups" },
      { name: "Szechuan Peppercorns", amount: "2 tbsp" },
      { name: "Ginger/Garlic", amount: "2 tbsp each" }
    ],
    optionalIngredients: [
      { name: "Sesame Seeds", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Deep fry chicken cubes until crispy and dry.", heat: "High", time: "15 mins" },
      { desc: "Fry chilies and peppercorns until fragrant.", heat: "Medium", time: "5 mins" },
      { desc: "Toss chicken back in with aromatics.", heat: "High", time: "3 mins" },
      { desc: "Serve hot.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 81,
    name: "Classic Meatloaf",
    source: "American Retro",
    category: "Western",
    difficulty: "Easy",
    time: 75,
    tags: ["Dinner", "Warm"],
    equipment: ["Loaf Pan", "Oven"],
    ingredients: [
      { name: "Ground Beef", amount: "500g" },
      { name: "Breadcrumbs", amount: "1/2 cup" },
      { name: "Egg", amount: "1" },
      { name: "Ketchup", amount: "1/4 cup" },
      { name: "Onion", amount: "1/2 diced" }
    ],
    optionalIngredients: [
      { name: "Worcestershire Sauce", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Mix all ingredients except half the ketchup.", heat: null, time: "10 mins" },
      { desc: "Press into loaf pan. Top with remaining ketchup.", heat: null, time: "5 mins" },
      { desc: "Bake at 180°C for 60 mins.", heat: "Medium", time: "60 mins" },
      { desc: "Rest for 10 mins before slicing.", heat: null, time: "10 mins" }
    ]
  },
  {
    id: 82,
    name: "Black Pepper Beef",
    source: "Zi Char Style",
    category: "Chinese",
    difficulty: "Medium",
    time: 20,
    tags: ["Lunch", "Dinner", "Quick"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Beef Strips", amount: "300g" },
      { name: "Black Pepper", amount: "1 tbsp" },
      { name: "Capsicum", amount: "1 sliced" },
      { name: "Oyster Sauce", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Onion", amount: "1/2 sliced" }
    ],
    steps: [
      { desc: "Sear beef at very high heat. Remove.", heat: "High", time: "3 mins" },
      { desc: "Stir-fry capsicum and onion.", heat: "High", time: "5 mins" },
      { desc: "Add beef and black pepper. Toss with sauce.", heat: "High", time: "3 mins" },
      { desc: "Serve hot.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 83,
    name: "Chicken Marsala",
    source: "Italian-American",
    category: "Western",
    difficulty: "Medium",
    time: 35,
    tags: ["Dinner"],
    equipment: ["Large Skillet"],
    ingredients: [
      { name: "Chicken Cutlets", amount: "2 pieces" },
      { name: "Marsala Wine", amount: "1/2 cup" },
      { name: "Mushrooms", amount: "1 cup" },
      { name: "Butter", amount: "2 tbsp" }
    ],
    optionalIngredients: [
      { name: "Thyme", amount: "1 sprig" }
    ],
    steps: [
      { desc: "Flour and sear chicken. Remove.", heat: "Medium", time: "10 mins" },
      { desc: "Sauté mushrooms in butter.", heat: "Medium", time: "5 mins" },
      { desc: "Add Marsala and simmer until thick.", heat: "Medium", time: "10 mins" },
      { desc: "Return chicken to pan.", heat: "Low", time: "5 mins" }
    ]
  },
  {
    id: 84,
    name: "Mongolian Beef",
    source: "American-Chinese",
    category: "Chinese",
    difficulty: "Easy",
    time: 20,
    tags: ["Lunch", "Dinner", "Quick"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Beef Flank", amount: "300g" },
      { name: "Cornstarch", amount: "2 tbsp" },
      { name: "Brown Sugar", amount: "2 tbsp" },
      { name: "Soy Sauce", amount: "3 tbsp" }
    ],
    optionalIngredients: [
      { name: "Green Onions", amount: "1 bunch" }
    ],
    steps: [
      { desc: "Coat beef in starch and flash fry. Drain.", heat: "High", time: "5 mins" },
      { desc: "Simmer soy sauce and sugar until thick.", heat: "Medium", time: "5 mins" },
      { desc: "Toss beef in the sauce.", heat: "High", time: "2 mins" },
      { desc: "Serve over rice.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 85,
    name: "Beef Carpaccio",
    source: "Italian Appetizer",
    category: "Western",
    difficulty: "Hard",
    time: 20,
    tags: ["Appetizer", "Special"],
    equipment: ["Sharp Knife"],
    ingredients: [
      { name: "Beef Fillet", amount: "200g" },
      { name: "Arugula", amount: "1 cup" },
      { name: "Parmesan", amount: "1/4 cup" }
    ],
    optionalIngredients: [
      { name: "Truffle Oil", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Slice beef paper thin and arrange on plate.", heat: null, time: "10 mins" },
      { desc: "Drizzle with oil and lemon.", heat: null, time: "5 mins" },
      { desc: "Top with arugula and cheese.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 86,
    name: "Mapo Eggplant",
    source: "Vegetarian Spicy",
    category: "Chinese",
    difficulty: "Medium",
    time: 30,
    tags: ["Lunch", "Dinner", "Vegetarian"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Eggplant", amount: "2 cubed" },
      { name: "Doubanjiang", amount: "1.5 tbsp" },
      { name: "Garlic/Ginger", amount: "1 tbsp each" }
    ],
    optionalIngredients: [
      { name: "Peppercorn Powder", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Fry eggplant until soft. Drain.", heat: "High", time: "10 mins" },
      { desc: "Sauté aromatics and bean paste.", heat: "Medium", time: "5 mins" },
      { desc: "Add eggplant and broth. Toss.", heat: "Medium", time: "10 mins" },
      { desc: "Serve hot.", heat: null, time: "2 mins" }
    ]
  },
  {
    id: 87,
    name: "Cobb Salad",
    source: "American Classic",
    category: "Western",
    difficulty: "Easy",
    time: 30,
    tags: ["Lunch", "Light"],
    equipment: ["Platter"],
    ingredients: [
      { name: "Romaine", amount: "2 cups" },
      { name: "Chicken", amount: "1 breast" },
      { name: "Egg", amount: "2" },
      { name: "Bacon", amount: "2 strips" }
    ],
    optionalIngredients: [
      { name: "Avocado", amount: "1" }
    ],
    steps: [
      { desc: "Chop all ingredients.", heat: null, time: "10 mins" },
      { desc: "Arrange in rows on platter.", heat: null, time: "15 mins" },
      { desc: "Drizzle with dressing.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 88,
    name: "Minced Meat Tofu",
    source: "Cantonese Home",
    category: "Chinese",
    difficulty: "Easy",
    time: 20,
    tags: ["Lunch", "Dinner"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Egg Tofu", amount: "2 tubes" },
      { name: "Minced Pork", amount: "100g" }
    ],
    optionalIngredients: [
      { name: "Dried Shrimp", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Slice and fry tofu until golden.", heat: "High", time: "10 mins" },
      { desc: "Fry pork with oyster sauce.", heat: "Medium", time: "5 mins" },
      { desc: "Pour over tofu.", heat: "Medium", time: "5 mins" }
    ]
  },
  {
    id: 89,
    name: "Beef Bourguignon",
    source: "French Hearty",
    category: "Western",
    difficulty: "Hard",
    time: 180,
    tags: ["Dinner", "Special"],
    equipment: ["Dutch Oven"],
    ingredients: [
      { name: "Beef Chuck", amount: "1kg" },
      { name: "Red Wine", amount: "750ml" }
    ],
    optionalIngredients: [
      { name: "Pearl Onions", amount: "1 cup" }
    ],
    steps: [
      { desc: "Sear beef and bacon.", heat: "High", time: "15 mins" },
      { desc: "Add wine and broth. Simmer low.", heat: "Low", time: "150 mins" },
      { desc: "Add onions and mushrooms.", heat: "Medium", time: "15 mins" }
    ]
  },
  {
    id: 90,
    name: "Clay Pot Rice",
    source: "Cantonese Classic",
    category: "Chinese",
    difficulty: "Medium",
    time: 45,
    tags: ["Dinner", "Warm"],
    equipment: ["Clay Pot"],
    ingredients: [
      { name: "Rice", amount: "1 cup" },
      { name: "Chinese Sausage", amount: "2" }
    ],
    optionalIngredients: [
      { name: "Salted Fish", amount: "1 piece" }
    ],
    steps: [
      { desc: "Cook rice until 70% done.", heat: "High", time: "15 mins" },
      { desc: "Add sausage and chicken. Simmer low.", heat: "Low", time: "25 mins" },
      { desc: "Drizzle with soy sauce.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 91,
    name: "Chicken Cordon Bleu",
    source: "European Classic",
    category: "Western",
    difficulty: "Hard",
    time: 50,
    tags: ["Dinner"],
    equipment: ["Skillet", "Oven"],
    ingredients: [
      { name: "Chicken", amount: "2" },
      { name: "Ham", amount: "2 slices" },
      { name: "Swiss", amount: "2 slices" }
    ],
    optionalIngredients: [
      { name: "Mustard", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Roll chicken with ham and cheese.", heat: null, time: "15 mins" },
      { desc: "Bread and sear until golden.", heat: "Medium", time: "15 mins" },
      { desc: "Finish in oven.", heat: "Medium", time: "20 mins" }
    ]
  },
  {
    id: 92,
    name: "Bok Choy with Garlic",
    source: "Healthy Chinese",
    category: "Chinese",
    difficulty: "Easy",
    time: 10,
    tags: ["Lunch", "Dinner", "Vegetarian"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Bok Choy", amount: "1 lb" },
      { name: "Garlic", amount: "4 cloves" }
    ],
    optionalIngredients: [
      { name: "Oyster Sauce", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Sauté garlic.", heat: "Medium", time: "2 mins" },
      { desc: "Toss bok choy at high heat.", heat: "High", time: "5 mins" },
      { desc: "Serve hot.", heat: null, time: "1 min" }
    ]
  },
  {
    id: 93,
    name: "Linguine Vongole",
    source: "Italian Coastal",
    category: "Western",
    difficulty: "Medium",
    time: 25,
    tags: ["Dinner"],
    equipment: ["Pasta Pot"],
    ingredients: [
      { name: "Linguine", amount: "200g" },
      { name: "Clams", amount: "1 lb" }
    ],
    optionalIngredients: [
      { name: "Chili Flakes", amount: "1/4 tsp" }
    ],
    steps: [
      { desc: "Cook pasta.", heat: "High", time: "10 mins" },
      { desc: "Steam clams in wine and garlic.", heat: "High", time: "10 mins" },
      { desc: "Toss together.", heat: "Medium", time: "5 mins" }
    ]
  },
  {
    id: 94,
    name: "General Tso's Shrimp",
    source: "Takeout Deluxe",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Dinner"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Shrimp", amount: "300g" }
    ],
    optionalIngredients: [
      { name: "Sesame Seeds", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Sear shrimp.", heat: "High", time: "5 mins" },
      { desc: "Toss with sauce.", heat: "High", time: "10 mins" },
      { desc: "Serve over rice.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 95,
    name: "Beef Carpaccio with Truffle",
    source: "High End Western",
    category: "Western",
    difficulty: "Hard",
    time: 20,
    tags: ["Appetizer", "Special"],
    equipment: ["Sharp Knife"],
    ingredients: [
      { name: "Beef", amount: "200g" }
    ],
    optionalIngredients: [
      { name: "Truffle Shavings", amount: "few" }
    ],
    steps: [
      { desc: "Slice paper thin.", heat: null, time: "10 mins" },
      { desc: "Drizzle with truffle oil.", heat: null, time: "10 mins" }
    ]
  },
  {
    id: 96,
    name: "Garlic Pea Shoots",
    source: "Chinese Greens",
    category: "Chinese",
    difficulty: "Easy",
    time: 10,
    tags: ["Lunch", "Dinner", "Vegetarian"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Pea Shoots", amount: "300g" }
    ],
    optionalIngredients: [
      { name: "Wolfberries", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Sauté garlic.", heat: "Medium", time: "2 mins" },
      { desc: "Toss shoots at high heat.", heat: "High", time: "5 mins" }
    ]
  },
  {
    id: 97,
    name: "Pork Scaloppine",
    source: "Italian Simple",
    category: "Western",
    difficulty: "Easy",
    time: 20,
    tags: ["Dinner", "Quick"],
    equipment: ["Skillet"],
    ingredients: [
      { name: "Pork", amount: "300g" }
    ],
    optionalIngredients: [
      { name: "Capers", amount: "1 tbsp" }
    ],
    steps: [
      { desc: "Sear pork slices.", heat: "Medium", time: "10 mins" },
      { desc: "Simmer in lemon wine sauce.", heat: "Medium", time: "10 mins" }
    ]
  },
  {
    id: 98,
    name: "Shrimp Scrambled Eggs",
    source: "Cantonese",
    category: "Chinese",
    difficulty: "Medium",
    time: 15,
    tags: ["Breakfast", "Quick"],
    equipment: ["Wok"],
    ingredients: [
      { name: "Eggs", amount: "3" },
      { name: "Shrimp", amount: "100g" }
    ],
    optionalIngredients: [
      { name: "Wine", amount: "1 tsp" }
    ],
    steps: [
      { desc: "Sauté shrimp.", heat: "High", time: "3 mins" },
      { desc: "Fold in eggs gently.", heat: "Low", time: "10 mins" }
    ]
  },
  {
    id: 99,
    name: "Sio Bak (Roast Pork)",
    source: "Chinese Roasted",
    category: "Chinese",
    difficulty: "Hard",
    time: 120,
    tags: ["Dinner", "Special"],
    equipment: ["Oven"],
    ingredients: [
      { name: "Pork Belly", amount: "500g" }
    ],
    optionalIngredients: [
      { name: "Mustard", amount: "for dip" }
    ],
    steps: [
      { desc: "Prick skin and season meat.", heat: null, time: "30 mins" },
      { desc: "Roast with salt crust.", heat: "High", time: "45 mins" },
      { desc: "Blast heat for crackling.", heat: "High", time: "20 mins" }
    ]
  },
  {
    id: 100,
    name: "Classic Tiramisu",
    source: "Italian Dessert",
    category: "Western",
    difficulty: "Medium",
    time: 45,
    tags: ["Dessert", "Special"],
    equipment: ["Whisk"],
    ingredients: [
      { name: "Ladyfingers", amount: "20" },
      { name: "Mascarpone", amount: "250g" }
    ],
    optionalIngredients: [
      { name: "Rum", amount: "2 tbsp" }
    ],
    steps: [
      { desc: "Layer coffee-soaked fingers and cream.", heat: null, time: "30 mins" },
      { desc: "Chill and dust with cocoa.", heat: null, time: "15 mins" }
    ]
  },
  {
    id: 101,
    name: "Chicken Satay",
    source: "Southeast Asian",
    category: "Chinese",
    difficulty: "Medium",
    time: 45,
    tags: ["Dinner", "Snack"],
    equipment: ["Skewers", "Grill"],
    ingredients: [
      { name: "Chicken", amount: "300g" },
      { name: "Turmeric", amount: "1 tsp" }
    ],
    optionalIngredients: [
      { name: "Peanut Sauce", amount: "1/2 cup" }
    ],
    steps: [
      { desc: "Marinate chicken in spices.", heat: null, time: "20 mins" },
      { desc: "Thread onto skewers and grill until charred.", heat: "High", time: "20 mins" },
      { desc: "Serve with peanut sauce.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 102,
    name: "Minestrone Soup",
    source: "Italian Veggie",
    category: "Western",
    difficulty: "Easy",
    time: 40,
    tags: ["Lunch", "Warm"],
    equipment: ["Large Pot"],
    ingredients: [
      { name: "Mixed Veggies", amount: "2 cups" },
      { name: "Beans", amount: "1 can" }
    ],
    optionalIngredients: [
      { name: "Pasta Shells", amount: "1/2 cup" }
    ],
    steps: [
      { desc: "Sauté aromatics.", heat: "Medium", time: "5 mins" },
      { desc: "Simmer veggies in broth.", heat: "Medium", time: "30 mins" },
      { desc: "Serve with parmesan.", heat: null, time: "5 mins" }
    ]
  },
  {
    id: 103,
    name: "Black Bean Spare Ribs",
    source: "Dim Sum Favorite",
    category: "Chinese",
    difficulty: "Medium",
    time: 25,
    tags: ["Lunch", "Dinner"],
    equipment: ["Steamer"],
    ingredients: [
      { name: "Spare Ribs", amount: "300g" },
      { name: "Fermented Black Beans", amount: "1 tbsp" }
    ],
    optionalIngredients: [
      { name: "Red Chili", amount: "1" }
    ],
    steps: [
      { desc: "Marinate ribs with beans and garlic.", heat: null, time: "10 mins" },
      { desc: "Steam over high heat until tender.", heat: "High", time: "15 mins" }
    ]
  },
  {
    id: 104,
    name: "Spaghetti Aglio e Olio",
    source: "Naples Pantry",
    category: "Western",
    difficulty: "Easy",
    time: 15,
    tags: ["Lunch", "Quick"],
    equipment: ["Pasta Pot", "Skillet"],
    ingredients: [
      { name: "Spaghetti", amount: "200g" },
      { name: "Garlic", amount: "6 cloves" }
    ],
    optionalIngredients: [
      { name: "Parsley", amount: "handful" }
    ],
    steps: [
      { desc: "Cook pasta.", heat: "High", time: "10 mins" },
      { desc: "Fry garlic slices in oil until golden.", heat: "Low", time: "3 mins" },
      { desc: "Toss pasta in garlic oil.", heat: "Medium", time: "2 mins" }
    ]
  },
  {
    id: 105,
    name: "Shrimp Dumplings (Sui Mai)",
    source: "Dim Sum Classic",
    category: "Chinese",
    difficulty: "Hard",
    time: 50,
    tags: ["Lunch", "Special"],
    equipment: ["Steamer"],
    ingredients: [
      { name: "Ground Pork", amount: "200g" },
      { name: "Shrimp", amount: "100g" }
    ],
    optionalIngredients: [
      { name: "Roe", amount: "for garnish" }
    ],
    steps: [
      { desc: "Mix filling and wrap in wonton skins.", heat: null, time: "30 mins" },
      { desc: "Steam until cooked through.", heat: "High", time: "15 mins" },
      { desc: "Serve hot.", heat: null, time: "5 mins" }
    ]
  }
];
