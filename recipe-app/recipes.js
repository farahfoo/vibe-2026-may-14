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
      {
        desc: "Shape the ground beef into 1-inch thick patties. Season both sides with salt and pepper.",
        time: "5 mins",
        image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg"
      },
      {
        desc: "Grill the patties over medium-high heat for about 5 minutes per side for medium-rare.",
        time: "10 mins",
        image: "https://img.freepik.com/free-vector/delicious-barbecue-party-background_23-2148154133.jpg"
      },
      {
        desc: "Toast the buns on the grill and melt the cheese on top of the patties during the last minute of cooking.",
        time: "2 mins",
        image: "https://img.freepik.com/free-vector/burger-ingredients-collection_23-2148135894.jpg"
      },
      {
        desc: "Assemble your burger with lettuce, tomato, onion, and your favorite sauces.",
        time: "3 mins",
        image: "https://img.freepik.com/free-vector/flat-design-fast-food-illustrated_23-2148882885.jpg"
      }
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
      { name: "Olive Oil", amount: "2 tbsp" },
      { name: "Parmesan Cheese", amount: "Grated, to taste" }
    ],
    steps: [
      {
        desc: "Boil a large pot of salted water and cook the pasta according to package directions.",
        time: "10 mins",
        image: "https://img.freepik.com/free-vector/pasta-concept-illustration_114360-10113.jpg"
      },
      {
        desc: "While pasta cooks, sauté minced garlic in olive oil in a pan until fragrant.",
        time: "2 mins",
        image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg"
      },
      {
        desc: "Add tomato sauce and fresh basil to the pan. Simmer gently.",
        time: "3 mins",
        image: "https://img.freepik.com/free-vector/pasta-ingredients-concept_23-2148545802.jpg"
      },
      {
        desc: "Toss the cooked pasta in the sauce and serve with freshly grated Parmesan.",
        time: "1 min",
        image: "https://img.freepik.com/free-vector/flat-design-italian-food-background_23-2148154134.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Kung Pao Chicken",
    source: "Inspired by Ken Hom's Traditional Szechuan Recipes",
    heroImage: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format",
    category: "Chinese",
    difficulty: "Hard",
    time: 45,
    tags: ["Dinner"],
    ingredients: [
      { name: "Chicken Thighs", amount: "300g, cubed" },
      { name: "Peanuts", amount: "1/2 cup, roasted" },
      { name: "Dried Chilies", amount: "6-8 pieces" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Ginger", amount: "1 tbsp, sliced" },
      { name: "Scallions", amount: "2 stalks, chopped" }
    ],
    steps: [
      {
        desc: "Cube the chicken and marinate with soy sauce, ginger, and a bit of cornstarch.",
        time: "15 mins",
        image: "https://img.freepik.com/free-vector/chef-cartoon-style_23-2147515690.jpg"
      },
      {
        desc: "Stir-fry the chicken in a hot wok until golden brown. Remove and set aside.",
        time: "5 mins",
        image: "https://img.freepik.com/free-vector/flat-design-asian-food-background_23-2148154135.jpg"
      },
      {
        desc: "Sauté dried chilies, ginger, and scallions. Add the chicken back in with more soy sauce.",
        time: "3 mins",
        image: "https://img.freepik.com/free-vector/illustrated-person-cooking-food_23-2148888062.jpg"
      },
      {
        desc: "Toss in the peanuts and give it a final stir over high heat before serving.",
        time: "2 mins",
        image: "https://img.freepik.com/free-vector/chinese-food-illustrated_23-2148888063.jpg"
      }
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
      { name: "Scallions", amount: "1 stalk, sliced" },
      { name: "Vegetable Oil", amount: "2 tbsp" },
      { name: "Frozen Peas", amount: "1/4 cup" }
    ],
    steps: [
      {
        desc: "Whisk eggs and scramble them in a hot wok with oil. Remove and set aside.",
        time: "2 mins",
        image: "https://img.freepik.com/free-vector/eggs-breakfast-concept-illustration_114360-10114.jpg"
      },
      {
        desc: "Add more oil and stir-fry cold rice, breaking up any clumps.",
        time: "4 mins",
        image: "https://img.freepik.com/free-vector/illustrated-chef-cooking-food_23-2148888064.jpg"
      },
      {
        desc: "Add soy sauce, cooked eggs, scallions, and peas. Toss well over high heat.",
        time: "3 mins",
        image: "https://img.freepik.com/free-vector/flat-design-asian-food-collection_23-2148154136.jpg"
      },
      {
        desc: "Serve immediately while steaming hot.",
        time: "1 min",
        image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg"
      }
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
      { name: "Beef Flank Steak", amount: "250g, sliced" },
      { name: "Broccoli", amount: "1 head, florets" },
      { name: "Oyster Sauce", amount: "2 tbsp" },
      { name: "Garlic", amount: "3 cloves, minced" },
      { name: "Ginger", amount: "1 tsp, grated" },
      { name: "Cornstarch", amount: "1 tbsp" }
    ],
    steps: [
      {
        desc: "Slice beef thinly against the grain and toss with cornstarch and a splash of soy sauce.",
        time: "10 mins",
        image: "https://img.freepik.com/free-vector/hand-drawn-cooking-food-concept_23-2148888065.jpg"
      },
      {
        desc: "Blanch broccoli florets in boiling water for 2 minutes, then drain.",
        time: "3 mins",
        image: "https://img.freepik.com/free-vector/broccoli-illustration_114360-10115.jpg"
      },
      {
        desc: "Stir-fry beef in a hot wok until browned. Add garlic and ginger.",
        time: "4 mins",
        image: "https://img.freepik.com/free-vector/flat-design-fast-food-collection_23-2148154137.jpg"
      },
      {
        desc: "Add broccoli and oyster sauce. Stir-fry for another minute until sauce thickens.",
        time: "2 mins",
        image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg"
      }
    ]
  },
  {
    id: 6,
    name: "Caesar Salad",
    source: "Classic Caesar Recipe from Food Network",
    heroImage: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&auto=format",
    category: "Western",
    difficulty: "Easy",
    time: 10,
    tags: ["Lunch", "Light"],
    ingredients: [
      { name: "Romaine Lettuce", amount: "1 large head" },
      { name: "Croutons", amount: "1/2 cup" },
      { name: "Parmesan Cheese", amount: "1/4 cup, shaved" },
      { name: "Caesar Dressing", amount: "3 tbsp" },
      { name: "Chicken Breast", amount: "1 piece, grilled" }
    ],
    steps: [
      {
        desc: "Grill chicken breast until cooked through, then slice into strips.",
        time: "7 mins",
        image: "https://img.freepik.com/free-vector/delicious-barbecue-illustrated_23-2148154138.jpg"
      },
      {
        desc: "Chop romaine lettuce and place in a large bowl.",
        time: "2 mins",
        image: "https://img.freepik.com/free-vector/lettuce-illustration_114360-10116.jpg"
      },
      {
        desc: "Toss lettuce with croutons, Parmesan, and Caesar dressing.",
        time: "1 min",
        image: "https://img.freepik.com/free-vector/salad-bowl-concept_23-2148545803.jpg"
      }
    ]
  },
  {
    id: 7,
    name: "Steamed Fish with Soy Sauce",
    source: "Based on New York Times Cooking: Ginger-Soy Fish",
    heroImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format",
    category: "Chinese",
    difficulty: "Medium",
    time: 20,
    tags: ["Dinner", "Light"],
    ingredients: [
      { name: "White Fish Fillet", amount: "1 piece (200g)" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Fresh Ginger", amount: "2-inch piece, julienned" },
      { name: "Scallions", amount: "2 stalks, shredded" },
      { name: "Cilantro", amount: "Fresh, for garnish" },
      { name: "Sesame Oil", amount: "1 tbsp" }
    ],
    steps: [
      {
        desc: "Prepare the fish and place ginger slices on top. Setup your steamer.",
        time: "5 mins",
        image: "https://img.freepik.com/free-vector/illustrated-chef-steaming-food_23-2148888066.jpg"
      },
      {
        desc: "Steam the fish over boiling water for 10-12 minutes depending on thickness.",
        time: "12 mins",
        image: "https://img.freepik.com/free-vector/steam-concept-illustration_114360-10117.jpg"
      },
      {
        desc: "Top with fresh scallions and cilantro. Drizzle with soy sauce and hot sesame oil.",
        time: "3 mins",
        image: "https://img.freepik.com/free-vector/chinese-kitchen-illustrated_23-2148888067.jpg"
      }
    ]
  },
  {
    id: 8,
    name: "Grilled Steak",
    source: "Based on Serious Eats' Reverse Sear Method",
    heroImage: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=800&auto=format",
    category: "Western",
    difficulty: "Medium",
    time: 20,
    tags: ["Dinner"],
    ingredients: [
      { name: "Ribeye or Striploin Steak", amount: "250g" },
      { name: "Kosher Salt", amount: "To taste" },
      { name: "Black Pepper", amount: "To taste" },
      { name: "Garlic", amount: "2 cloves, smashed" },
      { name: "Fresh Rosemary", amount: "1 sprig" },
      { name: "Unsalted Butter", amount: "1 tbsp" }
    ],
    steps: [
      {
        desc: "Season the steak generously with salt and pepper on both sides.",
        time: "2 mins",
        image: "https://img.freepik.com/free-vector/flat-design-fast-food-collection_23-2148154139.jpg"
      },
      {
        desc: "Sear the steak in a very hot cast iron skillet for 3 minutes per side.",
        time: "6 mins",
        image: "https://img.freepik.com/free-vector/grill-concept-illustration_114360-10118.jpg"
      },
      {
        desc: "Add butter, garlic, and rosemary. Baste the steak for 2 more minutes.",
        time: "2 mins",
        image: "https://img.freepik.com/free-vector/illustrated-person-cooking-food_23-2148888062.jpg"
      },
      {
        desc: "Remove from heat and let the steak rest for at least 5 minutes before slicing.",
        time: "10 mins",
        image: "https://img.freepik.com/free-vector/flat-hand-drawn-person-cooking-illustrated_23-2148882755.jpg"
      }
    ]
  }
];
